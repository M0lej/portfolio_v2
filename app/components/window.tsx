import { Windows, X } from "@boxicons/react";
import { ReactNode } from "react";

type props = {
  title?: String;
  children?: React.ReactNode;
  className?: String;
  contentClassName?: string;
  icon?: ReactNode;
  topBar?: boolean;
};

export default function Window({
  title,
  children,
  className,
  icon,
  topBar = true,
  contentClassName,
}: props) {
  return (
    <section
      className={`rounded-xl overflow-hidden animate-fade-in p-px bg-border-gradient ${className}`}
    >
      <div className="relative bg-window-gradient w-full h-full rounded-xl box-border flex flex-col">
        {topBar && (
          <div className="appBar bg-window-topBar-gradient w-auto py-2 px-5 flex justify-between rounded-t-xl shrink-0 max-[570px]:hidden">
            <div className="title flex space-x-3 items-center">
              {icon}
              <h1 className="text font-bold">{title}</h1>
            </div>
            <div className="buttons flex items-center space-x-4">
              <div className="minimize h-[0.2rem] rounded-xl w-4 bg-foreground"></div>
              <Windows size="sm" />
              <X size="sm" />
            </div>
          </div>
        )}
        <div
          className={`content relative box-border px-7 py-6 w-full flex-1 min-h-0 ${contentClassName}`}
        >
          {children}
        </div>
      </div>
    </section>
  );
}
