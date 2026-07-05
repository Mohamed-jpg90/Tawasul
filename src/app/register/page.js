import AuthLayout from "@/components/auth/AuthLayout";
import RegisterForm from "@/components/auth/RegisterForm";
import Navbar from "@/components/layout/Navbar";
export const metadata = {
  title: "إنشاء حساب جديد | Tawasul",
};

export default function RegisterPage() {
  return (
    <AuthLayout>
        <Navbar/>
      <RegisterForm />
    </AuthLayout>
  );
}