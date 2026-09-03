"use client";
import Link from "next/link";
import { ReactNode } from "react";

type props = {
  href: string;
  icon: ReactNode;
  name: string;
  selected?: boolean;
};

export default function AppBarButton({
  href,
  icon,
  name,
  selected = false,
}: props) {
  return (
    <Link
      href={href}
      className={`flex gap-4 px-5 py-3 ${selected ? "bg-app-bar-button" : null} rounded-lg outline-1 outline-[#4f66ad] transition-colors`}
    >
      {icon}
      {name}
    </Link>
  );
}
