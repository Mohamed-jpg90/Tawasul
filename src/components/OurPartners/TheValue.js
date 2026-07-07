
import React from 'react'
import Image from 'next/image'
import img1 from '../../imag/OurPartners1.png'
import img2 from '../../imag/OurPartners2.png'
import './OurPartner.css'
export default function TheValue() {
  return (
    <div className='theValue' >
      <div className='theValueContent' >
            <div className='theValueCards'  >
             <div className="cardItemsImage">
                <Image src={img1} alt='' fill />
             </div>
             <div className="cardItemstext">
                <h2>كل شريك نعمل معه يضيف بُعدًا جديدًا لفلسفة عملنا</h2>
                <ul>
                    <li> 
                        المحاسب يدير الأرقام لكننا نحولها إلى قرارات استراتيجية
                         </li>
                    <li>
                        المحامي يحمي الحقوق ونحن نضمن استدامة النجاح
                    </li>
                    <li>
                        المصمم يرسم الهوية ونحن نحولها إلى حضور لا يُنسى
                    </li>
                    <li>
                        صانع المحتوى يكتب القصص ونحن نوصلها إلى العالم
                    </li>
                    <li>
                        المؤثر ينشر الرسالة ونحن نحولها إلى حركة
                    </li>
                    <li>
                        مدير الحسابات يتفاعل مع العملاء ونحن نحول العلاقة إلى ولاء مستدام
                    </li>
                    <li>
                        المطور يبني النظام ونحن نحوله إلى تجربة استثنائية
                    </li>
                </ul>
             </div>
            </div>
            <div className='theValueCards' >
             <div className="cardItemstext">
                <h2>معًا نصنع منظومة متكاملة</h2>
                <p>الشراكة معنا ليست مجرد تعاون مؤقت بل التزام طويل الأمد ببناء شبكة مستدامة من الخبرات التي تعزز من قيمة ما نقدمه لعملائنا وتخلق تأثيرًا حقيقيًا في السوق

                    إذا كنت متخصصًا في أي مجال يخدم قطاع الأعمال والخدمات وكنت تؤمن بقوة التعاون فنحن نرحب بانضمامك إلى منظومتنا كن شريكًا في النجاح كن شريكًا في التغيير
                </p>
             </div>
             <div className="cardItemsImage">
                <Image src={img2} alt='' fill />

             </div>   
            </div>
      </div>
    </div>
  )
}
