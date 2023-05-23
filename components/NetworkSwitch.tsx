import { useCallback, useEffect, useState } from "react";

import Image from "next/image";

import { useWeb3Modal } from "@web3modal/react";
import { arbitrum, bscTestnet, mainnet, optimism, bsc } from "wagmi/chains";

import Arbitrum from "@/public/arbitrum.webp";
import Binance from "@/public/binance.webp";
import Optimism from "@/public/optimism.png";
import Ethereum from "@/public/ethereum.webp";
import { useNetwork } from "wagmi";

const getNetworkImage = (network: string = "default") =>
  ({
    bsc: Binance,
    "bsc-testnet": Binance,
    arbitrum: Arbitrum,
    optimism: Optimism,
    ethereum: Ethereum,
    default: Binance,
  }[network]);

export default function NetworkSwitch() {
  const { chain } = useNetwork();
  const { setDefaultChain } = useWeb3Modal();
  const [network, setNetwork] = useState("bsc-testnet");

  const onChangeNetwork = useCallback(
    (network: string) => {
      setNetwork(network);
      setDefaultChain(
        {
          arbitrum: arbitrum,
          ethereum: mainnet,
          bsc: bsc,
          "bsc-testnet": bscTestnet,
          optimism: optimism,
        }[network]
      );
    },
    [setDefaultChain]
  );

  useEffect(() => {
    if (chain) {
      setNetwork(chain.network);
    } else {
      setDefaultChain(bscTestnet);
    }
  }, [chain, setDefaultChain]);

  return (
    <div
      className="relative rounded-l-full"
      onClick={() => {
        /* onLeftSideClick */
      }}
    >
      <div className="group px-2 py-1 bg-black border border-[#EC6A98] rounded-full">
        <div className="h-6 flex items-center justify-center">
          <Image
            src={getNetworkImage(network)!}
            alt=""
            role="presentation"
            width={80}
          />
        </div>
        <div className="hidden flex-col items-center absolute top-full left-0 w-full min-h-[90px] text-center rounded-lg group-hover:flex bg-black -translate-y-2">
          <div className="py-4" onClick={() => onChangeNetwork("ethereum")}>
            <Image src={Ethereum} width={80} alt="" />
          </div>
          <div className="py-4" onClick={() => onChangeNetwork("arbitrum")}>
            <Image src={Arbitrum} width={80} alt="" />
          </div>
          <div className="py-4" onClick={() => onChangeNetwork("bsc-testnet")}>
            <Image src={Binance} width={80} alt="" />
          </div>
          <div className="py-4" onClick={() => onChangeNetwork("optimism")}>
            <Image src={Optimism} width={80} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
