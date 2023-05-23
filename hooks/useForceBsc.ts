import { useEffect, useState } from "react";

export default function useForceBsc() {
  const [hasSetup, setHasSetup] = useState(false);

  const switchToBsc = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: "0x61" }],
        });
      } catch (error) {
        if (
          error &&
          typeof error === "object" &&
          "code" in error &&
          error.code === 4902
        ) {
          try {
            await window.ethereum.request({
              // @ts-ignore
              method: "wallet_addEthereumChain",
              params: [
                {
                  chainId: "0x3",
                  // @ts-ignore
                  chainName: "Binance Smart Chain - Testnet",
                  nativeCurrency: {
                    name: "Binance",
                    symbol: "BNB",
                    decimals: 18,
                  },
                  blockExplorerUrls: "https://testnet.bscscan.com/",
                  rpcUrl: "https://data-seed-prebsc-1-s1.binance.org:8545/",
                },
              ],
            });
          } catch (error) {
            console.log(error);
          } finally {
            setHasSetup(true);
          }
        }
      }
    } else {
      alert(
        "MetaMask is not installed. Please consider installing it: https://metamask.io/download.html%27"
      );
    }
  };

  useEffect(() => {
    switchToBsc();
  }, []);

  return hasSetup;
}
