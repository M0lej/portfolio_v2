"use client";
import { ReactNode } from "react";
import { TransitionLink } from "../transition-screen/transition-link";

type props = {
  href: string;
  icon: ReactNode;
  name: string;
  selected?: boolean;
  showLabel?: boolean;
  currentPageIndex: number;
  targetPageIndex: number;
};

export default function AppBarButton({
  href,
  icon,
  name,
  selected = false,
  showLabel = true,
  currentPageIndex,
  targetPageIndex,
}: props) {
  return (
    <TransitionLink
      href={href}
      currentPageIndex={currentPageIndex}
      targetPageIndex={targetPageIndex}
    >
      <div
        className={`relative px-5 py-3 ${selected ? "bg-app-bar-button scale-105" : ""} rounded-lg outline-1 outline-[#4f66ad] transition-all box-border overflow-hidden group active:scale-80`}
      >
        <div className="relative z-10 flex items-center gap-4">
          {icon}
          {showLabel && name}
        </div>
        <div className="absolute inset-0 bg-app-bar-button w-full h-full z-0 transition-all opacity-0 group-hover:opacity-25 group-active:opacity-100"></div>
      </div>
    </TransitionLink>
  );
}
