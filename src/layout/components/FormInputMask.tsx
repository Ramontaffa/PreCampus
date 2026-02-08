"use client";

import type { InputMaskProps } from "../../interfaces/InputMaskProps";
import { IMaskInput } from "react-imask";

function FormInputMask({ onChange, label, placeholder, mask  }: InputMaskProps) {
    return (
        <div className="flex flex-col gap-1">
            {label && <label className="text-sm">{label}</label>}
                        <IMaskInput
                            mask={mask}
                            unmask={true}
                            placeholder={placeholder}
                            className="border px-3 py-2 rounded bg-white/20"
                            onAccept={(value) => onChange?.(value)}
            />
        </div>
    );
}

export default FormInputMask;