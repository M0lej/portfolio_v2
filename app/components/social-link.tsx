import { ReactNode } from "react";

type props = {
  icon: ReactNode;
  href: string;
};

export default function SocialLink({ icon, href }: props) {
  return (
    <a
      className="flex items-center gap-4 w-fit hover:scale-120 hover:rotate-15 transition-all"
      href={href}
      target="_blank"
    >
      {icon}
    </a>
  );
}
