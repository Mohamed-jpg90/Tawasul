"use client";

import { useState } from "react";
import Image from "next/image";
import "./Auth.css";

import business from "../../imag/choose the activity/business.png";
import consulting from "../../imag/choose the activity/consulting.png";
import consulting1 from "../../imag/choose the activity/consulting1.png";
import content from "../../imag/choose the activity/content.png";
import finance from "../../imag/choose the activity/finance.png";
import law from "../../imag/choose the activity/law.png";
import marketing from "../../imag/choose the activity/marketing.png";
import social from "../../imag/choose the activity/social.png";
import tech from "../../imag/choose the activity/tech.png";
import training from "../../imag/choose the activity/training.png";

const BUSINESS_TYPES = [
  {
    id: "marketing",
    title: "شريك التسويق و التحليل",
    image: business,
  },
  {
    id: "content",
    title: "شريك المحتوى",
    image: consulting,
  },
  {
    id: "tech",
    title: "شريك التقنية",
    image: consulting1,
  },
  {
    id: "growth",
    title: "شريك تطوير الأعمال",
    image: content,
  },
  {
    id: "influencers",
    title: "شريك صانع المحتوى والمؤثرين",
    image: finance,
  },
  {
    id: "social",
    title: "شريك إدارة حسابات التواصل الاجتماعي",
    image: marketing,
  },
  {
    id: "training",
    title: "شريك التدريب و التطوير",
    image: law,
  },
  {
    id: "finance",
    title: "شريك المحاسبة و التمويل",
    image: marketing,
  },
  {
    id: "legal",
    title: "شريك القانون",
    image: social,
  },
  {
    id: "consulting",
    title: "شريك الاستشارات",
    image: tech,
  },
  {
    id: "brand",
    title: "شريك العلامات التجارية",
    image: training,
  },
  {
    id: "spaces",
    title: "شريك المساحات و المكاتب",
    image: business,
  },
];

const EMPLOYEE_RANGES = [
  { id: "1-5", label: "1 - 5 موظف" },
  { id: "5-10", label: "5 - 10 موظف" },
  { id: "10-20", label: "10 - 20 موظف" },
  { id: "20+", label: "20 موظف أو أكثر" },
];

export default function ChooseActivity({ onSubmit }) {
  const [selectedType, setSelectedType] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

  const canContinue = Boolean(selectedType && selectedSize);

  const handleContinue = () => {
    if (!canContinue) return;

    if (onSubmit) {
      onSubmit({
        businessType: selectedType,
        employeeRange: selectedSize,
      });
    } else {
      console.log({
        businessType: selectedType,
        employeeRange: selectedSize,
      });
    }
  };

  return (
    <>


      <h1 className="auth-heading">مرحبا بك !</h1>
      <p
        style={{
          textAlign: "right",
          color: "#6B7280",
          marginBottom: "32px",
          lineHeight: "1.8",
        }}
      >
        حدد نوع نشاطك التجاري ضمن النظام لنجهز لك الخدمات التي تناسبك تمامًا
      </p>

      <div className="business-grid">
        {BUSINESS_TYPES.map(({ id, title, image }) => {
          const isSelected = selectedType === id;

          return (
            <button
              key={id}
              type="button"
              className={`business-card ${isSelected ? "business-card-active" : ""
                }`}
              onClick={() => setSelectedType(id)}
            >
              <Image
                src={image}
                alt={title}
                width={42}
                height={42}
              />

              <span>{title}</span>
            </button>
          );
        })}
      </div>

      <div className="auth-field">
        <label className="auth-label">عدد الموظفين</label>

        <div className="employee-buttons">
          {EMPLOYEE_RANGES.map(({ id, label }) => {
            const isSelected = selectedSize === id;

            return (
              <button
                key={id}
                type="button"
                className={`employee-btn ${isSelected ? "employee-btn-active" : ""
                  }`}
                onClick={() => setSelectedSize(id)}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>

      <button
        type="button"
        className="auth-submit"
        disabled={!canContinue}
        onClick={handleContinue}
      >
        متابعة
      </button>
    </>
  );
}