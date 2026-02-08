'use client';

import type { MouseEvent } from "react";
import { RiCloseCircleLine } from "@remixicon/react";

interface ResetPasswordMessageProps {
  Close: (event?: MouseEvent<HTMLButtonElement | HTMLDivElement>) => void;
}

export default function ResetPasswordMessage({ Close }: ResetPasswordMessageProps) {
  return (
    <div className="fixed inset-0 bg-white/70 z-50 flex items-center justify-center px-4" onClick={Close}>
      <div
        className="relative bg-white border border-blue-500 rounded-2xl w-full max-w-md overflow-hidden shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="absolute right-3 top-3 text-blue-900 hover:text-blue-700 transition-colors"
          onClick={Close}
          aria-label="Fechar aviso"
        >
          <RiCloseCircleLine size={28} />
        </button>
        <div className="px-6 py-8">
          <h1 className="text-xl font-bold mb-4 text-blue-900">Email enviado</h1>
          <div className="bg-blue-100 p-3 rounded-md text-blue-900 space-y-1">
            <p>O email foi enviado com sucesso.</p>
            <p>Verifique sua caixa de entrada.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
