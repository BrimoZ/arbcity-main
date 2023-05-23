import contracts from "@/config/contracts";
import { BigNumber } from "ethers";
import { useEffect, useMemo, useState } from "react";
import { useContractRead, useContractReads } from "wagmi";

type Address = `0x${string}`;

export interface StakingPool {
  active: boolean;
  fullMaturityTime: BigNumber;
  stakeToken?: Address;
  lpToken: Address;
  rewardToken: Address;
  token1: Address;
  token2: Address;
  token1Symbol: string;
  token2Symbol: string;
  poolDays: BigNumber;
  poolLimit: BigNumber;
  poolNumber: BigNumber;
  poolRewardPercent: BigNumber;
  poolStaked: BigNumber;
}

interface UseStakingPoolsReturnType {
  stakingPools: StakingPool[];
  poolCount: number;
  isLoading: boolean;
  isError: boolean;
}

export default function useStakingPools(): UseStakingPoolsReturnType {
  const [savedPools, setSavedPools] = useState(0);

  const { data: totalPoolsData } = useContractRead({
    address: contracts.staking.address,
    abi: contracts.staking.abi,
    functionName: "totalPools",
  });

  const {
    data: poolsData,
    isLoading,
    isError,
    refetch,
  } = useContractReads({
    // @ts-ignore
    contracts: Array.from({ length: savedPools }, (_, idx) => ({
      address: contracts.staking.address,
      abi: contracts.staking.abi,
      functionName: "poolInfo",
      enabled: false,
      args: [idx],
    })),
  });

  useEffect(() => {
    if (!totalPoolsData) return;

    if (BigNumber.isBigNumber(totalPoolsData)) {
      setSavedPools(totalPoolsData.toNumber());
    }
  }, [totalPoolsData]);

  const poolCount = useMemo(() => {
    if (!totalPoolsData) return 0;

    if (BigNumber.isBigNumber(totalPoolsData)) {
      return totalPoolsData.toNumber();
    }
  }, [totalPoolsData]);

  // @ts-ignore
  return { stakingPools: poolsData || [], isLoading, isError, poolCount };
}
