import { LoginForm } from "@/components_temp/layouts/Login/LoginForm";
import LoginHeader from "@/components_temp/layouts/Login/LoginHeader";
import AuthLayout from "@/components_temp/layouts/Auth/AuthLayout";

export default function LoginPage() {
  return (
    <AuthLayout>
      <LoginHeader />
      <LoginForm />
    </AuthLayout>
  );
}
