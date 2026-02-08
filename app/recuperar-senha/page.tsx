'use client';

import type React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

import AuthLayout from "@/components_temp/layouts/Auth/AuthLayout";

export default function RecoverRequestPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    router.push("/recuperar-senha/reset");
  }

  return (
    <AuthLayout>
      <div className="mt-10">
        <Image
          src="/assets/img/cap.svg"
          alt="Ícone cap"
          width={80}
          height={80}
          className="mb-10 -ml-6 w-20"
        />

        <h1 className="text-5xl font-bold leading-tight text-blue-950">
          Recuperação <br />
          de senha
        </h1>

        <p className="my-4 text-sm text-gray-600">
          Para redefinir sua senha, informe o email cadastrado na sua conta e
          lhe enviaremos um link com as instruções.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-1">
            <label className="block text-sm font-medium text-blue-950">
              Email
            </label>

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-md border border-sky-600 px-3 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-gradient-to-r from-sky-600 to-blue-950 py-3 font-semibold text-white"
          >
            ENVIAR
          </button>
        </form>
      </div>
    </AuthLayout>
  );
}
