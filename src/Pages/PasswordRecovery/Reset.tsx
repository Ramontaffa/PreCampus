import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../../components_temp/layouts/Auth/AuthLayout";
import capIcon from "../../assets/img/cap.svg";

export default function RecoverReset() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (password !== confirm) {
      alert("As senhas não conferem");
      return;
    }

    navigate("/recover-password/sucess");
  }

  return (
    <AuthLayout>

      <div className="mt-20">
        <img
          src={capIcon}
          alt="Ícone cap"
          className="mb-10 w-20 -ml-6"
        />

        <h1 className="text-4xl font-bold text-blue-950 leading-tight">
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
