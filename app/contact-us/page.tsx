import React from 'react'
import HeroSection from '@/components/Modules/Contacts/HeroSection/HeroSection'
import ContactUsSection from '@/components/Modules/Home/ContactUs/ContactUsSection'
import TestimonySection from '@/components/Modules/Home/Testimony/TestimonySection'

const page = () => {
  return (
    <div>
      <HeroSection />
      <TestimonySection/>
      <ContactUsSection/>
    </div>
  )
}

export default page