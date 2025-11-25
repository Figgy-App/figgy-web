import Image from "next/image";
import Link from "next/link";

export default function HomeHero() {
  return (
    <section className="p-6 bg-white md:py-7 md:px-10">
      <div 
        className="rounded-3xl"
        style={{ background: "linear-gradient(180deg, #fff 34.84%, #B8E2A6 111.34%)" }}
      >
        <div className="max-w-3xl my-0 mx-auto">
          <h1 className="text-[28px] leading-8 text-[#424E42] font-semibold text-center md:text-4xl md:leading-10 lg:text-5xl lg:leading-none">
            <span className="block">Meet Figgy.</span>
            <span className="block">Your plant’s new best friend.</span>
            </h1>
          <p className="pt-3 pb-5 text-sm text-[#7B8C7B] text-center md:py-4 lg:py-6 md:text-base lg:text-lg">Care for your plants, the smart way. Scan. Learn. Grow.</p>
          <Link href={"/"} className="flex justify-center items-center gap-2 w-52 md:w-60 py-3 px-6 my-0 mx-auto 
            text-sm text-[#fff] text-center bg-[#567951] border-solid border-[#567951] rounded-full button-shadow md:text-base">
            <Image src={"/icon-apple-white.svg"} alt="Icon Apple" width={18} height={24} className="" />
            Download for iPhone
          </Link>
        </div>

        <div className="mt-8">
          <Image src={"/meet-figgy.png"} alt="Meet Figgy" width={1200} height={675} className="my-0 mx-auto" />
        </div>
      </div>
    </section>
  );
}