import { ReactNode } from "react";
import { Fragment } from "react/jsx-runtime";

type props = {
  name: string;
  value: ReactNode;
};

export default function KeyAndValue({ name, value }: props) {
  return (
    <span>
      <span className="text-purple-300">{name}</span>
      {":   "}
      {value}
    </span>
  );
}
