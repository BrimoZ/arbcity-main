import { writeContract } from "@wagmi/core";

import contracts from "@/config/contracts";
import { useMemo, useState } from "react";
import { utils } from "ethers";
import toast from "react-hot-toast";
import { useRouter } from "next/router";

function toFixed(x: any) {
  if (Math.abs(x) < 1.0) {
    var e = parseInt(x.toString().split("e-")[1]);
    if (e) {
      x *= Math.pow(10, e - 1);
      // @ts-ignore
      x = "0." + new Array(e).join("0") + x.toString().substring(2);
    }
  } else {
    var e = parseInt(x.toString().split("+")[1]);
    if (e > 20) {
      e -= 20;
      x /= Math.pow(10, e);
      // @ts-ignore
      x += new Array(e + 1).join("0");
    }
  }
  return x;
}

export default function useStake(
  poolId: number,
  amount: string,
  onSuccess: () => void
) {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  const memoizedAmount = useMemo(
    () => utils.parseUnits(amount || "0", "ether"),
    [amount]
  );

  const stake = async () => {
    setIsLoading(true);
    return writeContract({
      address:
        router.asPath === "/vaults"
          ? contracts.staking.address
          : contracts.tokenStaking.address,
      abi:
        router.asPath === "/vaults"
          ? contracts.staking.abi
          : contracts.tokenStaking.abi,
      args: [poolId, memoizedAmount],
      functionName: "stakePool",
      mode: "recklesslyUnprepared",
    })
      .then((data) => {
        return data?.wait().then(() => {
          toast.success("Successfully staked your tokens");
          onSuccess();
        });
      })
      .catch((error) => {
        toast.error("We were unable to stake your tokens");
      })
      .finally(() => setIsLoading(false));
  };

  return {
    isLoading,
    stake,
  };
}
