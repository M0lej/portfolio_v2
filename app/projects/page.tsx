import Image from "next/image";
import Window from "../components/window";
import ProjectWindow from "../components/project-window/project-window";

export default function Projects() {
  return (
    <div className="p-5 h-screen w-screen flex items-center justify-center gap-4">
      <ProjectWindow
        title="Aplikacja fitness"
        contentClassName="flex gap-4"
        githubHref="https://github.com/M0lej/flutter_fitness_app"
        tags={["Flutter", "Dart", "Hive"]}
      />
    </div>
  );
}
