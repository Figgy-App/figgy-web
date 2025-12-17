import Image from "next/image";

export default function FeatureHighlight() {
  return (
    <section className="py-16 px-6 md:px-10 md:py-20 lg:py-32 xl:py-40">
      <div className="relative max-w-[1200px] my-0 mx-auto p-0 sm:px-10">
        <Image src={"/icon-camera.svg"} alt="Camera Icon" width={80} height={80} className="w-[48px] md:w-[60px] lg:w-[70px] xl:w-[80px] absolute top-[48px] left-0" />

        <div className="relative max-w-[940px] my-0 mx-auto">
          <Image src={"/icon-water-drop.svg"} alt="Water Drop Icon" width={80} height={80} className="w-[48px] md:w-[60px] lg:w-[70px] xl:w-[80px] absolute top-[-40px] left-0" />
          
          <div className="max-w-[280px] my-0 mx-auto text-[28px] leading-[36px] text-[#424E42] text-center md:max-w-[340px] lg:max-w-[620px] md:text-4xl md:leading-[46px] lg:text-5xl lg:leading-[58px]"><span className="font-semibold">Let Figgy remind you when your plants need love—</span> water, light, and care.</div>
          <p className="max-w-[280px] my-0 mx-auto pt-6 text-base text-[#7B8C7B] text-center md:text-lg md:max-w-[100%]">Scan, set reminders, and watch your plants thrive instead of wilt.</p>
          
          <Image src={"/icon-alert-tag.svg"} alt="Alert Tag Icon" width={80} height={80} className="w-[48px] md:w-[60px] lg:w-[70px] xl:w-[80px] absolute top-[-40px] right-0" />
        </div>

        <Image src={"/icon-sync.svg"} alt="Sync Icon" width={80} height={80} className="w-[48px] md:w-[60px] lg:w-[70px] xl:w-[80px] absolute top-[48px] right-0" />
      </div>
    </section>
  );
}