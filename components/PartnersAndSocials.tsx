import Image from "next/image";
import { BsDiscord, BsTelegram, BsTwitter } from "react-icons/bs";

import Binance from "@/public/binance.svg";
import Arbitrum from "@/public/arbitrum.webp";
import Optimism from "@/public/optimism.svg";

export default function PartnersAndSocials() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-6 mx-auto mt-12">
      <div className="flex flex-row gap-6">
        <BsDiscord color="#CCC" size="32px" />
        <BsTelegram color="#CCC" size="32px" />
        <BsTwitter color="#CCC" size="32px" />
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center gap-6">
        <Image src={Binance} alt="Binance Logo" />
        <Image src={Arbitrum} alt="Arbitrum Logo" height={26} />
        <Image src={Optimism} alt="Optimism Logo" />
      </div>
    </div>
  );
}
