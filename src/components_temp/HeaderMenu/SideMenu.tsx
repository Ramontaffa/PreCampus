import axios from "axios";
import { useNavigate } from "react-router-dom";

import { X, LogOut } from "lucide-react";
import { useAuth } from "../../contexts/AuthContext";
import { headerConfig } from "./header.config";
import HeaderNav from "./HeaderNav";
import HeaderUser from "./HeaderUser";
 

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function SideMenu({ open, onClose }: Props) {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  const logout = async () => {
    try {
      await axios.post("auth/logout");
      setUser(null);
      navigate("/login", { replace: true });
    } catch (error) {
      alert(JSON.stringify(error));
    }
  };

  if (!user) return null;

  const config = headerConfig[user.role];

  return (
    <aside
      className={`custom-scrollbar fixed top-0 left-0 z-50 h-full w-45 overflow-y-auto bg-white shadow-xl transition-transform ${
        open ? "translate-x-0" : "-translate-x-full  "
      } xl:translate-x-0 `}
    >
      <HeaderUser />

      <HeaderNav onNavigate={onClose} />

      <div className="flex justify-center py-4">
        <img src={config.logo} className="w-40" />
      </div>

      <div className="mt-auto flex flex-col items-center gap-4 py-6">
        <button onClick={logout} className={`${config.textColor} cursor-pointer`}>
          <LogOut size={22} />
        </button> 
      </div>

      <button
        onClick={onClose}
        className="xl:hidden absolute cursor-pointer top-4 right-4 text-gray-400"
      >
        <X size={22} />
      </button>
    </aside>
  );
}