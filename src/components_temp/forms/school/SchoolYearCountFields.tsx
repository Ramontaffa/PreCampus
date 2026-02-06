import { Input } from "../../input";

type Years = {
  firstYear: number;
  secondYear: number;
  thirdYear: number;
};

interface Props {
  title: string;
  values: Years;
  disabled?: boolean;
  onChange: (values: Years) => void;
}

export function SchoolYearCountFields({
  title,
  values,
  disabled,
  onChange,
}: Props) {
  return (
    <>
      <p className="text-sm font-medium text-zinc-700">{title}</p>

      <div className="grid grid-cols-3 gap-4">
        <Input
          type="number"
          label="1º ano"
          value={String(values.firstYear)}
          disabled={disabled}
          onChange={(v) => onChange({ ...values, firstYear: Number(v) })}
        />

        <Input
          type="number"
          label="2º ano"
          value={String(values.secondYear)}
          disabled={disabled}
          onChange={(v) => onChange({ ...values, secondYear: Number(v) })}
        />

        <Input
          type="number"
          label="3º ano"
          value={String(values.thirdYear)}
          disabled={disabled}
          onChange={(v) => onChange({ ...values, thirdYear: Number(v) })}
        />
      </div>
    </>
  );
}
