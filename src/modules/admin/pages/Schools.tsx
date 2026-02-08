"use client";

import Image from "next/image";
import { useState } from "react";
import { RiCalendarLine, RiTimeLine, RiMapPinLine, RiCheckDoubleLine, RiSendPlane2Line } from "@remixicon/react";
import HomeLayout from "../../../layout/HomeLayout";
import AdminSidebar from "../components/AdminSidebar";

// Dados simulados
const mockUniversities = [
  { id: 1, name: "UNIVERSIDADE FEDERAL DE PERNAMBUCO" },
  { id: 2, name: "UNIVERSIDADE CATÓLICA" },
  { id: 3, name: "FACULDADE DAMAS" },
  { id: 4, name: "UNIVERSIDADE DE PERNAMBUCO (UPE)" },
  { id: 5, name: "CENTRO UNIVERSITÁRIO TIRADENTES" },
];

export default function SchoolsAdmin() {
  const [selectedUnis, setSelectedUnis] = useState<number[]>([]);

  // Função para marcar/desmarcar
  const toggleUni = (id: number) => {
    if (selectedUnis.includes(id)) {
      setSelectedUnis(selectedUnis.filter((item) => item !== id));
    } else {
      setSelectedUnis([...selectedUnis, id]);
    }
  };

  return (
    <HomeLayout sidebar={<AdminSidebar />}>
      
      {/* Cabeçalho */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-red-900">
          Atribuição de Universidades
        </h1>
        <p className="text-gray-500">Selecione quais universidades participarão deste evento.</p>
      </div>

      {/* --- CARD PRINCIPAL --- */}
      <div className="bg-white border border-red-100 rounded-2xl shadow-sm max-w-5xl overflow-hidden">
          
          {/* PARTE DE CIMA: Detalhes do Evento */}
          <div className="p-8">
            <div className="flex flex-col lg:flex-row gap-8 mb-6">
                
                {/* Esquerda: Infos */}
                <div className="flex-1 space-y-4">
                    <h2 className="text-2xl font-bold text-blue-800 uppercase">
                        FEIRA DE INOVAÇÃO 2026
                    </h2>

                    <div className="space-y-2 text-gray-600">
                        <p className="flex items-center gap-2"><RiCalendarLine size={18} className="text-blue-500"/> <strong>Data:</strong> 15/11/2026</p>
                        <p className="flex items-center gap-2"><RiTimeLine size={18} className="text-blue-500"/> <strong>Horário:</strong> 09:00 - 17:00</p>
                        <p className="flex items-center gap-2"><RiMapPinLine size={18} className="text-blue-500"/> <strong>Local:</strong> Centro de Convenções</p>
                    </div>

                    <div className="mt-4">
                        <span className="text-blue-900 font-semibold block mb-2">Descrição:</span>
                        <div className="bg-white border border-blue-100 rounded-xl p-4 text-gray-500 text-sm h-24 overflow-y-auto">
                            O evento visa conectar estudantes do ensino médio com as principais inovações tecnológicas desenvolvidas nas universidades locais.
                        </div>
                    </div>

                    <div className="mt-4">
                        <span className="text-blue-900 font-semibold text-xs uppercase block mb-1">Imagem</span>
                        <div className="border border-blue-200 rounded px-3 py-1 inline-block text-xs text-gray-500 bg-blue-50">
                            capa_evento.jpg
                        </div>
                    </div>

                    {/* Botão de Status APROVADO (Visual) */}
                    <div className="mt-4">
                        <button className="bg-blue-600 text-white font-bold py-2 px-8 rounded-lg shadow-md uppercase text-sm flex items-center gap-2 cursor-default">
                            <RiCheckDoubleLine size={18} /> Aprovado
                        </button>
                    </div>
                </div>

                {/* Direita: Foto */}
                <div className="lg:w-[400px]">
                    <div className="rounded-2xl overflow-hidden h-64 w-full border border-gray-200 shadow-inner">
                        <Image 
                            src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=600&auto=format&fit=crop" 
                            alt="Evento" 
                            className="w-full h-full object-cover"
                            width={600}
                            height={256}
                            unoptimized
                        />
                    </div>
                </div>
            </div>
          </div>

          {/* --- PARTE DE BAIXO: Lista de Universidades (Fundo Cinza) --- */}
          <div className="bg-gray-100 p-8 border-t border-gray-200">
              
              <h3 className="text-blue-900 font-bold text-xl mb-6 uppercase flex items-center gap-2">
                  UNIVERSIDADES DISPONÍVEIS:
              </h3>

              <div className="space-y-3 mb-8">
                  {mockUniversities.map((uni) => (
                      <label key={uni.id} className="flex items-center gap-4 cursor-pointer group hover:bg-white p-2 rounded-lg transition-colors w-full md:w-2/3">
                          <div className={`
                              w-6 h-6 border-2 rounded flex items-center justify-center transition-all flex-shrink-0
                              ${selectedUnis.includes(uni.id) 
                                ? 'bg-red-600 border-red-600' 
                                : 'border-red-400 bg-white group-hover:border-red-600'}
                          `}>
                              {selectedUnis.includes(uni.id) && (
                                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                  </svg>
                              )}
                          </div>
                          
                          {/* Checkbox Real (Escondido) */}
                          <input
                              type="checkbox"
                              className="hidden"
                              checked={selectedUnis.includes(uni.id)}
                              onChange={() => toggleUni(uni.id)}
                          />
                          
                          <span className={`text-lg font-medium uppercase transition-colors ${selectedUnis.includes(uni.id) ? 'text-red-700 font-bold' : 'text-gray-600'}`}>
                              {uni.name}
                          </span>
                      </label>
                  ))}
              </div>

              {/* Botão ENVIAR (Verde) */}
              <div className="flex justify-end">
                  <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-10 rounded-xl shadow-lg shadow-green-200 transition-all transform hover:-translate-y-1 uppercase flex items-center gap-2">
                      <RiSendPlane2Line size={20} />
                      Enviar Convites
                  </button>
              </div>

          </div>

      </div>

    </HomeLayout>
  );
}