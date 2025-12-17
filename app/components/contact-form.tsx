
"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    setLoading(false);

    if (res.ok) {
      setStatus("Message sent!");
      // e.currentTarget.reset();
    } else {
      setStatus("Something went wrong");
    }
  }

  return (
    <section id="contact-form" className="py-12 px-6 md:py-16 md:px-10">
      <div className="flex flex-col md:flex-row items-center gap-12 max-w-[1200px] my-0 mx-auto">
        <div className="w-full md:w-1/2">
          <h1 className="text-[28px] leading-8 text-[#424E42] font-semibold text-center md:text-left md:text-4xl md:leading-10 lg:text-5xl lg:leading-none">How can we help you?</h1>
          <p className="max-w-[400px] my-0 mx-auto md:max-w-[520px] md:m-0 pt-3 pb-5 text-sm text-[#7B8C7B] text-center md:text-left md:py-4 lg:py-6 md:text-base lg:text-lg">Our team is here to help you take care and grow your plants. 
            Check out the resources below and reach out directly if you have any questions.</p>
          <Link href={"#faq"} className="block w-40 py-3 px-6 my-0 mx-auto md:m-0 text-sm md:text-base text-[#fff] text-center bg-[#567951] border-solid border-[#567951] rounded-full button-shadow">
            Search FAQs
          </Link>
        </div>

        <div className="w-full md:w-1/2 p-8 md:p-10 xl:p-16 rounded-[40px]"
          style={{ background: "radial-gradient(79.99% 56.57% at 50% 45.21%, #FFF 0%, rgba(255, 255, 255, 0.00) 100%), linear-gradient(180deg, #FFF 34.84%, #B8E2A6 111.34%)" }}
        >
          <div className="p-7 bg-[#fff] border border-[#EBEBEB] rounded-3xl">
            <p className="text-[28px] leading-8 md:text-3xl md:leading-[34px] text-[#424E42] font-semibold">Contact</p>
            <p className="pt-1 pb-7 text-sm text-[#7B8C7B] md:text-base">Send us a message and we’ll get back to you soon.</p>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <div className="flex flex-col text-sm text-[#7B8C7B] md:text-base lg:text-lg">
                <label className="hidden">Name</label>
                <input name="name" placeholder="Name" required className="p-4 border border-[#EBEBEB] rounded-2xl placeholder-[#7B8C7B] placeholder-opacity-100" />
              </div>

              <div className="flex flex-col text-sm text-[#7B8C7B] md:text-base lg:text-lg">
                <label className="hidden">Email</label>
                <input name="email" type="email" placeholder="Email" required className="p-4 border border-[#EBEBEB] rounded-2xl placeholder-[#7B8C7B] placeholder-opacity-100" />
              </div>

              <div className="flex flex-col text-sm text-[#7B8C7B] md:text-base lg:text-lg">
                <label className="hidden">Message</label>
                <textarea name="message" placeholder="Message" required className="min-h-[200px] p-4 border border-[#EBEBEB] rounded-2xl placeholder-[#7B8C7B] placeholder-opacity-100" />
              </div>

              <button disabled={loading} className="block w-full py-3 px-6 my-0 mx-auto md:m-0 text-sm md:text-base text-[#fff] text-center bg-[#567951] border-solid border-[#567951] rounded-full cursor-pointer">Send</button>
              {status && <p className="text-lg text-[#567951]">{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}