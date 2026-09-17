import CodeBoard from "./components/code-board/code-board";
import IconLink from "./components/icon-link";
import Skill from "./components/skill";
import SocialLink from "./components/social-link";
import Window from "./components/window";
import {
  HomeAlt,
  ArrowUpRightStroke,
  User,
  CodeAlt,
  BrushSparkles,
  Book,
  Tachometer,
} from "@boxicons/react";

export default function Home() {
  return (
    <div
      className="
        grid 
        grid-cols-[1fr_1fr_1fr_1fr] 
        auto-rows-min 
        p-5 
        gap-3 
        pb-30
        max-[820px]:grid-rows-[1fr_auto_auto]
        max-[820px]:grid-cols-[1fr_1fr]
      "
    >
      <Window
        title="Strona główna"
        className="
          max-[820px]:col-span-2 
          col-span-4 
          w-full 
          row-start-1 
          col-start-1"
        icon={<HomeAlt size="sm" />}
        index={1}
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

            <p className="w-fit bg-text-gradient text-4xl lg:text-5xl xl:text-6xl font-bold py-1 text-transparent bg-clip-text">
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
                href="/projects"
                filled
                currentPageIndex={0}
                targetPageIndex={1}
              />

              <IconLink
                icon={<User size="sm" />}
                label="O mnie"
                href="/about"
                currentPageIndex={0}
                targetPageIndex={2}
              />
            </div>
          </div>
          <CodeBoard />
          <CodeAlt
            className="min-[680px]:hidden fill-deep-blue drop-shadow-[0_0_12px_#6a8df7]"
            size="2xl"
          />
        </div>
      </Window>

      <Skill
        icon={<CodeAlt size="xl" className="fill-purple-400 min-w-10" />}
        name="Czysty kod"
        description="Piszę przejrzysty, dobrze zorganizowany kod z myślą o skalowości."
        subwindow={false}
        className="
          max-[820px]:col-start-1 
          max-[820px]:row-start-2"
        index={2}
      />
      <Skill
        icon={<BrushSparkles size="xl" className="fill-orange-400 min-w-10" />}
        name="Nowoczesny design"
        description="Tworzę estetyczne i funkcjonalne interfejsy użytkownika."
        subwindow={false}
        className="
          max-[820px]:col-start-2 
          max-[820px]:row-start-2"
        index={3}
      />

      <Skill
        icon={<Book size="xl" className="fill-blue-400 min-w-10" />}
        name="Ciągły rozwój"
        description="Nieustannie uczę się nowych technologii i doskonale umiejętności."
        subwindow={false}
        className="
          max-[820px]:col-start-1 
          max-[820px]:row-start-3"
        index={4}
      />

      <Skill
        icon={<Tachometer size="xl" className="fill-yellow-400 min-w-10" />}
        name="Szybkie działanie"
        description="Dbam o wydajność i optymalizację aplikacji."
        subwindow={false}
        index={5}
      />
    </div>
  );
}
