import Image from "next/image";
import Link from "next/link";

export default function CtaBanner() {
  return (
    <section className="p-10 md:py-12 md:px-10" style={{ background: "linear-gradient(170deg,#a1d092 0%, #a3d38c 40%, #a9e091 60%, #aee7aa 80%, #b5f3cb 100%)"}}>
      <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-8">
        <p className="text-xl leading-[28px] md:text-2xl md:leading-[30px] lg:text-3xl lg:leading-[38px] text-[#fff] font-semibold text-center md:text-left">Download Figgy now on iOS</p>
        <Link href={"/"} className="flex items-center justify-center gap-2 w-52 my-0 mx-auto md:w-60 md:m-0 py-3 px-6 text-sm md:text-base text-[#4D644D] text-center bg-[#F3FAE9] border-solid border-[#F3FAE9] rounded-full">
          <Image src={"/icon-apple-basil.svg"} alt="Icon Apple" width={18} height={24} className="" />
          Download for iPhone
        </Link>
      </div>
    </section>
  );
}