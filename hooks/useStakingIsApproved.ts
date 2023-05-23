import { useAccount, useContractReads } from "wagmi";

import erc20 from "@/abi/erc20.json";
import contracts from "@/config/contracts";
import { BigNumber } from "ethers";
import { useMemo } from "react";
import { useRouter } from "next/router";

type useStakingIsApprovedReturnType = {
  isApproved: boolean;
  isLoading: boolean;
  isError: boolean;
  refetch: () => void;
};

export default function useStakingIsApproved(
  tokenContractAddress: `0x${string}`
): useStakingIsApprovedReturnType {
  const router = useRouter();

  const { address } = useAccount();

  const { data, refetch, isError, isLoading, isRefetching } = useContractReads({
    contracts: [
      {
        address: tokenContractAddress,
        abi: erc20,
        functionName: "allowance",
        args: [
          address,
          router.asPath === "/vaults"
            ? contracts.staking.address
            : contracts.tokenStaking.address,
        ],
      },
    ],
  });

  const memoizedValue = useMemo(() => {
    if (!data || data.every((item) => item === null)) {
      return {
        isApproved: false,
        isLoading: isLoading || isRefetching,
        isError,
        refetch,
      };
    }

    return {
      isApproved: (data[0] as BigNumber).gt(0),
      isLoading: isLoading || isRefetching,
      isError,
      refetch,
    };
  }, [data, isLoading, isError, refetch, isRefetching]);

  return memoizedValue;
}
