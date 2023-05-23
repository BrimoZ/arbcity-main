import contracts from "@/config/contracts";
import { BigNumber } from "ethers";
import { useMemo } from "react";
import { useAccount, useContractRead } from "wagmi";

export default function useStakingPoolReward(pid: number) {
  const { address } = useAccount();

  const { data, isLoading, isError } = useContractRead({
    address: contracts.staking.address,
    abi: contracts.staking.abi,
    args: [pid, address],
    functionName: "rewardsCalculate",
  });

  const reward = useMemo(() => {
    if (!BigNumber.isBigNumber(data)) {
      return BigNumber.from(0);
    }
    return data;
  }, [data]);

  return { reward, isLoading, isError };
}
