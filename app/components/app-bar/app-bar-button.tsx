"use client";
import Link from "next/link";
import { ReactNode } from "react";

type props = {
  href: string;
  icon: ReactNode;
  name: string;
  selected?: boolean;
  showLabel?: boolean;
};

export default function AppBarButton({
  href,
  icon,
  name,
  selected = false,
  showLabel = true,
}: props) {
  return (
    <Link
      href={href}
      className={`relative px-5 py-3 ${selected && "bg-app-bar-button scale-105"} rounded-lg outline-1 outline-[#4f66ad] transition-all box-border overflow-hidden group`}
    >
      <div className="relative z-10 flex items-center gap-4">
        {icon}
        {showLabel && name}
      </div>
      <div className="absolute inset-0 bg-app-bar-button w-[0%] h-full z-0 transition-all group-hover:w-full"></div>
    </Link>
  );
}
