import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  BadgeCheck,
  Calendar,
  CalendarCheck,
  Home,
  KeyRound,
  LogIn,
  Mail,
  Menu,
  Plus,
  User,
  UserPlus,
  X,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const routes: { label: string; to: string; icon: LucideIcon }[] = [
  { label: "Home", to: "/", icon: Home },
  { label: "Perfil", to: "/profile", icon: User },
  { label: "Meus Eventos", to: "/my-events", icon: CalendarCheck },
  { label: "Evento", to: "/event", icon: Calendar },
  { label: "Criar Evento", to: "/events/create", icon: Plus },
  { label: "Login", to: "/login", icon: LogIn },
  { label: "Cadastro", to: "/register", icon: UserPlus },
  { label: "Recuperar Senha", to: "/recover-password", icon: Mail },
  { label: "Resetar Senha", to: "/recover-password/reset", icon: KeyRound },
  { label: "Sucesso", to: "/recover-password/Sucess", icon: BadgeCheck },
];

type SidebarProps = {
  side?: "left" | "right";
};

const Sidebar = ({ side = "left" }: SidebarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const isRight = side === "right";

  return (
    <>
      <button
        type="button"
        className={`fixed top-4 z-50 rounded-md border border-zinc-200 bg-white p-2 text-zinc-700 shadow-sm sm:hidden ${
          isRight ? "right-4" : "left-4"
        }`}
        onClick={() => setIsOpen(true)}
        aria-label="Abrir navegacao"
      >
        <Menu className="h-5 w-5" />
      </button>

      {isOpen && (
        <button
          type="button"
          className="fixed inset-0 z-30 bg-black/30 sm:hidden"
          onClick={() => setIsOpen(false)}
          aria-label="Fechar navegacao"
        />
      )}

      <aside
        className={[
          "fixed inset-y-0 z-40 w-64 bg-white shadow-lg transition-transform duration-200 ease-out sm:static sm:z-auto sm:w-56 sm:shadow-none",
          isRight
            ? "right-0 translate-x-full sm:border-l sm:border-zinc-200"
            : "left-0 -translate-x-full sm:border-r sm:border-zinc-200",
          isOpen ? "translate-x-0" : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <div className="flex items-center justify-between px-4 py-4 text-sm font-semibold text-zinc-700">
          Navegacao
          <button
            type="button"
            className="rounded-md p-1 text-zinc-500 hover:bg-zinc-100 sm:hidden"
            onClick={() => setIsOpen(false)}
            aria-label="Fechar navegacao"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <nav className="flex flex-col gap-1 px-2 pb-4 text-sm">
          {routes.map((route) => {
            const Icon = route.icon;
            return (
              <NavLink
                key={route.to}
                to={route.to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  [
                    "flex items-center gap-2 rounded px-3 py-2 text-zinc-700 hover:bg-zinc-100",
                    isActive
                      ? "bg-zinc-100 font-semibold text-zinc-900"
                      : "",
                  ]
                    .filter(Boolean)
                    .join(" ")
                }
              >
                <Icon className="h-4 w-4" />
                {route.label}
              </NavLink>
            );
          })}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
