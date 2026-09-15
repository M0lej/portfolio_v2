import Image from "next/image";
import Window from "../components/window";
import ProjectWindow, {
  Category,
} from "../components/project-window/project-window";
import { Database, Frame, SearchAlt } from "@boxicons/react";
import Input from "../components/input";
import Radio from "../components/radio";
import { DartOriginalIcon, FlutterOriginalIcon } from "@devicon/react";

export default function Projects() {
  return (
    <div className="p-5 w-full grid grid-cols-2 auto-rows-min gap-3 max-[870px]:grid-cols-1 pb-30">
      <Window
        title="Moje projekty"
        icon={<Frame />}
        className="min-[871px]:col-span-2"
        contentClassName="space-y-4"
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
        <search className="flex gap-4 items-center">
          <Input
            labelFor="search"
            placeholder="Szukaj projektów..."
            icon={<SearchAlt />}
          />
          <Radio
            htmlFor="all"
            label="Wszystkie"
            value="all"
            inputName="category"
            defaultChecked
          />
          <Radio
            htmlFor={Category.web.toString()}
            label="Web"
            value={Category.web.toString()}
            inputName="category"
          />
          <Radio
            htmlFor={Category.mobile.toString()}
            label="Mobilne"
            value={Category.mobile.toString()}
            inputName="category"
          />
        </search>
      </Window>
      <ProjectWindow
        title="Aplikacja fitness"
        description="stworzona do śledzenia treningów, planów i postępów."
        imgPath="/fitness_app.png"
        contentClassName="flex gap-4 max-[1570px]:flex-col max-[870px]:flex-row max-[520px]:flex-col"
        githubHref="https://github.com/M0lej/flutter_fitness_app"
        tags={["Flutter", "Dart", "Hive"]}
        tagsIcons={[
          <FlutterOriginalIcon size={24} />,
          <DartOriginalIcon size={24} />,
          <Database height={24} width={24} />,
        ]}
        className="h-fit"
        category={Category.mobile}
      />
      <ProjectWindow
        title="Aplikacja fitness"
        description="stworzona do śledzenia treningów, planów i postępów."
        imgPath="/fitness_app.png"
        contentClassName="flex gap-4 max-[1570px]:flex-col max-[870px]:flex-row max-[520px]:flex-col"
        githubHref="https://github.com/M0lej/flutter_fitness_app"
        tags={["Flutter", "Dart", "Hive"]}
        tagsIcons={[
          <FlutterOriginalIcon size={24} />,
          <DartOriginalIcon size={24} />,
          <Database height={24} width={24} />,
        ]}
        className="h-fit"
        category={Category.web}
      />
    </div>
  );
}
