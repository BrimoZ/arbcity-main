import Image from "next/image";
import PiggyBags from "@/public/arbitrum-logo-2.png";

export default function Welcome() {
  return (
    <div className="text-center">
      <h1 className="text-5xl text-transparent bg-clip-text bg-gradient-to-b from-[#FF74A5] to-[#CD2460]">
        Welcome to Arb<span className="text-[#00BDD7]">city</span>
      </h1>
      <p className="mt-5 mx-auto max-w-md text-white/90">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <Image
        src={PiggyBags}
        alt="A little pig holding two bags of money"
        className="mx-auto mt-12"
      />
      <div className="mx-auto mt-8 flex flex-col md:flex-row gap-5 max-w-md">
        <button className="bg-pink text-white p-2 rounded-2xl shadow-lg flex-1 hover:bg-light-pink transition">
          LP Farming
        </button>
        <button className="bg-[#00BDD7] text-black p-2 rounded-2xl shadow-lg flex-1 hover:bg-[#00BDD7]/40 transition">
          Mystery Chest
        </button>
      </div>
    </div>
  );
}
