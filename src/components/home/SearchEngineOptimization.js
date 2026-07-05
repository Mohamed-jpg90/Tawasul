import React from "react";
import Image from "next/image";

import img1 from "../../imag/ExploreFeatures/search engine image.png";
import img2 from '../../imag/ExploreFeatures/search engine image2.png'
const seoCards = [
  {
    id: 1,
    image: img1,
    imagePosition: "right",
    items: [
      {
        title: "01 روابط URL مخصصة لكل صفحة",
        description:
          "خلي رابط كل صفحة يعكس محتواها ويكون سهل الحفظ والقراءة.",
      },
      {
        title: "02 عناوين SEO احترافية",
        description:
          "اكتب عنوان يظهر بوضوح في نتائج البحث ويشجّع الناس يضغطون عليه.",
      },
      {
        title: "03 وصف لكل صفحة يظهر في جوجل",
        description: "أضف وصف مختصر وجذّاب يساعد في رفع معدل النقرات.",
      },
      {
        title: "04 كلمات مفتاحية ذكية",
        description:
          "حدد الكلمات المفتاحية المناسبة عشان محركات البحث تفهمك وتوصلك للعميل الصح.",
      },
    ],
  },
  {
    id: 2,
    image: img2,
    imagePosition: "left",
    items: [
      {
        title: "05 خريطة موقع تلقائية",
        description:
          "يساعد محركات البحث على اكتشاف صفحات موقعك وفهم هيكل المحتوى.",
      },
      {
        title: "06 تصميم متجاوب للجوال",
        description:
          "موقعك يظهر بشكل ممتاز على الجوال والتابلت وأجهزة الكمبيوتر.",
      },
      {
        title: "07 سرعة تحميل أفضل",
        description:
          "صفحات سريعة تساعد على تحسين تجربة الزائر وفرصة ظهورك في البحث.",
      },
      {
        title: "08 متابعة أداء الموقع",
        description:
          "تابع أداء صفحاتك واعرف المحتوى الذي يجذب الزوار بشكل أكبر.",
      },
    ],
  },
];

export default function SearchEngineOptimization() {
  return (
    <>
    <section className="searchEngineOptimization" dir="rtl">
      <div className="searchEngineOptimizationContent">
        <div className="sectionText">
          <h2 className="headerSeciont">
            تحسين محركات البحث (SEO) خلّي موقعك يطلع أول
          </h2>

          <p>
            في تواصل ما يكفي تسوي موقع... لازم يلقونك الناس
            <br />
            لهذا جهّزنا لك أدوات تحسين ظهور موقعك في نتائج البحث بدون ما تحتاج
            خبير SEO.
          </p>
        </div>

        <div className="seoCardsContainer">
            <h2>أبرز ميزات تحسين الظهور في محركات البحث</h2>
          {seoCards.map((card) => (
            <div
              className={`searchEngineCard ${
                card.imagePosition === "left" ? "reverseCard" : ""
              }`}
              key={card.id}
            >    
               <div className="cardtext">
                {card.items.map((item) => (
                  <div className="seoTextItem" key={item.title}>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>

              <div className="cardImage">
                <Image src={card.image} alt="تحسين محركات البحث" />
              </div>

       
            </div>
          ))}
        </div>
      </div>

    </section>  
    
    <div className='insSummary' >
        <h2>مع كل هالميزات موقعك على "تــــواصل" جاهز للظهور وجاهز للنمو</h2>
        </div> 
        </>
  );
}