import React from 'react'
import ProcessIntro from './ProcessIntro'
import ProcessSteps from './ProcessSteps'
import { Container } from '@/components/Container/Container'

const ProcessSection = () => {
  return (
    <Container>
      <div className='flex flex-col md:flex-row md:justify-between md:px-16 py-12 gap-4 md:py-20 px-4 bg-[#EAEBF0] md:w-[90%] m-auto w-[90%] 2xl:w-full rounded-3xl min-h-screen h-auto mb-12'>
          <ProcessIntro />
          <ProcessSteps/>
    </div></Container>
  )
}

export default ProcessSection