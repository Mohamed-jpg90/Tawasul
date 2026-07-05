import React from 'react'
import ServiceCard from '../shared/ServiceCard'
import  img from '../../imag/serviceImage.png'
import  img2 from '../../imag/serviceImage2.png'
import  img3 from '../../imag/serviceImage3.png'
import  img4 from '../../imag/serviceImage4.png'
import  img5 from '../../imag/serviceImage5.png'
import  img6 from '../../imag/serviceImage6.png'
import './home.css'
export default function  WeServeYou() {
  return (
    <div>
        <div className='sectionText'>
            <h2 className='headerSeciont' >
نخدمك إذا كنت تعمل في قطاع الخدمات            </h2>

      </div>
      <div className='servesCard' >
         <ServiceCard img={img} title={"شركة أو مكتب استشارات"} />
         <ServiceCard img={img2} title={"شركة تسويق أو مقدم خدمة تسويق"} />
         <ServiceCard img={img3} title={"مكتب محاماة أو عيادة"} />
         <ServiceCard img={img4} title={"شركة تسويق عقاري او تطوير عقاري"} />
         <ServiceCard img={img5} title={"شركة تقنية أو برمجة"} />
         <ServiceCard img={img6} title={'اي مجال كمقدم خدمة'} />
      </div> 
      <div className='insSummary' >
        <h2>باختصار إذا عندك خدمة وتبغى تبيعها تــــواصل مصمم خصيصاَ لك</h2>
        </div> 
    </div>
  )
}
