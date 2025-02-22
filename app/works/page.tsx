import React from 'react'
import ContactUsSection from '@/components/Modules/Home/ContactUs/ContactUsSection'
import Footer from '@/components/UI/Footer/Footer'
import HeroSection from '@/components/Modules/Works/HeroSection/HeroSection'
import WorkSample from '@/components/Modules/Works/WorkSample/WorkSample'

const OurWorksPage = () => {
  return (
    <div>
      <HeroSection />
      <WorkSample />
      <ContactUsSection/>
      <Footer/>
    </div>
  )
}

export default OurWorksPage