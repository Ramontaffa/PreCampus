"use client";

import {
  RiCalendarCheckLine,
  RiGroupLine,
  RiTimeLine,
  RiAddLine,
  RiMore2Fill,
  RiSearchLine
} from "@remixicon/react";

import { useRouter } from "next/navigation";
import HomeLayout from "../../layout/HomeLayout";
import SchoolSidebar from "./components/SchoolSidebar";

interface EventoSummary {
  id: number;
  titulo: string;
  data: string;
  local: string;
  status: "Ativo" | "Encerrado" | "Em Breve";
  inscritos: number;
}

const mockEventos: EventoSummary[] = [
  { id: 1, titulo: "Feira de Ciências 2024", data: "15/03/2024", local: "Ginásio Principal", status: "Em Breve", inscritos: 150 },
  { id: 2, titulo: "Workshop de Robótica", data: "10/02/2024", local: "Laboratório 3", status: "Ativo", inscritos: 45 },
  { id: 3, titulo: "Formatura 3º Ano", data: "20/12/2023", local: "Salão Nobre", status: "Encerrado", inscritos: 300 },
  { id: 4, titulo: "Palestra: Futuro da IA", data: "22/03/2024", local: "Auditório", status: "Em Breve", inscritos: 12 },
];

export default function SchoolHome() {
  const router = useRouter();

  return (
    <HomeLayout sidebar={<SchoolSidebar />}>
      
      <div className="flex justify-between items-end mb-8 animate-fade-in-down">
        <div>
          <h1 className="text-3xl font-bold text-green-600 tracking-tight mb-1">
            Painel da Escola
          </h1>
          <p className="text-gray-500 font-medium">
            Visão geral e gerenciamento de eventos escolares.
          </p>
        </div>
        
        <button
          onClick={() => router.push('/escola/criar-evento')}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 px-6 rounded-full shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer flex items-center gap-2"
        >
          <RiAddLine size={20} />
          Novo Evento
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-blue-500 hover:shadow-md transition-all cursor-default">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-blue-50 rounded-xl text-blue-600">
              <RiCalendarCheckLine size={28} />
            </div>
            <span className="text-xs font-bold bg-green-100 text-green-700 px-2 py-1 rounded-full">
              +12% este mês
            </span>
          </div>
          <h3 className="text-4xl font-bold text-gray-800 mb-1">24</h3>
          <p className="text-gray-500 font-medium">Eventos Ativos</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-blue-500 hover:shadow-md transition-all cursor-default">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-blue-50 rounded-xl text-blue-600">
              <RiGroupLine size={28} />
            </div>
          </div>
          <h3 className="text-4xl font-bold text-gray-800 mb-1">1.250</h3>
          <p className="text-gray-500 font-medium">Alunos Cadastrados</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-blue-500 hover:shadow-md transition-all cursor-default">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-blue-50 rounded-xl text-blue-600">
              <RiTimeLine size={28} />
            </div>
            <span className="text-xs font-bold bg-orange-100 text-orange-600 px-2 py-1 rounded-full">
              Em 2 dias
            </span>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-1 truncate">Feira de Ciências</h3>
          <p className="text-gray-500 font-medium">Próximo Evento</p>
        </div>
      </div>

      <section className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6 border-b border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <h2 className="text-xl font-bold text-blue-900">
            Todos os Eventos
          </h2>
          
          <div className="relative w-full md:w-72">
            <input 
              type="text" 
              placeholder="Buscar evento..." 
              className="w-full pl-10 pr-4 py-2 rounded-lg border-2 border-gray-100 focus:border-blue-500 focus:outline-none transition-colors text-sm"
            />
            <RiSearchLine className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-50 text-gray-500 text-sm uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4 font-semibold">Evento</th>
                <th className="px-6 py-4 font-semibold">Data</th>
                <th className="px-6 py-4 font-semibold">Local</th>
                <th className="px-6 py-4 font-semibold text-center">Inscritos</th>
                <th className="px-6 py-4 font-semibold text-center">Status</th>
                <th className="px-6 py-4 font-semibold text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {mockEventos.map((evento) => (
                <tr key={evento.id} className="hover:bg-blue-50/50 transition-colors group">
                  <td className="px-6 py-4">
                    <span className="font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                      {evento.titulo}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-600 text-sm">
                    {evento.data}
                  </td>
                  <td className="px-6 py-4 text-gray-600 text-sm">
                    {evento.local}
                  </td>
                  <td className="px-6 py-4 text-gray-600 text-sm text-center font-medium">
                    {evento.inscritos}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className={`
                      px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide
                      ${evento.status === 'Ativo' ? 'bg-green-100 text-green-700' : ''}
                      ${evento.status === 'Em Breve' ? 'bg-blue-100 text-blue-700' : ''}
                      ${evento.status === 'Encerrado' ? 'bg-gray-100 text-gray-500' : ''}
                    `}>
                      {evento.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-gray-400 hover:text-blue-600 p-2 rounded-full hover:bg-blue-100 transition-all cursor-pointer">
                      <RiMore2Fill size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="p-4 border-t border-gray-100 flex justify-center">
          <button className="text-blue-600 font-bold text-sm hover:underline cursor-pointer">
            Ver todos os eventos
          </button>
        </div>
      </section>

    </HomeLayout>
  );
}