import contracts from "@/config/contracts";
import { useContract } from "wagmi";

export default function useMasterchefContract() {
  const contract = useContract(contracts.masterchef);
  return contract;
}
