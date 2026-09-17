"use client";

import Window from "../components/window";
import ProjectWindow from "../components/project-window/project-window";
import { Frame, SearchAlt } from "@boxicons/react";
import Input from "../components/input";
import Radio from "../components/radio";
import { useState } from "react";
import { Category, projectsDatabase } from "../resources/data";

export default function Projects() {
  const [selectedCategory, selectCategory] = useState<Category>(Category.all);
  const [searchQuery, changeSearchQuery] = useState<string | null>(null);

  return (
    <div className="p-5 w-full grid grid-cols-2 auto-rows-min gap-3 max-[870px]:grid-cols-1 pb-30">
      <Window
        title="Moje projekty"
        icon={<Frame />}
        className="min-[871px]:col-span-2"
        contentClassName="space-y-4"
        index={1}
      >
        <h1 className="text-4xl">
          Pomysły zamienione <span className="text-deep-blue">w kod</span>
        </h1>
        <h2 className="text-secondary mt-5">
          Poniżej znajdziesz wybrane projekty, nad którymi pracowałem.
          <br />
          Każdy z nich to inna historia, nowe wyzwania i rozwój moich
          umiejętności.
        </h2>
        <search className="flex gap-4 w-full flex-wrap">
          <Input
            inputClassName="min-w-60 max-[480px]:w-full"
            labelFor="search"
            placeholder="Szukaj projektów..."
            icon={<SearchAlt />}
            onChange={(e) =>
              changeSearchQuery(
                e.currentTarget.value == ""
                  ? null
                  : e.currentTarget.value.toLocaleLowerCase().trim(),
              )
            }
          />
          <div className="flex gap-4">
            <Radio
              htmlFor="all"
              label="Wszystkie"
              value="all"
              inputName="category"
              defaultChecked
              onChange={() => selectCategory(Category.all)}
            />
            <Radio
              htmlFor={Category.web.toString()}
              label="Web"
              value={Category.web.toString()}
              inputName="category"
              onChange={() => selectCategory(Category.web)}
            />
            <Radio
              htmlFor={Category.mobile.toString()}
              label="Mobilne"
              value={Category.mobile.toString()}
              inputName="category"
              onChange={() => selectCategory(Category.mobile)}
            />
          </div>
        </search>
      </Window>
      {projectsDatabase.map((project, i) => {
        if (
          (project.category == selectedCategory ||
            selectedCategory == Category.all) &&
          (searchQuery == null ||
            project.title.toLowerCase().trim().includes(searchQuery))
        ) {
          return (
            <ProjectWindow
              key={i}
              index={1 + i}
              title={project.title}
              description={project.description}
              imgPath={project.imgPath}
              contentClassName="flex gap-4 max-[1570px]:flex-col max-[870px]:flex-row max-[520px]:flex-col"
              githubHref={project.githubHref}
              demoHref={project.demoHref}
              tags={project.tags}
              tagsIcons={project.tagsIcons}
              className="h-full"
              category={project.category}
            />
          );
        }
      })}
    </div>
  );
}
