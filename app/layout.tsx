import type { Metadata } from "next";
import { Albert_Sans } from "next/font/google";
import "./globals.css";
import AppBar from "./components/app-bar/app-bar";
import { TransitionScreenProvider } from "./components/transition-screen/transition-screen-provider";
import { InfoCircle } from "@boxicons/react";
import Link from "next/link";

const albertSans = Albert_Sans({
  subsets: ["latin"],
  variable: "--font-albert-sans",
});

export const metadata: Metadata = {
  title: "Portfolio - Maksymilian Olejnik",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pl"
      className={`${albertSans.variable} xl:text-lg lg:text-base md:text-sm text-xs font-sans h-full antialiased`}
    >
      <head>
        <meta name="apple-mobile-web-app-title" content="Portfolio.MO" />
      </head>
      <body className="min-h-full flex flex-col h-full font-sans items-center">
        <TransitionScreenProvider>
          {children}
          <AppBar />
          <div className="fixed right-5 bottom-5">
            <Link href="/info">
              <InfoCircle className="fill-subtle-blue" />
            </Link>
          </div>
        </TransitionScreenProvider>
      </body>
    </html>
  );
}
