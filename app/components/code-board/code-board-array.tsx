import { Fragment } from "react/jsx-runtime";

type props = {
  values: string[];
};

export default function CodeBoardArray({ values }: props) {
  return (
    <>
      {"[ "}
      {values.map((value: string, index: number) => (
        <Fragment key={index}>
          <span className="text-lime-500">'{value}'</span>
          {index == values.length - 1 ? "" : ", "}
        </Fragment>
      ))}
      {" ]"}
    </>
  );
}
