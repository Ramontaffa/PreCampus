'use client';

import Image from "next/image";
import Link from "next/link";

import AuthLayout from "@/components_temp/layouts/Auth/AuthLayout";

export default function RecoverSuccessPage() {
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

        <h1 className="text-5xl font-bold leading-tight text-blue-950">
          Recuperação <br />
          de Senha
        </h1>

        <p className="my-4 text-sm text-gray-600">
          Sua senha foi alterada com sucesso.
        </p>

        <Link
          href="/login"
          className="mt-8 block w-full rounded-md bg-gradient-to-r from-sky-600 to-blue-950 py-3 text-center font-semibold text-white"
        >
          ENTRAR
        </Link>
      </div>
    </AuthLayout>
  );
}
