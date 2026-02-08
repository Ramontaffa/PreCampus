"use client";

import { useState } from "react";
import { RiBuilding4Line, RiArrowDownSLine, RiMapPinLine, RiMailLine, RiCheckboxCircleLine } from "@remixicon/react";

interface UniversityInfo {
  id: string;
  name: string;
  booth: string;
  summary: string;
  courses: string[];
  brings: string[];
  contact: string;
}

interface EventUniversitiesPanelProps {
  universities: UniversityInfo[];
  mode: string;
}

export default function EventUniversitiesPanel({ universities, mode }: EventUniversitiesPanelProps) {
  if (!universities?.length) return null;
  if (!mode.toLowerCase().includes("presencial")) return null;

  const [openId, setOpenId] = useState<string | null>(universities[0]?.id ?? null);

  return (
    <div className="space-y-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-orange-600">Universidades presentes</p>
          <h3 className="text-lg font-bold text-slate-900">Clique para ver o que cada uma levará</h3>
        </div>
        <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
          {universities.length} parceiros
        </span>
      </div>

      <div className="space-y-2">
        {universities.map((uni) => {
          const isOpen = openId === uni.id;
          return (
            <div key={uni.id} className="rounded-xl border border-slate-200 bg-slate-50">
              <button
                className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-semibold text-slate-800 transition hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
                onClick={() => setOpenId(isOpen ? null : uni.id)}
              >
                <span className="inline-flex items-center gap-2">
                  <RiBuilding4Line size={18} className="text-orange-500" />
                  {uni.name}
                  <span className="rounded-full bg-white px-2 py-0.5 text-[11px] font-semibold text-slate-600">Estande {uni.booth}</span>
                </span>
                <RiArrowDownSLine
                  size={20}
                  className={`transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`}
                />
              </button>

              {isOpen && (
                <div className="space-y-3 border-t border-slate-200 bg-white px-4 py-3 text-sm text-slate-700">
                  <p className="text-slate-700">{uni.summary}</p>
                  <div className="space-y-1">
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">O que levarão</p>
                    <ul className="space-y-1">
                      {uni.brings.map((item) => (
                        <li key={item} className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                          <RiCheckboxCircleLine size={14} className="text-orange-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Cursos em destaque</p>
                    <div className="flex flex-wrap gap-2">
                      {uni.courses.map((course) => (
                        <span key={course} className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-600">
                    <span className="inline-flex items-center gap-1 rounded-full bg-orange-50 px-3 py-1 text-orange-600">
                      <RiMapPinLine size={14} /> Estande {uni.booth}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1">
                      <RiMailLine size={14} /> {uni.contact}
                    </span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
