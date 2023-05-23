import { useContract } from "wagmi";
import contracts from "@/config/contracts";

export default function useStakingContract() {
  const contract = useContract(contracts.pancakeSwapMainStakingContract);
  return contract;
}
