import type { InputHTMLAttributes, ChangeEvent } from "react";

interface InputProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "onChange"
> {
  label?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export function Input({
  label,
  value,
  onChange,
  type = "text",
  ...rest
}: InputProps) {
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    onChange?.(e.target.value);
  }

  return (
    <div className="flex w-full flex-col gap-1">
      {label && (
        <label className="text-sm font-medium text-zinc-700">{label}</label>
      )}

      <input
        type={type}
        value={value}
        onChange={handleChange}
        className="h-11 rounded-md border border-zinc-300 bg-white px-3 focus:ring-2 focus:ring-violet-500 focus:outline-none"
        {...rest}
        required
      />
    </div>
  );
}
