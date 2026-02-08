import Image from "next/image";

interface NextEventProps {
  title: string;
  img: string;
}

export default function NextEventBanner({ title, img }: NextEventProps) {
  return (
    <section className="bg-white rounded-2xl border-2 border-orange-500 shadow-md p-6 mb-8 flex flex-col md:flex-row items-center gap-6 hover:shadow-lg transition-shadow duration-300">
      <div className="flex-1">
        <h3 className="text-xl font-bold text-orange-500 mb-2 uppercase tracking-wide">
          Próximo Evento:
        </h3>

        <p className="text-blue-600 text-2xl font-bold mb-6 leading-tight">
          {title}
        </p>

        <div className="flex gap-4">
          <button className="bg-green-500 text-white font-bold px-8 py-2.5 rounded-full hover:bg-green-600 transition-all shadow-md hover:shadow-lg active:scale-95 cursor-pointer transform">
            Inscreva-se
          </button>
          <button className="border-2 border-orange-500 text-orange-500 font-bold px-8 py-2.5 rounded-full hover:bg-orange-500 hover:text-white transition-all active:scale-95 cursor-pointer">
            Saiba mais
          </button>
        </div>
      </div>

      <Image
        src={img}
        alt="Destaque do evento"
        className="w-full md:w-72 h-48 rounded-xl object-cover shadow-sm hover:scale-[1.02] transition-transform duration-300"
        width={288}
        height={192}
        unoptimized
      />
    </section>
  );
}