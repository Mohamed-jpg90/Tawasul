import React from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PricingSection from '@/components/pricing/PricingSection'
import ComanQustion from '@/components/home/ComanQustion'
import ContactForm from '@/components/home/ContactFrom'
import Card from '@/components/shared/Card'
import img from '../../imag/CardPricingPage.png'
import PricingComparisonTable from '@/components/home/PricingComparisonTable'
import ExplinationDiv from '@/components/shared/ExplinationDiv'
import PreFooter from '@/components/shared/PreFooter'
// import ContactForm from '@/components/home/ContactFrom'
export default function page() {
    return (
        <div>
            <Navbar />
            <PricingSection />
            <br />
            <Card right={false} headnumber='' headtext='فصّل باقتك' img={img} subtitles={[
                "هل لديك خطط أكبر؟",
                "تواصل مع فريق المبيعات وخصص باقتك",
                "فريق كامل من المبرمجين والمصممين",
                "تصميم فريد ومميز يناسب شركتك"
            ]}

                imageWidth={'299'}
                imageHeight={'300'}

            />
            <PricingComparisonTable />
            <ExplinationDiv text={"ابدأ مجانًا اليوم وجرب النظام ثم قم بالترقية متى ما كنت مستعدًا"}
                buttom1={"اتصل بنا"}
                buttom2={"جرب تواصل"}
            />

            <ComanQustion/>
            <ContactForm/>
                <ExplinationDiv text={"وإذا احتجت أي مساعدة فريقنا موجود يوجهك خطوة بخطوة"}
                buttom1={"اتصل بنا"}
                buttom2={"جرب تواصل"}
            />
            <PreFooter/>
            <Footer />
        </div>
    )
}
