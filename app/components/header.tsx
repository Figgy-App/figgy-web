import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-6 bg-[#fff] md:py-7 md:px-10">
      <Image src={"/figgy-logo.svg"} alt="Figgy Logo" width={48} height={48} className="" />
      <Link href={"/"} className="flex items-center gap-2 py-3 px-6 
        text-sm text-[#4D644D] text-center bg-[#F3FAE9] border-solid border-[#F3FAE9] rounded-full md:text-base">
        <Image src={"/icon-apple-basil.svg"} alt="Icon Apple" width={18} height={24} className="" />
        Download for iPhone
      </Link>
    </header>
  );
}