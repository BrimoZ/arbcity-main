import { Manrope } from "next/font/google";

import Image from "next/image";

import Arb from "@/public/arbitrum-logo-2.png";
import Arrow from "@/public/arrow-40.png";

const manrope700 = Manrope({ weight: "700", subsets: ["latin"] });
const manrope400 = Manrope({ weight: "400", subsets: ["latin"] });

export interface WinnerProps {
  address: string;
  score: number;
}

export default function Winner({ address, score }: WinnerProps) {
  return (
    <div className="flex items-center gap-1 min-w-[100px]">
      <Image src={Arb} alt="" width={32} />
      <div className="flex flex-col">
        <span className="flex items-center text-xs text-[#EF93B3]">
          {address}
          <Image src={Arrow} alt="" />
        </span>
        <span className="text-[#E3E3E5B2] text-xs">{score} ARBT</span>
      </div>
    </div>
  );
}
