import React from "react"

export interface SelectProps {
  label?: string
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void
  options: Option[]
}

interface Option { 
  label: string
  value: string
}