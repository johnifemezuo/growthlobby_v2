import React from 'react'
import HeroSection from './HeroSection/HeroSection'
import WorkSample from './WorkSample/WorkSample'
import ContactUsSection from '@/components/Modules/Home/ContactUs/ContactUsSection'
import Footer from '@/components/UI/Footer/Footer'

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