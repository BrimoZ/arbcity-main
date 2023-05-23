import Link from "next/link";
import { useRouter } from "next/router";
import { FaTimes } from "react-icons/fa";

import CoinCount from "@/components/CoinCount";

import { paths } from "@/components/Navbar";

export default function Sidebar({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const { pathname } = useRouter();

  return (
    <div
      className={`fixed top-0 left-0 w-72 h-full bg-[#3C1F5A] z-50 p-4 transition ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex flex-row justify-between">
        <CoinCount />
        <FaTimes color="white" onClick={onClose} />
      </div>

      <nav className="mt-8">
        <ul className="flex flex-col gap-4 text-xl text-white">
          {paths.map((path) => (
            <Link
              key={path.href}
              href={path.href}
              className={path.href === pathname ? "text-light-pink" : ""}
            >
              {path.name}
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  );
}
