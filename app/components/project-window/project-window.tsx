import { ReactNode } from "react";
import Window from "../window";
import { ArrowUpRightStroke, GitRepoForked, User } from "@boxicons/react";
import Image from "next/image";
import Tag from "./tag";
import IconLink, { IconPosition } from "../icon-link";

export enum Category {
  web,
  mobile,
}

type props = {
  title: string;
  className?: string;
  contentClassName?: string;
  topBar?: boolean;
  tags: string[];
  tagsIcons: ReactNode[];
  githubHref?: string;
  demoHref?: string;
  imgPath: string;
  description: string;
  category: Category;
};

export default function ProjectWindow({
  title,
  className,
  topBar = false,
  contentClassName,
  tags,
  tagsIcons,
  githubHref,
  demoHref,
  imgPath,
  description,
}: props) {
  return (
    <Window
      title={title}
      className={className}
      icon={<GitRepoForked />}
      topBar={topBar}
      contentClassName={contentClassName}
    >
      <div className="relative rounded-lg p-px bg-code-board-fading-outline-gradient h-full w-full max-w-150">
        <div className="relative aspect-video w-full overflow-hidden rounded-lg">
          <Image
            src={imgPath}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 420px"
          />
        </div>
      </div>
      <div className="flex flex-col">
        <h1 className="font-bold">{title}</h1>
        <h2 className="min-w-0">{description}</h2>
        <div className="tags flex flex-wrap gap-2 my-4">
          {tags?.map((tagName: string, index) => (
            <Tag name={tagName} key={index} icon={tagsIcons[index]} />
          ))}
        </div>
        <div className="buttons flex gap-2">
          {githubHref && (
            <IconLink
              icon={<User />}
              label="Github"
              href={githubHref}
              iconPos={IconPosition.start}
              target="_blank"
            />
          )}
          {demoHref && (
            <IconLink
              icon={<ArrowUpRightStroke />}
              label="Demo"
              href={demoHref}
              filled
              target="_blank"
            />
          )}
        </div>
      </div>
    </Window>
  );
}
