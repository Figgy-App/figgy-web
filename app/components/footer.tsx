import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-16 md:py-20 px-10 bg-[#FDFEFC]">
      <div className="flex justify-between gap-10 flex-col md:flex-row max-w-[1200px] my-0 mx-auto">
        <div className="w-full md:w-1/2">
          <Link href={"/"}>
            <Image src={"/figgy-logo.png"} alt="Figgy Logo" width={70} height={70} className="w-[60px] md:w-[70px]" />
          </Link>
          <p className="pt-6 text-base text-[#4D644D] font-bold">Your personal, patient greenhouse mentor.</p>

          <p className="pt-6 md:pt-16 text-base text-[#4D644D] font-medium">© 2025 Figgy</p>
        </div>

        <div className="flex justify-left w-full gap-6 md:justify-end md:w-1/2 md:gap-16">
          <nav>
            <p className="text-base text-[#4D644D] font-bold">Navigation</p>

            <ul className="flex flex-col gap-4 pt-4">
              <li className="text-[#4D644D]"><Link href={"/"} className="text-base no-underline">Home</Link></li>
              <li className="text-[#4D644D]"><Link href={"/"} className="text-base no-underline">Privacy Policy</Link></li>
              <li className="text-[#4D644D]"><Link href={"/"} className="text-base no-underline">Terms of Service</Link></li>
              <li className="text-[#4D644D]"><Link href={"/"} className="text-base no-underline">Subscriptions</Link></li>
            </ul>
          </nav>

          <nav>
            <p className="text-base text-[#4D644D] font-bold">Contact</p>

            <ul className="flex flex-col gap-4 pt-4">
              <li className="text-[#4D644D]"><Link href={"/"} className="text-base no-underline">Help center</Link></li>
              <li className="text-[#4D644D]"><Link href={"/support"} className="text-base no-underline">Support</Link></li>
            </ul>
          </nav>

          <nav>
            <p className="text-base text-[#4D644D] font-bold">Follow us</p>

            <ul className="flex flex-col gap-4 pt-4">
              <li className="text-[#4D644D]"><Link href={"/"} className="text-base no-underline">Instagram</Link></li>
              <li className="text-[#4D644D]"><Link href={"/"} className="text-base no-underline">Facebook</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}