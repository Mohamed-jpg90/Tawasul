import React from 'react'
import Image from 'next/image'
import ServiceCard from '../shared/ServiceCard'
import img1 from '../../imag/ExploreFeatures/exploreFeatures21.png'
import img2 from '../../imag/ExploreFeatures/exploreFeatures22.png'
import img3 from '../../imag/ExploreFeatures/exploreFeatures23.png'
import img4 from '../../imag/ExploreFeatures/exploreFeatures24.png'
import img5 from '../../imag/ExploreFeatures/exploreFeatures25.png'
import img6 from '../../imag/ExploreFeatures/exploreFeatures26.png'
import img7 from '../../imag/ExploreFeatures/exploreFeatures27.png'
import img8 from '../../imag/ExploreFeatures/exploreFeatures28.png'
import img9 from '../../imag/ExploreFeatures/exploreFeatures29.png'
export default function AllToolsyouNeed() {
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
      
    ];
  return (
    <div className='allToolsyouNeed'>
        <div className='allToolsyouNeedContent' >
       <div className="sectionText">
          <h2 className="headerSeciont">
            استكشف ميزات تــــواصل المتقدمة
          </h2>

          <p>
            نظام شامل لإنشاء المواقع الإلكترونية وإدارة العلاقات والبيانات، كل
            شيء من مكان واحد.
          </p>
        </div>


<div className='featuresCard'>
    {
        exploreFeatures.map((feature)=>(
                <ServiceCard
              key={feature.id}
              img={feature.img}
              title={feature.title}
              description={feature.description}
            />
        )) }
   


</div>

        </div>
       <div className='insSummary' >
        <h2>باختصار إذا عندك خدمة وتبغى تبيعها تــــواصل مصمم خصيصاَ لك</h2>
        </div>   

    </div>
  )
}
