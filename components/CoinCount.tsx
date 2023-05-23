import Image from "next/image";
import Coin from "@/public/coin.svg";

export default function CoinCount() {
  return (
    <div className="flex flex-row items-center justify-center">
      <Image src={Coin} alt="a small little coin with an S inside" />
      <span className="text-blue">$27.58</span>
    </div>
  );
}
