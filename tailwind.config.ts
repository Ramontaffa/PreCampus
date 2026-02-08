import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--color-background)",
        surface: "var(--color-surface)",
        "brand-blue": "#1558d6",
        "brand-light": "#6ba6ff",
        "brand-dark": "#0d3c94",
        "aluno-primary": "#ff6b35",
        "aluno-secondary": "#fff0e5",
        "escola-primary": "#4caf50",
        "escola-secondary": "#e8f5e9",
        "uni-primary": "#9c27b0",
        "uni-secondary": "#f3e5f5",
        "admin-primary": "#f44336",
        "admin-secondary": "#ffebee",
        "status-success": "#66bb6a",
        "status-warning": "#ffca28",
        "status-error": "#ef5350",
        "status-gray": "#9e9e9e",
        admin: "hsl(210, 100%, 20%)",
        instituicao: "hsl(124, 100%, 20%)",
        student: "hsl(11, 68%, 52%)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        heading: ["var(--font-heading)", "Poppins", "sans-serif"],
      },
      keyframes: {
        "fade-in-down": {
          "0%": { opacity: "0", transform: "translateY(-8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      },
      animation: {
        "fade-in-down": "fade-in-down 0.35s ease-out both"
      }
    },
  },
  plugins: [],
};

export default config;
