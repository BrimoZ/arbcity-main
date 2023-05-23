import Container from "@/components/Container";

import Head from "next/head";
import Image from "next/image";

import BinanceSymbol from "@/public/binance-symbol.png";
import Divider from "@/components/Divider";

import Arb from "@/public/arbitrum-logo-2.png";
import Arrow from "@/public/arrow-40.png";

function Rules() {
  return (
    <div className="flex flex-wrap items-start justify-between">
      <div className="whitespace-nowrap flex">
        <span className="h-12 w-px bg-white/50 relative before:content-[''] before:absolute before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-4 before:h-4 before:bg-white before:rounded-full mx-8" />
        <div>
          <h4 className="text-white">50%</h4>
          <span className="text-white/50">Common</span>
          <div className="grid grid-cols-2 place-items-center place-content-center gap-2">
            <Image
              src="/arb.png"
              alt=""
              width={35}
              height={35}
              className="col-span-2"
            />
          </div>
        </div>
      </div>

      <div className="whitespace-nowrap flex">
        <span className="h-12 w-px bg-white/50 relative before:content-[''] before:absolute before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-4 before:h-4 before:bg-[#86D834] before:rounded-full mx-8" />
        <div>
          <h4 className="text-white">35%</h4>
          <span className="text-white/50">Uncommon</span>
          <div className="grid grid-cols-2 place-items-center place-content-center gap-2">
            <Image src="/arb.png" alt="" width={35} height={35} />
            <Image src="/tether.png" alt="" width={26} height={26} />
          </div>
        </div>
      </div>

      <div className="whitespace-nowrap flex">
        <span className="h-12 w-px bg-white/50 relative before:content-[''] before:absolute before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-4 before:h-4 before:bg-[#5B91FC] before:rounded-full mx-8" />
        <div>
          <h4 className="text-white">12%</h4>
          <span className="text-white/50">Unique</span>
          <div className="grid grid-cols-2 place-items-center place-content-center gap-2">
            <Image src="/arb.png" alt="" width={35} height={35} />
            <Image src="/tether.png" alt="" width={26} height={26} />
            <Image
              src="/ethr.png"
              alt=""
              width={20}
              height={31}
              className="col-span-2"
            />
          </div>
        </div>
      </div>

      <div className="whitespace-nowrap flex">
        <span className="h-12 w-px bg-white/50 relative before:content-[''] before:absolute before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-4 before:h-4 before:bg-[#B71FEB] before:rounded-full mx-8" />
        <div>
          <h4 className="text-white">2.5%</h4>
          <span className="text-white/50">Rare</span>
          <div className="grid grid-cols-2 place-items-center place-content-center gap-2">
            <Image src="/arb.png" alt="" width={35} height={35} />
            <Image src="/ethr.png" alt="" width={20} height={31} />
            <Image src="/tether.png" alt="" width={26} height={26} />
            <Image src="/bbnb.png" alt="" width={25} height={25} />
          </div>
        </div>
      </div>

      <div className="whitespace-nowrap flex">
        <span className="h-12 w-px bg-white/50 relative before:content-[''] before:absolute before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-4 before:h-4 before:bg-[#F7800F] before:rounded-full mx-8" />
        <div>
          <h4 className="text-white">0.5%</h4>
          <span className="text-white/50">Epic</span>
          <div className="grid grid-cols-2 place-items-center place-content-center gap-2">
            <Image src="/arb.png" alt="" width={35} height={35} />
            <Image src="/ethr.png" alt="" width={20} height={31} />
            <Image src="/tether.png" alt="" width={26} height={26} />
            <Image src="/bbnb.png" alt="" width={25} height={25} />
            <Image
              src="/doge.png"
              alt=""
              width={28}
              height={28}
              className="col-span-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Chest() {
  return (
    <>
      <Head>
        <title>Arbcity | Mystery Chest</title>
        <meta name="description" content="Zap Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <main className="py-16">
          <div className="flex justify-center">
            <div className="flex flex-wrap items-center gap-4 text-white/75">
              {/* Locked PIGS */}
              <div className="flex flex-wrap flex-row items-center justify-between gap-4">
                <Image
                  src={BinanceSymbol}
                  width={35}
                  alt=""
                  className="border border-light-pink rounded-full"
                />
                <div>
                  <p className="md:whitespace-nowrap">Total Distributed BNB</p>
                  <h4 className="text-light-pink flex gap-2">
                    116,287.365{" "}
                    <span className="text-white/30 text-sm">$24,102.4</span>
                  </h4>
                </div>
                <div>
                  <p className="whitespace-nowrap">Rounds</p>
                  <h4 className="text-light-pink flex gap-2">703.343</h4>
                </div>
                <div>
                  <p className="whitespace-nowrap">Total Players</p>
                  <h4 className="text-light-pink flex gap-2">
                    7,764{" "}
                    <span className="text-white/30 text-sm">$24,102.4</span>
                  </h4>
                </div>
                <div>
                  <p className="whitespace-nowrap">Total Winners</p>
                  <h4 className="text-light-pink flex gap-2">150 </h4>
                </div>
              </div>

              {/* Button */}
              <button className="bg-pink text-white px-4 py-1 rounded-2xl shadow-lg flex-1 hover:bg-light-pink transition">
                History
              </button>
            </div>
          </div>
          <div className="mt-8">
            <Divider />

            <div className="mt-20 flex flex-col items-center gap-12">
              <h1 className="text-white/75 text-5xl">Lucky Chest</h1>

              <Image src="/chest.png" alt="" width={303} height={252} />

              <button className="bg-pink text-white px-12 py-1 rounded-2xl shadow-lg flex-1 hover:bg-light-pink transition">
                Rules
              </button>

              <Rules />

              <div className="w-full max-w-md">
                <h4 className="text-white/30 text-lg">My Key</h4>
                <div className="bg-[#1347FF]/5 border border-[#1347FF]/40 px-4 py-2 rounded-lg w-full flex items-center gap-8 mt-2">
                  <Image src="/bkey.png" alt="" width={40} height={40} />
                  <span className="font-bold text-white/40">0</span>
                </div>
              </div>
            </div>

            <div className="mt-4 w-full max-w-md mx-auto flex gap-2 min-h-[75px]">
              <button className="bg-pink flex-1 text-white rounded-lg">
                Unlock chests
              </button>
              <button className="border border-pink text-white flex-1 rounded-lg">
                Buy key
              </button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mt-12">
            {/* Table 1 */}
            <div className="flex-1">
              <h2 className="text-lg text-white/75 mb-2">Recent Players</h2>
              <div className="border border-light-pink p-4 rounded-2xl">
                <table className="w-full">
                  <thead>
                    <tr className="text-lg text-white/75 text-left">
                      <th>Players</th>
                      <th>Purchase</th>
                      <th>Weight</th>
                      <th>Tx</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Array.from({ length: 10 }, (_, i) => (
                      <tr className="text-light-pink" key={i}>
                        <td>
                          <div className="flex items-center gap-3">
                            <Image src={Arb} alt="" width={40} height={40} />
                            <div className="flex flex-col">
                              <h4 className="text-lg">0x1...3946</h4>
                              <span className="text-[#838291]">
                                2023-04-18 07:57:03
                              </span>
                            </div>
                          </div>
                        </td>
                        <td>103</td>
                        <td>100</td>
                        <td>
                          <Image src={Arrow} alt="" width={12} height={12} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Table 2 */}
            <div className="flex-1">
              <h2 className="text-lg text-white/75 mb-2">Recent Winners</h2>
              <div className="border border-light-pink p-4 rounded-2xl">
                <table className="w-full">
                  <thead>
                    <tr className="text-lg text-white/75 text-left">
                      <th>Players</th>
                      <th>Amount</th>
                      <th>Coin</th>
                      <th>Tx</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Array.from({ length: 10 }, (_, i) => (
                      <tr className="text-light-pink" key={i}>
                        <td>
                          <div className="flex items-center gap-3">
                            <Image src={Arb} alt="" width={40} height={40} />
                            <div className="flex flex-col">
                              <h4 className="text-lg">0x1...3946</h4>
                              <span className="text-[#838291]">
                                2023-04-18 07:57:03
                              </span>
                            </div>
                          </div>
                        </td>
                        <td>1036.296</td>
                        <td>DOGE</td>
                        <td>
                          <Image src={Arrow} alt="" width={12} height={12} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </Container>
    </>
  );
}
