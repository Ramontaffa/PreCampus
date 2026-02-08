"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import { useAuth } from "../../contexts/AuthContext";
import { headerConfig } from "./header.config";
import HeaderMenu from "./SideMenu";
import { useHeader } from "../../contexts/HeaderContext";

export default function Header() {
  const { title } = useHeader();
  const { user } = useAuth();
  const [open, setOpen] = useState(false);

  if (!user) return null;

  const config = headerConfig[user?.role];
  if (!config) return null;

  return (
    <>
      <header
        className={`${config.bgColor} flex h-30 items-center px-6 text-white shadow-md`}
      >
        <button onClick={() => setOpen(true)}>
          <Menu size={38} />
        </button>

        <h1 className="ml-auto font-bold text-xl sm:text-2xl md:text-4xl">{title}</h1>
      </header>

      <HeaderMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}
