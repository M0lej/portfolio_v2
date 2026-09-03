import CodeBoard from "./components/code-board/code-board";
import IconLink from "./components/icon-link";
import Skill from "./components/skill";
import SocialLink from "./components/social-link";
import Window from "./components/window";
import {
  BirthdayCake,
  FlagAlt,
  Education,
  InfoCircle,
  HomeAlt,
  RadioCircleMarked,
  Link,
  Github,
  Instagram,
  Youtube,
  ArrowUpRightStroke,
  User,
  CodeAlt,
  BrushSparkles,
  Book,
  Tachometer,
} from "@boxicons/react";

export default function Home() {
  return (
    <div className="grid grid-cols-[1fr_1fr_1fr_1fr] auto-rows-min p-5 h-screen gap-3">
      <Window
        title="Strona główna"
        className="row-span-2 col-span-4 w-full"
        icon={<HomeAlt size="sm" />}
      >
        <div
          className="
      relative
      gap-15
      flex
      justify-between
      pb-15
    "
        >
          <div className="relative flex flex-col gap-4 min-w-">
            <p
              style={{ animationDelay: "200ms" }}
              className="animate-fade-in-from-bottom opacity-0"
            >
              Cześć, mam na imie
            </p>

            <p className="w-fit bg-text-gradient text-4xl lg:text-5xl xl:text-6xl font-bold py-1 text-transparent bg-clip-text mask-linear-[">
              Maksymilian
            </p>

            <p>
              Tworzę nowoczesne aplikacje webowe i mobilne.
              <br />
              Lubię{" "}
              <span className="text-deep-blue">czysty kod, ładny design</span> i
              ciągłe <span className="text-deep-blue">rozwijanie</span>
              <br />
              swoich umiejętności
            </p>

            <div className="buttons flex flex-wrap gap-2 my-6">
              <IconLink
                icon={<ArrowUpRightStroke />}
                label="Zobacz moje projekty"
                href="/"
                filled
              />

              <IconLink icon={<User size="sm" />} label="O mnie" href="/" />
            </div>
          </div>
          <CodeBoard />
        </div>
      </Window>

      <Skill
        icon={<CodeAlt size="xl" className="fill-purple-400" />}
        name="Czysty kod"
        description="Piszę przejrzysty, dobrze zorganizowany kod z myślą o skalowości."
      />
      <Skill
        icon={<BrushSparkles size="xl" className="fill-orange-400" />}
        name="Nowoczesny design"
        description="Tworzę estetyczne i funkcjonalne interfejsy użytkownika."
      />

      <Skill
        icon={<Book size="xl" className="fill-blue-400" />}
        name="Ciągły rozwój"
        description="Nieustannie uczę się nowych technologii i doskonale umiejętności."
      />

      <Skill
        icon={<Tachometer size="xl" className="fill-yellow-400" />}
        name="Szybkie działanie"
        description="Dbam o wydajność i optymalizację aplikacji."
      />
    </div>
  );
}
