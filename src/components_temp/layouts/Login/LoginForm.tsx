import axios from "axios";
import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

type LoginType = "student" | "institution";

function LoginForm() {
  const navigate = useNavigate();
  const [loginType, setLoginType] = useState<LoginType>("student");
  const [email, setEmail] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [password, setPassword] = useState("");

  function buttonClass(type: LoginType) {
    let base =
      "w-full h-11 rounded-md border text-sm font-medium transition border-zinc-300 text-zinc-600 hover:border-blue-400";

    if (type === loginType) {
      base =
        "w-full h-11 rounded-md border text-sm font-medium transition border-blue-700 bg-blue-50 text-blue-800";
    }

    return base;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (loginType === "student") {
        await axios.post("/auth/login/student", {
          email,
          password,
        });
      } else {
        await axios.post("/auth/login/institution", {
          cnpj,
          password,
        });
      }

      navigate("/");
    } catch {
      alert("Credenciais inválidas");
    }
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="mb-6 flex gap-4">
        <button
          type="button"
          className={buttonClass("student")}
          onClick={() => setLoginType("student")}
        >
          Aluno
        </button>

        <button
          type="button"
          className={buttonClass("institution")}
          onClick={() => setLoginType("institution")}
        >
          Instituição
        </button>
      </div>

      {loginType === "student" && (
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-md border border-sky-600 px-3 py-4 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      )}

      {loginType === "institution" && (
        <input
          type="text"
          placeholder="CNPJ"
          value={cnpj}
          onChange={(e) => setCnpj(e.target.value)}
          className="w-full rounded-md border border-sky-600 px-3 py-4 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      )}

      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full rounded-md border border-sky-600 px-3 py-4 focus:ring-2 focus:ring-blue-500 focus:outline-none"
      />

      <Link
        to={"/recover-password"}
        className="mb-8 block text-right text-sm text-[#0A66C2] hover:underline"
      >
        Esqueceu a senha?
      </Link>

      <button
        type="submit"
        className="w-full rounded-md bg-linear-to-r from-sky-600 to-blue-950 py-3 font-semibold text-white transition hover:bg-blue-700"
      >
        ENTRAR
      </button>

      <p className="mt-5 text-center text-2sm text-blue-950">
        Não tem uma conta?{" "}
        <Link to="/register" className="text-[#0A66C2] hover:underline">
          Cadastre-se
        </Link>
      </p>
    </form>
  );
}

export { LoginForm };
