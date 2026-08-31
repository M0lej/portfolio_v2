import { ReactNode } from "react";

type props = {
  icon: ReactNode;
  label: string;
  href: string;
  filled?: boolean;
};

export default function IconLink({ icon, label, href, filled = false }: props) {
  return (
    <a
      href={href}
      className={`flex items-center gap-2 py-2 px-6 w-fit rounded-sm ${filled ? "bg-deep-blue" : "outline-deep-blue outline-1"}`}
    >
      <span>{label}</span>
      {icon}
    </a>
  );
}
