'use client';

import type React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

import AuthLayout from "@/components_temp/layouts/Auth/AuthLayout";

export default function RecoverResetPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (password !== confirm) {
      alert("As senhas não conferem");
      return;
    }

    router.push("/recuperar-senha/sucesso");
  }

  return (
    <AuthLayout>
      <div className="mt-20">
        <Image
          src="/assets/img/cap.svg"
          alt="Ícone cap"
          width={80}
          height={80}
          className="mb-10 -ml-6 w-20"
        />

        <h1 className="text-4xl font-bold leading-tight text-blue-950">
          Recuperação <br />
          de Senha
        </h1>

        <p className="my-4 text-sm text-gray-600">
          Crie uma nova senha para acessar sua conta.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-1">
            <label className="block text-sm font-medium text-blue-950">
              Nova senha
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-md border border-sky-600 px-3 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="space-y-1">
            <label className="block text-sm font-medium text-blue-950">
              Confirmar senha
            </label>
            <input
              type="password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              className="w-full rounded-md border border-sky-600 px-3 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-gradient-to-r from-sky-600 to-blue-950 py-3 font-semibold text-white"
          >
            REDEFINIR
          </button>
        </form>
      </div>
    </AuthLayout>
  );
}
