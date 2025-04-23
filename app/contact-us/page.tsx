import React from 'react'
import HeroSection from '@/components/Modules/Contacts/HeroSection/HeroSection'
import ContactUsSection from '@/components/Modules/Home/ContactUs/ContactUsSection'
import TestimonySection from '@/components/Modules/Home/Testimony/TestimonySection'

export default function ContactPage() {
  return (
    <div>
      <HeroSection />
      <TestimonySection/>
      <ContactUsSection/>
    </div>
  )
}
