import { useWeb3Modal } from "@web3modal/react";

import { useAccount } from "wagmi";
import NetworkSwitch from "./NetworkSwitch";
import { useEffect, useMemo, useState } from "react";

const truncateHash = (hash: string) =>
  hash.slice(0, 4) + "..." + hash.slice(hash.length - 4);

export default function ConnectWalletButton() {
  const { open } = useWeb3Modal();
  const [renderedText, setRenderedText] = useState("");
  const { address } = useAccount();

  const text = useMemo(() => {
    if (!address) return "Connect Wallet";
    return truncateHash(address);
  }, [address]);

  useEffect(() => {
    setRenderedText(text);
  }, [text]);

  return (
    <div className="relative flex bg-pink cursor-pointer rounded-full z-20 translate-x-0">
      <NetworkSwitch />
      <div
        className="flex items-center text-white/75 flex-1 px-2 rounded-r-full"
        onClick={() => open()}
      >
        {renderedText}
      </div>
    </div>
  );
}
