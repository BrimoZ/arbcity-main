import Head from "next/head";
import Image from "next/image";

import { BsArrowDown } from "react-icons/bs";

import Arb from "@/public/arbitrum-logo-2.png";
import Coin2 from "@/public/coin_2.svg";

import LatestWinners from "@/components/LatestWinner";
import MoonShotCard from "@/components/MoonShotCard";

export default function Moon() {
  return (
    <>
      <Head>
        <title>Pig Vault | Moon</title>
        <meta name="description" content="Moon Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center md:justify-between max-w-5xl mx-auto gap-4 mb-16">
            <div className="max-w-md mx-auto md:max-w-none flex-1">
              <h1 className="text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-b from-[#6AA0BF] to-[#D60040]">
                NO LOSS JACKOPOT
                <br className="hidden xl:block" /> FOR BUNNY LOVERS
              </h1>
              <p className="text-white/75 text-sm mt-4 max-w-md">
                The Bunny Pot collects the total yield (profits) accrued over a
                set period of time based on the total stake, and distributes
                these profits to one of the pot participants.
              </p>
            </div>

            <Image src={Arb} alt="A pig with lots of coins around it" />
          </div>

          <LatestWinners />
        </div>

        <div className="max-w-7xl mx-auto px-4 mt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-0 text-white/75 whitespace-nowrap">
              <div>BNB Range</div>
              <button className="flex justify-between items-center gap-4 bg-pink hover:bg-light-pink text-white px-4 py-2 rounded-2xl shadow-lg transition">
                <Image src={Coin2} alt="" width={20} />
                Low
                <BsArrowDown />
              </button>
            </div>

            <div className="flex flex-row items-center justify-between text-white/75 gap-6">
              <Image src={Coin2} alt="" />
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between whitespace-nowrap sm:gap-4">
                <div>
                  <p>Total Wagered</p>
                  <p className="text-light-pink flex gap-2">
                    521,42910{" "}
                    <span className="text-[#838291] text-sm">$24,102.4</span>
                  </p>
                </div>

                <div>
                  <p>Available Tokens</p>
                  <p className="text-light-pink flex gap-2">
                    0,0 <span className="text-[#838291] text-sm">$0,0</span>
                  </p>
                </div>

                <button className="bg-pink hover:bg-light-pink text-white px-4 py-2 rounded-2xl shadow-lg transition w-full mt-2 md:mt-0">
                  Claim
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-start justify-between gap-4 mt-8">
            <MoonShotCard
              isPoolOpen={true}
              amount={5}
              prize={500}
              price={100}
              balance={1}
              color="yellow"
              percentageFull={50}
              percentageChance={20}
            />
            <MoonShotCard
              isPoolOpen={false}
              amount={10}
              prize={1000}
              price={100}
              balance={3}
              color="purple"
              percentageFull={100}
              percentageChance={30}
            />
            <MoonShotCard
              isPoolOpen={true}
              amount={50}
              prize={5000}
              price={100}
              balance={5}
              color="cyan"
              percentageFull={20}
              percentageChance={10}
            />
            <MoonShotCard
              isPoolOpen={false}
              amount={100}
              prize={10000}
              price={100}
              balance={5}
              color="orange"
              percentageFull={100}
              percentageChance={5}
            />
          </div>
        </div>
      </main>
    </>
  );
}
