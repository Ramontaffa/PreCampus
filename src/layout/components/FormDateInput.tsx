import type { InputProps } from "../../interfaces/InputProps";

function FormDateInput({ onChange, label  }: InputProps) {
    return (
        <div className="flex flex-col gap-1">
            {label && <label className="text-sm">{label}</label>}

            <input
                type="date"
                onChange={onChange}
                className="border rounded px-3 py-2 bg-white/20"
            />
        </div>
    );
}

export default FormDateInput;