"use client";

import { useState } from "react";

interface option {
    label: string,
    value: string
}

function FormMultiSelect({ label, options, className }: { label: string, options: option[],  className?: string }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState<option[]>([]) // Guardamos apenas os 'values' (strings)

    const handleSelect = (option: option) => {
        if (selected.includes(option)) {
            setSelected(selected.filter(item => item !== option));
        } else if (selected.length < 3) {
            setSelected([...selected, option]);
        } else {
            selected.shift()
            setSelected([...selected, option])
        }
    }

    return (
        <div>
            {label && <label className="text-sm font-medium">{label}</label>}
            <button 
                type="button"
                className={`${className} flex flex-col w-full text-left gap-1 border rounded px-3 py-2 bg-white/30`} 
                onClick={() => setIsOpen(true)}
            >
                {selected.length > 0 
                    ? `${selected.map(e => e.label).join(', ')} selecionado(s)` 
                    : "Abrir tela"}
            </button>

            {isOpen && (
                <div className="fixed inset-0 bg-black/50 z-20 flex items-center justify-center backdrop-blur-sm">
                    <div className="flex flex-col gap-1 relative bg-white p-6 border border-gray-200 rounded-2xl w-full max-w-xl shadow-xl">
                        <p className="font-semibold">Selecione até 3 cursos:</p>
                        
                        <div className="flex flex-col bg-zinc-200 p-3 mb-3 rounded-md max-h-60 overflow-auto gap-3">
                            {options.map(element => {
                                const isSelected = selected.find(op => op.value === element.value)

                                return (
                                    <div 
                                        key={element.value}
                                        onClick={() => handleSelect(element)}
                                        className={`p-2 rounded-md cursor-pointer transition-colors ${
                                            isSelected 
                                                ? 'bg-blue-500 text-white hover:bg-blue-600' 
                                                : 'bg-white text-black hover:bg-blue-100'
                                        }`}
                                    >
                                        {element.label}
                                    </div>
                                )
                            })}
                        </div>
                        
                        <button
                            onClick={() => setIsOpen(false)}
                            className="mt-4 w-full py-2 bg-gray-100 rounded-lg font-medium hover:bg-gray-200"
                        >
                            Concluído
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default FormMultiSelect;