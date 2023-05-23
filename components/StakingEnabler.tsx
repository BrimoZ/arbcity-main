import contracts from "@/config/contracts";
import { BigNumber } from "ethers/lib/ethers";
import { erc20ABI, useContractWrite, usePrepareContractWrite } from "wagmi";
import { Oval } from "react-loader-spinner";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";

export default function StakingEnabler({
  tokenContract,
  onStakingEnabled,
  isApprovalLoading,
}: {
  tokenContract: `0x${string}`;
  onStakingEnabled: () => void;
  isApprovalLoading: boolean;
}) {
  const router = useRouter();
  const [waitingTransaction, setWaitingTransaction] = useState(false);

  const { config } = usePrepareContractWrite({
    address: tokenContract,
    abi: erc20ABI,
    functionName: "approve",
    args: [
      router.asPath === "/vaults"
        ? contracts.staking.address
        : contracts.tokenStaking.address,
      BigNumber.from("10000000000000000000000000000"),
    ],
  });

  const { data, isLoading, write } = useContractWrite(config);

  useEffect(() => {
    data
      ?.wait()
      .then(() => {
        onStakingEnabled();
        setWaitingTransaction(false);
        toast.success("Successfully approved");
      })
      .catch(() => {
        toast.error("Something went wrong while trying to approve");
      });
  }, [data, onStakingEnabled]);

  if (isLoading || isApprovalLoading || waitingTransaction) {
    return (
      <Oval
        height={40}
        width={40}
        color="white"
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="white"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    );
  }

  return (
    <button
      disabled={isLoading}
      type="button"
      className="bg-pink hover:bg-light-pink text-white px-8 py-2 rounded-lg shadow-lg transition"
      onClick={() => {
        if (write) {
          write();
          setWaitingTransaction(true);
        }
      }}
    >
      Enable
    </button>
  );
}
