import { RadioCircleMarked } from "@boxicons/react";
import { ReactNode } from "react";
import Window from "./window";

type props = {
  icon: ReactNode;
  name: string;
  description: string;
  className?: string;
};
export default function Skill({ icon, name, description, className }: props) {
  return (
    <Window topBar={false}>
      <div className="flex gap-4 items-center">
        {icon}
        <h1 className="font-bold text-xl">{name}</h1>
      </div>
      <h2 className="text-sm my-5">{description}</h2>
    </Window>
  );
}
