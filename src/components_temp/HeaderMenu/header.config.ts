import {
  Calendar,
  User,
  BarChart3,
  Plus,
  CalendarCheck,
} from "lucide-react";

import LogoStudent from "../../assets/img/logoPreCampus.png";
import LogoInstitution from "../../assets/img/logoInstitution.png";
import LogoAdmin from "../../assets/img/logoAdm.png";

export type Role = "student" | "school" | "university" | "admin";

export const headerConfig = {
  student: {
    logo: LogoStudent,
    bgColor: "bg-student",
    textColor: "text-student",
    menu: [
      { name: "Eventos", icon: Calendar, to: "/" },
      { name: "Perfil", icon: User, to: "/profile" },
      { name: "Meus Eventos", icon: CalendarCheck, to: "/my-events" },
    ],
  },

  school: {
    logo: LogoInstitution,
    bgColor: "bg-instituicao",
    textColor: "text-instituicao",
    menu: [
      { name: "Eventos", icon: Calendar, to: "/" },
      { name: "Perfil", icon: User, to: "/profile" },
      { name: "Criar Evento", icon: Plus, to: "/events/create" },
    ],
  },

  university: {
    logo: LogoInstitution,
    bgColor: "bg-instituicao",
    textColor: "text-instituicao",
    menu: [
      { name: "Dashboard", icon: BarChart3, to: "/dashboard" },
      { name: "Perfil", icon: User, to: "/profile" },
      { name: "Criar Evento", icon: Plus, to: "/events/create" },
    ],
  },

  admin: {
    logo: LogoAdmin,
    bgColor: "bg-admin",
    textColor: "text-admin",
    menu: [{ name: "Dashboard", icon: BarChart3, to: "/dashboard" }],
  },
};
