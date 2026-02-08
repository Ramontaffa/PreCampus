"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

interface SidebarLinkProps {
  to: string;
  icon: ReactNode;
  children: ReactNode;
  textColor?: string;
  activeBg?: string;
}

export default function SidebarLink({
  to,
  icon,
  children,
  textColor = "text-blue-900",
  activeBg = "bg-green-500"
}: SidebarLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === to || pathname?.startsWith(`${to}/`);

  return (
    <Link
      href={to}
      className={`group flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold tracking-tight transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 ${
        isActive
          ? `${activeBg} text-white shadow-sm ring-1 ring-slate-200/60`
          : `${textColor} hover:bg-slate-100`
      }`}
    >
      {icon}
      {children}
    </Link>
  );
}