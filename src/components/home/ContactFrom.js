"use client";

import Image from "next/image";
import { useForm } from "react-hook-form";
import img from '../../imag/السعوديه.png'
import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaXTwitter,
  FaTiktok,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa6";
import './home.css'
const socialLinks = [
  { icon: FaInstagram, href: "#", label: "Instagram" },
  { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
  { icon: FaFacebookF, href: "#", label: "Facebook" },
  { icon: FaXTwitter, href: "#", label: "X" },
  { icon: FaTiktok, href: "#", label: "TikTok" },
];

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);

    reset();
  };

  return (
    <section className="contactSection" dir="rtl">

      <div className="contactWrapper">  
        
           <div className="contactInfo">
          <h2 className="infoTitle">اشترك في نظام تواصل</h2>

          <p className="infoText">
            ابدأ رحلتك مع تواصل وارتقِ بمشروعك إلى آفاق جديدة من الاحترافية
            والنمو
          </p>

          <h3 className="infoLabel">حسابات التواصل الاجتماعي</h3>

          <div className="socialRow">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="socialIcon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>

          <h3 className="infoLabel">تواصل عبر الهاتف</h3>

          <a href="tel:+966565653252" className="infoLink">
            <span>+966565653252</span>
            <FaPhone size={12} />
          </a>

          <h3 className="infoLabel">تواصل عبر البريد الالكتروني</h3>

          <a
            href="mailto:wecare@Thefirstagencysa.com"
            className="infoLink underlineLink"
          >
            <span>wecare@Thefirstagencysa.com</span>
            <FaEnvelope size={12} />
          </a>
        </div>
        <form className="contactForm" onSubmit={handleSubmit(onSubmit)}>
          <div className="formGroup">
            <input
              type="text"
              placeholder="الاسم"
              className={`formInput ${errors.name ? "inputError" : ""}`}
              {...register("name", {
                required: "الاسم مطلوب",
              })}
            />

            {errors.name && (
              <span className="errorText">{errors.name.message}</span>
            )}
          </div>

          <div className="formGroup">
            <div className={`phoneInput ${errors.phone ? "inputError" : ""}`}>
             
              <div className="phoneCode">
                <Image
                  src={img}
                  alt="علم السعودية"
                  width={20}
                  height={15}
                  className="flagIcon"
                />

                <span>+966</span>
              </div>
               <input
                type="tel"
                placeholder="05xxxxxxxx"
                className="phoneNumberField"
                {...register("phone", {
                  required: "رقم الهاتف مطلوب",
                  pattern: {
                    value: /^05[0-9]{8}$/,
                    message: "رقم الهاتف غير صحيح",
                  },
                })}
              />

              <span className="phoneDivider" />

            </div>

            {errors.phone && (
              <span className="errorText">{errors.phone.message}</span>
            )}
          </div>

          <div className="formGroup">
            <input
              type="email"
              placeholder="البريد الالكتروني"
              className={`formInput ${errors.email ? "inputError" : ""}`}
              {...register("email", {
                required: "البريد الالكتروني مطلوب",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "البريد الالكتروني غير صحيح",
                },
              })}
            />

            {errors.email && (
              <span className="errorText">{errors.email.message}</span>
            )}
          </div>

          <div className="formGroup">
            <input
              type="text"
              placeholder="المدينة"
              className={`formInput ${errors.city ? "inputError" : ""}`}
              {...register("city", {
                required: "المدينة مطلوبة",
              })}
            />

            {errors.city && (
              <span className="errorText">{errors.city.message}</span>
            )}
          </div>

          <div className="formGroup">
            <input
              type="text"
              placeholder="اسم الشركة"
              className={`formInput ${errors.company ? "inputError" : ""}`}
              {...register("company", {
                required: "اسم الشركة مطلوب",
              })}
            />

            {errors.company && (
              <span className="errorText">{errors.company.message}</span>
            )}
          </div>

          <div className="formGroup">
            <textarea
              placeholder="الرسالة"
              rows={5}
              className={`formInput formTextarea ${
                errors.message ? "inputError" : ""
              }`}
              {...register("message", {
                required: "الرسالة مطلوبة",
              })}
            />

            {errors.message && (
              <span className="errorText">{errors.message.message}</span>
            )}
          </div>

          <button
            type="submit"
            className="primaryButton submitButton"
            disabled={isSubmitting}
          >
            {isSubmitting ? "جاري الإرسال..." : "تواصل معنا"}
          </button>
        </form>

   
      </div>
    </section>
  );
}