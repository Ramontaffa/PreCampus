"use client";

import HomeLayout from "../../../layout/HomeLayout";
import StudentSidebar from "../components/StudentSidebar";
import Card from "../components/Card";
import { RiFilter3Line, RiSparkling2Line } from "@remixicon/react";
import { useEffect, useRef, useState } from "react";
import { studentEventsMock } from "../data/eventsMock";

const filterOptions = ["Todos", "Tecnologia", "Saúde", "Design", "Feiras"];
const statusFilters = [
  { label: "Todos os status", value: "todos" },
  { label: "Disponíveis para inscrição", value: "inscrever" },
  { label: "Já inscritos", value: "inscrito" },
  { label: "Somente saiba mais", value: "saibaMais" },
];

export default function Events() {
  const [activeFilter, setActiveFilter] = useState<string>(filterOptions[0]);
  const [statusFilter, setStatusFilter] = useState<string>(statusFilters[0].value);
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
  const filterMenuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (filterMenuRef.current && !filterMenuRef.current.contains(event.target as Node)) {
        setIsFilterMenuOpen(false);
      }
    }

    if (isFilterMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isFilterMenuOpen]);

  const filteredEvents = studentEventsMock.filter((event) => {
    const matchesTag =
      activeFilter === "Todos" || event.tags?.some((tag) => tag.toLowerCase() === activeFilter.toLowerCase());
    const matchesStatus = statusFilter === "todos" || event.status === statusFilter;
    return matchesTag && matchesStatus;
  });

  const activeStatusLabel = statusFilters.find((filter) => filter.value === statusFilter)?.label ?? statusFilters[0].label;
  return (
    <HomeLayout sidebar={<StudentSidebar />}>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">Eventos disponíveis</h2>
          <p className="mt-1 text-base text-slate-600">Inscreva-se em palestras e workshops selecionados para você.</p>
        </div>
        <div className="flex items-center gap-2 text-sm font-semibold">
          <div className="relative" ref={filterMenuRef}>
            <button
              type="button"
              onClick={() => setIsFilterMenuOpen((prev) => !prev)}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2 text-slate-700 transition-colors duration-200 hover:border-orange-300 hover:bg-orange-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
            >
              <RiFilter3Line size={18} />
              Filtros
            </button>
            {isFilterMenuOpen ? (
              <div className="absolute right-0 z-20 mt-2 w-72 rounded-2xl border border-slate-200 bg-white p-4 text-left shadow-xl">
                <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">Status</div>
                <div className="space-y-2 text-sm font-medium text-slate-600">
                  {statusFilters.map((filter) => (
                    <button
                      key={filter.value}
                      type="button"
                      onClick={() => {
                        setStatusFilter(filter.value);
                        setIsFilterMenuOpen(false);
                      }}
                      className={`flex w-full items-center justify-between rounded-xl border px-3 py-2 text-left transition ${
                        statusFilter === filter.value
                          ? "border-orange-400 bg-orange-50 text-orange-600"
                          : "border-slate-200 hover:border-orange-200"
                      }`}
                    >
                      <span>{filter.label}</span>
                      {statusFilter === filter.value && <span className="text-xs uppercase tracking-wide">Ativo</span>}
                    </button>
                  ))}
                </div>
                <p className="mt-3 text-xs text-slate-500">Filtro aplicado: {activeStatusLabel}</p>
              </div>
            ) : null}
          </div>
          <button
            type="button"
            onClick={() => alert("Mock recomendações: aplicar ranking recomendado.")}
            className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-4 py-2 text-white shadow-sm transition-colors duration-200 hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
          >
            <RiSparkling2Line size={18} />
            Recomendações
          </button>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-5 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
          {filterOptions.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full border px-3 py-1 transition ${
                activeFilter === filter
                  ? "border-orange-400 bg-orange-50 text-orange-600"
                  : "border-slate-200 text-slate-600 hover:border-orange-200"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {filteredEvents.length ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredEvents.map((event) => (
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
        ) : (
          <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-6 text-center text-sm text-slate-600">
            Nenhum evento encontrado para o filtro selecionado.
          </div>
        )}
      </div>
    </HomeLayout>
  );
}