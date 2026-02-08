import Image from "next/image";
import { 
  RiHomeLine, 
  RiCalendarCheckLine, 
  RiListCheck2, 
  RiShieldCheckLine, 
  RiUserFollowLine, 
  RiLogoutBoxLine 
} from "@remixicon/react";
import Logo from "../../../assets/logo.png"; 
import SidebarLink from "../../../layout/components/SidebarLink";

export default function AdminSidebar() {
  return (
    <aside className="w-72 bg-white h-screen flex flex-col border-r border-red-200 shadow-xl fixed left-0 top-0 z-50 font-sans select-none">
      <div className="p-8 flex justify-center mb-4 hover:scale-105 transition-transform duration-300 cursor-pointer">
        <Image 
          src={Logo} 
          alt="PreCampus Admin" 
          className="w-32 h-auto object-contain" 
          width={128}
          height={64}
          priority
        />
      </div>

      <nav className="flex-1 space-y-2 pr-4 overflow-y-auto custom-scrollbar">
        
        <SidebarLink 
          to="/precampus/home" 
          icon={<RiHomeLine size={24} />}
          activeBg="bg-red-600"
          textColor="text-red-700"
        >
          Página Inicial  
        </SidebarLink>

        <SidebarLink 
          to="/precampus/validar-eventos" 
          icon={<RiCalendarCheckLine size={24} />}
          activeBg="bg-red-600"
          textColor="text-red-700"
        >
          Validação de Eventos
        </SidebarLink>

        <SidebarLink 
          to="/precampus/escolas" 
          icon={<RiListCheck2 size={24} />}
          activeBg="bg-red-600"
          textColor="text-red-700"
        >
          Atribuição de Universidades
        </SidebarLink>

        <SidebarLink 
          to="/precampus/validar-universidades" 
          icon={<RiShieldCheckLine size={24} />}
          activeBg="bg-red-600"
          textColor="text-red-700"
        >
          Validação de Universidades
        </SidebarLink>

        <SidebarLink 
          to="/precampus/validar-cadastros" 
          icon={<RiUserFollowLine size={24} />}
          activeBg="bg-red-600"
          textColor="text-red-700"
        >
          Validação de Cadastros
        </SidebarLink>

      </nav>

      <div className="pb-8 pr-4">
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