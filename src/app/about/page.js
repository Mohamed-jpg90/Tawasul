import React from 'react'
import Navbar from '@/components/layout/Navbar'
import HeroAboutSection from '@/components/home/HeroAboutSecion'
import TopSectors from "@/components/home/TopSectors";
import ComanQustion from '@/components/home/ComanQustion';
import ContactForm from '@/components/home/ContactFrom';
import Footer from '@/components/layout/Footer';
import WhyContenu from '@/components/home/WhyContenu';
import ExplinationDiv from '@/components/shared/ExplinationDiv';
import PreFooter from '@/components/shared/PreFooter';
export default function page() {
  return (
    <div>
        <Navbar/>
         <HeroAboutSection/>
         {/* <TopSectors/> */}
         <br /><br />
         <WhyContenu/>
         <ComanQustion/>
         <ContactForm/>
         <ExplinationDiv text={"وإذا احتجت أي مساعدة فريقنا موجود يوجهك خطوة بخطوة"} />
         <PreFooter/>
         <Footer/>
    </div>
  )
}
