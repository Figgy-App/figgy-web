import type { Metadata } from "next";
import "./globals.css";
import { Urbanist } from "next/font/google";
import Header from "./components/header";
import Footer from "./components/footer";

const geistSans = Urbanist({
  // variable: "--font-geist-sans",
  variable: "--font-urbanist",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "Figgy",
  description:
    "Figgy is a smart plant care app that helps you track your plants, manage watering schedules, and stay on top of tasks—so your plants thrive effortlessly.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/android-chrome-512x512-3.png", sizes: "512x512", type: "image/png" },
      { url: "/android-chrome-192x192-3.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable}   overflow-x-hidden antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
