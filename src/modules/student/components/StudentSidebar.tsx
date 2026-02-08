import Image from "next/image";
import { 
  RiHomeLine, 
  RiCalendarEventLine, 
  RiUserLine, 
  RiLogoutBoxLine 
} from "@remixicon/react";
import Logo from "../../../assets/logo.png"; 
import SidebarLink from "../../../layout/components/SidebarLink"; 
import { currentStudentMock } from "../data/usersMock"; 

export default function StudentSidebar() {
  return (
    <aside
      className="fixed left-0 top-0 z-50 flex h-screen w-72 flex-col border-r border-slate-200 bg-white/95 px-4 pb-6 pt-5 shadow-md backdrop-blur"
      aria-label="Navegação do aluno"
    >
      <div className="mb-6 flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50/70 px-4 py-3">
        <Image
          src={Logo}
          alt="PreCampus"
          className="h-10 w-auto object-contain"
          width={120}
          height={40}
          priority
        />
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-orange-500">
            Painel do Aluno
          </p>
          <p className="text-sm font-semibold text-slate-800">{currentStudentMock.name}</p>
        </div>
      </div>

      <nav className="custom-scrollbar flex-1 space-y-2 overflow-y-auto pr-1">
        <SidebarLink
          to="/estudante/home"
          icon={<RiHomeLine size={22} />}
          activeBg="bg-orange-500"
          textColor="text-slate-700"
        >
          Início
        </SidebarLink>

        <SidebarLink
          to="/estudante/meus-eventos"
          icon={<RiCalendarEventLine size={22} />}
          activeBg="bg-orange-500"
          textColor="text-slate-700"
        >
          Meus Eventos
        </SidebarLink>
      </nav>

      <div className="mt-4 space-y-2 border-t border-slate-100 pt-4">
        <SidebarLink
          to="/estudante/perfil"
          icon={<RiUserLine size={22} />}
          activeBg="bg-orange-500"
          textColor="text-slate-700"
        >
          Meu Perfil
        </SidebarLink>

        <SidebarLink
          to="/login"
          icon={<RiLogoutBoxLine size={22} />}
          textColor="text-red-600"
          activeBg="bg-red-500"
        >
          Sair
        </SidebarLink>
      </div>
    </aside>
  );
}