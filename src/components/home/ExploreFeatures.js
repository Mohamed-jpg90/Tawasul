import React from "react";
import ServiceCard from "../shared/ServiceCard";

import img1 from "../../imag/ExploreFeatures/exploreFeatures1.png";
import img2 from "../../imag/ExploreFeatures/exploreFeatures2.png";
import img3 from "../../imag/ExploreFeatures/exploreFeatures3.png";
import img4 from "../../imag/ExploreFeatures/exploreFeatures4.png";
import img5 from "../../imag/ExploreFeatures/exploreFeatures5.png";
import img6 from "../../imag/ExploreFeatures/exploreFeatures6.png";
import img7 from "../../imag/ExploreFeatures/exploreFeatures7.png";
import img8 from "../../imag/ExploreFeatures/exploreFeatures8.png";
import img9 from "../../imag/ExploreFeatures/exploreFeatures9.png";
import img10 from "../../imag/ExploreFeatures/exploreFeatures10.png";
import img11 from "../../imag/ExploreFeatures/exploreFeatures11.png";
import img12 from "../../imag/ExploreFeatures/exploreFeatures12.png";
import img13 from "../../imag/ExploreFeatures/exploreFeatures13.png";
import img14 from "../../imag/ExploreFeatures/exploreFeatures14.png";
import img15 from "../../imag/ExploreFeatures/exploreFeatures15.png";
import img16 from "../../imag/ExploreFeatures/exploreFeatures16.png";
import img17 from "../../imag/ExploreFeatures/exploreFeatures17.png";
import img18 from "../../imag/ExploreFeatures/exploreFeatures18.png";
import img19 from "../../imag/ExploreFeatures/exploreFeatures19.png";
import img20 from "../../imag/ExploreFeatures/exploreFeatures20.png";

const exploreFeatures = [
  {
    id: 1,
    img: img1,
    title: "دعم كامل للغات متعددة",
    description: "فعّل موقعك بلغات مختلفة بسهولة وتواصل مع عملاء من خلفيات متعددة كل ذلك من خلال لوحة تحكم واحدة",
  },
  {
    id: 2,
    img: img2,
    title: "وحدات جاهزة للإطلاق",
    description: "ابدأ مباشرة باستخدام أقسام جاهزة مثل الخدمات المدونة المعرض الأخبار الأسئلة الشائعة آراء العملاء الفريق والمزيد ",
  },
  {
    id: 3,
    img: img3,
    title: "وحدات مخصصة بالكامل",
    description: "صمّم أقسامًا خاصة تناسب مشروعك بتحكم كامل في الحقول والمحتوى والوظائف بدون أي برمجة ",
  },
  { 
    id: 4,
    img: img4,
    title: "تحليل البيانات",
    description: "تابع أداء عملك من خلال تقارير واضحة.",
  },
  {
    id: 5,
    img: img5,
    title: "إدارة المشاريع",
    description: "نظّم مهامك ومشاريع فريقك في مكان واحد.",
  },
  {
    id: 6,
    img: img6,
    title: "إدارة الفواتير",
    description: "أنشئ الفواتير وتابع المدفوعات بسهولة.",
  },
  {
    id: 7,
    img: img7,
    title: "إدارة المنتجات",
    description: "أضف منتجاتك وعدّل بياناتها بسهولة.",
  },
  {
    id: 8,
    img: img8,
    title: "إدارة المستخدمين",
    description: "أضف أعضاء فريقك وحدد صلاحياتهم.",
  },
  {
    id: 9,
    img: img9,
    title: "إرسال الإشعارات",
    description: "أرسل إشعارات مهمة للعملاء والفريق.",
  },
  {
    id: 10,
    img: img10,
    title: "الدعم الفني",
    description: "احصل على مساعدة ودعم عند الحاجة.",
  },
  {
    id: 11,
    img: img11,
    title: "حماية البيانات",
    description: "حافظ على بياناتك باستخدام حماية متقدمة.",
  },
  {
    id: 12,
    img: img12,
    title: "التكامل مع الخدمات",
    description: "اربط منصتك مع الأدوات والخدمات الأخرى.",
  },
  {
    id: 13,
    img: img13,
    title: "لوحة تحكم متقدمة",
    description: "تحكم في جميع أجزاء النظام من مكان واحد.",
  },
  {
    id: 14,
    img: img14,
    title: "إدارة المحتوى",
    description: "أضف وعدّل محتوى موقعك بسرعة.",
  },
  {
    id: 15,
    img: img15,
    title: "متابعة الأداء",
    description: "تابع الأداء والمبيعات والعملاء بسهولة.",
  },
  {
    id: 16,
    img: img16,
    title: "إدارة الحملات",
    description: "خطط للحملات التسويقية وتابع نتائجها.",
  },
  {
    id: 17,
    img: img17,
    title: "التواصل مع العملاء",
    description: "تواصل مع العملاء بطريقة سريعة ومنظمة.",
  },
  {
    id: 18,
    img: img18,
    title: "نظام الصلاحيات",
    description: "حدد صلاحيات كل عضو داخل فريقك.",
  },
  {
    id: 19,
    img: img19,
    title: "نسخ احتياطي",
    description: "احتفظ بنسخة احتياطية من بياناتك.",
  },
  {
    id: 20,
    img: img20,
    title: "تحديثات مستمرة",
    description: "استفد من ميزات وتحسينات جديدة باستمرار.",
  },
];

export default function ExploreFeatures() {
  return (
    <section className="exploreFeatures" dir="rtl">
      <div className="exploreFeaturesContent">
        <div className="sectionText">
          <h2 className="headerSeciont">
            استكشف ميزات تــــواصل المتقدمة
          </h2>

          <p>
            نظام شامل لإنشاء المواقع الإلكترونية وإدارة العلاقات والبيانات، كل
            شيء من مكان واحد.
          </p>
        </div>

        <div className="featuresCard">
          {exploreFeatures.map((feature) => (
            <ServiceCard
              key={feature.id}
              img={feature.img}
              title={feature.title}
              description={feature.description}
            />
          ))}   
       
      </div>

        </div>
     
  
    </section>
  );
}