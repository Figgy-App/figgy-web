import Image from "next/image";
import Link from "next/link";

export default function CtaBanner() {
  return (
    <section className="p-10 md:py-12 md:px-10" style={{ background: "radial-gradient(101.1% 81.63% at 115.91% 115.53%, #FFF 0%, rgba(255, 255, 255, 0.24) 61.76%, rgba(255, 255, 255, 0.15) 78.6%, rgba(255, 255, 255, 0.00) 100%), radial-gradient(190.24% 306.48% at 18.28% 187.5%, #B2FEE7 0%, rgba(148, 218, 136, 0.24) 61.76%, rgba(144, 214, 125, 0.15) 78.6%, rgba(138, 207, 106, 0.00) 100%), radial-gradient(509.61% 302.25% at 104.4% -9.36%, #B2FEE7 0%, rgba(148, 218, 136, 0.24) 61.76%, rgba(144, 214, 125, 0.15) 78.6%, rgba(138, 207, 106, 0.00) 100%), radial-gradient(837.25% 225.33% at -68.23% 212.72%, #4D7111 0%, rgba(138, 207, 106, 0.00) 100%), radial-gradient(441.77% 302.58% at 60.83% 150.22%, #BCF9A0 0%, rgba(138, 207, 106, 0.00) 100%), #F8F8F8"}}>
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