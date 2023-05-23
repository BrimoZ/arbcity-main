import { writeContract } from "@wagmi/core";

import contracts from "@/config/contracts";
import toast from "react-hot-toast";
import { useState } from "react";

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

export default function useClaim(poolId: number, onSuccess: () => void) {
  const [isLoading, setIsLoading] = useState(false);

  const claim = async () => {
    setIsLoading(true);
    return writeContract({
      abi: contracts.staking.abi,
      address: contracts.staking.address,
      args: [poolId],
      functionName: "harvest",
      mode: "recklesslyUnprepared",
    })
      .then((data) => {
        return data?.wait().then(() => {
          toast.success("Successfully claimed your reward");
          onSuccess();
        });
      })
      .catch((error) => {
        toast.error("We were unable to claim your tokens");
      })
      .finally(() => setIsLoading(false));
  };

  return {
    isLoading,
    claim,
  };
}
