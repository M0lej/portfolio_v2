import { ReactNode } from "react";
import Window from "../window";
import { ArrowUpRightStroke, GitRepoForked, User } from "@boxicons/react";
import Image from "next/image";
import Tag from "./tag";
import IconLink, { IconPosition } from "../icon-link";

type props = {
  title?: String;
  className?: String;
  contentClassName?: string;
  icon?: ReactNode;
  topBar?: boolean;
  tags?: string[];
  githubHref: string;
  demoHref?: string;
};

export default function ProjectWindow({
  title,
  className,
  topBar = true,
  contentClassName,
  tags,
  githubHref,
  demoHref,
}: props) {
  const demoLink =
    demoHref != null ? (
      <IconLink
        icon={<ArrowUpRightStroke />}
        label="Demo"
        href={demoHref}
        filled
        target="_blank"
      />
    ) : null;

  return (
    <Window
      title={title}
      className={className}
      icon={<GitRepoForked />}
      topBar={topBar}
      contentClassName={contentClassName}
    >
      <div className="rounded-lg p-px bg-code-board-fading-outline-gradient">
        <div className="relative h-60 w-105 overflow-hidden rounded-lg">
          <Image
            src="/fitness_app.png"
            alt="Aplikacja fitness"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 420px"
          />
        </div>
      </div>
      <div className="flex flex-col">
        <h1 className="font-bold">Aplikacja fitness</h1>
        <h2>stworzona do śledzenia treningów, planów i postępów.</h2>
        <div className="tags flex flex-wrap gap-2 my-4">
          {tags?.map((tagName: string, index) => (
            <Tag name={tagName} key={index} />
          ))}
        </div>
        <div className="buttons flex gap-2">
          <IconLink
            icon={<User />}
            label="Github"
            href={githubHref}
            iconPos={IconPosition.start}
            target="_blank"
          />
          {demoLink}
        </div>
      </div>
    </Window>
  );
}
