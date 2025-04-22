import { ScrollReveal } from '@/components/Animations/ScrollReveal'
import { Container } from '@/components/Container/Container'
import React from 'react'

const WorkIntroSection = ({industry, platform, timeline, year}:{industry: string, platform: string, timeline: string, year: string}) => {
  return (
    <div className='lg:py-8 mb-9 border-y py-5  xl:px-0'>
      <ScrollReveal hidden={{ y: 100 }} visible={{ y: 0 }}>
      <Container>
        <div className='flex flex-wrap justify-between gap-6 md:gap-12'>
            <div className='flex flex-col space-y-3'>
                <h4 className=' text-zinc-500 text-xs uppercase md:text-sm'>Industry</h4>
                <h4 className='text-zinc-900 lg:text-lg text-sm  font-medium'>{industry}</h4>
            </div>
            <div className='flex flex-col space-y-3'>
                <h4 className=' text-zinc-500 text-xs uppercase md:text-sm'>Platform</h4>
                <h4 className='text-zinc-900 lg:text-lg text-sm  font-medium'>{platform}</h4>
            </div>
            {/* <div className='flex flex-col space-y-3'>
                <h4 className=' text-zinc-500 text-xs uppercase md:text-sm'>Services</h4>
                <h4 className='text-zinc-900 lg:text-lg text-sm  font-medium'>{services}</h4>
            </div> */}
            <div className='flex flex-col space-y-3'>
                <h4 className=' text-zinc-500 text-xs uppercase md:text-sm'>Timeliine</h4>
                <h4 className='text-zinc-900 lg:text-lg text-sm  font-medium'>{timeline}</h4>
            </div>
            <div className='flex flex-col space-y-3'>
                <h4 className=' text-zinc-500 text-xs uppercase md:text-sm'>Year</h4>
                <h4 className='text-zinc-900 lg:text-lg text-sm  font-medium'>{year}</h4>
            </div>
        </div>
      </Container>
      </ScrollReveal>
    </div>
  )
}

export default WorkIntroSection