import { createContext, useContext } from "react";

type HeaderContextType = {
  title: string;
  setTitle: (title: string) => void;
};

export const HeaderContext = createContext<HeaderContextType | undefined>(
  undefined,
);

export function useHeader() {
  const context = useContext(HeaderContext);
  if (!context) {
    throw new Error("useHeader deve ser usado dentro do HeaderProvider");
  }
  return context;
}
