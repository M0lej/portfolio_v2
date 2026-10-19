import { RadioCircleMarked } from "@boxicons/react";
import { ReactNode } from "react";
import Window from "./window";

type props = {
  icon: ReactNode;
  name: string;
  description: string;
  className?: string;
  subwindow?: boolean;
  index?: number;
};
export default function Skill({
  icon,
  name,
  description,
  className,
  subwindow = true,
  index,
}: props) {
  return (
    <article
      className={`rounded-xl overflow-hidden animate-fade-in p-px ${subwindow ? "bg-window-in-window-outline-gradient" : "bg-border-gradient"} ${className} opacity-0`}
      style={
        index != null ? { animationDelay: `${index! * 100}ms` } : undefined
      }
    >
      <div
        className={`relative ${subwindow ? "bg-window-in-window-gradient" : "bg-window-gradient"} h-full w-full rounded-xl`}
      >
        <div className={`content relative px-7 py-6 w-full`}>
          <div className="flex gap-4 items-center">
            {icon}
            <h1 className="font-bold text-lg">{name}</h1>
          </div>
          <h2 className="text-sm my-5">{description}</h2>
        </div>
      </div>
    </article>
  );
}
