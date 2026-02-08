import React from "react"

export interface ButtonProps {
    text:string,
    onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent> ) => void
}