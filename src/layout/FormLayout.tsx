import Link from "next/link";
import Background from "../components/Background";
import React from "react";

function FormLayout({ children }: { children?: React.ReactNode }) {
  return (
    <div className="min-h-screen font-sans p-2 bg-[#1E90FF] relative overflow-hidden flex">
      <Background />
      <div className="flex-1 bg-white/35 rounded-2xl py-6 px-8 md:px-16 lg:px-24 z-10">
        <div className="mb-8">
            <h1 className="text-3xl text-blue-600">Faça seu cadastro</h1>
            <p>Já tem uma conta? <Link href="/login" className="text-blue-700 border-b border-transparent cursor-pointer hover:border-blue-600">Faça login</Link></p>
        </div>
        { children }
      </div>
    </div>
  );
}

export default FormLayout;