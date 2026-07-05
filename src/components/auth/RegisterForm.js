"use client";
import "./Auth.css";

import { useState } from "react";
import { useForm } from "react-hook-form";
import AuthTabs from "./AuthTabs";
// import "./AuthForm.css";

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
      <>
        <path
          d="M3 3l18 18M10.6 10.7a3 3 0 0 0 4.2 4.2M6.2 6.5C3.6 8.2 2 12 2 12s4 7 11 7c1.9 0 3.5-.5 4.8-1.2M9.9 4.2c.7-.1 1.4-.2 2.1-.2 7 0 11 7 11 7-.4.7-1 1.6-1.9 2.6"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </>
    )}
  </svg>
);

export default function RegisterForm({ onSubmit }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      fullName: "",
      companyName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    },
  });

  const password = watch("password");

  const submitHandler = async (data) => {
    if (onSubmit) {
      await onSubmit(data);
    } else {
      console.log("register data:", data);
    }
  };

  return (
    <>
      <AuthTabs />

      <h1 className="auth-heading">مرحبا بك !</h1>
      <p className="auth-subheading">إنشاء حساب جديد و تصفح موقعنا</p>

      <form
        className="auth-form"
        onSubmit={handleSubmit(submitHandler)}
        noValidate
      >
        <div className="auth-form-row">
          <div className="auth-field">
            <label className="auth-label" htmlFor="companyName">
              اسم الشركة
            </label>
            <div className="auth-input-wrap">
              <input
                id="companyName"
                type="text"
                placeholder="ادخل اسم الشركة"
                className={`auth-input ${
                  errors.companyName ? "has-error" : ""
                }`}
                {...register("companyName", {
                  required: "اسم الشركة مطلوب",
                })}
              />
            </div>
            {errors.companyName && (
              <p className="auth-error-text">{errors.companyName.message}</p>
            )}
          </div>

          <div className="auth-field">
            <label className="auth-label" htmlFor="fullName">
              الاسم
            </label>
            <div className="auth-input-wrap">
              <input
                id="fullName"
                type="text"
                placeholder="ادخل الاسم"
                className={`auth-input ${errors.fullName ? "has-error" : ""}`}
                {...register("fullName", { required: "الاسم مطلوب" })}
              />
            </div>
            {errors.fullName && (
              <p className="auth-error-text">{errors.fullName.message}</p>
            )}
          </div>
        </div>

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
          <label className="auth-label" htmlFor="phone">
            رقم الجوال
          </label>
          <div
            className={`auth-phone-group ${errors.phone ? "has-error" : ""}`}
          >
            <span className="auth-phone-code">
              <span className="auth-phone-flag">🇸🇦</span>
              +966
            </span>
            <input
              id="phone"
              type="tel"
              placeholder="50 123 4567"
              className="auth-phone-input"
              {...register("phone", {
                required: "رقم الجوال مطلوب",
                pattern: {
                  value: /^5[0-9]{8}$/,
                  message: "رقم جوال سعودي غير صحيح",
                },
              })}
            />
          </div>
          {errors.phone && (
            <p className="auth-error-text">{errors.phone.message}</p>
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
                minLength: {
                  value: 8,
                  message: "كلمة المرور يجب أن تكون 8 أحرف على الأقل",
                },
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

        <div className="auth-field">
          <label className="auth-label" htmlFor="confirmPassword">
            تاكيد كلمة المرور
          </label>
          <div className="auth-input-wrap">
            <input
              id="confirmPassword"
              type={showConfirm ? "text" : "password"}
              placeholder="ادخل تاكيد كلمة المرور"
              className={`auth-input with-toggle ${
                errors.confirmPassword ? "has-error" : ""
              }`}
              {...register("confirmPassword", {
                required: "يرجى تاكيد كلمة المرور",
                validate: (value) =>
                  value === password || "كلمتا المرور غير متطابقتين",
              })}
            />
            <button
              type="button"
              className="auth-toggle-visibility"
              onClick={() => setShowConfirm((v) => !v)}
              aria-label="إظهار تاكيد كلمة المرور"
            >
              <EyeIcon open={showConfirm} />
            </button>
          </div>
          {errors.confirmPassword && (
            <p className="auth-error-text">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        <button type="submit" className="auth-submit" disabled={isSubmitting}>
          {isSubmitting ? "جار الإنشاء..." : "إنشاء حساب جديد"}
        </button>
      </form>
    </>
  );
}