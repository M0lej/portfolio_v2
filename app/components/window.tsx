import { Windows, X } from "@boxicons/react";
import { ReactNode } from "react";

type props = {
  title: String;
  children?: React.ReactNode;
  className?: String;
  icon?: ReactNode;
};

export default function Window({ title, children, className, icon }: props) {
  return (
    <section
      className={`rounded-xl overflow-hidden animate-fade-in p-px bg-border-gradient ${className}`}
    >
      <div className=" bg-window-gradient h-full w-full rounded-xl">
        <div className="appBar bg-window-topBar-gradient w-auto py-2 px-5 flex justify-between rounded-t-xl">
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
        <div className="content flex-col px-7 py-6 w-full">{children}</div>
      </div>
    </section>
  );
}
