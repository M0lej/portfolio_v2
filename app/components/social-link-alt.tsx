import { ArrowUpRightStroke } from "@boxicons/react";
import Link from "next/link";
import { ReactNode } from "react";

export default function SocialLinkAlt({
  classname,
  contentClassName,
  textClassName,
  href,
  icon,
  appName,
  username,
  subwindow = true,
}: {
  classname?: string;
  contentClassName?: string;
  textClassName?: string;
  href: string;
  icon: ReactNode;
  appName: string;
  username: string;
  subwindow?: boolean;
}) {
  return (
    <div className="relative w-full min-w-0 overflow-visible group rounded-2xl">
      <Link
        className={`relative block w-full rounded-2xl overflow-hidden ${subwindow ? "bg-window-in-window-outline-gradient" : "bg-border-gradient"} p-px h-fit group-hover:rotate-2 transition-transform ${classname}`}
        href={href}
        target="_blank"
      >
        <div
          className={`relative py-5 px-8 h-full rounded-2xl ${subwindow ? "bg-window-in-window-gradient" : "bg-window-gradient"} ${contentClassName}`}
        >
          <div className="absolute h-[220%] w-0 group-hover:w-[220%] rotate-20 translate-[-50%] inset-0 transition-all duration-500 pointer-events-none z-0 bg-linear-to-br from-deep-blue to-transparent"></div>
          <div className="relative flex gap-3 items-center w-full h-full z-10">
            {icon}
            <div className={textClassName}>
              <p className="font-medium text-lg">{appName}</p>
              <p className="col-start-2 text-sm">{username}</p>
            </div>
            <ArrowUpRightStroke
              className="ml-auto fill-subtle-blue group-hover:scale-120 transition-all"
              size="md"
            />
          </div>
        </div>
      </Link>
    </div>
  );
}
