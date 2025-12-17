"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function TestimonialsSlider() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <section className="testimonials-slider overflow-visible py-12 px-6 md:px-10 md:py-20 lg:py-32 xl:py-40">
      <div className="flex flex-col md:flex-row items-center gap-10 max-w-[1200px] my-0 mx-auto px-6 md:px-10">
        <div className="w-full md:w-1/2">
          <p className="text-[28px] leading-8 text-[#424E42] font-semibold text-center md:text-4xl md:leading-10 xl:text-5xl xl:leading-none md:text-left">Healthy, happy plants  without the guesswork!</p>
          <p className="py-6 text-lg text-[#7B8C7B] text-center md:text-left">Here’s what our users are saying</p>

          <Link href={"/"} className="flex justify-center items-center gap-2 w-60 py-3 px-6 my-0 mx-auto md:m-0 text-base text-[#fff] text-center bg-[#567951] border-solid border-[#567951] rounded-full button-shadow">
            <Image src={"/icon-apple-white.svg"} alt="Icon Apple" width={18} height={24} className="" />
            Coming Soon
          </Link>
        </div>
        
        <div className="relative w-full md:w-1/2">
          <button ref={prevRef} className="absolute -left-8 md:-left-16 top-1/2 scale-x-[-1] z-50 cursor-pointer w-12 h-12 p-3 border border-[#7B8C7B] rounded-[48px] text-center">
            <Image src={"/icon-arrow-nav.svg"} alt="Icon Arrow" width={12} height={12} className="w-3 my-0 mx-auto" />
          </button>
          <button ref={nextRef} className="absolute -right-8 md:-right-16 top-1/2 z-50 cursor-pointer w-12 h-12 p-3 border border-[#7B8C7B] rounded-[48px] text-center">
            <Image src={"/icon-arrow-nav.svg"} alt="Icon Arrow" width={12} height={12} className="w-3 my-0 mx-auto" />
          </button>

          <Swiper
            modules={[Navigation, Autoplay]}
            // navigation
            autoplay={{ delay: 4000 }}
            loop
            slidesPerView={1}
            spaceBetween={10}
            onBeforeInit={(swiper) => {
              // @ts-expect-error override
              swiper.params.navigation.prevEl = prevRef.current;
              // @ts-expect-error override
              swiper.params.navigation.nextEl = nextRef.current;
            }}
          >
            <SwiperSlide>
              <div className="min-h-[450px] px-10 py-12 bg-[#2E5129] rounded-3xl">
                <Image src={"/icon-star-ratings.svg"} alt="Star Ratings" width={140} height={24} className="" />
                <p className="pt-6 text-xl leading-[28px] md:text-2xl md:leading-[30px] lg:text-3xl lg:leading-[38px] text-[#E2F2C9] font-semibold">The BEST</p>
                <p className="pt-6 text-base md:text-lg text-[#FDFEFC]">
                  I’m always busy and honestly used to forget about my plants for days. 
                  Figgy makes it easy to stay on top of everything. The reminders fit into my routine and 
                  the quick advice helps me fix problems fast. My plants look the best they ever have.
                </p>

                <div className="block w-[140px] h-[1px] mt-6 bg-[#4D644D]"></div>

                <p className="pt-6 text-lg text-[#E2F2C9] font-semibold">- Tony</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="min-h-[450px] px-10 py-12 bg-[#2E5129] rounded-3xl">
                <Image src={"/icon-star-ratings.svg"} alt="Star Ratings" width={140} height={24} className="" />
                <p className="pt-6 text-xl leading-[28px] md:text-2xl md:leading-[30px] lg:text-3xl lg:leading-[38px] text-[#E2F2C9] font-semibold">Thanks Figgy!!!</p>
                <p className="pt-6 text-base md:text-lg text-[#FDFEFC]">
                  I knew NOTHING about plants. I’d water them and literally pray they stayed alive and they still died. 
                  Figgy came through for me. The calendar feature and quick answers just make sense. 
                  My plants are somehow thriving now and I’m shocked!!!
                </p>

                <div className="block w-[140px] h-[1px] mt-6 bg-[#4D644D]"></div>

                <p className="pt-6 text-lg text-[#E2F2C9] font-semibold">- Giftel</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="min-h-[450px] px-10 py-12 bg-[#2E5129] rounded-3xl">
                <Image src={"/icon-star-ratings.svg"} alt="Star Ratings" width={140} height={24} className="" />
                <p className="pt-6 text-xl leading-[28px] md:text-2xl md:leading-[30px] lg:text-3xl lg:leading-[38px] text-[#E2F2C9] font-semibold">Beginner-friendly and super easy to use</p>
                <p className="pt-6 text-base md:text-lg text-[#FDFEFC]">
                  I didn’t want plants at first because I thought they were expensive and hard to maintain, 
                  especially indoor ones. But Figgy made it crazy simple. The reminders and quick tips take away all the stress. 
                  Now my plants are thriving and I’m not broke :D
                </p>

                <div className="block w-[140px] h-[1px] mt-6 bg-[#4D644D]"></div>

                <p className="pt-6 text-lg text-[#E2F2C9] font-semibold">- Audrey</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}