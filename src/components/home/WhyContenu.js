import React from 'react'
import ServiceCard from '../shared/ServiceCard';
import img1 from '../../imag/whyContinue1.png'
import img2 from '../../imag/whyContinue2.png'
import img3 from '../../imag/whyContinue3.png'
import img4 from '../../imag/whyContinue4.png'
import img5 from '../../imag/whyContinue5.png'
import './home.css'
export default function WhyContenu() {

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
   
        ];
  return (
    <div className='whyContenu' >


          <div className="sectionText">
          <h2 className="headerSeciont">
           لماذا تــــواصل؟
          </h2>

 
        </div>

    <div className='featuresCard' >
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
    <div className='contenu' >
          <div className='dev' > 
            <h2>الرؤية</h2>
            <p>كل صاحب خدمة يستحق نظام ذكي يساعده يكبر مشروعه</p>
             </div>
         <div className='dev' > 
            <h2>رسالتنا</h2>
            <p>
في تواصل نطمح لتقديم أدوات تشغيل رقمية لا تُرهق صاحب المشروع بل تمنحه حرية التركيز على ما يهم النمو

            </p>
             </div>
    </div>      
    </div>
  )
}
