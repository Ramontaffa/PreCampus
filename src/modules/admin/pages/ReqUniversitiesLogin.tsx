import Image from "next/image";
import { RiBuildingLine, RiFileTextLine, RiCalendarLine, RiMapPinLine } from "@remixicon/react";
import HomeLayout from "../../../layout/HomeLayout";
import AdminSidebar from "../components/AdminSidebar";

export default function ReqUniversitiesLogin() {
  return (
    <HomeLayout sidebar={<AdminSidebar />}>
      
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-red-600">
          Validação de Universidades
        </h1>
        <p className="text-gray-500">Confira as informações enviadas pela universidade para o evento.</p>
      </div>

      <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm max-w-5xl">
          
          {/* --- BLOCO 1: RESUMO DO EVENTO --- */}
          <div className="flex flex-col md:flex-row gap-6 mb-8 border-b border-gray-100 pb-8">
              <div className="w-32 h-32 bg-gray-100 rounded-xl overflow-hidden flex-shrink-0">
                  <Image 
                      src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=300&auto=format&fit=crop" 
                      alt="Evento" 
                      className="w-full h-full object-cover"
                      width={128}
                      height={128}
                      unoptimized
                  />
              </div>
              <div>
                  <h2 className="text-xl font-bold text-blue-900 mb-2">FEIRA DE PROFISSÕES 2026</h2>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <span className="flex items-center gap-1"><RiCalendarLine size={16} className="text-red-500"/> 20/10/2026</span>
                      <span className="flex items-center gap-1"><RiMapPinLine size={16} className="text-red-500"/> Campus Central</span>
                  </div>
                  <p className="mt-3 text-sm text-gray-500 max-w-2xl">
                      Evento destinado a apresentar os cursos de graduação para alunos do ensino médio.
                  </p>
                  <span className="inline-block mt-3 px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full uppercase">
                      Evento Aprovado
                  </span>
              </div>
          </div>

          {/* --- BLOCO 2: DADOS DA UNIVERSIDADE (VALIDAÇÃO) --- */}
          <div className="space-y-6">
              <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                  <RiBuildingLine className="text-red-600" />
                  Dados Enviados pela Universidade
              </h3>

              {/* Input de Logomarca (Visual) */}
              <div className="p-4 border border-gray-200 rounded-xl bg-gray-50">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Logomarca Enviada:</label>
                  <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-white border border-gray-200 rounded-lg flex items-center justify-center">
                          <span className="text-xs text-gray-400">LOGO</span>
                      </div>
                      <span className="text-sm text-gray-500 italic">logo_universidade_federal.png</span>
                  </div>
              </div>

              {/* Descrição da Participação */}
              <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                      <RiFileTextLine size={18} />
                      Descrição da Participação e Cursos:
                  </label>
                  <textarea 
                      readOnly
                      className="w-full h-32 border border-gray-300 rounded-xl p-4 text-gray-600 bg-white focus:outline-none focus:ring-2 focus:ring-red-100 resize-none"
                      defaultValue="A Universidade participará com estandes de Engenharia, Medicina e Direito. Teremos coordenadores disponíveis para tirar dúvidas e realizar demonstrações práticas de robótica."
                  ></textarea>
              </div>
          </div>

          {/* --- BOTÕES --- */}
          <div className="flex flex-col sm:flex-row justify-end gap-4 mt-8 pt-6 border-t border-gray-100">
              <button className="px-8 py-2.5 rounded-xl border border-red-200 text-red-600 font-bold hover:bg-red-50 transition-colors uppercase text-sm cursor-pointer">
                  Recusar
              </button>
              <button className="px-8 py-2.5 rounded-xl bg-green-500 text-white font-bold hover:bg-green-600 shadow-md transition-colors uppercase text-sm cursor-pointer">
                  Aprovar Participação
              </button>
          </div>

      </div>

    </HomeLayout>
  );
}