import { type ReactNode } from "react";
import AuthIllustration from "../Auth/AuthIllustration";
import Sidebar from "../../common/Sidebar";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="flex min-h-screen sm:flex-row-reverse">
      <Sidebar side="right" />

      <div className="grid flex-1 grid-cols-1 overflow-hidden lg:grid-cols-2">
        {/*esquerdo*/}
        <div className="hidden items-center justify-center bg-[#F5F9FE] lg:flex">
          <AuthIllustration />
        </div>

        {/*direito*/}
        <div className="flex justify-center overflow-y-auto px-6 py-10">
          <div className="w-full max-w-lg">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
