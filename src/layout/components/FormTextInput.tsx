import type { InputProps } from "../../interfaces/InputProps";

function FormTextInput({  label, placeholder  }: InputProps) {
    return (
        <div className="flex flex-col gap-1">
            {label && <label className="text-sm">{label}</label>}

            <input
                type="text"
                placeholder={placeholder}
                className="border rounded px-3 py-2 bg-white/30"
            />
        </div>
    );
}

export default FormTextInput;