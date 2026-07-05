 import AuthLayout from "@/components/auth/AuthLayout";
import LoginForm from "@/components/auth/LoginForm";
import Navbar from "@/components/layout/Navbar";

export const metadata = {
  title: "تسجيل دخول | Tawasul",
};

export default function LoginPage() {
  return (
    <AuthLayout>
       <Navbar/> 
      <LoginForm />
    </AuthLayout>
  );
}