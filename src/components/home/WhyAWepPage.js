import React from 'react'
import Image from 'next/image'
import img  from '../../imag/whyAWepPageSection.png'
import './home.css'
export default function WhyAWepPage() {
  return (
    <>
    <div className='whyWepPage' >
      <div className='sectionText'>
            <h2 className='headerSeciont' >
               لماذا تحتاج إلى موقع إلكتروني ونظام CRM؟  
            </h2>
            <p>في عصر السرعة غيابك الرقمي يساوي غيابك من السوق</p>
      </div>
      <div className='sectionImage' >
         <Image src={img}alt='why'/>
      </div>
    </div>
<div className="numpers">
  <div className="numberItem">
    <h2>+10,000</h2>
    <p>عميل ناجح</p>
  </div>

  <span className="herezontalLine"></span>

  <div className="numberItem">
    <h2>+500</h2>
    <p>مشروع مكتمل</p>
  </div>

  <span className="herezontalLine"></span>

  <div className="numberItem">
    <h2>+20</h2>
    <p>قطاع مختلف</p>
  </div>

  <span className="herezontalLine"></span>

  <div className="numberItem">
    <h2>+5</h2>
    <p>سنوات خبرة</p>
  </div>
</div>
    </>
  )
}
