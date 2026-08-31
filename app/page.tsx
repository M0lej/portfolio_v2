import IconLink from "./components/icon-link";
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
} from "@boxicons/react";

export default function Home() {
  return (
    <div className="grid grid-cols-[1fr_2fr] auto-rows-min p-5 h-screen gap-3">
      <Window title="Informacja" icon={<InfoCircle size="sm" />}>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-4">
            <BirthdayCake className="fill-purple-400" />
            <span className="leading-none">19 lat</span>
          </div>
          <div className="flex items-center gap-4">
            <FlagAlt className="fill-orange-400" />
            <span className="leading-none">Polska</span>
          </div>
          <div className="flex items-center gap-4">
            <Education className="fill-yellow-400" />
            <span className="leading-none">1 rok studiów</span>
          </div>
        </div>
      </Window>
      <Window
        title="Strona główna"
        className="row-span-2"
        icon={<HomeAlt size="sm" />}
      >
        <div className="grid grid-cols-2">
          <div className="flex flex-col gap-4">
            <p>Cześć, mam na imie</p>
            <p className="w-fit h-fit bg-text-gradient text-6xl font-bold py-1 text-transparent bg-clip-text ">
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
            <div className="buttons flex gap-2 my-6">
              <IconLink
                icon={<ArrowUpRightStroke />}
                label="Zobacz moje projekty"
                href="/"
                filled
              />
              <IconLink icon={<User size="sm" />} label="O mnie" href="/" />
            </div>
          </div>
          <div>
            <pre>
              <span className="text-purple-400">const</span>{" "}
              <span className="text-deep-blue">Developer</span>
              {" = {"}
              <br />
              {"        "}
              <span className="text-purple-300">name</span>
              {":"}
              {"    "}
              <span className="text-lime-500">'Maksymilian'</span>
              {","}
              <br />
              {"        "}
              <span className="text-purple-300">frameworks</span>
              {":   [ "}
              <span className="text-lime-500">'React'</span>
              {", "}
              <span className="text-lime-500">'Next.js'</span>
              {", "}
              <span className="text-lime-500">'Vue.js'</span>
              {", "}
              <span className="text-lime-500">'Flutter'</span>
              {" ],"}
              <br />
              {"        "}
              <span className="text-purple-300">languages</span>
              {":   {"}
              <br />
              {"              "} <span className="text-purple-300">web</span>
              {":   [ "}
              <span className="text-lime-500">'JS'</span>
              {", "}
              <span className="text-lime-500">'TS'</span>
              {", "}
              <span className="text-lime-500">'CSS'</span>
              {", "}
              <span className="text-lime-500">'SASS'</span>
              {", "}
              <span className="text-lime-500">'HTML'</span>
              {" ],"}
              <br />
              {"              "}{" "}
              <span className="text-purple-300">software</span>
              {":   [ "}
              <span className="text-lime-500">'Dart'</span>
              {", "}
              <span className="text-lime-500">'C#'</span>
              {", "}
              <span className="text-lime-500">'Python'</span>
              {" ],"}
              <br />
              {"               "}
              <span className="text-purple-300">databases</span>
              {":   [ "}
              <span className="text-lime-500">'SQL'</span>
              {" ]"}
              <br />
              {"        },"}
              <br />
              {"        "}
              <span className="text-purple-300">editors</span>
              {":   [ "}
              <span className="text-lime-500">'VS Code'</span>
              {", "}
              <span className="text-lime-500">'Visual Studio'</span>
              {", "}
              <span className="text-lime-500">'Android Studio'</span>
              {" ],"}
              <br />
              {"};"}
              <br />
              <br />
              <span className="text-deep-blue">export</span>{" "}
              <span className="text-purple-400">default</span>{" "}
              <span className="text-deep-blue">Developer</span>
              {";"}
            </pre>
          </div>
        </div>
      </Window>
      <Window title="Status" icon={<RadioCircleMarked />}>
        <div className="flex gap-4">
          <RadioCircleMarked className="fill-lime-400" />
          <span>Dostępny</span>
        </div>
        <span className="text-sm text-subtle-blue">
          Otwarty na nowe wyzwania!
        </span>
      </Window>
      <Window title="Linki" icon={<Link />}>
        <div className="flex flex-col gap-3">
          <SocialLink
            href="https://github.com/M0lej"
            icon={<Github />}
            label="M0lej"
          />
          <SocialLink
            href="https://www.instagram.com/m0lej/"
            icon={<Instagram />}
            label="M0lej"
          />
          <SocialLink
            href="https://www.youtube.com/@M0l3j"
            icon={<Youtube />}
            label="M0l3j"
          />
        </div>
      </Window>
    </div>
  );
}
