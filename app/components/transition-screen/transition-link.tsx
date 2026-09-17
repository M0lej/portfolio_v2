"use client";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";
import { useTransitionScreen } from "./transition-screen-provider";

type PropsT = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> &
  Omit<LinkProps, "href"> & {
    children?: ReactNode;
    href: string;
    currentPageIndex: number;
    targetPageIndex: number;
  };

export function TransitionLink({
  children,
  href,
  currentPageIndex,
  targetPageIndex,
  ...props
}: PropsT) {
  const router = useRouter();
  const { showTransition, hideTransition } = useTransitionScreen();

  const sleep = async (ms: number) =>
    await new Promise((r) => setTimeout(r, ms));

  async function transitionTo(e: MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    if (currentPageIndex == targetPageIndex) return;

    showTransition(currentPageIndex, targetPageIndex);
    await sleep(250);
    router.push(href);
    await sleep(300);
    hideTransition();
  }
  return (
    <Link href={href} onClick={transitionTo} {...props}>
      {children}
    </Link>
  );
}
