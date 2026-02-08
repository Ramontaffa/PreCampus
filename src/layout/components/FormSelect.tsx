import type { SelectProps } from "../../interfaces/SelectProps";

function FormSelect({ label, options, onChange }: SelectProps) {
    return (
        <div className="flex flex-col gap-1">
            {label && <label>{label}</label>}

            <select
                onChange={onChange}
                className="border px-3 py-2 rounded bg-white/20"
            >
                <option value="">Selecione</option>

                {options.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                        {opt.label}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default FormSelect;