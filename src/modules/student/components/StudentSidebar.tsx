import Image from "next/image";
import { 
  RiHomeLine, 
  RiCalendarEventLine, 
  RiUserLine, 
  RiLogoutBoxLine 
} from "@remixicon/react";
import Logo from "../../../assets/logo.png"; 
import SidebarLink from "../../../layout/components/SidebarLink"; 

export default function StudentSidebar() {
  return (
    <aside className="w-72 bg-white h-screen flex flex-col border-r border-gray-200 shadow-xl fixed left-0 top-0 z-50 font-sans select-none">
      
      <div className="p-8 flex justify-center mb-4 hover:scale-105 transition-transform duration-300 cursor-pointer">
        <Image src={Logo} alt="PreCampus" className="w-32 h-auto object-contain" width={128} height={64} priority />
      </div>

      <nav className="flex-1 space-y-2 pr-4 overflow-y-auto custom-scrollbar">
        
        <SidebarLink 
          to="/estudante/home" 
          icon={<RiHomeLine size={24} />}
          activeBg="bg-orange-500"
          textColor="text-orange-500"
        >
          Início
        </SidebarLink>

        <SidebarLink 
          to="/estudante/meus-eventos" 
          icon={<RiCalendarEventLine size={24} />}
          activeBg="bg-orange-500"
          textColor="text-orange-500"
        >
          Meus Eventos
        </SidebarLink>

        

      </nav>
      <SidebarLink 
          to="/estudante/perfil" 
          icon={<RiUserLine size={24} />}
          activeBg="bg-orange-500"
          textColor="text-orange-500"
        >
          Meu Perfil
        </SidebarLink>

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