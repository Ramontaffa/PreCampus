import HomeLayout from "@/layout/HomeLayout";
import StudentSidebar from "@/modules/student/components/StudentSidebar";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  RiCalendarEventLine,
  RiTimeLine,
  RiMapPinLine,
  RiVideoLine,
  RiTeamLine,
  RiAwardLine,
  RiArrowRightLine,
  RiShieldCheckLine,
} from "@remixicon/react";
import { getStudentEventById, studentEventsMock } from "@/modules/student/data/eventsMock";

interface PageProps {
  params: { id: string };
}

export default function StudentEventDetailsPage({ params }: PageProps) {
  const event = getStudentEventById(params.id);

  if (!event) {
    return notFound();
  }

  return (
    <HomeLayout sidebar={<StudentSidebar />}>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[2fr_1fr]">
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-orange-600">
              <span className="rounded-full bg-orange-50 px-3 py-1">Próxima turma</span>
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-emerald-700">
                {event.status === "inscrito" ? "Inscrito" : "Inscrições abertas"}
              </span>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-xs font-semibold text-slate-700">
              Evento do aluno
            </div>
          </div>

          <div className="mt-4 space-y-3">
            <h1 className="text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
              {event.title}
            </h1>
            <p className="max-w-3xl text-base text-slate-600">{event.description}</p>
            <div className="flex flex-wrap gap-2 text-sm font-semibold text-slate-600">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1">
                <RiAwardLine size={18} className="text-orange-500" />
                {event.certificate}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1">
                <RiShieldCheckLine size={18} className="text-orange-500" />
                {event.level}
              </span>
            </div>
          </div>

          <div className="mt-6 overflow-hidden rounded-xl border border-slate-100 bg-slate-50/60">
            <div className="relative h-56 w-full">
              <Image
                src={event.banner}
                alt={event.title}
                fill
                sizes="(max-width: 768px) 100vw, 1024px"
                className="h-full w-full object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/60 via-slate-900/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-3 text-sm font-semibold text-white drop-shadow">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1">
                  <RiCalendarEventLine size={18} />
                  {event.date}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1">
                  <RiTimeLine size={18} />
                  {event.time}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1">
                  <RiVideoLine size={18} />
                  {event.mode}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[{
              label: "Data",
              value: event.date,
              icon: <RiCalendarEventLine size={20} className="text-orange-500" />,
            }, {
              label: "Horário",
              value: event.time,
              icon: <RiTimeLine size={20} className="text-orange-500" />,
            }, {
              label: "Formato",
              value: event.mode,
              icon: <RiVideoLine size={20} className="text-orange-500" />,
            }, {
              label: "Local",
              value: event.location,
              icon: <RiMapPinLine size={20} className="text-orange-500" />,
            }].map((item) => (
              <div key={item.label} className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50 px-4 py-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-50">
                  {item.icon}
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">{item.label}</p>
                  <p className="text-sm font-semibold text-slate-900">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900">Agenda do encontro</h3>
              <ul className="space-y-3">
                {event.agenda.map((item) => (
                  <li
                    key={`${item.time}-${item.title}`}
                    className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50 px-4 py-3"
                  >
                    <span className="text-sm font-bold text-orange-600">{item.time}</span>
                    <p className="text-sm font-semibold text-slate-800">{item.title}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900">Sobre o evento</h3>
              <p className="text-sm text-slate-600">
                Participe para entender como se posicionar no mercado, conhecer processos seletivos e acelerar seu networking com universidades e parceiros.
              </p>
              <div className="space-y-2 text-sm text-slate-700">
                <div className="flex items-center gap-2 font-semibold">
                  <RiTeamLine size={18} className="text-orange-500" />
                  Público indicado
                </div>
                <p>Estudantes de ensino médio e universitários em fase inicial de carreira.</p>
              </div>
              <div className="space-y-2 text-sm text-slate-700">
                <div className="flex items-center gap-2 font-semibold">
                  <RiAwardLine size={18} className="text-orange-500" />
                  Benefícios
                </div>
                <ul className="list-disc space-y-1 pl-4 text-sm text-slate-600">
                  <li>{event.certificate}</li>
                  <li>Materiais e checklists exclusivos.</li>
                  <li>Networking com recrutadores e representantes de universidades.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <aside className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
              Vagas disponíveis: {event.spots}
            </div>
            <h3 className="text-xl font-bold text-slate-900">Garanta sua vaga</h3>
            <p className="text-sm text-slate-600">
              Faça sua inscrição para receber o link de acesso e lembretes antes do evento.
            </p>
            <div className="flex flex-col gap-2">
              <button className="group inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500">
                {event.status === "inscrito" ? "Inscrito" : "Inscrever-se"}
                <RiArrowRightLine size={18} className="transition-transform group-hover:translate-x-0.5" />
              </button>
              <button className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition-colors duration-200 hover:border-orange-300 hover:bg-orange-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500">
                Adicionar ao calendário
              </button>
              <button className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition-colors duration-200 hover:border-orange-300 hover:bg-orange-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500">
                Compartilhar evento
              </button>
            </div>
          </div>

          <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-4">
            <p className="text-sm font-semibold text-slate-800">Dica</p>
            <p className="mt-1 text-sm text-slate-600">
              Mantenha seu perfil atualizado para receber recomendações de eventos alinhados aos seus interesses.
            </p>
          </div>
        </aside>
       </div>
     </HomeLayout>
   );
 }

export function generateStaticParams() {
  return studentEventsMock.map((event) => ({ id: event.id }));
}
