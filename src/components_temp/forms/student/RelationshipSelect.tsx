import { Input } from "../../input";

interface Props {
  value: string;
  otherValue?: string;
  disabled?: boolean;
  onChange: (value: string, other?: string) => void;
}

export function RelationshipSelect({
  value,
  otherValue,
  disabled,
  onChange,
}: Props) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-zinc-700">Parentesco</label>

      <select
        value={value}
        disabled={disabled}
        onChange={(e) => onChange(e.target.value, "")}
        className="h-11 rounded-md border border-zinc-300 px-3 bg-white"
      >
        <option value="">Selecione</option>
        <option value="Pai">Pai</option>
        <option value="Mãe">Mãe</option>
        <option value="Outro">Outro</option>
      </select>

      {value === "Outro" && (
        <Input
          label="Informe o parentesco"
          value={otherValue ?? ""}
          disabled={disabled}
          onChange={(v) => onChange(value, v)}
        />
      )}
    </div>
  );
}
