"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

type LoginType = "student" | "school" | "university";

function LoginForm() {
  const router = useRouter();
  const [loginType, setLoginType] = useState<LoginType>("student");
  const [email, setEmail] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [password, setPassword] = useState("");

  function buttonClass(type: LoginType) {
    const isActive = type === loginType;
    return [
      "w-full h-11 rounded-md border text-sm font-medium transition",
      isActive
        ? "border-blue-700 bg-blue-50 text-blue-800"
        : "border-zinc-300 text-zinc-600 hover:border-blue-400",
    ]
      .filter(Boolean)
      .join(" ");
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const destinations: Record<LoginType, string> = {
      student: "/estudante/home",
      school: "/escola/home",
      university: "/universidade/home",
    };

    router.push(destinations[loginType]);
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="mb-6 grid grid-cols-3 gap-4">
        <button
          type="button"
          className={buttonClass("student")}
          onClick={() => setLoginType("student")}
        >
          Aluno
        </button>

        <button
          type="button"
          className={buttonClass("school")}
          onClick={() => setLoginType("school")}
        >
          Escola
        </button>

        <button
          type="button"
          className={buttonClass("university")}
          onClick={() => setLoginType("university")}
        >
          Universidade
        </button>
      </div>

      {loginType === "student" && (
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-md border border-sky-600 px-3 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      )}

      {loginType !== "student" && (
        <input
          type="text"
          placeholder="CNPJ"
          value={cnpj}
          onChange={(e) => setCnpj(e.target.value)}
          className="w-full rounded-md border border-sky-600 px-3 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      )}

      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full rounded-md border border-sky-600 px-3 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <Link
        href="/recuperar-senha"
        className="mb-8 block text-right text-sm text-[#0A66C2] hover:underline"
      >
        Esqueceu a senha?
      </Link>

      <button
        type="submit"
        className="w-full rounded-md bg-gradient-to-r from-sky-600 to-blue-950 py-3 font-semibold text-white transition hover:brightness-95"
      >
        ENTRAR
      </button>

      <p className="mt-5 text-center text-2sm text-blue-950">
        Não tem uma conta?{" "}
        <Link href="/register" className="text-[#0A66C2] hover:underline">
          Cadastre-se
        </Link>
      </p>
    </form>
  );
}

export { LoginForm };
