import { reverseTokens } from "@/config/tokens";
import useTokenBalance from "@/hooks/useTokenBalance";
import { ethers } from "ethers";

export default function Balance({
  tokenContract,
}: {
  tokenContract: `0x${string}`;
}) {
  const { balance, isLoading, isError } = useTokenBalance(tokenContract);

  return (
    <p className="text-pink text-right">
      BALANCE: {ethers.utils.formatEther(balance)}&nbsp;
      {(reverseTokens[tokenContract] || "").toUpperCase()}
    </p>
  );
}
