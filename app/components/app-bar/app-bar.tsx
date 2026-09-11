"use client";
import {
  GitRepoForked,
  HomeAlt,
  Phone,
  User,
  VolumeFull,
  Wifi,
} from "@boxicons/react";
import Logo from "../../icons/logo";
import AppBarButton from "./app-bar-button";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Clock from "./clock";
import useWindowSize from "@rooks/use-window-size";

const pathOrder = ["/", "/projects", "/about", "/contact"];

export default function AppBar() {
  const [selectedIndex, selectIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const { innerWidth } = useWindowSize();

  const pathname = usePathname();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (pathOrder.includes(pathname)) {
      selectIndex(pathOrder.indexOf(pathname));
    }
  }, [pathname]);

  const showLabels = isMounted && (innerWidth ?? 0) >= 878;

  return (
    <div
      className="
    fixed
    bottom-5
    w-[80vw] 
    h-fit 
    py-3 
    px-8 
    flex
    items-center 
    justify-center
    bg-window-gradient 
    rounded-2xl 
    max-[1330px]:w-full
    max-[1330px]:rounded-none
    max-[1330px]:bottom-0  
    z-50
    "
    >
      {isMounted && (innerWidth ?? 0) >= 450 && <Logo className="h-7 w-auto" />}
      <nav
        className="
      buttons  
      ml-20 
      flex
      gap-4
      max-[878px]:ml-auto
      max-[450px]:ml-0
      "
      >
        <AppBarButton
          href="/"
          name="Strona główna"
          icon={<HomeAlt className="fill-purple-400" />}
          selected={selectedIndex === 0}
          showLabel={showLabels}
        />
        <AppBarButton
          href="/projects"
          name="Projekty"
          icon={<GitRepoForked className="fill-deep-blue" />}
          selected={selectedIndex === 1}
          showLabel={showLabels}
        />
        <AppBarButton
          href="/about"
          name="O mnie"
          icon={<User className="fill-lime-500" />}
          selected={selectedIndex === 2}
          showLabel={showLabels}
        />
        <AppBarButton
          href="/contact"
          name="Kontakt"
          icon={<Phone className="fill-yellow-400" />}
          selected={selectedIndex === 3}
          showLabel={showLabels}
        />
      </nav>
      {isMounted && (innerWidth ?? 0) >= 450 && (
        <div className={`decorations ml-auto flex items-center gap-4 `}>
          <Wifi />
          <VolumeFull />
          <Clock />
        </div>
      )}
    </div>
  );
}
