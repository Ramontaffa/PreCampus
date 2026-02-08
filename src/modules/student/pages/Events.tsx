import HomeLayout from "../../../layout/HomeLayout";
import StudentSidebar from "../components/StudentSidebar";
import Card from "../components/Card";
import { RiFilter3Line, RiSparkling2Line } from "@remixicon/react";
import { studentEventsMock } from "../data/eventsMock";

export default function Events() {
  return (
    <HomeLayout sidebar={<StudentSidebar />}>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">Eventos disponíveis</h2>
          <p className="mt-1 text-base text-slate-600">Inscreva-se em palestras e workshops selecionados para você.</p>
        </div>
        <div className="flex items-center gap-2 text-sm font-semibold">
          <button className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2 text-slate-700 transition-colors duration-200 hover:border-orange-300 hover:bg-orange-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500">
            <RiFilter3Line size={18} />
            Filtros
          </button>
          <button className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-4 py-2 text-white shadow-sm transition-colors duration-200 hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500">
            <RiSparkling2Line size={18} />
            Recomendações
          </button>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-5 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
          <span className="rounded-full border border-slate-200 px-3 py-1">On-line</span>
          <span className="rounded-full border border-slate-200 px-3 py-1">Presencial</span>
          <span className="rounded-full border border-slate-200 px-3 py-1">Tecnologia</span>
          <span className="rounded-full border border-slate-200 px-3 py-1">Saúde</span>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {studentEventsMock.map((event) => (
            <Card
              key={event.id}
              titulo={event.title}
              status={event.status}
              imagem={event.banner}
              data={`${event.date} - ${event.time}`}
              link={`/estudante/meus-eventos/detalhes/${event.id}`}
            />
          ))}
        </div>
      </div>
    </HomeLayout>
  );
}