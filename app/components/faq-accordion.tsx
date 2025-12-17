"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
}

export default function FaqAccordion({ items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-12 px-6 md:px-10 md:py-20 lg:py-32">
      <div className="max-w-[1200px] my-0 mx-auto">
        <h2 className="text-[28px] leading-8 text-[#424E42] font-semibold text-center md:text-4xl md:leading-10 lg:text-5xl lg:leading-none">
          Frequently Asked Questions
        </h2>

        <p className="max-w-[280px] my-0 mx-auto md:max-w-[100%] md:m-0 pt-3 pb-5 text-sm text-[#7B8C7B] text-center md:py-4 lg:py-6 md:text-base lg:text-lg">This section will help you learn more about the app and its features.</p>

        <div className="flex flex-col gap-4 mt-10 md:mt-12">
          {items.map((item, index) => (
            <div
              key={index}
              className="p-4 border border-[#EBEBEB] rounded-[14px] overflow-hidden"
            >
              <button
                onClick={() => toggle(index)}
                className="flex justify-between items-center w-full cursor-pointer text-left"
              >
                <h3 className="text-sm text-[#4D644D] font-semibold md:text-base lg:text-lg">{item.question}</h3>

                <span className="text-2xl text-[#567951] transition-transform duration-200"
                  style={{
                    transform: openIndex === index ? "rotate(45deg)" : "rotate(0deg)",
                  }}
                >
                  +
                </span>
              </button>

              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  openIndex === index ? "grid-rows-[1fr] opacity-100 py-2" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden text-sm text-[#7B8C7B] font-normal md:text-base lg:text-lg">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}