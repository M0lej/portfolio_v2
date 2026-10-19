import { ChangeEvent, ChangeEventHandler } from "react";

type props = {
  className?: string;
  htmlFor: string;
  label: string;
  value: string;
  inputName: string;
  defaultChecked?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};
export default function Radio({
  className,
  htmlFor,
  label,
  value,
  inputName,
  defaultChecked = false,
  onChange,
}: props) {
  return (
    <label
      className={`py-2 px-4 rounded-lg has-checked:bg-button-gradient outline-deep-blue outline-1 has-checked:outline-0 cursor-pointer flex items-center active:scale-80 transition-all select-none `}
      htmlFor={htmlFor}
    >
      <div className={`space-x-4  ${className}`}>
        {label}
        <input
          type="radio"
          name={inputName}
          id={htmlFor}
          value={value}
          className="hidden"
          defaultChecked={defaultChecked}
          onChange={onChange}
        />
      </div>
    </label>
  );
}
