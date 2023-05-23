import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

import { GiHamburgerMenu } from "react-icons/gi";

import CoinCount from "@/components/CoinCount";
import ConnectWalletButton from "@/components/ConnectWalletButton";
import Sidebar from "@/components/Sidebar";

import useToggle from "@/hooks/useToggle";

export const paths = [
  { href: "/", name: "Home", color: "" },
  { href: "/swap", name: "Swap", color: "" },
  { href: "/farming", name: "Farming", color: "", hide: true },
  { href: "/pool", name: "Pool", color: "" },
  { href: "/moonshot", name: "Moonshot", color: "text-light-pink", hide: true },
  { href: "/launcher", name: "Launcher", color: "text-[#51FFB6]" },
  { href: "/chest", name: "Lucky Chest", color: "text-[#F3BC2E]" },
  { href: "/airdrop", name: "Airdrop", color: "text-[#00BDD7]" },
];

export default function Navbar() {
  const { pathname } = useRouter();
  const {
    state: isSidebarOpen,
    open: openSidebar,
    close: closeSidebar,
  } = useToggle(false);

  return (
    <div className="container mx-auto flex items-center justify-between p-4">
      <Link href="/" className="hidden lg:flex sm:flex-1 items-center">
        <Image
          src="/arbitrum-logo-2.png"
          alt="Arbcity logo"
          width={60}
          height={40}
        />
        <h4 className="text-light-pink leading-8 text-2xl">Arbcity</h4>
      </Link>
      <span
        className="lg:hidden text-light-pink text-2xl"
        onClick={openSidebar}
      >
        <GiHamburgerMenu />
      </span>
      <nav className="sm:flex-1">
        <ul className="hidden lg:flex lg:flex-row lg:items-center lg:justify-center lg:gap-10 text-white/60 text-xl whitespace-nowrap">
          {paths.map((path) => (
            <Link
              key={path.href}
              href={path.href}
              className={`${
                pathname === path.href ? "text-pink" : path.color
              } ${path.hide ? "hidden 2xl:flex" : ""}`}
            >
              {path.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="flex items-center justify-end gap-5 sm:flex-1">
        <div className="hidden xl:block">
          <CoinCount />
        </div>
        <ConnectWalletButton />
      </div>
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
    </div>
  );
}
