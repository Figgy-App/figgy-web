import Image from "next/image";
import { Urbanist } from "next/font/google";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen relative overflow-hidden bg-[radial-gradient(circle_at_center,rgba(146,220,139,0.45)_0%,rgba(146,220,139,0.25)_25%,transparent_100%)]">
      <Image
        src={"/figgy-bg.png"}
        height={1040}
        width={1820}
        alt="Figgy-bg"
        className="relative hidden md:flex z-10"
      />
      <Image
        src={"/figgy-mobile.png"}
        height={874}
        width={402}
        alt="Figgy-bg"
        className="relative flex md:hidden z-10"
      />

      <p className=" text-[20px] md:text-[48px] absolute text-[#4D644D]  bottom-10 z-10">
        Coming Soon...
      </p>
    </div>
  );
}
