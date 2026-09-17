import { Database } from "@boxicons/react";
import {
  DartOriginalIcon,
  FlutterOriginalIcon,
  MongodbOriginalIcon,
  NextjsOriginalIcon,
  TailwindcssOriginalIcon,
  TypescriptOriginalIcon,
} from "@devicon/react";
import { ReactNode } from "react";

export enum Category {
  all,
  web,
  mobile,
}

export type ProjectObject = {
  title: string;
  description: string;
  githubHref: string;
  demoHref?: string;
  tags: string[];
  tagsIcons: ReactNode[];
  imgPath: string;
  category: Category;
};

export const projectsDatabase = [
  {
    title: "Aplikacja fitness",
    description: "stworzona do śledzenia treningów, planów i postępów.",
    githubHref: "https://github.com/M0lej/flutter_fitness_app",
    imgPath: "/fitness_app.png",
    tags: ["Flutter", "Dart", "Hive"],
    tagsIcons: [
      <FlutterOriginalIcon size={24} />,
      <DartOriginalIcon size={24} />,
      <Database height={24} width={24} />,
    ],
    category: Category.mobile,
  },
  {
    title: "Aplikacja Pogodowa",
    description:
      "Mobilna aplikacja pogodowa we Flutterze prezentująca aktualną pogodę, prognozę godzinową i 7-dniową oraz szczegółowe dane pogodowe dla wybranej lokalizacji.",
    githubHref: "https://github.com/M0lej/flutter_weather_app",
    imgPath: "/weather_app.png",
    tags: ["Flutter", "Dart", "Hive"],
    tagsIcons: [
      <FlutterOriginalIcon size={24} />,
      <DartOriginalIcon size={24} />,
      <Database height={24} width={24} />,
    ],
    category: Category.mobile,
  },
  {
    title: "Ewaluator lekcji",
    description:
      "Aplikacja webowa umożliwiająca nauczycielom szybkie sprawdzenie, w jakim stopniu uczniowie rozumieją zagadnienia omawiane podczas lekcji.",
    githubHref: "https://github.com/M0lej/ewaluator_lekcji/",
    demoHref: "",
    imgPath: "/ewaluator.png",
    tags: ["Next.js", "Typescript", "MongoDB", "Tailwindcss"],
    tagsIcons: [
      <NextjsOriginalIcon size={24} />,
      <TypescriptOriginalIcon size={24} />,
      <MongodbOriginalIcon height={24} width={24} />,
      <TailwindcssOriginalIcon height={24} width={24} />,
    ],
    category: Category.web,
  },
] as ProjectObject[];
