"use client";

import { FiCheck, FiX } from "react-icons/fi";
import "./home.css";

const PLANS = [
  { key: "free", name: "الباقة المجانية", hideOnMobile: true },
  { key: "premium", name: "الباقة المميزة", highlight: false },
  { key: "pro", name: "الباقة الاحترافية" },
];

const FEATURES = [
  { label: "تميز بعلامتك التجارية", free: false, premium: true, pro: true },
  {
    label: "مساحة التخزين غير محدودة",
    free: "10 جيجا بايت",
    premium: "10 جيجا بايت",
    pro: true,
  },
  { label: "عدد زوار غير محدود", free: false, premium: true, pro: true },
  { label: "دومين (نطاق) مجاني", free: false, premium: true, pro: true },
  { label: "لوحة تحكم قوية", free: true, premium: true, pro: true },
  { label: "موظف بـ 1 لغة", free: true, premium: true, pro: true },
  { label: "دعم فني مباشر", free: true, premium: true, pro: true },
  { label: "التحليلات والتقارير", free: false, premium: true, pro: true },
  { label: "إعدادات مشرف الموقع", free: false, premium: true, pro: true },
  { label: "نظام API مرن", free: false, premium: false, pro: true },
  { label: "دعم اللغات المتعددة", free: false, premium: true, pro: true },
  { label: "أقسام بعدد غير محدود", free: false, premium: false, pro: true },
  {
    label: "تحسين ظهور المتجر على محركات البحث (SEO)",
    free: false,
    premium: false,
    pro: true,
  },
  { label: "إدارة المستخدمين والأدوار", free: false, premium: true, pro: true },
  { label: "ملصق المتجر", free: false, premium: false, pro: true },
  { label: "تحسين تصميم CSS", free: false, premium: false, pro: true },
];

function Cell({ value }) {
  if (value === true) {
    return (
      <span className="pctIcon pctIconCheck" aria-label="متوفر">
        <FiCheck size={16} strokeWidth={3} />
      </span>
    );
  }

  if (value === false) {
    return (
      <span className="pctIcon pctIconX" aria-label="غير متوفر">
        <FiX size={16} strokeWidth={3} />
      </span>
    );
  }

  return <span className="pctText">{value}</span>;
}

export default function PricingComparisonTable() {
  return (
    <section className="pctWrap" dir="rtl">
      <h2 className="pctTitle">قارن المزايا و أسعار الباقات بسهولة</h2>

      <div className="pctScroll">
        <table className="pctTable">
          <thead>
            <tr>
              <th scope="col" className="pctTh pctThLabel">
                المزايا الأساسية
              </th>

              {PLANS.map((plan) => (
                <th
                  key={plan.key}
                  scope="col"
                  className={[
                    "pctTh",
                    plan.highlight ? "pctThHighlight" : "",
                    plan.hideOnMobile ? "pctHideMobile" : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  {/* {plan.highlight && (
                    <span className="pctBadge">الأكثر طلبًا</span>
                  )} */}

                  {plan.name}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {FEATURES.map((row, i) => (
              <tr key={row.label} className={i % 2 === 1 ? "pctRowAlt" : ""}>
                <th scope="row" className="pctTd pctTdLabel">
                  {row.label}
                </th>

                <td className="pctTd pctHideMobile">
                  <Cell value={row.free} />
                </td>

                <td className="pctTd ">
                  <Cell value={row.premium} />
                </td>

                <td className="pctTd">
                  <Cell value={row.pro} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}