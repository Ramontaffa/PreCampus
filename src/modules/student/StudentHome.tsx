import HomeLayout from "../../layout/HomeLayout";
import StudentSidebar from "./components/StudentSidebar";
import NextEventBanner from "./components/NextEventBanner";
import Card from "./components/Card";
import { studentEventsMock } from "./data/eventsMock";
import Link from "next/link";

export default function StudentHome() {
  const spotlightEvents = studentEventsMock.slice(0, 3);
  const primaryEventLink = `/estudante/meus-eventos/detalhes/${studentEventsMock[0].id}`;

  return (
    <HomeLayout sidebar={<StudentSidebar />}>
      <NextEventBanner
        title={studentEventsMock[0].title}
        img={studentEventsMock[0].banner}
        link={primaryEventLink}
      />

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-bold text-slate-900">Outros eventos</h3>
            <span className="h-2 w-2 rounded-full bg-orange-500 animate-pulse" aria-hidden />
          </div>
          <div className="flex flex-wrap gap-2 text-sm">
            <span className="rounded-full border border-slate-200 px-3 py-1 text-slate-600">Workshops</span>
            <span className="rounded-full border border-slate-200 px-3 py-1 text-slate-600">Palestras</span>
            <span className="rounded-full border border-slate-200 px-3 py-1 text-slate-600">Feiras</span>
          </div>
        </div>

        <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {spotlightEvents.map((event) => (
            <Card
              key={event.id}
              titulo={event.title}
              status={event.status}
              data={`${event.date} - ${event.time}`}
              imagem={event.banner}
              link={`/estudante/meus-eventos/detalhes/${event.id}`}
            />
          ))}
        </div>

        <div className="flex justify-center">
          <Link
            href="/estudante/meus-eventos"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-6 py-2.5 text-sm font-semibold text-slate-700 transition-colors duration-200 hover:border-orange-300 hover:bg-orange-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
          >
            Ver todos os eventos
          </Link>
        </div>
      </section>

    </HomeLayout>
  );
}