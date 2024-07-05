import type { Metadata } from "next";
import { Teko } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"
import Script from "next/script";
import Loading from "@/components/Loading";
import Taskbar from "@/components/Taskbar";

const teko = Teko({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hey, I am Tushar! 😎",
  description: "Stay tuned... someting is coming soon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={teko.className}>
        <div id="mousepointer"><div></div></div>
        <div className="bg"></div>
        {/* <Loading/> */}
        {/* <Navbar />
        <>{children}</>
        <Taskbar/> */}

        <Script src="/mousepointer.js" />
      </body>
    </html>
  );
}
