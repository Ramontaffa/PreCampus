import type { ButtonProps } from "../interfaces/ButtonProps"

function Button({ text, onClick }: ButtonProps) {
    return (
        <button className="bg-blue-600 font-heading font-bold cursor-pointer p-2 w-full text-white rounded-full" onClick={onClick}>{text}</button>  
    )
}

export default Button