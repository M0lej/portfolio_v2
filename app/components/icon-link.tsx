import { AnchorHTMLAttributes, ReactNode } from "react";
import { TransitionLink } from "./transition-screen/transition-link";
import Link, { LinkProps } from "next/link";

export enum IconPosition {
  start,
  end,
}

type props = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> &
  Omit<LinkProps, "href"> & {
    icon: ReactNode;
    iconPos?: IconPosition;
    label: string;
    href: string;
    filled?: boolean;
    target?: string;
    currentPageIndex?: number;
    targetPageIndex?: number;
  };

export default function IconLink({
  icon,
  label,
  href,
  filled = false,
  iconPos = IconPosition.end,
  currentPageIndex,
  targetPageIndex,
  ...props
}: props) {
  const content =
    iconPos == IconPosition.start ? (
      <>
        {icon}
        <span>{label}</span>
      </>
    ) : (
      <>
        <span>{label}</span>
        {icon}
      </>
    );

  return currentPageIndex == null || targetPageIndex == null ? (
    <Link href={href} {...props}>
      <div
        className={`flex items-center gap-2 py-2 px-6 w-fit rounded-sm ${filled ? "bg-button-gradient" : "outline-deep-blue outline-1"} active:scale-80 transition-all select-none`}
      >
        {content}
      </div>
    </Link>
  ) : (
    <TransitionLink
      currentPageIndex={currentPageIndex}
      targetPageIndex={targetPageIndex}
      href={href}
      {...props}
    >
      <div
        className={`flex items-center gap-2 py-2 px-6 w-fit rounded-sm ${filled ? "bg-button-gradient" : "outline-deep-blue outline-1"} active:scale-80 transition-all select-none`}
      >
        {content}
      </div>
    </TransitionLink>
  );
}
