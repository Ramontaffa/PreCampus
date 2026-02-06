import { useAuth } from "../../contexts/AuthContext";
import { headerConfig } from "../HeaderMenu/header.config"

export default function Footer() {
  const { user } = useAuth();

  if (!user) return null;

  const config = headerConfig[user.role];
  if (!config) return null;

  return (
    <footer className={`${config.bgColor} text-white`}>
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-center px-4">
        <span className="text-xs sm:text-sm opacity-90 font-bold">
          © {new Date().getFullYear()} PreCampus. Todos os direitos reservados.
        </span>
      </div>
    </footer>
  );
}