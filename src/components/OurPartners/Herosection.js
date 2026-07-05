import React from 'react'
// import '../sectors/sector.css'
import Button from '../shared/Button'
import Image from 'next/image'
import img from '../../imag/OurPartners.png'
import img1 from '../../imag/OurPartners1.png'
import img2 from '../../imag/OurPartners2.png'
import img3 from '../../imag/OurPartners3.png'
import './OurPartner.css'
export default function HeroSection({
    title,
    subTitle,
    // img
}) {
  return (
    <div className='ourPartnerHerosection' >
      <div className='ourPartnerHerosectionContent' style={{backgroundColor:" #3B5DC80D "}} >
           <div className='text' > 
            <div>
                <h2>
                 نؤمن أن الشراكات ليست مجرد تعاون... إنها استثمار في المستقبل
                </h2>
            </div>
            <div>
                <p>
                 الشراكة في تواصل تعني خلق منظومة متكاملة يجتمع فيها أصحاب الخبرات ورواد الابتكار والمبدعون في مختلف المجالات كل شريك هو ركيزة أساسية في تقديم قيمة مضافة وتحقيق النجاح المستدام لعملائنا
                </p>
            </div>
            <div className=' ourPartnerButton' >
                    <Button text={"اتصل بنا"} to='/register' primary ={true}  />
            <Button text={" جرب التواصل "} to='/register' primary ={false}  />
            </div>

            <div>
                 
            </div>
        
              </div>
           <div className='image' > 
            
            <Image src={img} alt="" />
            <Image src={img1} alt="" className='absiluteImage img1' />
            <Image src={img2} alt="" className='absiluteImage img2' />
            <Image src={img3} alt="" className='absiluteImage img3' />

              </div>
      </div>
    </div>
  )
}
