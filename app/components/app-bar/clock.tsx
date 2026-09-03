import { useEffect, useState } from "react";

export default function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  function updateTime() {
    const updatedTime = new Date().toLocaleTimeString();
    setTime(updatedTime);
  }

  setInterval(updateTime, 1000);

  return <span className="w-10">{time.slice(0, 5)}</span>;
}
