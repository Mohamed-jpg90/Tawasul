import React from 'react'
import Navbar from '@/components/layout/Navbar'
import HeroSection from '@/components/OurPartners/Herosection'
import TopSectors from '@/components/home/TopSectors'
import OurPhilosophy from '@/components/OurPartners/OurPhilosophy'
import ComanQustion from '@/components/home/ComanQustion'
import ContactForm from '@/components/home/ContactFrom'
import Footer from '@/components/layout/Footer'
import PartnersAccordion from '@/components/OurPartners/PartnersAccordion'
export default function page() {
  return (
    <div>
      <Navbar/>
          
      <HeroSection/>
      <TopSectors/>
      <OurPhilosophy/>
      <PartnersAccordion/>
      <ComanQustion/>
      <ContactForm/>
      <Footer/>

    </div>
  )
}
