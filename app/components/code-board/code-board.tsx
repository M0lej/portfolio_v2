"use client";
import { Children, Fragment, ReactNode } from "react";
import KeyAndValue from "./key-value";
import CodeBoardString from "./code-board-string";
import CodeBoardArray from "./code-board-array";

export function CodeSpacer({
  children,
  n,
}: {
  children?: ReactNode;
  n: number;
}) {
  const indent = "   ".repeat(n);

  return (
    <>
      {Children.toArray(children).map((child, index) => (
        <Fragment key={index}>
          {indent}
          {child}
        </Fragment>
      ))}
    </>
  );
}

export default function CodeBoard() {
  const linesCount = 12;
  return (
    <div className="relative w-fit h-fit xl:w-fit min-w-0 max-[1450px]:zoom-90 max-[1380px]:zoom-80 max-[1320px]:zoom-70 max-[1180px]:zoom-60 max-[970px]:zoom-50 max-[900px]:hidden">
      <div
        style={{ animationDelay: "400ms" }}
        className="
          bg-code-board-fading-outline-gradient
          p-px 
          h-full 
          w-full
          rounded-2xl
          absolute 
          translate-y-[10%] 
          translate-x-[-5%] 
          opacity-0
          animate-fade-in-from-bottom
        "
      >
        <div
          className={`
          h-full 
          w-full 
          bg-code-board-gradient 
          z-0 
          rounded-2xl
          `}
        ></div>
      </div>
      <div
        style={{ animationDelay: "200ms" }}
        className="
            relative 
            w-fit  
            flex 
            gap-5 
            py-5 
            pl-5 
            pr-15 
            rounded-2xl 
            bg-code-board-gradient 
            outline-code-board-outline 
            outline-1 
            z-1
            opacity-0
            animate-fade-in-from-bottom
          "
      >
        <div className="text-center">
          {Array.from([...Array(linesCount).keys()], (_, i) => i + 1).map(
            (number) => (
              <Fragment key={number}>
                <span className="text-[#465788]">{number}</span>
                {number != linesCount ? <br /> : null}
              </Fragment>
            ),
          )}
        </div>
        <pre>
          <span className="text-purple-400">const</span>{" "}
          <span className="text-deep-blue">Developer</span>
          {" = {"}
          <br />
          <CodeSpacer n={2}>
            <KeyAndValue
              name="name"
              value={<CodeBoardString value="Maksymilian" />}
            />
            <br />
            <KeyAndValue
              name="frameworks"
              value={
                <CodeBoardArray
                  values={["React", "Next.js", "Vue.js", "Flutter"]}
                />
              }
            />
            <br />
            <KeyAndValue
              name="languages"
              value={
                <>
                  {"{"}
                  <br />
                  <CodeSpacer n={4}>
                    <KeyAndValue
                      name="web"
                      value={
                        <CodeBoardArray
                          values={["JS", "TS", "CSS", "SASS", "HTML"]}
                        />
                      }
                    />
                    <br />
                    <KeyAndValue
                      name="software"
                      value={
                        <CodeBoardArray values={["Dart", "C#", "Python"]} />
                      }
                    />
                    <br />
                    <KeyAndValue
                      name="databases"
                      value={<CodeBoardArray values={["SQL", "NoSQl"]} />}
                    />
                  </CodeSpacer>
                  <br />
                  <CodeSpacer n={2}>{"},"}</CodeSpacer>
                </>
              }
            />
            <br />
            <KeyAndValue
              name="editors_and_tools"
              value={
                <CodeBoardArray
                  values={[
                    "VS Code",
                    "Visual Studio",
                    "Android Studio",
                    "MongoDB",
                  ]}
                />
              }
            />
          </CodeSpacer>
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
  );
}
