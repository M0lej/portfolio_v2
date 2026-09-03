import { ReactNode } from "react";

type props = {
  label: string;
  icon: ReactNode;
};

export default function TextWithIcon({ label, icon }: props) {
  return (
    <div className="flex flex-col items-center gap-2">
      {icon}
      <span className="text-sm">{label}</span>
    </div>
  );
}
