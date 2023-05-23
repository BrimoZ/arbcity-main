import { Exo } from "next/font/google";

import Image from "next/image";

import { cx } from "@/utils";

import Ticket from "@/public/ticket.png";
import YellowMoon from "@/public/yellow_moon.svg";
import PurpleMoon from "@/public/purple_moon.svg";
import CyanMoon from "@/public/cyan_moon.svg";
import OrangeMoon from "@/public/orange_moon.svg";

interface MoonShotCardProps {
  isPoolOpen: boolean;
  amount: number;
  prize: number;
  price: number;
  balance: number;
  color: "yellow" | "purple" | "cyan" | "orange";
  percentageFull: number;
  percentageChance: number;
}

const exo = Exo({ weight: "400", subsets: ["latin"] });

const getMoonImage = (color: string = "default") =>
  ({
    yellow: YellowMoon,
    purple: PurpleMoon,
    cyan: CyanMoon,
    orange: OrangeMoon,
    default: YellowMoon,
  }[color]);

const getMoonGradient = (color: string = "default") =>
  ({
    yellow:
      "linear-gradient(180deg, #000000 0%, rgba(109, 90, 39, 0.51) 58.85%, rgba(0, 0, 0, 0) 100%)",
    purple:
      "linear-gradient(180deg, #000000 0%, #320E56 54.69%, rgba(0, 0, 0, 0) 100%)",
    cyan: "linear-gradient(180deg, #000000 0%, #021113 11.46%, #0A4C55 52.08%, rgba(0, 0, 0, 0) 100%)",
    orange:
      "linear-gradient(180deg, #000000 0%, rgba(149, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0) 100%)",
    default:
      "linear-gradient(180deg, #000000 0%, rgba(109, 90, 39, 0.51) 58.85%, rgba(0, 0, 0, 0) 100%)",
  }[color]);

export default function MoonShotCard({
  isPoolOpen,
  amount,
  prize,
  price,
  balance,
  color,
  percentageFull,
  percentageChance,
}: MoonShotCardProps) {
  return (
    <div
      className={cx(
        "flex flex-col items-center justify-between gap-4 flex-1 py-8 px-4 text-white/75 border border-white/75 rounded-2xl min-w-[200px]",
        exo.className
      )}
      style={{ background: getMoonGradient(color) }}
    >
      <div className="flex flex-col gap-2">
        <h4 className="text-xl text-center">{amount}x Moon Shot</h4>
        <Image src={getMoonImage(color)} alt="" />
        <h4 className="text-xl text-center">Prize Pot: ${prize}</h4>
      </div>
      <div className="flex flex-col gap-1 w-full">
        <span className="text-xs">${price}/Ticket</span>
        <div className="w-full h-4 bg-white relative rounded-2xl overflow-hidden">
          <div
            className="h-full bg-[#38DA7E] rounded-2xl"
            style={{ width: `${percentageFull}%` }}
          />
          <span
            className="text-black/75 text-xs absolute top-1/2 -translate-y-1/2"
            style={{ right: `${100 - percentageFull + 2}%` }}
          >
            {percentageFull}%
          </span>
        </div>
        <div className="flex flex-row items-center justify-between text-xs">
          <span>Balance: {balance}</span>
          <span>Your Chance: {percentageChance}$</span>
        </div>
      </div>

      {isPoolOpen ? (
        <div className="flex flex-col items-center gap-2">
          <h2>Pool Open</h2>
          <div className="text-center">
            <p className="text-xs">Buy Ticket</p>
            <Image className="mx-auto" src={Ticket} alt="" width={50} />
          </div>
        </div>
      ) : (
        <div className="text-center">
          <div>
            <h2 className="text-xl">Time Remaining</h2>
            <p className="text-xs">0 Minutes 0 Seconds</p>
          </div>
          <div className="flex flex-col mt-4">
            <span className="text-[#31DD7B] text-xs">Winner</span>
            <span className="text-xs underline">
              Tx Hash: 0xb957eec5b826bea......
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
