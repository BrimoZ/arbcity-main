import Head from "next/head";
import Image from "next/image";

import Container from "@/components/Container";

import Arb from "@/public/arbitrum-logo-2.png";
import Arbitrum from "@/public/image-541.png";
import LatestWinners from "@/components/LatestWinner";

export default function AirDrop() {
  return (
    <>
      <Head>
        <title>Arbcityye | AirDrop</title>
        <meta name="description" content="Zap Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <main className="py-16">
          <div className="flex flex-col md:flex-row items-center md:justify-between max-w-5xl mx-auto gap-4 mb-16">
            <div className="max-w-md mx-auto md:max-w-none flex-1">
              <div className="flex justify-center">
                <Image
                  src={Arb}
                  alt=""
                  width={200}
                  height={40}
                  className="translate-x-1/4"
                />
                <Image
                  src={Arbitrum}
                  alt=""
                  width={200}
                  height={40}
                  className="-translate-x-1/4"
                />
              </div>
              <h1 className="text-4xl text-center md:text-5xl text-light-pink mt-8">
                Claim Arbcity Now!
              </h1>
              <p className="text-white/75 text-sm text-center mt-4 max-w-md mx-auto">
                A total of 210,000,000,000,000,000 ARBT tokens are now available
                to be claimed by those who have claimed the ARB airdrop.
              </p>
            </div>
          </div>

          <div className="mt-8 max-w-[360px] mx-auto">
            <div className="flex flex-row items-center text-white/75 justify-between mx-auto">
              <span>Claim</span>
              <span>
                Available:{" "}
                <span className="text-light-pink">521.42910 ARBT</span>
              </span>
            </div>
            <div className="flex items-center justify-between gap-2 mt-2">
              <div className="flex items-center justify-between border rounded-3xl px-4 py-2">
                <span className="text-light-pink mr-1">ARBT</span>
                <input
                  type="text"
                  className="flex-1 items-center bg-transparent outline-none text-right text-white/75"
                />
                <button className="text-white underline ml-1">MAX</button>
              </div>
              <button className="bg-pink hover:bg-light-pink text-white px-2 py-1 rounded-3xl">
                Continue
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-2 text-white/80 mt-8">
            <div className="flex flex-row justify-between items-center">
              <p>
                Claimed:{" "}
                <span className="text-light-pink">210,000,000,000 ARBT</span>
              </p>
              <p>
                Ending:{" "}
                <span className="text-light-pink">2023.04.15 11:00</span>
              </p>
            </div>

            <div className="bg-[#D9D9D9] h-[14px] w-full rounded-full overflow-hidden relative">
              <div className="bg-light-pink top-0 left-0 w-[50%] h-full rounded-full" />
            </div>

            <p className="text-right">
              Current Rate:{" "}
              <span className="text-light-pink">1 BNB = 49.885 APE</span>
            </p>
          </div>

          <div className="mt-12">
            <LatestWinners />
          </div>
        </main>
      </Container>
    </>
  );
}
