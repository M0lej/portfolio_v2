import {
  DetailedHTMLProps,
  InputHTMLAttributes,
  ReactNode,
  TextareaHTMLAttributes,
} from "react";

type props = {
  labelFor: string;
  icon?: ReactNode;
  label: string;
} & DetailedHTMLProps<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>;

export default function TextArea({
  labelFor,
  icon,
  label,
  ...textareaProps
}: props) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={labelFor} className="font-bold">
        {label}
      </label>
      <div className="border py-2 px-4 rounded-lg border-faded-blue flex items-center gap-4 h-fit focus-within:scale-[1.01] transition-all focus-within:border-deep-blue">
        {icon}
        <textarea
          className=" placeholder:text-subtle-blue min-h-7 h-30 w-full resize-y"
          id={labelFor}
          name={labelFor}
          {...textareaProps}
        />
      </div>
    </div>
  );
}
