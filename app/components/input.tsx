import { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from "react";

type props = {
  labelFor: string;
  icon?: ReactNode;
  label: string;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export default function Input({ labelFor, icon, label, ...inputProps }: props) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={labelFor} className="font-bold">
        {label}
      </label>
      <div className="border py-2 px-4 rounded-lg border-faded-blue flex items-center gap-4">
        {icon}
        <input
          className=" placeholder:text-subtle-blue w-full"
          {...inputProps}
        />
      </div>
    </div>
  );
}
