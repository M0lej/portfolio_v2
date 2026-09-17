"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import PagePreview from "./page-preview";
import PagePreviewSelector from "./page-preview-selector";

type TransitionScreenT = {
  showTransition: (currentIndex: number, targetIndex: number) => void;
  hideTransition: () => void;
};

const TransitionScreenContext = createContext<TransitionScreenT | null>(null);

export function TransitionScreenProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [page, setPage] = useState({
    currentIndex: 3,
    targetIndex: 3,
  });
  const [visible, setVisible] = useState(false);
  const [animationIndex, setAnimationIndex] = useState(0);

  useEffect(() => {
    if (!visible) return;

    setAnimationIndex(page.currentIndex);

    const frame = requestAnimationFrame(() => {
      setAnimationIndex(page.targetIndex);
    });

    return () => cancelAnimationFrame(frame);
  }, [page, visible]);

  const hideTransition = () => setVisible(false);

  return (
    <TransitionScreenContext.Provider
      value={{
        showTransition: (currentIndex, targetIndex) => {
          setAnimationIndex(currentIndex);
          setPage({
            currentIndex,
            targetIndex,
          });
          setVisible(true);
        },
        hideTransition,
      }}
    >
      {children}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center
          bg-background/85 px-4 backdrop-blur-sm transition-opacity duration-500 ease-in-out
          ${visible ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
      >
        <div
          className={`max-h-[calc(100dvh-2rem)] w-fit max-w-full overflow-hidden rounded-xl border border-code-board-outline bg-window-gradient p-3 shadow-2xl sm:p-4 ${visible ? "scale-100 opacity-100" : "scale-80 opacity-0"} transition-all delay-200 duration-250`}
        >
          <div className="relative flex max-h-[calc(100dvh-6rem)] w-fit max-w-full gap-2 overflow-x-hidden overflow-y-auto max-[640px]:flex-col">
            <PagePreviewSelector animationIndex={animationIndex} />
            <PagePreview
              label="Strona główna"
              selected={page.targetIndex === 0}
              imgPath="/pages/home.png"
            />
            <PagePreview
              label="Projekty"
              selected={page.targetIndex === 1}
              imgPath="/pages/home.png"
            />
            <PagePreview
              label="O mnie"
              selected={page.targetIndex === 2}
              imgPath="/pages/about.png"
            />
            <PagePreview
              label="Kontakt"
              selected={page.targetIndex === 3}
              imgPath="/pages/contact.png"
            />
          </div>
        </div>
      </div>
    </TransitionScreenContext.Provider>
  );
}

export function useTransitionScreen() {
  const context = useContext(TransitionScreenContext);

  if (!context) {
    throw new Error(
      "useTransitionScreen must be inside TransitionScreenProvider",
    );
  }

  return context;
}
