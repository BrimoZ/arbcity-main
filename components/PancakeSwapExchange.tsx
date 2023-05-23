import Image from "next/image";
import { BsArrowDown } from "react-icons/bs";

import PancakeSwap from "@/public/pancakeswap.svg";

export default function PancakeSwapExchange() {
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="flex flex-col justify-center gap-2">
        <p className="text-white">Exchange</p>
        <button className="flex flex-row justify-center items-center gap-4 bg-pink text-white p-2 rounded-2xl shadow-lg flex-1 hover:bg-light-pink transition">
          <Image src={PancakeSwap} alt="Pancake Swap logo" />
          PancakeSwap
          <BsArrowDown color="white" />
        </button>
      </div>
    </div>
  );
}
