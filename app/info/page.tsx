import { InfoCircle } from "@boxicons/react";
import Window from "../components/window";

export default function Info() {
  return (
    <div className="p-5 w-full flex flex-col pb-30">
      <Window
        title={"Info"}
        icon={<InfoCircle />}
        className="min-w-50 max-w-100"
      >
        <p>© 2026 Maksymilian Olejnik. All rights reserved.</p>
      </Window>
    </div>
  );
}
