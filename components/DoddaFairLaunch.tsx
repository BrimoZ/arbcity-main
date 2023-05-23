import Image from "next/image";
import Link from "next/link";

import PreSale from "@/public/presale.svg";
import BinanceNoBg from "@/public/binance-no-bg.svg";

import { BsDiscord, BsTelegram, BsTwitter } from "react-icons/bs";

import FairLaunchTable from "@/components/FairLaunchTable";
import LaunchProgress from "@/components/LaunchProgress";

export default function DoddaFairLaunch() {
  return (
    <div className="flex flex-col lg:flex-row gap-6 my-6">
      <div className="relative">
        <Image src={PreSale} alt="Presale" className="z-40 translate-x-0" />
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col md:flex-row text-white/75 gap-6">
          <div>
            <h2 className="text-3xl">Dodda Fair Launch</h2>
            <p>Set period of time based on the total stake</p>

            <div className="flex flex-col md:flex-row gap-4 my-4">
              <nav className="flex flex-row gap-4 items-center justify-center underline">
                <Link href="/">Website</Link>
                <Link href="/docs">Docs</Link>
                <Link href="/contract">Contract</Link>
              </nav>

              <div className="flex flex-row gap-6 items-center justify-center">
                <BsDiscord color="#CCC" size="22px" />
                <BsTelegram color="#CCC" size="22px" />
                <BsTwitter color="#CCC" size="22px" />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 text-white/75">
            <div className="flex justify-between">
              <p>Pay with</p>
              <p>
                Receive: <span className="text-light-pink">521.42910 DDAT</span>
              </p>
            </div>

            <div className="flex justify-between border border-white rounded-full py-2 px-4">
              <div className="flex items-center gap-2">
                <Image
                  src={BinanceNoBg}
                  alt="Binance Logo"
                  className="inline-block"
                />
                <span>ETH</span>
              </div>
              <div className="flex items-center">
                <input
                  value="2.40214"
                  className="w-full text-right bg-transparent text-light-pink ml-4 mr-2"
                  type="text"
                />
                <button className="text-sm text-white underline">MAX</button>
              </div>
            </div>

            <div className="flex justify-center">
              <button className="bg-pink text-white p-2 rounded-2xl shadow-lg flex-1 hover:bg-light-pink transition">
                Continue
              </button>
            </div>
          </div>
        </div>
        <FairLaunchTable />
        <LaunchProgress />
      </div>
    </div>
  );
}
