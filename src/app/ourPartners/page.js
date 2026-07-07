import React from 'react'
import Navbar from '@/components/layout/Navbar'
import HeroSection from '@/components/OurPartners/Herosection'
import TopSectors from '@/components/home/TopSectors'
import OurPhilosophy from '@/components/OurPartners/OurPhilosophy'
import ComanQustion from '@/components/home/ComanQustion'
import ContactForm from '@/components/home/ContactFrom'
import Footer from '@/components/layout/Footer'
import PartnersAccordion from '@/components/OurPartners/PartnersAccordion'
import PreFooter from '@/components/shared/PreFooter'
import ExplinationDiv from '@/components/shared/ExplinationDiv'
import TheValue from '@/components/OurPartners/TheValue'
export default function page() {
  return (
    <div>
      <Navbar/>
          
      <HeroSection/>
      <TopSectors/>
      <OurPhilosophy/>
      <PartnersAccordion/>
      <TheValue/>
      <ComanQustion/>
      <ContactForm/>
      <ExplinationDiv text={"انضم الى شركاء تواصل"} buttom1={"اتصل بنا"} 
      buttom2={"انضم كشريك"} discription={"ابدأ رحلتك مع تواصل "} />
      <PreFooter/>
      
      <Footer/>

    </div>
  )
}
