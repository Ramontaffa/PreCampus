"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  BadgeCheck,
  Home,
  KeyRound,
  LogIn,
  Mail,
  Menu,
  UserPlus,
  X,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const routes: { label: string; to: string; icon: LucideIcon }[] = [
  { label: "Home", to: "/home", icon: Home },
  { label: "Login", to: "/login", icon: LogIn },
  { label: "Cadastro", to: "/register", icon: UserPlus },
  { label: "Recuperar Senha", to: "/recuperar-senha", icon: Mail },
  { label: "Resetar Senha", to: "/recuperar-senha/reset", icon: KeyRound },
  { label: "Sucesso", to: "/recuperar-senha/sucesso", icon: BadgeCheck },
];

type SidebarProps = {
  side?: "left" | "right";
};

const Sidebar = ({ side = "left" }: SidebarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isRight = side === "right";

  return (
    <>
      {/* Hamburger button - only visible on mobile when sidebar is closed */}
      {!isOpen && (
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
      )}

      {/* Overlay - only on mobile */}
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
          "bg-white shadow-lg sm:relative sm:w-56 sm:shadow-none sm:border-zinc-200",
          "fixed inset-y-0 z-40 w-64 transition-transform duration-200 ease-out",
          isRight
            ? "right-0 sm:border-l" 
            : "left-0 sm:border-r",
          isOpen ? "translate-x-0" : isRight ? "translate-x-full" : "-translate-x-full",
          "sm:translate-x-0", // Always visible on desktop
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <div className="flex items-center justify-between px-4 py-4 text-sm font-semibold text-zinc-700">
          Navegacao
          {/* Close button - only visible on mobile */}
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
            const isActive = pathname?.startsWith(route.to);
            return (
              <Link
                key={route.to}
                href={route.to}
                onClick={() => setIsOpen(false)}
                className={[
                  "flex items-center gap-2 rounded px-3 py-2 text-zinc-700 hover:bg-zinc-100",
                  isActive ? "bg-zinc-100 font-semibold text-zinc-900" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                <Icon className="h-4 w-4" />
                {route.label}
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
