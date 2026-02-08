// src/components/EventoCard.jsx
import Image from "next/image";

export default function EventoCard({ titulo, data, inscrito }: { titulo: string; data: string; inscrito: boolean }) {
  return (
    <div className="border-2 border-orange-300 rounded-2xl p-4 text-center space-y-4">
      <h3 className="text-lg font-semibold text-blue-600">{titulo}</h3>
      <p className="text-sm text-slate-500">{data} - Tema do Evento</p>
      <div className="w-full h-40 rounded-xl overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1544531586-fde5298cdd40"
          alt={titulo}
          className="w-full h-full object-cover"
          width={800}
          height={400}
          unoptimized
        />
      </div>
      <button
        className={`px-6 py-2 rounded-full font-semibold ${
          inscrito
            ? "border-2 border-blue-500 text-blue-500 cursor-default"
            : "bg-green-500 text-white hover:bg-green-600"
        }`}
      >
        {inscrito ? "Inscrito" : "Inscreva-se"}
      </button>
    </div>
  );
}
