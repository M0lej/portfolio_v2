import { ReactNode } from "react";

type props = {
  name: string;
  icon: ReactNode;
};

export default function Tag({ name, icon }: props) {
  return (
    <div className="flex gap-2 items-center px-4 py-2 w-fit h-fit outline-1 outline-deep-blue rounded-sm">
      {icon}
      {name}
    </div>
  );
}
