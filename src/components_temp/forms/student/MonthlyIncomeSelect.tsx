import {
  MONTHLY_INCOME,
  type MonthlyIncome,
} from "../../../types/MonthlyIncome";

interface Props {
  value: MonthlyIncome;
  disabled?: boolean;
  onChange: (value: MonthlyIncome) => void;
}

export function MonthlyIncomeSelect({ value, disabled, onChange }: Props) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-zinc-700">
        Renda familiar mensal
      </label>

      <select
        value={value}
        disabled={disabled}
        onChange={(e) => onChange(Number(e.target.value) as MonthlyIncome)}
        className="h-11 rounded-md border border-zinc-300 px-3 bg-white"
      >
        <option value={MONTHLY_INCOME.NONE}>Selecione</option>
        <option value={MONTHLY_INCOME.UP_TO_1_MINIMUM}>
          Até 1 salário mínimo
        </option>
        <option value={MONTHLY_INCOME.FROM_1_TO_2}>
          De 1 a 2 salários mínimos
        </option>
        <option value={MONTHLY_INCOME.FROM_2_TO_3}>
          De 2 a 3 salários mínimos
        </option>
        <option value={MONTHLY_INCOME.ABOVE_3}>
          Acima de 3 salários mínimos
        </option>
      </select>
    </div>
  );
}
