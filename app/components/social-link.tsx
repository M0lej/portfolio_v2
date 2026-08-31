import { ReactNode } from "react";

type props = {
  icon: ReactNode;
  href: string;
  label: string;
};

export default function SocialLink({ icon, href, label }: props) {
  return (
    <div className="space-y-2 w-fit group relative cursor-pointer hover:scale-110 transition-all delay-500">
      <a className="flex items-center gap-4 w-fit" href={href} target="_blank">
        {icon}
        <span className="leading-none">{label}</span>
      </a>
      <div className="absolute h-0.5 -translate-y-full pointer-events-none  w-[0%] group-hover:w-full transition-all duration-500 bg-subtle-blue"></div>
    </div>
  );
}
