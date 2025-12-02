import Link from "next/link";

export default function CtaEmailBanner() {
  return (
    <section className="px-6 pt-6 md:pt-0 md:px-10 pb-10">
      <div className="max-w-[1200px] my-0 mx-auto rounded-[40px]" style={{ background: "linear-gradient(90deg, rgb(158, 217, 160) 8%, rgb(183, 230, 164) 80%, rgb(180, 240, 211) 100%)" }}>
        <div className="py-20 px-12 lg:py-32">
          <p className="text-[28px] leading-8 text-[#fff] font-semibold text-center md:text-4xl md:leading-10 lg:text-5xl lg:leading-none">Still have questions?</p>
          <p className="max-w-[480px] my-0 mx-auto pt-3 pb-5 text-sm text-[#fff] text-center md:pt-4 md:text-base lg:text-lg">Can’t find the answer to your question? Send us an email and we’ll get back to you as soon as possible!</p>
          <Link href={"/"} className="block w-36 py-3 px-6 my-0 mx-auto text-sm md:text-base text-[#6AAD5F] text-center bg-[#F3FAE9] border-solid border-[#F3FAE9] rounded-full">
            Get in touch
          </Link>
        </div>
      </div>
    </section>
  );
}