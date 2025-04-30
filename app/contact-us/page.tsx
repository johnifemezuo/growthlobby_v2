import React, { Suspense } from 'react'
import HeroSection from '@/components/Modules/Contacts/HeroSection/HeroSection'
import ContactUsSection from '@/components/Modules/Home/ContactUs/ContactUsSection'
import TestimonySection from '@/components/Modules/Home/Testimony/TestimonySection'

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="w-full h-screen bg-zinc-50 "></div>}>
      <HeroSection />
      <TestimonySection/>
      <ContactUsSection/>
    </Suspense>
  )
}
