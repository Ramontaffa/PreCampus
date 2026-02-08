import Image from "next/image";
import { RiCheckLine } from "@remixicon/react";

interface CardProps {
  titulo: string;
  data?: string;
  status?: "inscrever" | "inscrito" | "saibaMais";
  imagem?: string;
}

export default function Card({
  titulo,
  data = "00/00/0000",
  status = "inscrever",
  imagem = "/img/evento.jpg",
}: CardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all p-4 flex flex-col h-full border border-gray-100">
      
      <div className="relative h-40 mb-4 overflow-hidden rounded-xl">
        <Image
          src={imagem}
          alt={titulo}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
          fill
          sizes="(max-width: 768px) 100vw, 320px"
          unoptimized
        />
      </div>

      <div className="flex-1 flex flex-col">
        <h3 className="text-lg font-bold text-blue-900 leading-tight mb-2 line-clamp-2">
          {titulo}
        </h3>

        <p className="text-sm text-gray-500 mb-6 font-medium">
          {data}
        </p>

        <div className="mt-auto">
          {status === "inscrever" && (
            <button className="w-full bg-green-500 text-white font-bold py-2.5 rounded-full hover:bg-green-600 transition-colors shadow-sm active:scale-95">
              Inscreva-se
            </button>
          )}

          {status === "inscrito" && (
            <button disabled className="w-full bg-blue-50 text-blue-400 font-bold py-2.5 rounded-full cursor-not-allowed flex items-center justify-center gap-2">
              <RiCheckLine size={20} />
              Inscrito
            </button>
          )}

          {status === "saibaMais" && (
            <button className="w-full border-2 border-orange-500 text-blue-600 font-bold py-2.5 rounded-full hover:bg-orange-50 transition-colors">
              Saiba mais
            </button>
          )}
        </div>
      </div>
    </div>
  );
}