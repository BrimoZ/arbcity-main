import BigNumber from "bignumber.js";

import { useAccount } from "wagmi";
import { useContractReads } from "wagmi";

import pancakeSwapMainStakingAbi from "@/abi/stakingAbi.json";
import contracts from "@/config/contracts";
import { useEffect, useMemo, useState } from "react";

const BIG_ZERO = BigNumber(0);

type useStakingInfoReturnType = {
  amount: BigNumber;
  userCakeReward: BigNumber;
  boostedShare: BigNumber;
  isLoading: boolean;
  isError: boolean;
};

export default function useStakingInfo(pid: number): useStakingInfoReturnType {
  const { address } = useAccount();

  const [amount, setAmount] = useState(BIG_ZERO);
  const [userCakeReward, setUserCakeReward] = useState(BIG_ZERO);
  const [boostedShare, setBoostedShare] = useState(BIG_ZERO);

  const { data, isError, isLoading } = useContractReads({
    contracts: [
      {
        address: contracts.staking.address,
        abi: pancakeSwapMainStakingAbi,
        functionName: "userInfo",
        args: [pid, address],
      },
      {
        address: contracts.staking.address,
        abi: pancakeSwapMainStakingAbi,
        functionName: "pendingCake",
        args: [pid, address],
      },
      {
        address: contracts.staking.address,
        abi: pancakeSwapMainStakingAbi,
        functionName: "poolInfo",
        args: [pid],
      },
    ],
  });

  useEffect(() => {
    if (!data || data.every((item) => item === null)) {
      return;
    }

    if (Array.isArray(data[0])) {
      setAmount(data[0][0]);
    }

    if (BigNumber.isBigNumber(data[1])) {
      setUserCakeReward(data[1]);
    }

    if (BigNumber.isBigNumber(data[2])) {
      setBoostedShare(data[2]);
    }
  }, [data]);

  const memoizedValue = useMemo(
    () => ({
      amount,
      userCakeReward,
      boostedShare,
      isLoading,
      isError,
    }),
    [isLoading, isError, amount, userCakeReward, boostedShare]
  );

  return memoizedValue;
}
