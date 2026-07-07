"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import AuthTabs from "./AuthTabs";
// import "./AuthForm.css";
import './Auth.css'

const EyeIcon = ({ open }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    {open ? (
      <>
        <path
          d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7Z"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.8" />
      </>
    ) : (
      <path
        d="M3 3l18 18M10.6 10.7a3 3 0 0 0 4.2 4.2M6.2 6.5C3.6 8.2 2 12 2 12s4 7 11 7c1.9 0 3.5-.5 4.8-1.2M9.9 4.2c.7-.1 1.4-.2 2.1-.2 7 0 11 7 11 7-.4.7-1 1.6-1.9 2.6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    )}
  </svg>
);



export default function LoginForm({ onSubmit }) {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onBlur",
    defaultValues: { email: "", password: "" },
  });

  const submitHandler = async (data) => {
    if (onSubmit) {
      await onSubmit(data);
    } else {
      console.log("login data:", data);
    }
  };

  return (
    <>
      <AuthTabs />

      <h1 className="auth-heading">مرحبا بك !</h1>

      <form
        className="auth-form"
        onSubmit={handleSubmit(submitHandler)}
        noValidate
      >
        <div className="auth-field">
          <label className="auth-label" htmlFor="email">
            البريد الإلكتروني
          </label>
          <div className="auth-input-wrap">
            <input
              id="email"
              type="email"
              placeholder="ادخل البريد الإلكتروني"
              className={`auth-input ${errors.email ? "has-error" : ""}`}
              {...register("email", {
                required: "البريد الإلكتروني مطلوب",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "صيغة البريد الإلكتروني غير صحيحة",
                },
              })}
            />
          </div>
          {errors.email && (
            <p className="auth-error-text">{errors.email.message}</p>
          )}
        </div>

        <div className="auth-field">
          <label className="auth-label" htmlFor="password">
            كلمة المرور
          </label>
          <div className="auth-input-wrap">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="ادخل كلمة المرور"
              className={`auth-input with-toggle ${
                errors.password ? "has-error" : ""
              }`}
              {...register("password", {
                required: "كلمة المرور مطلوبة",
              })}
            />
            <button
              type="button"
              className="auth-toggle-visibility"
              onClick={() => setShowPassword((v) => !v)}
              aria-label="إظهار كلمة المرور"
            >
              <EyeIcon open={showPassword} />
            </button>
          </div>
          {errors.password && (
            <p className="auth-error-text">{errors.password.message}</p>
          )}
        </div>

        <div className="auth-inline-row">
          <label className="auth-checkbox-label">
            <input type="checkbox" {...register("remember")} />
            تذكرني
          </label>
          <Link href="/forgot-password" className="auth-link">
            هل نسيت كلمة المرور ؟
          </Link>
        </div>

        <button type="submit" className="auth-submit" disabled={isSubmitting}>
          {isSubmitting ? "جار الدخول..." : "تسجيل دخول"}
        </button>
      </form>

      <div className="auth-divider">او سجل الدخول عبر</div>

      <button type="button" className="auth-social-button">
        {/* <GoogleIcon /> */}
        تسجيل الدخول من خلال جوجل
      </button>
    </>
  );
}