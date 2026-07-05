import React from 'react'
import Card from '../shared/Card'
import img from '../../imag/cardImage.png'
import img2 from '../../imag/cardImage2.png'
export default function HwoToBenefit() {
    return (
        <div className='HowToBenefit'>

            <div className='HowtoBenefitContent' >

                <div className='sectionText'>
                    <h2 className='headerSeciont' >
                        كيف يمكنك الاستفادة من برنامج تــــــواصل
                    </h2>
                    <p>حلولنا التقنية المتكاملة لمساعدك على تطوير شركتك</p>
                </div>
                <br />
                <Card right={false} headnumber="01" headtext="إنشاء موقع إلكتروني خلال دقائق"
                    subtitles={[
                        "واجهات جاهزة وقابلة للتخصيص",
                        "صفحة تعريف بالخدمات والباقات",
                        "قسم الأسئلة الشائعة ونموذج تواصل مباشر",
                        "تصميم متجاوب يظهر بشكل مثالي على الجوال والكمبيوتر",
                    ]}
                    img={img}
                />
                <Card right={true} headnumber="02" headtext="إنشاء موقع إلكتروني خلال دقائق"
                    subtitles={[
                        "واجهات جاهزة وقابلة للتخصيص",
                        "صفحة تعريف بالخدمات والباقات",
                        "قسم الأسئلة الشائعة ونموذج تواصل مباشر",
                        "تصميم متجاوب يظهر بشكل مثالي على الجوال والكمبيوتر",
                    ]}
                     img={img2}
                />
            </div>


        </div>
    )
}
