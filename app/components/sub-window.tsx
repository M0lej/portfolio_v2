import { ReactNode } from "react";

export default function SubWindow({
  children,
  classname,
  contentClassName,
}: {
  children?: ReactNode[] | ReactNode;
  classname?: string;
  contentClassName?: string;
}) {
  return (
    <section
      className={`rounded-2xl overflow-hidden p-px bg-window-in-window-outline-gradient h-fit ${classname}`}
    >
      <div
        className={`py-5 px-8 bg-window-in-window-gradient rounded-2xl ${contentClassName}`}
      >
        {children}
      </div>
    </section>
  );
}
