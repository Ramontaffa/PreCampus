"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { RiArrowRightLine, RiCalendarLine, RiCheckLine } from "@remixicon/react";
import Illustration from "../../../assets/Illustration.svg";

interface CardProps {
  titulo: string;
  data?: string;
  status?: "inscrever" | "inscrito" | "saibaMais";
  imagem?: string | StaticImageData;
  link?: string;
}

export default function Card({
  titulo,
  data = "00/00/0000",
  status = "inscrever",
  imagem = "/img/evento.jpg",
  link,
}: CardProps) {
  const statusTone = {
    inscrever: {
      badge: "bg-orange-50 text-orange-700",
      label: "Inscrições abertas",
      button: "bg-orange-500 text-white hover:bg-orange-600 focus-visible:outline-orange-500",
    },
    inscrito: {
      badge: "bg-emerald-50 text-emerald-700",
      label: "Inscrição confirmada",
      button: "bg-slate-100 text-slate-500",
    },
    saibaMais: {
      badge: "bg-sky-50 text-sky-700",
      label: "Detalhes disponíveis",
      button: "border border-orange-200 text-orange-600 hover:bg-orange-50 focus-visible:outline-orange-500",
    },
  }[status];

  return (
    <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
      {link ? (
        <Link href={link} className="group/image relative block h-40 overflow-hidden rounded-xl">
          <Image
            src={imagem || Illustration}
            alt={titulo}
            className="h-full w-full object-cover transition-transform duration-500 group-hover/image:scale-105"
            fill
            sizes="(max-width: 768px) 100vw, 320px"
            unoptimized
          />

          <span className={`absolute left-3 top-3 inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold shadow-sm ${statusTone.badge}`}>
            <span className="h-1.5 w-1.5 rounded-full bg-current/70" />
            {statusTone.label}
          </span>
        </Link>
      ) : (
        <div className="relative h-40 overflow-hidden rounded-xl">
          <Image
            src={imagem || Illustration}
            alt={titulo}
            className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            fill
            sizes="(max-width: 768px) 100vw, 320px"
            unoptimized
          />

          <span className={`absolute left-3 top-3 inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold shadow-sm ${statusTone.badge}`}>
            <span className="h-1.5 w-1.5 rounded-full bg-current/70" />
            {statusTone.label}
          </span>
        </div>
      )}

      <div className="flex flex-1 flex-col pt-4">
        {link ? (
          <Link href={link} className="mb-2 block text-lg font-semibold leading-tight text-slate-900 transition-colors hover:text-orange-600">
            <span className="line-clamp-2">{titulo}</span>
          </Link>
        ) : (
          <h3 className="mb-2 line-clamp-2 text-lg font-semibold leading-tight text-slate-900">
            {titulo}
          </h3>
        )}

        <p className="mb-5 inline-flex items-center gap-2 text-sm font-medium text-slate-500">
          <RiCalendarLine size={18} />
          {data}
        </p>

        <div className="mt-auto">
          {status === "inscrever" && (
            link ? (
              <Link
                href={link}
                className={`group flex w-full items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold shadow-sm transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${statusTone.button}`}
              >
                Inscreva-se
                <RiArrowRightLine size={18} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
            ) : (
              <button
                type="button"
                onClick={() => alert("Inscrição mock: acione o fluxo de detalhes ou API real.")}
                className={`group flex w-full items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold shadow-sm transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${statusTone.button}`}
              >
                Inscreva-se
                <RiArrowRightLine size={18} className="transition-transform group-hover:translate-x-0.5" />
              </button>
            )
          )}

          {status === "inscrito" && (
            <button
              disabled
              className="flex w-full items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-emerald-700 ring-1 ring-inset ring-emerald-100"
            >
              <RiCheckLine size={18} />
              Inscrição confirmada
            </button>
          )}

          {status === "saibaMais" && (
            link ? (
              <Link
                href={link}
                className={`group flex w-full items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${statusTone.button}`}
              >
                Detalhes
                <RiArrowRightLine size={18} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
            ) : (
              <button
                className={`group flex w-full items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${statusTone.button}`}
              >
                Detalhes
                <RiArrowRightLine size={18} className="transition-transform group-hover:translate-x-0.5" />
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
}