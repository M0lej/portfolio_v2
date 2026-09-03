import { AnchorHTMLAttributes, ReactNode } from "react";

export enum IconPosition {
  start,
  end,
}

type props = {
  icon: ReactNode;
  iconPos?: IconPosition;
  label: string;
  href: string;
  filled?: boolean;
  target?: string;
};

export default function IconLink({
  icon,
  label,
  href,
  filled = false,
  iconPos = IconPosition.end,
  target,
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
    <a
      href={href}
      className={`flex items-center gap-2 py-2 px-6 w-fit rounded-sm ${filled ? "bg-deep-blue" : "outline-deep-blue outline-1"}`}
      target={target}
    >
      {content}
    </a>
  );
}
