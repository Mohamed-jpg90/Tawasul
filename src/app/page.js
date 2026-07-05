import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/home/HeroSection";
import TopSectors from "@/components/home/TopSectors";
import WhyAWepPage from "@/components/home/WhyAWepPage";
import Card from "@/components/shared/Card";
import HwoToBenefit from "@/components/home/HwoToBenefit";
import WeServeYou from "@/components/home/WeServeYou";
import ExploreFeatures from "@/components/home/ExploreFeatures";
import SearchEngineOptimization from "@/components/home/SearchEngineOptimization";
import AllToolsyouNeed from "@/components/home/AllToolsyouNeed";
import HowToStart from "@/components/home/HowToStart";
import ComanQustion from "@/components/home/ComanQustion";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/home/ContactFrom";
import PricingSection from "@/components/home/PricingSection";
import PreFooter from "@/components/shared/PreFooter"; 
import ExplinationDiv from "@/components/shared/ExplinationDiv";
export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <TopSectors />
      <WhyAWepPage /> 
      <HwoToBenefit/>
      <WeServeYou/>
      <ExploreFeatures/>
      <br />
      <br />
      <SearchEngineOptimization/>
      <br />
      <br />
      <AllToolsyouNeed/>
      <br />
      <HowToStart/>
      <ComanQustion/>
      <PricingSection/>
      <br /><br />  
      <ContactForm/>
      <ExplinationDiv text={"وإذا احتجت أي مساعدة فريقنا موجود يوجهك خطوة بخطوة"} buttom1={"اتصل بنا"} buttom2={"جرب تواصل"}  />
       <PreFooter/>

      <Footer/>
    </>
  );
}
