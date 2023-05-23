import BigNumber from "bignumber.js";

import { useAccount } from "wagmi";
import { useContractReads } from "wagmi";

import pancakeSwapMainStakingAbi from "@/abi/stakingAbi.json";
import contracts from "@/config/contracts";
import { useEffect, useMemo, useState } from "react";

const BIG_ZERO = BigNumber(0);

type useStakingInfoReturnType = {
  cakeReward: BigNumber;
  bananaReward: BigNumber;
  isLoading: boolean;
  isError: boolean;
};

export default function useRewards(pid: number): useStakingInfoReturnType {
  const { address } = useAccount();

  const [bananaReward, setBananaReward] = useState(BIG_ZERO);
  const [cakeReward, setCakeReward] = useState(BIG_ZERO);

  const { data, isError, isLoading } = useContractReads({
    contracts: [
      {
        address: contracts.staking.address,
        abi: pancakeSwapMainStakingAbi,
        functionName: "pendingCake",
        args: [pid, address],
      },
      {
        address: contracts.staking.address,
        abi: pancakeSwapMainStakingAbi,
        functionName: "calculateReward",
        args: [pid, address],
      },
    ],
  });

  useEffect(() => {
    if (!data || data.every((item) => item === null)) {
      return;
    }

    if (BigNumber.isBigNumber(data[0])) {
      setCakeReward(data[0]);
    }

    if (BigNumber.isBigNumber(data[1])) {
      setBananaReward(data[1]);
    }
  }, [data]);

  const memoizedValue = useMemo(
    () => ({
      cakeReward,
      bananaReward,
      isLoading,
      isError,
    }),
    [cakeReward, bananaReward, isLoading, isError]
  );

  return memoizedValue;
}
