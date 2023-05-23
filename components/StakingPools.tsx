import dynamic from "next/dynamic";
import { StakingPool } from "@/hooks/useStakingPools";

const Pools = dynamic(() => import("@/components/Pools"), { ssr: false });

interface StakingPoolsProps {
  pools: StakingPool[];
  totalPools: number;
}

export default function StakingPools({ pools }: StakingPoolsProps) {
  return (
    <div>
      <Pools pools={pools} />
    </div>
  );
}
