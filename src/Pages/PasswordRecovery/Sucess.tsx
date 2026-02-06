import { Link } from "react-router-dom";
import AuthLayout from "../../components_temp/layouts/Auth/AuthLayout";
import capIcon from "../../assets/img/cap.svg";

export default function RecoverSucess() {
  return (
    <AuthLayout>
      <div className="mt-20">
        <img
          src={capIcon}
          alt="Ícone cap"
          className="mb-10 w-20 -ml-6"
        />

        <h1 className="text-5xl font-bold text-blue-950 leading-tight">
          Recuperação <br />
          de Senha
        </h1>

        <p className="my-4 text-sm text-gray-600">
          Sua senha foi alterada com sucesso.
        </p>

        <Link
          to="/login"
          className="mt-8 block w-full rounded-md bg-gradient-to-r from-sky-600 to-blue-950 py-3 text-center font-semibold text-white"
        >
          ENTRAR
        </Link>
      </div>
    </AuthLayout>
  );
}
