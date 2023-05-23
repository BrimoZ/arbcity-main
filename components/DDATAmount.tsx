import Image from "next/image";

import BinanceSymbol from "@/public/binance-symbol.png";

export default function PIGSAmount() {
  return (
    <div className="flex justify-end mx-auto">
      <div className="flex items-center max-w-md gap-4 text-white/75">
        {/* Locked PIGS */}
        <div className="flex flex-row items-center gap-4">
          <Image
            src={BinanceSymbol}
            width={35}
            alt=""
            className="border border-light-pink rounded-full"
          />
          <div>
            <p>Locked PIGS</p>
            <h4 className="text-light-pink">
              $521,42910{" "}
              <span className="text-white/30 text-sm">$24,102.4</span>
            </h4>
          </div>
        </div>

        {/* Unlocked PIGS */}
        <div className="">
          <div>
            <p>Unlocked PIGS</p>
            <h4 className="text-light-pink">
              $0.0 <span className="text-white/30 text-sm">$0.0</span>
            </h4>
          </div>
        </div>

        {/* Button */}
        <button className="bg-pink text-white p-2 rounded-2xl shadow-lg flex-1 hover:bg-light-pink transition">
          Claim
        </button>
      </div>
    </div>
  );
}
