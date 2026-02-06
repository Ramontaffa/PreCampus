import { Input } from "../../input";

interface Props {
  title: string;
  values: string[];
  disabled?: boolean;
  onChange: (values: string[]) => void;
}

export function InterestsFields({ title, values, disabled, onChange }: Props) {
  return (
    <>
      <p className="text-sm font-medium text-zinc-700">{title}</p>

      {[0, 1, 2].map((i) => (
        <Input
          key={i}
          placeholder={`Opção ${i + 1}`}
          value={values[i] ?? ""}
          disabled={disabled}
          onChange={(v) => {
            const updated = [...values];
            updated[i] = v;
            onChange(updated);
          }}
        />
      ))}
    </>
  );
}
