
import React from 'react'
import Image from 'next/image'
import img from '../../imag/OurPartners4.png'
import './OurPartner.css'
export default function OurPhilosophy() {
    return (
        <div className='ourPhilosophy' >
            <div className='ourPhilosophyContent' >
                <div className="sectionText">
                    <h2 className="headerSeciont">
                        فلسفتنا في الشراكة
                    </h2>

                    <p>
                        نحن لا نبحث عن شركاء يكملوننا فقط بل عن شركاء يضيفون بعدًا جديدًا لما نقدمه <br />
                        الشراكة بالنسبة لنا ليست توقيعًا على ورقة أو اتفاقية تعاون مؤقتة هي التزام مشترك لتحقيق رؤية أكبر وأهداف أبعد من المدى القريب
                    </p>
                </div>

            </div>

            <div className='ourPhilosophyText_and_image' >
                <div className='ourPhilosophyText' >
                       <h3>الشراكة معنا تعني</h3>
                       <ul>
                        <li>المشاركة في بناء قصص نجاح حقيقية</li>
                        <li>تطوير حلول مبتكرة تعزز التجربة الرقمية</li>
                        <li> الوصول إلى أسواق جديدة من خلال تكامل الخدمات</li>
                        <li>تحقيق أثر ملموس في حياة العملاء وليس مجرد تقديم خدمات </li>
                        <li>تبادل المعرفة والخبرة لبناء مجتمع أعمال متطور</li>
            
                       </ul>
                </div>
                <div className='ourPhilosophyImage' >
                   <Image src={img}  alt=''/>
                </div>
            </div>



        </div>
    )
}
