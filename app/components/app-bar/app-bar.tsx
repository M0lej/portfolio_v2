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

const pathOrder = ["/", "/projects", "/about", "/contact"];

export default function AppBar() {
  const [selectedIndex, selectIndex] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    if (pathOrder.includes(pathname)) {
      selectIndex(pathOrder.indexOf(pathname));
    }
  }, [pathname]);

  return (
    <div className="w-[80vw] h-fit py-3 px-8 flex items-center bg-window-gradient rounded-2xl mb-5">
      <Logo className="h-7 w-auto" />
      <nav className="buttons ml-20 flex gap-4">
        <AppBarButton
          href="/"
          name="Strona główna"
          icon={<HomeAlt className="fill-purple-400" />}
          selected={selectedIndex === 0}
        />
        <AppBarButton
          href="/projects"
          name="Projekty"
          icon={<GitRepoForked className="fill-deep-blue" />}
          selected={selectedIndex === 1}
        />
        <AppBarButton
          href="/about"
          name="O mnie"
          icon={<User className="fill-lime-500" />}
          selected={selectedIndex === 2}
        />
        <AppBarButton
          href="/"
          name="Kontakt"
          icon={<Phone className="fill-yellow-400" />}
          selected={selectedIndex === 3}
        />
      </nav>
      <div className="decorations ml-auto flex gap-4">
        <Wifi />
        <VolumeFull />
        <Clock />
      </div>
    </div>
  );
}
