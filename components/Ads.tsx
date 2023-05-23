import Image from "next/image";

import CertikAd from "@/public/certik_ad.svg";
import OkxAd from "@/public/okx_ad.svg";

export default function Ads() {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mx-auto mt-12">
      <Image src={CertikAd} alt="Certik Ad" width={300} />
      <Image src={OkxAd} alt="Okx Ad" width={300} />
    </div>
  );
}
