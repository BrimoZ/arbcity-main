import Head from "next/head";
import Image from "next/image";

import PiggyMoney from "@/public/piggy-money.svg";

import PancakeSwapExchange from "@/components/PancakeSwapExchange";
import ZapToken from "@/components/ZapToken";
import Container from "@/components/Container";

export default function Zap() {
  return (
    <>
      <Head>
        <title>Pig Vault | Zap</title>
        <meta name="description" content="Zap Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <main className="py-16">
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

            <Image src={PiggyMoney} alt="A pig with lots of coins around it" />
          </div>
          <div className="flex flex-col gap-5">
            <PancakeSwapExchange />
            <ZapToken />
          </div>
        </main>
      </Container>
    </>
  );
}
