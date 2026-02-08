"use client";

import type { ReactNode } from "react";

interface HomeLayoutProps {
  sidebar: ReactNode;
  children: ReactNode;
}

export default function HomeLayout({ sidebar, children }: HomeLayoutProps) {
  return (
    <div className="flex min-h-screen bg-background font-sans">
      {sidebar}
      
      <main className="flex-1 ml-72 p-8">
        {children}
      </main>
    </div>
  );
}