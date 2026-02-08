import Image from "next/image";
import { 
  RiHomeLine, 
  RiCalendarEventLine, 
  RiFileList3Line, 
  RiLogoutBoxLine,
  RiUserLine 
} from "@remixicon/react";
import SidebarLink from "../../../layout/components/SidebarLink"; 
import Logo from "../../../assets/logo.png"; 

export default function SchoolSidebar() {
  return (
    <aside className="w-72 bg-white h-screen flex flex-col border-r border-gray-200 shadow-xl fixed left-0 top-0 z-50 font-sans select-none">
      
      {/* --- LOGO --- */}
      <div className="p-8 flex justify-center mb-4 cursor-pointer hover:scale-105 transition-transform duration-300">
        <Image 
          src={Logo} 
          alt="Escola Admin" 
          className="w-32 h-auto object-contain" 
          width={128}
          height={64}
          priority
        />
      </div>

      {/* --- MENU SUPERIOR (Links Principais) --- */}
      <nav className="flex-1 space-y-2 pr-4 overflow-y-auto custom-scrollbar">
        
        <SidebarLink 
          to="/escola/home" 
          icon={<RiHomeLine size={24} />}
          textColor="text-blue-900"
          activeBg="bg-green-500"
        >
          Página Inicial
        </SidebarLink>

        <SidebarLink 
          to="/escola/criar-evento" 
          icon={<RiCalendarEventLine size={24} />}
          textColor="text-blue-900"
          activeBg="bg-green-500"
        >
          Criar Eventos
        </SidebarLink>

        <SidebarLink 
          to="/escola/detalhes" 
          icon={<RiFileList3Line size={24} />}
          textColor="text-blue-900"
          activeBg="bg-green-500"
        >
          Detalhes dos Eventos
        </SidebarLink>

      </nav>

      {/* --- RODAPÉ (Minha Conta + Sair) --- */}
      {/* Adicionei 'space-y-2' para dar um espacinho entre os botões */}
      <div className="pb-8 pr-4 space-y-2">
        
        {/* Movi o 'Minha Conta' para cá, para ficar fixo em baixo */}
        <SidebarLink 
          to="/escola/perfil" 
          icon={<RiUserLine size={24} />}
          textColor="text-blue-900"
          activeBg="bg-green-500"
        >
          Minha Conta
        </SidebarLink>

        <SidebarLink 
          to="/login" 
          icon={<RiLogoutBoxLine size={24} />}
          textColor="text-red-500"
          activeBg="bg-red-500"
        >
          Sair
        </SidebarLink>
      </div>

    </aside>
  );
}