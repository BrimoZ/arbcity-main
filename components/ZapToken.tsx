import Image from "next/image";

import { GiSettingsKnobs } from "react-icons/gi";
import { AiOutlineHistory } from "react-icons/ai";
import { MdOutlineSwapVert } from "react-icons/md";
import { BsArrowDownCircle } from "react-icons/bs";

import BinanceSymbol from "@/public/binance-symbol.png";

export default function ZapToken() {
  return (
    <div className="max-w-md mx-auto bg-black/40 border border-[#EC6A98] rounded-3xl">
      {/* Swap Header */}
      <div className="flex justify-between items-center p-4">
        <div className="text-white/80">
          <h3>Zap Token</h3>
          <p>Trade tokens in an instant</p>
        </div>
        <div className="flex justify-center gap-3 text-lg">
          <GiSettingsKnobs color="white" />
          <AiOutlineHistory color="white" />
        </div>
      </div>

      <div className="flex flex-col gap-4 p-4">
        {/* First Input */}
        <div>
          <p className="text-white/80">From</p>

          <div className="flex flex-row justify-between items-center p-2 border border-[#EC6A98] rounded-lg">
            <div className="flex flex-1 items-center gap-2 text-white/80">
              <Image src={BinanceSymbol} width={25} alt="binance logo symbol" />
              <span className="text-sm whitespace-nowrap">BNB-BUSD LP</span>
              <BsArrowDownCircle color="white" size="16px" />
            </div>
            <div className="flex items-center">
              <input
                className="w-full bg-transparent text-light-pink ml-4 mr-2"
                type="text"
              />
              <button className="text-sm text-light-pink underline">MAX</button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center relative before:absolute before:content-[''] before:left-0 before:top-1/2 before:w-2/5 before:h-px before:bg-white/20 after:absolute after:content-[''] after:right-0 after:top-1/2 after:w-2/5 after:h-px after:bg-white/20">
          <MdOutlineSwapVert color="white" />
        </div>

        {/* Second Input */}
        <div>
          <p className="text-white/80">To</p>

          <div className="flex flex-row justify-between items-center p-2 border border-[#EC6A98] rounded-lg">
            <div className="flex flex-1 items-center gap-2 text-white/80">
              <Image src={BinanceSymbol} width={25} alt="binance logo symbol" />
              <span className="text-sm whitespace-nowrap">BNB-BUSD LP</span>
              <BsArrowDownCircle color="white" size="16px" />
            </div>
            <div className="flex items-center">
              <input
                className="w-full bg-transparent text-light-pink ml-4 mr-2"
                type="text"
              />
              <button className="text-sm text-light-pink underline">MAX</button>
            </div>
          </div>
        </div>

        <button className="bg-pink text-white p-2 rounded-2xl shadow-lg flex-1 hover:bg-light-pink transition">
          Unlock Wallet
        </button>
      </div>
    </div>
  );
}
