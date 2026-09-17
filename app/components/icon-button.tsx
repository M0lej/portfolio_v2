"use client";
import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export enum IconPosition {
  start,
  end,
}

type props = {
  icon: ReactNode;
  iconPos?: IconPosition;
  label: string;
  filled?: boolean;
  className?: string;
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export default function IconButton({
  icon,
  label,
  filled = false,
  iconPos = IconPosition.end,
  className,
  ...buttonProps
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

  return (
    <button
      className={`flex items-center gap-2 py-2 px-6 w-fit rounded-sm cursor-pointer ${filled ? "bg-button-gradient" : "outline-deep-blue outline-1"} ${className} active:scale-80 transition-all select-none`}
      {...buttonProps}
    >
      {content}
    </button>
  );
}
