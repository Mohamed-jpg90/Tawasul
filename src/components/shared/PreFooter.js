import React from 'react'
import Image from 'next/image'
import img1 from '../../imag/المركز_السعودي_للأعمال 1.png'
import img2 from '../../imag/شعار هيئة الاتصالات وتقنية المعلومات – SVG 1.png'
import './shared.css'
export default function PreFooter() {
  return (
    <div className='preFooter' >
      <div className='preFooterContent' >
        <div className="sectionText">
          <h2 className="headerSeciont">
تــــــواصل معتمد من
          </h2>

        </div>

        <div className="preFooterImage">
          <div className="imageBox">
            <Image
              src={img1}
              alt="المركز السعودي للأعمال"
              fill
              className="image"
            />
          </div>

          <div className="imageBox">
            <Image
              src={img2}
              alt="هيئة الاتصالات وتقنية المعلومات"
              fill
              className="image"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
