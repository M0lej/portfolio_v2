"use client";

import useWindowSize from "@rooks/use-window-size";
import { useEffect, useState } from "react";

export default function PagePreviewSelector({
  animationIndex,
}: {
  animationIndex: number;
}) {
  const [isMounted, setIsMounted] = useState(false);
  const { innerWidth } = useWindowSize();

  useEffect(() => setIsMounted(true), []);

  return (
    <div
      data-page-preview
      className="absolute left-0 top-0 z-10 w-[30vw] min-w-40 shrink-0 rounded-lg bg-deep-blue shadow-lg shadow-deep-blue/30 transition-transform duration-700 ease-in-out max-[640px]:w-[min(70vw,max(0px,25dvh))] max-[640px]:min-w-0 sm:w-[15vw]"
      style={{
        transform:
          isMounted && (innerWidth ?? 0) <= 640
            ? `translateY(calc(${animationIndex * 100}% + ${animationIndex * 0.5}rem))`
            : `translateX(calc(${animationIndex * 100}% + ${animationIndex * 0.5}rem))`,
      }}
    >
      <div
        className={`aspect-video overflow-hidden rounded-lg transition-all duration-500`}
      ></div>
      <p
        className={`mt-2 truncate text-center text-[0.65rem] transition-colors sm:text-xs text-transparent`}
      >
        hidden
      </p>
    </div>
  );
}
