import Image from "next/image";
import { 
  RiImageAddLine, 
  RiSave3Line, 
  RiCalendarEventLine, 
  RiMapPinLine, 
  RiTimeLine,
  RiPencilLine
} from "@remixicon/react";
import HomeLayout from "../../../layout/HomeLayout";
import SchoolSidebar from "../components/SchoolSidebar";
import EventoImg from "../../../assets/SchoolEventDetails.png"; 

export default function SchoolEventDetails() {
  return (
    <HomeLayout sidebar={<SchoolSidebar />}>
      
      <div className="mb-8 animate-fade-in-down">
        <h1 className="text-3xl font-bold text-green-600 tracking-tight mb-1">
          Detalhes do Evento
        </h1>
        <p className="text-gray-500 font-medium">
          Visualize e edite as informações do evento selecionado.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-green-500 p-8 max-w-5xl">
        
        <div className="flex justify-between items-start mb-6">
          <h2 className="text-xl text-blue-900 font-bold uppercase tracking-wide">
            FEIRA DE CIÊNCIAS 2024
          </h2>
          
          <button className="text-green-500 hover:text-green-600 text-sm font-bold transition-colors uppercase flex items-center gap-1 cursor-pointer">
            <RiPencilLine size={18} />
            Editar
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          
          <div className="flex-1 space-y-6">
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-gray-600">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                  <RiCalendarEventLine size={24} />
                </div>
                <div>
                  <span className="block text-xs font-bold text-blue-900 uppercase">Data</span> 
                  <span className="text-gray-800 font-medium">15/03/2024</span>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-gray-600">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                   <RiTimeLine size={24} />
                </div>
                <div>
                  <span className="block text-xs font-bold text-blue-900 uppercase">Horário</span> 
                  <span className="text-gray-800 font-medium">08:00 - 12:00</span>
                </div>
              </div>

              <div className="flex items-center gap-4 text-gray-600">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                   <RiMapPinLine size={24} />
                </div>
                <div>
                  <span className="block text-xs font-bold text-blue-900 uppercase">Local</span> 
                  <span className="text-gray-800 font-medium">Ginásio Principal</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <label className="text-blue-900 font-bold text-sm uppercase block mb-2 ml-1">Descrição</label>
              <div className="w-full bg-white border-2 border-gray-100 rounded-xl p-4 text-gray-600 text-sm leading-relaxed text-justify">
                Evento anual para apresentação de projetos científicos dos alunos do ensino médio. 
                O objetivo é fomentar a curiosidade científica e a inovação tecnológica. 
                Haverá premiação para os três melhores projetos avaliados pela banca.
              </div>
            </div>

            <div>
               <label className="text-blue-900 font-bold text-xs uppercase block mb-2 ml-1">Imagem de Capa</label>
               <label className="cursor-pointer border-2 border-dashed border-blue-200 text-xs font-bold text-blue-600 px-4 py-3 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors inline-flex items-center gap-2 w-full justify-center">
                  <RiImageAddLine size={18} />
                  ALTERAR ARQUIVO DE IMAGEM
                  <input type="file" className="hidden" />
               </label>
            </div>
          </div>

          <div className="flex-1">
            <div className="w-full h-80 bg-gray-100 rounded-2xl overflow-hidden border-2 border-gray-100 relative group shadow-inner">
              <Image 
                src={EventoImg} 
                alt="Preview do Evento" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                fill
                sizes="(max-width: 1024px) 100vw, 640px"
                priority
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-8 pt-6 border-t border-gray-100">
          <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full shadow-md hover:shadow-lg transition-all active:scale-95 flex items-center gap-2 cursor-pointer">
            Salvar Alterações
            <RiSave3Line size={20} />
          </button>
        </div>

      </div>
    </HomeLayout>
  );
}