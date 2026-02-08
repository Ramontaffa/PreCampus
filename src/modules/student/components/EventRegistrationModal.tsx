"use client";

import { useState } from "react";
import {
  RiCalendarEventLine,
  RiCloseLine,
  RiMailLine,
  RiPhoneLine,
  RiUserLine,
  RiCheckboxCircleLine,
  RiLoader4Line,
} from "@remixicon/react";

interface EventRegistrationModalProps {
  open: boolean;
  onClose: () => void;
  eventTitle: string;
  dateTime: string;
  mode: string;
  defaultName?: string;
  defaultEmail?: string;
  defaultPhone?: string;
  universityOptions?: Array<{ id: string; name: string }>;
}

export default function EventRegistrationModal({
  open,
  onClose,
  eventTitle,
  dateTime,
  mode,
  defaultName,
  defaultEmail,
  defaultPhone,
  universityOptions = [],
}: EventRegistrationModalProps) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [interests, setInterests] = useState<string[]>([]);

  if (!open) return null;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (universityOptions.length && interests.length === 0) {
      alert("Selecione ao menos uma universidade de interesse.");
      return;
    }

    setLoading(true);
    setSuccess(false);

    // Mock async submission
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-900/60 px-4 backdrop-blur-sm">
      <div
        role="dialog"
        aria-modal="true"
        className="w-full max-w-xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl"
      >
        <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-orange-600">Inscrição no evento</p>
            <h3 className="text-lg font-bold text-slate-900">{eventTitle}</h3>
          </div>
          <button
            className="rounded-full p-2 text-slate-500 transition hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
            onClick={onClose}
            aria-label="Fechar"
          >
            <RiCloseLine size={20} />
          </button>
        </div>

        <div className="grid grid-cols-1 gap-4 border-b border-slate-100 bg-slate-50/80 px-5 py-4 text-sm font-semibold text-slate-700 sm:grid-cols-3">
          <div className="inline-flex items-center gap-2 rounded-lg bg-white px-3 py-2 shadow-sm">
            <RiCalendarEventLine size={18} className="text-orange-500" />
            {dateTime}
          </div>
          <div className="inline-flex items-center gap-2 rounded-lg bg-white px-3 py-2 shadow-sm">
            <RiCheckboxCircleLine size={18} className="text-orange-500" />
            Inscrição gratuita
          </div>
          <div className="inline-flex items-center gap-2 rounded-lg bg-white px-3 py-2 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            {mode}
          </div>
        </div>

        <div className="px-5 py-5">
          {success ? (
            <div className="space-y-4 rounded-xl border border-emerald-100 bg-emerald-50 p-4 text-sm text-emerald-800">
              <div className="flex items-center gap-2 text-emerald-700">
                <RiCheckboxCircleLine size={20} />
                Inscrição registrada (mock)
              </div>
              <p>Você receberá o link e os lembretes por e-mail próximo à data do evento.</p>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={onClose}
                  className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
                >
                  Fechar
                </button>
                <button
                  onClick={() => setSuccess(false)}
                  className="inline-flex items-center justify-center rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-orange-300 hover:bg-orange-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
                >
                  Fazer nova inscrição
                </button>
              </div>
            </div>
          ) : (
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-1">
                  <label className="text-sm font-semibold text-slate-700">Nome completo</label>
                  <div className="relative">
                    <RiUserLine size={18} className="absolute left-3 top-3 text-slate-400" />
                    <input
                      required
                      name="name"
                      className="w-full rounded-xl border border-slate-200 bg-white px-10 py-3 text-sm font-medium text-slate-800 placeholder-slate-400 transition focus-visible:border-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
                      placeholder="Seu nome"
                      defaultValue={defaultName}
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-semibold text-slate-700">Email</label>
                  <div className="relative">
                    <RiMailLine size={18} className="absolute left-3 top-3 text-slate-400" />
                    <input
                      required
                      type="email"
                      name="email"
                      className="w-full rounded-xl border border-slate-200 bg-white px-10 py-3 text-sm font-medium text-slate-800 placeholder-slate-400 transition focus-visible:border-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
                      placeholder="email@institucional.com"
                      defaultValue={defaultEmail}
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-1">
                  <label className="text-sm font-semibold text-slate-700">Telefone</label>
                  <div className="relative">
                    <RiPhoneLine size={18} className="absolute left-3 top-3 text-slate-400" />
                    <input
                      required
                      name="phone"
                      className="w-full rounded-xl border border-slate-200 bg-white px-10 py-3 text-sm font-medium text-slate-800 placeholder-slate-400 transition focus-visible:border-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
                      placeholder="(00) 00000-0000"
                      defaultValue={defaultPhone}
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-semibold text-slate-700">Curso / área de interesse</label>
                  <input
                    required
                    name="interest"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-800 placeholder-slate-400 transition focus-visible:border-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
                    placeholder="Ex: Engenharia de Software"
                  />
                </div>
              </div>

              {universityOptions.length > 0 && (
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-slate-700">Universidades de interesse (obrigatório)</p>
                  <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {universityOptions.map((uni) => {
                      const checked = interests.includes(uni.id);
                      return (
                        <label
                          key={uni.id}
                          className="flex items-start gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700 shadow-sm transition hover:border-orange-300"
                        >
                          <input
                            type="checkbox"
                            checked={checked}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setInterests([...interests, uni.id]);
                              } else {
                                setInterests(interests.filter((id) => id !== uni.id));
                              }
                            }}
                            className="mt-1 h-4 w-4 rounded border-slate-300 text-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
                          />
                          <div>
                            <p className="font-semibold text-slate-800">{uni.name}</p>
                            <p className="text-xs text-slate-500">Quero receber materiais desta universidade</p>
                          </div>
                        </label>
                      );
                    })}
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-1">
                  <label className="text-sm font-semibold text-slate-700">Preferência de participação</label>
                  <select
                    name="attendance"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-800 transition focus-visible:border-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
                    defaultValue="online"
                  >
                    <option value="online">On-line</option>
                    <option value="presencial">Presencial</option>
                    <option value="hibrido">Híbrido</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-semibold text-slate-700">Observações</label>
                  <input
                    name="notes"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-800 placeholder-slate-400 transition focus-visible:border-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
                    placeholder="Alergias, acessibilidade, etc."
                  />
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
                <input type="checkbox" required className="mt-1 h-4 w-4 rounded border-slate-300 text-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500" />
                <p>Autorizo receber comunicações sobre este evento e materiais relacionados.</p>
              </div>

              <div className="flex flex-col gap-2 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  onClick={onClose}
                  className="inline-flex items-center justify-center rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-orange-300 hover:bg-orange-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {loading ? (
                    <>
                      <RiLoader4Line className="animate-spin" size={18} />
                      Enviando...
                    </>
                  ) : (
                    "Confirmar inscrição"
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
