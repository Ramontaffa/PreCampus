import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { RiArrowRightLine } from "@remixicon/react";
import EventBannerImg from "../../../assets/SchoolEventDetails.png";

interface NextEventProps {
  title: string;
  img: string | StaticImageData;
  link?: string;
}

export default function NextEventBanner({ title, img, link }: NextEventProps) {
  return (
    <section className="mb-8 flex flex-col items-start gap-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md md:flex-row md:items-center">
      <div className="flex-1 space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-orange-600">
          Próximo evento
        </div>

        <div className="space-y-2">
          <p className="text-sm font-semibold text-slate-500">Quinta-feira - 19h30 - On-line</p>
          <h3 className="text-2xl font-bold leading-tight text-slate-900 md:text-3xl">
            {title}
          </h3>
          <p className="max-w-2xl text-base text-slate-600">
            Reserve seu lugar para receber insights de especialistas e materiais exclusivos sobre carreira e mercado universitário.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {link ? (
            <Link
              href={link}
              className="group inline-flex items-center gap-2 rounded-xl bg-orange-500 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
            >
              Garantir vaga
              <RiArrowRightLine size={18} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          ) : (
            <button className="group inline-flex items-center gap-2 rounded-xl bg-orange-500 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500">
              Garantir vaga
              <RiArrowRightLine size={18} className="transition-transform group-hover:translate-x-0.5" />
            </button>
          )}

          {link ? (
            <Link
              href={link}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-orange-600 transition-colors duration-200 hover:border-orange-300 hover:bg-orange-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
            >
              Ver detalhes
            </Link>
          ) : (
            <button className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-orange-600 transition-colors duration-200 hover:border-orange-300 hover:bg-orange-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500">
              Ver detalhes
            </button>
          )}
          <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-2 text-xs font-semibold text-slate-700">
            Vagas limitadas
          </span>
        </div>
      </div>

      <div className="w-full md:w-72">
        <Image
          src={img || EventBannerImg}
          alt="Destaque do evento"
          className="h-48 w-full rounded-xl object-cover shadow-sm transition-transform duration-300 hover:scale-[1.02]"
          width={288}
          height={192}
          unoptimized
        />
      </div>
    </section>
  );
}