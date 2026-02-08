"use client";

import { useState } from "react";
import EventRegistrationModal from "./EventRegistrationModal";
import { RiArrowRightLine } from "@remixicon/react";
import { currentStudentMock } from "../data/usersMock";

interface EventRegistrationActionsProps {
  eventId: string;
  eventTitle: string;
  dateTime: string;
  mode: string;
  spots: string;
  location: string;
  universityOptions?: Array<{ id: string; name: string }>;
}

export default function EventRegistrationActions({
  eventId,
  eventTitle,
  dateTime,
  mode,
  spots,
  location,
  universityOptions = [],
}: EventRegistrationActionsProps) {
  const [open, setOpen] = useState(false);

  const handleAddCalendar = () => {
    alert(`Mock: adicionar "${eventTitle}" em ${dateTime} ao seu calendário.`);
  };

  const handleShare = async () => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    try {
      if (navigator.share) {
        await navigator.share({ title: eventTitle, text: "Participe deste evento", url });
      } else if (navigator.clipboard && url) {
        await navigator.clipboard.writeText(url);
        alert("Link copiado para a área de transferência.");
      } else {
        alert("Compartilhamento não suportado no navegador atual.");
      }
    } catch (err) {
      console.error("Erro ao compartilhar", err);
      alert("Não foi possível compartilhar agora. Tente novamente.");
    }
  };

  return (
    <>
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
          Vagas disponíveis: {spots}
        </div>
        <h3 className="text-xl font-bold text-slate-900">Garanta sua vaga</h3>
        <p className="text-sm text-slate-600">
          Faça sua inscrição para receber o link de acesso e lembretes antes do evento.
        </p>
        <div className="flex flex-col gap-2">
          <button
            onClick={() => setOpen(true)}
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
          >
            Inscrever-se
            <RiArrowRightLine size={18} className="transition-transform group-hover:translate-x-0.5" />
          </button>
          <button
            onClick={handleAddCalendar}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition-colors duration-200 hover:border-orange-300 hover:bg-orange-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
          >
            Adicionar ao calendário
          </button>
          <button
            onClick={handleShare}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition-colors duration-200 hover:border-orange-300 hover:bg-orange-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
          >
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

      <div className="space-y-3 rounded-2xl border border-slate-100 bg-slate-50 p-4">
        <p className="text-sm font-semibold text-slate-800">Resumo rápido</p>
        <ul className="space-y-1 text-sm text-slate-700">
          <li className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-orange-500" /> {dateTime}
          </li>
          <li className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500" /> {location}
          </li>
        </ul>
      </div>

      <EventRegistrationModal
        open={open}
        onClose={() => setOpen(false)}
        eventTitle={eventTitle}
        dateTime={dateTime}
        mode={mode}
        defaultName={currentStudentMock.name}
        defaultEmail={currentStudentMock.email}
        defaultPhone={currentStudentMock.phone}
        universityOptions={universityOptions}
      />
    </>
  );
}
