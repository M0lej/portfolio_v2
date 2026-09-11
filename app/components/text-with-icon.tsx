import { ReactNode } from "react";

type props = {
  label: string;
  icon: ReactNode;
};

export default function TextWithIcon({ label, icon }: props) {
  return (
    <div className="flex min-w-0 w-full flex-col items-center gap-2 h-fit text-center">
      {icon}
      <span className="text-sm break-words">{label}</span>
    </div>
  );
}
