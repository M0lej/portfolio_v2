import {
  BirthdayCake,
  Circle,
  CodeAlt,
  Database,
  Education,
  Frame,
  Github,
  Instagram,
  Linkedin,
  Location,
  PencilSparkles,
  RadioCircleMarked,
  Smile,
  UserCircle,
  Youtube,
} from "@boxicons/react";
import Window from "../components/window";
import {
  AndroidstudioOriginalIcon,
  CsharpOriginalIcon,
  Css3OriginalIcon,
  DartOriginalIcon,
  FlutterOriginalIcon,
  GithubOriginalIcon,
  Html5OriginalIcon,
  JavascriptOriginalIcon,
  MongodbOriginalIcon,
  NextjsPlainIcon,
  PythonOriginalIcon,
  ReactOriginalIcon,
  SassOriginalIcon,
  TypescriptOriginalIcon,
  VisualstudioOriginalIcon,
  VscodeOriginalIcon,
  VuejsOriginalIcon,
} from "@devicon/react";
import TextWithIcon from "../components/text-with-icon";
import Image from "next/image";
import { url } from "inspector";
import SocialLink from "../components/social-link";

export default function About() {
  return (
    <div className="grid grid-cols-[auto_1fr] grid-rows-auto p-5 h-[90vh] w-screen gap-3">
      <Window
        title={"Edytory i Narzędzia"}
        icon={<PencilSparkles />}
        contentClassName="flex gap-6 justify-around"
      >
        <TextWithIcon label="VS Code" icon={<VscodeOriginalIcon size={32} />} />
        <TextWithIcon
          label="Visual Studio"
          icon={<VisualstudioOriginalIcon size={32} />}
        />
        <TextWithIcon
          label="Android Studio"
          icon={<AndroidstudioOriginalIcon size={32} />}
        />{" "}
        <TextWithIcon
          label="MongoDB"
          icon={<MongodbOriginalIcon size={32} />}
        />
      </Window>
      <Window
        title={"O mnie"}
        icon={<Smile />}
        contentClassName="h-full w-full flex gap-4"
        className="row-span-3 "
      >
        <section className="flex justify-center w-fit">
          <p className="flex flex-col gap-5">
            <span>
              Jestem 19-letnim absolwentem technikum informatycznego na kierunku{" "}
              <span className="text-deep-blue">Technik Programista</span>.
              Właśnie zakończyłem naukę w szkole średniej i rozpoczynam studia,
              aby dalej rozwijać swoje umiejętności w branży IT.
            </span>
            <span>
              Interesuję się tworzeniem aplikacji webowych oraz mobilnych.
              Posiadam doświadczenie w pracy z technologiami{" "}
              <span className="text-deep-blue">frontendowymi</span> i{" "}
              <span className="text-deep-blue">backendowymi</span>, a także w
              projektowaniu własnych projektów od podstaw. Tworzę aplikacje
              wykorzystując m.in. <span className="text-deep-blue">React</span>,
              <span className="text-deep-blue">Next.js</span>,{" "}
              <span className="text-deep-blue">Javascript</span>,{" "}
              <span className="text-deep-blue">TypeScript</span>,{" "}
              <span className="text-deep-blue">Flutter</span> oraz{" "}
              <span className="text-deep-blue">bazy danych</span>.
            </span>
            <span>
              Lubię rozwijać się poprzez praktykę, tworzę własne projekty,
              eksperymentuję z nowymi technologiami i szukam sposobów na poprawę
              jakości kodu oraz interfejsów użytkownika. Jestem osobą{" "}
              <span className="text-deep-blue">ambitną</span>,{" "}
              <span className="text-deep-blue">samodzielną</span> i{" "}
              <span className="text-deep-blue">
                chętnie podejmuję się nowych wyzwań
              </span>
              , które pozwalają mi zdobywać doświadczenie zawodowe.
            </span>
          </p>
        </section>
        <div className="relative self-center h-[80%] w-0.5 bg-about-me-divider-gradient-vertical"></div>
        <section className="relative h-full py-4 px-8 flex flex-col items-center gap-6 w-90">
          <div className="p-px rounded-xl bg-code-board-outline">
            <div className="image-container rounded-xl h-60 w-50 overflow-hidden bg-code-board-gradient">
              <Image
                src="/profilowe.png"
                alt="moje zdjęcie"
                height={768}
                width={512}
              />
            </div>
          </div>
          <div className="text-center">
            <h1 className="font-bold text-3xl">Maksymilian</h1>
            <p className="text-purple-400">Frontend developer</p>
          </div>
          <div className="relative w-full h-0.5 bg-about-me-divider-gradient-horizontal bg-center" />
          <div className="flex flex-col gap-2 w-full">
            <div className="flex gap-4">
              <Location className="fill-subtle-blue" />
              <p>Polska</p>
            </div>
            <div className="flex gap-4">
              <BirthdayCake className="fill-subtle-blue" />
              <p>19 lat</p>
            </div>
            <div className="flex gap-4">
              <Education className="fill-subtle-blue" />
              <p>Technik Programista</p>
            </div>
            <div className="flex gap-4">
              <RadioCircleMarked className="fill-subtle-blue" />
              <p>Otwarty na współprace</p>
            </div>
          </div>
          <div className="flex gap-4">
            <SocialLink
              icon={
                <Github
                  height={32}
                  width={32}
                  className="fill-subtle-blue hover:fill-foreground transition-colors"
                />
              }
              href="https://github.com/M0lej"
            />
            {/* <SocialLink
              icon={
                <Instagram
                  height={32}
                  width={32}
                  className="fill-subtle-blue hover:fill-foreground transition-colors"
                />
              }
              href=""
            /> */}
            <SocialLink
              icon={
                <Youtube
                  height={32}
                  width={32}
                  className="fill-subtle-blue hover:fill-foreground transition-colors"
                />
              }
              href=""
            />
            <SocialLink
              icon={
                <Linkedin
                  height={32}
                  width={32}
                  className="fill-subtle-blue hover:fill-foreground transition-colors"
                />
              }
              href=""
            />
          </div>
        </section>
      </Window>
      <Window
        title={"Technologie"}
        icon={<Frame />}
        contentClassName="flex gap-6 justify-around"
      >
        <TextWithIcon label="React" icon={<ReactOriginalIcon size={32} />} />
        <TextWithIcon
          label="Next.js"
          icon={
            <div className="relative size-8">
              <div className="absolute inset-0.75 rounded-full bg-white -translate-0.5" />
              <NextjsPlainIcon size={32} className="relative z-10" />
            </div>
          }
        />
        <TextWithIcon label="Vue" icon={<VuejsOriginalIcon size={32} />} />
        <TextWithIcon
          label="Flutter"
          icon={<FlutterOriginalIcon size={32} />}
        />
      </Window>
      <Window
        title={"Języki Programowania"}
        icon={<CodeAlt />}
        contentClassName="grid grid-cols-4 gap-4 h-fit"
      >
        <TextWithIcon label="Dart" icon={<DartOriginalIcon size={32} />} />
        <TextWithIcon
          label="C#"
          icon={
            <div className="relative size-8">
              <div className="absolute inset-0.75 rounded-full bg-white -translate-0.5" />
              <CsharpOriginalIcon size={32} className="relative z-10" />
            </div>
          }
        />
        <TextWithIcon
          label="Javascript"
          icon={<JavascriptOriginalIcon size={32} />}
        />
        <TextWithIcon
          label="Typescript"
          icon={<TypescriptOriginalIcon size={32} />}
        />
        <TextWithIcon label="CSS" icon={<Css3OriginalIcon size={32} />} />
        <TextWithIcon label="Sass" icon={<SassOriginalIcon size={32} />} />
        <TextWithIcon label="HTML" icon={<Html5OriginalIcon size={32} />} />
        <TextWithIcon label="Python" icon={<PythonOriginalIcon size={32} />} />
        <TextWithIcon
          label="SQL"
          icon={<Database height={32} width={32} className="fill-yellow-400" />}
        />
        <TextWithIcon
          label="NoSQL"
          icon={<Database height={32} width={32} className="fill-orange-400" />}
        />
      </Window>
    </div>
  );
}
