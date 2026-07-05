import React from 'react'
import { sectors } from '../data'
import { notFound } from 'next/navigation'

import TopSectors from '@/components/home/TopSectors'
import HeroAboutSection from '@/components/home/HeroAboutSecion'
import ComanQustion from '@/components/home/ComanQustion'
import ContactForm from '@/components/home/ContactFrom'
import Footer from '@/components/layout/Footer'
import ExplinationDiv from '@/components/shared/ExplinationDiv'
import Navbar from '@/components/layout/Navbar'
import HeroSection from '@/components/sectors/HeroSection'
import HowTawasulServesYou from '@/components/sectors/HowTawasulServYou'
import WhySectorsUseTwasul from '@/components/sectors/WhySectorsUseTwasul'
import Card from '@/components/shared/Card'
import img from '../../../imag/sector8.png'
import PreFooter from '@/components/shared/PreFooter'
export default async function SectorPage({ params }) {
  const { sectorSlug } = await params
  const sector = sectors[sectorSlug]
  if (!sector) {
    notFound()
  }
  return (
    <div>
      <Navbar />
      <HeroSection title={sector.herosection.heroTitle} subTitle={sector.herosection.heroSupTitle} img={sector.herosection.heroImage} />
      <TopSectors />
      <HowTawasulServesYou tabs={sector.servicesSection.tabs} />
      <WhySectorsUseTwasul title='لماذا الشركات الاستشارية تختار "تـــــواصل"؟' point1={"لأنك تحتاج لنظام يحرّك أعمالك، مو مجرد موقع إلكتروني"} point2={"لأن عملك مبني على الثقة وتواصل يعزز حضورك الرقمي بثقة"}
        point3={"لأن كل دقيقة تقضيها في إدخال بيانات أو تحديث محتوى    وفرناها لك بأدوات ذكية وسهلة"} point4={"لأنك بحاجة لتحويل خبرتك إلى تجربة عملاء مميزة تديرها بأقل مجهود وأعلى تأثير"}
      />
      <Card headtext='ابدأ موقعك الإلكتروني وCRM خلال دقائقوركّز على تقديم استشاراتك ودع "تواصل" يتكفل بالباقي!'
        right ={false} 
        img={img}
        backgroundColor=' #3B5DC80D'
      />
      <ComanQustion />
      <ContactForm />
      <ExplinationDiv text={"اشترك في نظام تواصل    "}
      discription={"ابدأ رحلتك مع تواصل وارتقِ بمشروعك إلى اَفاق جديدة من الاحترافية والنمو"}
        buttom1={"اتصل بنا"}
        buttom2={"جرب تواصل"}
      />
      <PreFooter/>
      <Footer />
    </div>
  )
}
