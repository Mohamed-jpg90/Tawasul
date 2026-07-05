import React from 'react'
import Navbar from '@/components/layout/Navbar'
import HeroContactSection from '@/components/home/HeroContactSection'
import TopSectors from "@/components/home/TopSectors";
import ComanQustion from '@/components/home/ComanQustion';
import ContactForm from '@/components/home/ContactFrom';
import Footer from '@/components/layout/Footer';
import ExplinationDiv from '@/components/shared/ExplinationDiv';
import WhyContenu from '@/components/home/WhyContenu';
import PreFooter from '@/components/shared/PreFooter';
export default function page() {
  return (
    <div>
        <Navbar/>
         <HeroContactSection/>
         <ContactForm/>
         <ComanQustion/>
         <br /><br />
         <ExplinationDiv text={"هو وعد إننا نكون معك نسمعك ونشاركك خطوات النجاح"} buttom2={"جرب تواصل"}  />
        <PreFooter/>
        <Footer/>  
      
    </div>
  )
}
