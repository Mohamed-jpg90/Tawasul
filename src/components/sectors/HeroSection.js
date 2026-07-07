import React from 'react'
import './sector.css'
import Button from '../shared/Button'
import Image from 'next/image'
import AppBreadcrumb from '../shared/AppBreadcrumb'
export default function HeroSection({
    title,
    subTitle,
    img
}) {
  return (
    <div className='SectorHerosection' >
      <div className='SectorHerosectionContent' >
           <div className='text' > 
            <AppBreadcrumb />
            <div>
                <h2>
                  {title}
                </h2>
            </div>
            <div>
                <p>
                  {subTitle}
                </p>
            </div>
            <div>
                    <Button text={"اتصل بنا"} to='/register' primary ={true}  />
            <Button text={" جرب التواصل "} to='/register' primary ={false}  />
            </div>
        
              </div>
           <div className='image' > 
            
            <Image src={img} alt={title} />

              </div>
      </div>
    </div>
  )
}
