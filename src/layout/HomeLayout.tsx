"use client";

import type { ReactNode } from "react";

interface HomeLayoutProps {
  sidebar: ReactNode;
  children: ReactNode;
}

export default function HomeLayout({ sidebar, children }: HomeLayoutProps) {
  return (
    <div className="flex min-h-screen bg-slate-50 font-sans text-slate-900">
      {sidebar}
      <main className="flex-1 ml-72 px-4 py-8 md:px-8">
        <div className="mx-auto w-full max-w-6xl space-y-8">{children}</div>
      </main>
    </div>
  );
}