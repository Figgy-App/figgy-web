import Image from "next/image";

export default function PlantCareFeatures() {
  return (
    <section>
      <div className="max-w-[1200px] my-0 mx-auto p-6 md:py-10 md:px-10">
        <div className="flex flex-col-reverse gap-0 md:gap-10 border border-[#EBEBEB] rounded-[40px] md:flex-row bg-[#fff]">
          <div className="w-full p-6 md:w-1/2 md:pt-16 md:pl-10">
            <p className="max-w-[730px] text-[24px] leading-[28px] md:text-[28px] md:leading-[34px] lg:text-[40px] lg:leading-[48px] text-[#424E42] font-semibold">Your personal plant care assistant is here. <span className="text-[#8FA68F]">Your plants need you. And you need a reminder.</span></p>
          </div>
          <div className="w-full md:w-1/2">
            <Image src={"/figgy-camera.png"} alt="Figgy Camera" width={600} height={800} className="w-full" />
          </div>
        </div>

        <div className="flex flex-col gap-6 my-7  md:gap-4 md:flex-row">
          <div className="w-full p-6 md:w-1/2 md:p-10 xl:pt-14 xl:px-10 border border-[#EBEBEB] rounded-[40px] bg-[#fff]">
            <p className="pb-7 md:pb-8 lg:pb-12 text-xl leading-[28px] md:text-2xl md:leading-[30px] lg:text-3xl lg:leading-[38px] text-[#424E42] font-semibold">Figgy helps you understand every plant’s unique needs — sunlight, watering, and more.</p>
            <Image src={"/figgy-calendar.png"} alt="Figgy Calendar" width={400} height={420} className="w-full" />
            {/* <Image src={"/figgy-calendar.png"} alt="Figgy Calendar" width={540} height={600} className="w-full h-full object-contain" /> */}
          </div>

          <div className="w-full p-6 md:w-1/2 md:p-10 xl:pt-14 xl:px-10 border border-[#EBEBEB] rounded-[40px] bg-[#fff]">
            <p className="pb-7 md:pb-8 lg:pb-12 text-xl leading-[28px] md:text-2xl md:leading-[30px] lg:text-3xl lg:leading-[38px] text-[#424E42] font-semibold">Figgy helps you bring them back to life with simple reminders and expert care tips.</p>
            <Image src={"/figgy-notifications.png"} alt="Figgy Notifications" width={400} height={420} className="w-full" />
          </div>
        </div>

        <div className="flex flex-col-reverse gap-0 md:gap-6 items-center border border-[#EBEBEB] rounded-[40px] md:flex-row bg-[#fff]">
          <div className="w-full md:w-2/5">
            <Image src={"/figgy-messages.png"} alt="Figgy Messages" width={400} height={600} className="" />
          </div>

          <div className="w-full md:w-3/5 p-6 md:pr-10">
            <p className="max-w-[540px] text-[24px] leading-[28px] md:text-[28px] md:leading-[34px] lg:text-[34px] lg:leading-[42px] text-[#424E42] font-semibold">Your personal, patient greenhouse mentor, <span className="text-[#8FA68F]">ready to answer any plant-related question, big or small, to ensure your green friends are happy and healthy.</span></p>
          </div>
        </div>
      </div>
    </section>
  );
}