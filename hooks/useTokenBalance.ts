import { erc20ABI, useAccount } from "wagmi";
import { useContractRead } from "wagmi";

import { useMemo } from "react";
import { BigNumber } from "ethers";

const BIG_ZERO = BigNumber.from(0);

type useStakingInfoReturnType = {
  balance: BigNumber;
  isLoading: boolean;
  isError: boolean;
};

export default function useTokenBalance(
  tokenContract: `0x${string}`
): useStakingInfoReturnType {
  const { address } = useAccount();

  const { data, isError, isLoading } = useContractRead({
    address: tokenContract,
    abi: erc20ABI,
    functionName: "balanceOf",
    args: [address!],
  });

  const balance = useMemo(() => {
    if (!BigNumber.isBigNumber(data)) {
      return BIG_ZERO;
    }

    return data;
  }, [data]);

  // @ts-ignore
  return { balance, isLoading, isError };
}
