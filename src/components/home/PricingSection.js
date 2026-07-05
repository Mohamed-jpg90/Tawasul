"use client";

import React, { useState } from "react";
import PriceingCard from "../shared/PriceingCard";
import "./home.css";

const PLANS = {
  monthly: [
    {
      title: "الباقة الاحترافية",
      subtitle: "الأمثل لشركات والمؤسسات",
      price: 499,
      monthely: true,
      buttonText: "اختر الباقة الاحترافية",
      primary: false,
      feattures: [
        "فواتير مميزة بعلامتك التجارية",
        "مساحة تخزين غير محدودة",
        "عدد زوار غير محدود",
        "تحسين التصميم CSS",
        "دعم فني متاح",
        "دومين (نطاق) مجاني",
        "التحليلات والتقارير",
        "إعدادات مشرف الموقع",
        "نظام API مرن",
        "دعم اللغات المتعددة",
        "أقسام بعد غير محدود",
        "تحسين ظهور المتجر على محركات البحث (SEO)",
        "إدارة المستخدمين والأدوار",
        "لوحة تحكم قوية",
        "منشئ المدونة",
      ],
    },
    {
      title: "الباقة المميزة",
      subtitle: "للتجار والأفراد",
      price: 299,
      monthely: true,
      buttonText: "اختر الباقة المميزة",
      primary: true,
      badge: "الأكثر طلبا",
      feattures: [
        "فواتير مميزة بعلامتك التجارية",
        "مساحة تخزين 10 جيجا بايت",
        "إطلاق زوار الموقع بلا حدود",
        "لوحة تحكم قوية",
        "دعم فني متاح",
        "التحليلات والتقارير",
        "دعم اللغات المتعددة",
        "أقسام بعد غير محدود",
        "إعدادات مشرف الموقع",
        "إدارة المستخدمين والأدوار",
      ],
    },
    {
      title: "الباقة المجانية",
      subtitle: "للمبتدئين والراغبين بالتجربة",
      price: "مجانا",
      monthely: false,
      buttonText: "جرب مجانا",
      primary: false,
      feattures: [
        "مساحة تخزين 10 ميجا",
        "إطلاق زوار الموقع 5 ميجا بايت",
        "عدد صفحات الموقع 1",
        "مواقع بـ 1 لغة",
      ],
      note: "14 يوما تجربة مجانية",
    },
  ],
  yearly: [
    {
      title: "الباقة الاحترافية",
      subtitle: "الأمثل لشركات والمؤسسات",
      price: 4990,
      monthely: true,
      buttonText: "اختر الباقة الاحترافية",
      primary: false,
      feattures: [
        "فواتير مميزة بعلامتك التجارية",
        "مساحة تخزين غير محدودة",
        "عدد زوار غير محدود",
        "تحسين التصميم CSS",
        "دعم فني متاح",
        "دومين (نطاق) مجاني",
        "التحليلات والتقارير",
        "إعدادات مشرف الموقع",
        "نظام API مرن",
        "دعم اللغات المتعددة",
        "أقسام بعد غير محدود",
        "تحسين ظهور المتجر على محركات البحث (SEO)",
        "إدارة المستخدمين والأدوار",
        "لوحة تحكم قوية",
        "منشئ المدونة",
      ],
    },
    {
      title: "الباقة المميزة",
      subtitle: "للتجار والأفراد",
      price: 2990,
      monthely: true,
      buttonText: "اختر الباقة المميزة",
      primary: true,
      badge: "الأكثر طلبا",
      feattures: [
        "فواتير مميزة بعلامتك التجارية",
        "مساحة تخزين 10 جيجا بايت",
        "إطلاق زوار الموقع بلا حدود",
        "لوحة تحكم قوية",
        "دعم فني متاح",
        "التحليلات والتقارير",
        "دعم اللغات المتعددة",
        "أقسام بعد غير محدود",
        "إعدادات مشرف الموقع",
        "إدارة المستخدمين والأدوار",
      ],
    },
    {
      title: "الباقة المجانية",
      subtitle: "للمبتدئين والراغبين بالتجربة",
      price: "مجانا",
      monthely: false,
      buttonText: "جرب مجانا",
      primary: false,
      feattures: [
        "مساحة تخزين 10 ميجا",
        "إطلاق زوار الموقع 5 ميجا بايت",
        "عدد صفحات الموقع 1",
        "مواقع بـ 1 لغة",
      ],
      note: "14 يوما تجربة مجانية",
    },
  ],
};

export default function PricingSection() {
  const [billingCycle, setBillingCycle] = useState("monthly");

  const plans = PLANS[billingCycle];

  return (
    <section className="pricingSection" >

              <div className="sectionText">
          <h2 className="headerSeciont">
            استكشف ميزات تــــواصل المتقدمة
          </h2>

          <p>
            نظام شامل لإنشاء المواقع الإلكترونية وإدارة العلاقات والبيانات، كل
            شيء من مكان واحد.
          </p>
        </div>

      <div className="billingToggle">
        <button
          type="button"
          className={billingCycle === "yearly" ? "toggleBtn toggleBtnActive" : "toggleBtn"}
          onClick={() => setBillingCycle("yearly")}
        >
          باقات سنوية
        </button>
        <button
          type="button"
          className={billingCycle === "monthly" ? "toggleBtn toggleBtnActive" : "toggleBtn"}
          onClick={() => setBillingCycle("monthly")}
        >
          باقات شهرية
        </button>
      </div>

      <div className="pricingGrid">
        {plans.map((plan, index) => (
          <PriceingCard
            key={index}
            primary={plan.primary}
            title={plan.title}
            subtitle={plan.subtitle}
            price={plan.price}
            monthely={plan.monthely}
            feattures={plan.feattures}
            buttonText={plan.buttonText}
            badge={plan.badge}
          />
        ))}
      </div>

      <button type="button" className="compareLink">
        مقارنة الباقات
      </button>
    </section>
  );
}