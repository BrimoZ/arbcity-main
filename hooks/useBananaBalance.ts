import BigNumber from "bignumber.js";

import { erc20ABI } from "wagmi";
import { useContractReads } from "wagmi";

import contracts from "@/config/contracts";
import { useMemo } from "react";

const BIG_ZERO = BigNumber(0);

type useStakingInfoReturnType = {
  bananaBalance: BigNumber;
  isLoading: boolean;
  isError: boolean;
};

export default function useBananaBalance(): useStakingInfoReturnType {
  const { data, isError, isLoading } = useContractReads({
    contracts: [
      {
        address: contracts.staking.address,
        abi: erc20ABI,
        functionName: "balanceOf",
      },
    ],
  });

  const memoizedValue = useMemo(() => {
    if (isLoading || isError || !data || data.every((item) => item === null)) {
      return {
        bananaBalance: BIG_ZERO,
        isLoading,
        isError,
      };
    }

    return {
      bananaBalance: BigNumber.isBigNumber(data[0]) ? data[0] : BIG_ZERO,
      isLoading,
      isError,
    };
  }, [data, isLoading, isError]);

  return memoizedValue;
}
