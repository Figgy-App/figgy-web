import type { Metadata } from "next";
import "./globals.css";
import { Urbanist } from "next/font/google";
const geistSans = Urbanist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Figgy",
  description: "Figgy landing Page - staging",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable}   overflow-x-hidden antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
