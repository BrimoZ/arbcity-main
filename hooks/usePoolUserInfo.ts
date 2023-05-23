import contracts from "@/config/contracts";
import { BigNumber } from "ethers";
import { useRouter } from "next/router";
import { useMemo } from "react";
import { useAccount, useContractRead } from "wagmi";

export interface UserInfo {
  poolBal: BigNumber;
  pool_deposit_time: number;
  pool_payouts: BigNumber;
  rewardEarned: BigNumber;
  total_deposits: BigNumber;
}

export interface UsePoolUserInfoReturnType {
  userInfo: UserInfo;
  isLoading: boolean;
  isError: boolean;
  refetch: () => void;
}

const BIG_ZERO = BigNumber.from(0);

export default function usePoolUserInfo(
  pid: number
): UsePoolUserInfoReturnType {
  const router = useRouter();
  const { address } = useAccount();

  const { data, isLoading, isError, refetch } = useContractRead({
    address:
      router.asPath === "/vaults"
        ? contracts.staking.address
        : contracts.tokenStaking.address,
    abi:
      router.asPath === "/vaults"
        ? contracts.staking.abi
        : contracts.tokenStaking.abi,
    args: [pid, address],
    functionName: "userInfo",
  });

  const userInfo = useMemo(() => {
    if (!data)
      return {
        poolBal: BIG_ZERO,
        pool_deposit_time: 0,
        pool_payouts: BIG_ZERO,
        rewardEarned: BIG_ZERO,
        total_deposits: BIG_ZERO,
      };

    return data;
  }, [data]);

  // @ts-ignore
  return { userInfo, isLoading, isError, refetch };
}
