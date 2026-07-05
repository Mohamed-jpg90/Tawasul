"use client";
import "./Auth.css";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AuthTabs() {
  const pathname = usePathname();
  const isRegister = pathname?.startsWith("/register");

  return (
    <div className="auth-tabs">
      <Link
        href="/register"
        className={`auth-tab ${isRegister ? "active" : ""}`}
      >
        إنشاء حساب جديد
      </Link>
      <Link
        href="/login"
        className={`auth-tab ${!isRegister ? "active" : ""}`}
      >
        تسجيل دخول
      </Link>
    </div>
  );
}