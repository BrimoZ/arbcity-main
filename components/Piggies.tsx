import Image from "next/image";

import Arb from "@/public/arbitrum-logo-2.png";

const Piggies = () => (
  <div className="hidden md:block">
    <Image
      src={Arb}
      alt=""
      width={40}
      className="absolute top-0 -left-6"
      style={{ transform: "rotateY(-180deg)" }}
    />
    <Image
      src={Arb}
      alt=""
      width={40}
      className="absolute -bottom-5 left-[20%]"
    />
    <Image
      src={Arb}
      alt=""
      width={40}
      className="absolute -bottom-7 left-[50%]"
    />
    <Image
      src={Arb}
      alt=""
      width={40}
      className="absolute -top-6 left-[90%] rotate-180"
    />
    <Image
      src={Arb}
      alt=""
      width={40}
      className="absolute -right-10 bottom-[10%] -rotate-45"
    />
  </div>
);

export default Piggies;
