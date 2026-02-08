"use client";

import Link from "next/link";
import { useAuth } from "../../contexts/AuthContext";
import { headerConfig } from "./header.config";

interface Props {
  onNavigate: () => void;
}

export default function HeaderNav({ onNavigate }: Props) {
  const { user } = useAuth();
  if (!user) return null;

  const config = headerConfig[user.role];

  return (
    <nav className="mt-8 flex flex-col items-center gap-6 py-6">
      {config.menu.map((item) => {
        const Icon = item.icon;

        return (
          <Link
            key={item.name}
            href={item.to}
            onClick={onNavigate}
            className={`flex flex-col items-center ${config.textColor}`}
          >
            <Icon size={35} />
            <span className="mt-1 text-sm text-gray-800">{item.name}</span>
          </Link>
        );
      })}
    </nav>
  );
}
