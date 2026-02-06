import { useAuth } from "../../contexts/AuthContext";
import { headerConfig } from "./header.config";

export default function HeaderUser() {
  const { user } = useAuth();
  if (!user) return null;

  const config = headerConfig[user.role];

  const displayName =
    ("fullName" in user && user.fullName) ||
    ("corporateName" in user && user.corporateName) ||
    user.email;

  return (
    <div className="mt-10 flex flex-col items-center gap-2">
      <div
        className={`h-14 w-14 rounded-full ${config.bgColor} flex items-center justify-center font-bold text-white`}
      >
        {displayName.charAt(0).toUpperCase()}
      </div>

      <span className={`font-bold ${config.textColor}`}>{displayName}</span>

      <span className="text-xs text-gray-400">{user.role}</span>
    </div>
  );
}
