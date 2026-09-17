import { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from "react";

type props = {
  labelFor: string;
  icon?: ReactNode;
  label?: string;
  inputClassName?: string;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export default function Input({
  labelFor,
  icon,
  label,
  inputClassName,
  ...inputProps
}: props) {
  return (
    <div className={`flex flex-col gap-2 ${inputClassName} `}>
      {label && (
        <label htmlFor={labelFor} className="font-bold">
          {label}
        </label>
      )}
      <div className="border py-2 px-4 rounded-lg border-faded-blue flex items-center gap-4 focus-within:scale-[1.01] transition-all focus-within:border-deep-blue">
        {icon}
        <input
          className=" placeholder:text-subtle-blue w-full "
          {...inputProps}
        />
      </div>
    </div>
  );
}
