import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { arbitrum, mainnet, bsc, bscTestnet, optimism } from "wagmi/chains";
import { Jua } from "next/font/google";
import type { AppProps } from "next/app";

import "@/styles/globals.css";

import Navbar from "@/components/Navbar";
import { Toaster } from "react-hot-toast";

const jua = Jua({ weight: "400", subsets: ["latin"] });

const chains = [bscTestnet, arbitrum, mainnet, optimism];
const projectId = "b4caf8cc04e6f1c02cc8561979bddea2";

const { provider } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiClient = createClient({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: 1, chains }),
  provider,
});
const ethereumClient = new EthereumClient(wagmiClient, chains);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={jua.className}>
      <WagmiConfig client={wagmiClient}>
        <Navbar />
        <Component {...pageProps} />
      </WagmiConfig>
      <Web3Modal
        projectId={projectId}
        ethereumClient={ethereumClient}
        defaultChain={bscTestnet}
      />
      <Toaster position="bottom-right" />
    </div>
  );
}
