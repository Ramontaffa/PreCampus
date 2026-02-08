import HomeLayout from "../../layout/HomeLayout";
import StudentSidebar from "./components/StudentSidebar";
import NextEventBanner from "./components/NextEventBanner";
import Card from "./components/Card";
import { RiArrowRightLine, RiCalendarEventLine, RiCompass3Line } from "@remixicon/react";
import { studentEventsMock } from "./data/eventsMock";
import Link from "next/link";

export default function StudentHome() {
  const spotlightEvents = studentEventsMock.slice(0, 3);
  const primaryEventLink = `/estudante/meus-eventos/detalhes/${studentEventsMock[0].id}`;

  return (
    <HomeLayout sidebar={<StudentSidebar />}>
      <section className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-2">
          <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-orange-600">
            Jornada do aluno
          </div>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-900">
            Bem-vindo! Pronto para o próximo evento?
          </h2>
          <p className="mt-2 max-w-2xl text-base text-slate-600">
            Explore oportunidades selecionadas, acompanhe inscrições e mantenha seu perfil atualizado para receber recomendações mais precisas.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/estudante/meus-eventos"
              className="group inline-flex items-center gap-2 rounded-xl bg-orange-500 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
            >
              Explorar eventos
              <RiArrowRightLine size={18} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href={primaryEventLink}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition-colors duration-200 hover:border-orange-300 hover:bg-orange-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
            >
              Continuar de onde parei
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[{
              label: "Eventos ativos",
              value: "12",
              icon: <RiCalendarEventLine size={20} className="text-orange-500" />,
            }, {
              label: "Recomendações",
              value: "5",
              icon: <RiCompass3Line size={20} className="text-orange-500" />,
            }].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 px-4 py-3"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-50">
                  {item.icon}
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">{item.label}</p>
                  <p className="text-xl font-bold text-slate-900">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-orange-50 p-6 shadow-sm">
          <p className="text-sm font-semibold text-slate-500">Atualizações rápidas</p>
          <ul className="mt-4 space-y-3 text-sm text-slate-700">
            <li className="flex items-center gap-3 rounded-lg border border-slate-100 bg-white px-3 py-2 shadow-[0_1px_0_rgba(15,23,42,0.04)]">
              <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden />
              3 novos workshops adicionados esta semana.
            </li>
            <li className="flex items-center gap-3 rounded-lg border border-slate-100 bg-white px-3 py-2 shadow-[0_1px_0_rgba(15,23,42,0.04)]">
              <span className="h-2 w-2 rounded-full bg-orange-500" aria-hidden />
              Lembrete: atualize suas áreas de interesse para melhores sugestões.
            </li>
          </ul>
        </div>
      </section>

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