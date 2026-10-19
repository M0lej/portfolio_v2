import {
  BirthdayCake,
  CodeAlt,
  Database,
  Education,
  Frame,
  Github,
  GlobeAlt2,
  Linkedin,
  Location,
  Mobile,
  PencilSparkles,
  RadioCircleMarked,
  Smile,
  Youtube,
} from "@boxicons/react";
import Window from "../components/window";
import {
  AndroidstudioOriginalIcon,
  CsharpOriginalIcon,
  Css3OriginalIcon,
  DartOriginalIcon,
  FlutterOriginalIcon,
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
import SocialLink from "../components/social-link";
import Skill from "../components/skill";

export default function About() {
  return (
    <div
      className="
      grid 
      grid-cols-[minmax(0,0.4fr)_1fr] 
      grid-rows-auto 
      max-[1624px]:grid-cols-2
      max-[1624px]:grid-rows-[1fr_auto_auto]
      max-[920px]:grid-rows-[1fr_auto_auto_auto]
      max-[570px]:grid-rows-[1fr_auto_auto_auto_auto]
      p-5 
      w-full
      gap-3 
      pb-30
      overflow-x-visible"
    >
      <Window
        title={"O mnie"}
        icon={<Smile />}
        contentClassName="
          grid 
          grid-cols-[auto_auto] 
          grid-rows-1 
          max-[460px]:grid-cols-1
          max-[460px]:grid-rows-[auto_auto_auto]
          max-[460px]:content-center
          max-[460px]:justify-items-center
          gap-10

          "
        className="
          min-[1625px]:row-span-3 
          h-full 
          self-start
          max-[1624px]:row-start-1
          max-[1624px]:col-span-2
          col-start-2
          "
        index={1}
      >
        <div className="relative w-full flex flex-col inset-0 box-border justify-between col-start-1 max-[460px]:items-center max-[460px]:row-start-3">
          <section className="flex justify-center w-full h-fit col-span-3">
            <p className="flex flex-col gap-5 h-fit">
              <span className="relative h-fit">
                Jestem 19-letnim absolwentem technikum informatycznego na
                kierunku{" "}
                <span className="text-deep-blue">Technik Programista</span>.
                Właśnie zakończyłem naukę w szkole średniej i rozpoczynam
                studia, aby dalej rozwijać swoje umiejętności w branży IT.
              </span>
              <span className="relative h-fit">
                Interesuję się tworzeniem aplikacji webowych oraz mobilnych.
                Posiadam doświadczenie w pracy z technologiami{" "}
                <span className="text-deep-blue">frontendowymi</span> i{" "}
                <span className="text-deep-blue">backendowymi</span>, a także w
                projektowaniu własnych projektów od podstaw. Tworzę aplikacje
                wykorzystując m.in.{" "}
                <span className="text-deep-blue">React</span>,
                <span className="text-deep-blue">Next.js</span>,{" "}
                <span className="text-deep-blue">Javascript</span>,{" "}
                <span className="text-deep-blue">TypeScript</span>,{" "}
                <span className="text-deep-blue">Flutter</span> oraz{" "}
                <span className="text-deep-blue">bazy danych</span>.
              </span>
              <span className="relative h-fit">
                Lubię rozwijać się poprzez praktykę, tworzę własne projekty,
                eksperymentuję z nowymi technologiami i szukam sposobów na
                poprawę jakości kodu oraz interfejsów użytkownika. Jestem osobą{" "}
                <span className="text-deep-blue">ambitną</span>,{" "}
                <span className="text-deep-blue">samodzielną</span> i{" "}
                <span className="text-deep-blue">
                  chętnie podejmuję się nowych wyzwań
                </span>
                , które pozwalają mi zdobywać doświadczenie zawodowe.
              </span>
            </p>
          </section>
          <div className="flex h-50 gap-5 max-[920px]:hidden">
            <Skill
              icon={<GlobeAlt2 size="lg" className="fill-deep-blue min-w-10" />}
              name="Web Development"
              description="Tworzę nowoczesne aplikacje webowe z dbałością o wydajność i responsywność."
              className="h-full min-w-50"
              index={2}
            />
            <Skill
              icon={<Mobile size="lg" className="fill-deep-blue min-w-10" />}
              name="Mobile Development"
              description="Projektuję aplikacje mobilne w Flutter, które są szybkie intuicyjne i estetyczne."
              className="h-full min-w-50"
              index={3}
            />
            <Skill
              icon={<Database size="lg" className="fill-deep-blue min-w-10" />}
              name="Backend"
              description="Pracuję z bazami danych i API, dbając o niezawodność i bezpieczeństwo danych."
              className="h-full min-w-50"
              index={4}
            />
          </div>
        </div>

        <div className="relative w-full h-0.5 bg-about-me-divider-gradient-horizontal bg-center min-[460px]:hidden row-start-2" />

        <section
          className="
          relative 
          h-full 
          min-w-40 
          max-w-90 
          w-full 
          py-4 
          flex 
          flex-col 
          items-center 
          gap-6 
          max-[460px]:row-start-1
         "
        >
          <div className="p-px rounded-xl bg-window-in-window-outline-gradient">
            <div className="image-container rounded-xl h-60 w-full max-w-50 overflow-hidden bg-code-board-gradient">
              <Image
                src="/profilowe.png"
                alt="moje zdjęcie"
                height={768}
                width={512}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="text-center">
            <h1 className="font-bold text-3xl">Maksymilian</h1>
            <p className="text-purple-400">Frontend developer</p>
          </div>

          <div className="relative w-full h-0.5 bg-about-me-divider-gradient-horizontal bg-center max-[460px]:hidden" />

          <div className="flex flex-col gap-2 w-full">
            <div className="flex gap-4 items-center">
              <Location className="fill-subtle-blue min-w-5" />
              <p>Polska</p>
            </div>
            <div className="flex gap-4 items-center">
              <BirthdayCake className="fill-subtle-blue" />
              <p>19 lat</p>
            </div>
            <div className="flex gap-4 items-center">
              <Education className="fill-subtle-blue" />
              <p>Technik Programista</p>
            </div>
            <div className="flex gap-4 items-center">
              <RadioCircleMarked className="fill-subtle-blue" />
              <p>Otwarty na współprace</p>
            </div>
          </div>
          <div className="flex gap-3">
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
              href="https://www.youtube.com/@M0l3j"
            />
            <SocialLink
              icon={
                <Linkedin
                  height={32}
                  width={32}
                  className="fill-subtle-blue hover:fill-foreground transition-colors"
                />
              }
              href="https://www.linkedin.com/in/maksymilian-olejnik-4502363b0/"
            />
          </div>
        </section>
      </Window>
      <div
        className="
        grid
        grid-cols-3   
        h-50
        gap-3 
        min-[920px]:hidden
        max-[570px]:h-full
        row-start-2
        max-[570px]:row-span-2
        col-span-2
        max-[570px]:grid-cols-2
        max-[370px]:grid-cols-1
        max-[370px]:grid-rows-3
        "
      >
        <Skill
          icon={<GlobeAlt2 size="lg" className="fill-deep-blue min-w-10" />}
          name="Web Development"
          description="Tworzę nowoczesne aplikacje webowe z dbałością o wydajność i responsywność."
          className="h-full min-w-50 max-[570px]:col-span-2 max-[370px]:col-span-1"
          subwindow={false}
          index={2}
        />
        <Skill
          icon={<Mobile size="lg" className="fill-deep-blue min-w-10" />}
          name="Mobile Development"
          description="Projektuję aplikacje mobilne w Flutter, które są szybkie intuicyjne i estetyczne."
          className="h-full min-w-50"
          subwindow={false}
          index={3}
        />
        <Skill
          icon={<Database size="lg" className="fill-deep-blue min-w-10" />}
          name="Backend"
          description="Pracuję z bazami danych i API, dbając o niezawodność i bezpieczeństwo danych."
          className="h-full min-w-50"
          subwindow={false}
          index={4}
        />
      </div>
      <Window
        topBar={false}
        contentClassName="grid grid-cols-2 min-[570px]:grid-cols-4 grid-rows-min gap-4"
        className="
          max-[570px]:row-start-4
          min-[1624px]:row-start-1
        "
        index={2}
      >
        <TextWithIcon label="VS Code" icon={<VscodeOriginalIcon size={32} />} />
        <TextWithIcon
          label="Visual Studio"
          icon={<VisualstudioOriginalIcon size={32} />}
        />
        <TextWithIcon
          label="Android Studio"
          icon={<AndroidstudioOriginalIcon size={32} />}
        />
        <TextWithIcon
          label="MongoDB"
          icon={<MongodbOriginalIcon size={32} />}
        />
      </Window>
      <Window
        icon={<Frame />}
        contentClassName="grid grid-cols-2 min-[570px]:grid-cols-4 gap-6"
        className="max-[570px]:row-start-4"
        topBar={false}
        index={3}
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
        <TextWithIcon
          label="REST"
          icon={<Database size="md" className="fill-yellow-400" />}
        />
      </Window>
      <Window
        icon={<CodeAlt />}
        contentClassName="grid grid-cols-4 gap-4 h-fit min-[560px]:grid-cols-6 min-[860px]:grid-cols-10 min-[1624px]:grid-cols-5"
        className="
          max-[1624px]:row-start-2
          max-[1624px]:col-span-2
          max-[920px]:row-start-3
          max-[570px]:row-start-5
          "
        topBar={false}
        index={4}
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
