import Image from "next/image";
import { 
  RiImageAddLine, 
  RiSave3Line, 
  RiCalendarEventLine, 
  RiMapPinLine, 
  RiTimeLine,
  RiPencilLine,
  RiBuilding2Line
} from "@remixicon/react";
import HomeLayout from "../../../layout/HomeLayout";
import UniversitySidebar from "../components/UniversitySidebar";

const EventoImgPlaceholder = "https://images.unsplash.com/photo-1524178232363-1fb2b075b655"; 

export default function PerformanceEvents() {
  return (
    <HomeLayout sidebar={<UniversitySidebar />}>
      
      <div className="mb-8 animate-fade-in-down">
        <h1 className="text-3xl font-bold text-purple-600 tracking-tight mb-1">
          Detalhes da Atuação
        </h1>
        <p className="text-gray-500 font-medium">
          Visualize e gerencie os detalhes da participação da universidade.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-purple-500 p-8 w-full">
        
        <div className="flex justify-between items-start mb-6">
          <h2 className="text-xl text-blue-900 font-bold uppercase tracking-wide">
            NOME DO EVENTO
          </h2>
          
          <button className="text-purple-500 hover:text-purple-600 text-sm font-bold transition-colors uppercase flex items-center gap-1 cursor-pointer">
            <RiPencilLine size={18} />
            Editar
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          
          <div className="flex-1 space-y-6">
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-gray-600">
                <div className="p-3 bg-purple-50 text-purple-600 rounded-xl">
                  <RiCalendarEventLine size={24} />
                </div>
                <div>
                  <span className="block text-xs font-bold text-blue-900 uppercase">Data</span> 
                  <span className="text-gray-800 font-medium">00/00/0000</span>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-gray-600">
                <div className="p-3 bg-purple-50 text-purple-600 rounded-xl">
                   <RiTimeLine size={24} />
                </div>
                <div>
                  <span className="block text-xs font-bold text-blue-900 uppercase">Horário</span> 
                  <span className="text-gray-800 font-medium">00:00 - 00:00</span>
                </div>
              </div>

              <div className="flex items-center gap-4 text-gray-600">
                <div className="p-3 bg-purple-50 text-purple-600 rounded-xl">
                   <RiMapPinLine size={24} />
                </div>
                <div>
                  <span className="block text-xs font-bold text-blue-900 uppercase">Local</span> 
                  <span className="text-gray-800 font-medium">Nome da rua, número, bairro, cidade.</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <label className="text-blue-900 font-bold text-sm uppercase block mb-2 ml-1">
                Descrição da Participação
              </label>
              <div className="w-full bg-white border-2 border-gray-100 rounded-xl p-4 text-gray-600 text-sm leading-relaxed text-justify">
                DESCRIÇÃO DE COMO SERÁ A PARTICIPAÇÃO DA UNIVERSIDADE NO EVENTO E OS CURSOS QUE FARÃO PARTE. 
                Texto explicativo sobre o evento, objetivos, público-alvo e outras informações relevantes preenchidas anteriormente.
              </div>
            </div>

            <div>
               <label className="text-blue-900 font-bold text-xs uppercase block mb-2 ml-1">
                 Logomarca da Universidade
               </label>
               <label className="cursor-pointer border-2 border-dashed border-purple-300 text-xs font-bold text-purple-600 px-4 py-3 rounded-xl bg-purple-50 hover:bg-purple-100 transition-colors inline-flex items-center gap-2 w-full justify-center">
                  <RiImageAddLine size={18} />
                  ALTERAR ARQUIVO DE IMAGEM
                  <input type="file" className="hidden" />
               </label>
            </div>
          </div>

          <div className="flex-1">
            <div className="w-full h-96 bg-gray-100 rounded-2xl overflow-hidden border-2 border-gray-100 relative group shadow-inner">
              <Image 
                src={EventoImgPlaceholder} 
                alt="Preview do Evento" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                fill
                sizes="(max-width: 1024px) 100vw, 800px"
                unoptimized
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-sm font-medium flex items-center gap-2">
                  <RiBuilding2Line size={16} /> Imagem do Evento
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-8 pt-6 border-t border-gray-100">
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full shadow-md hover:shadow-lg transition-all active:scale-95 flex items-center gap-2 cursor-pointer">
            Salvar Alterações
            <RiSave3Line size={20} />
          </button>
        </div>

      </div>
    </HomeLayout>
  );
}