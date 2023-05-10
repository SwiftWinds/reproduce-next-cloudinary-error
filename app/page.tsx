import Image from "next/image";
import { CldImage } from "next-cloudinary";

export default function Home() {
  return (
    <CldImage
      className="block mr-2 max-w-full h-auto max-h-12 align-middle opacity-100"
      width="600"
      height="600"
      src="https://res.cloudinary.com/blockchainucsb/logos/nav.png"
      alt="Blockchain @ UCSB logo"
    />
  );
}
