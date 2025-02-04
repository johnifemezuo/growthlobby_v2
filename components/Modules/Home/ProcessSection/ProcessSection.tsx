import React from 'react'
import ProcessIntro from './ProcessIntro'
import ProcessSteps from './ProcessSteps'

const ProcessSection = () => {
  return (
      <div className='flex flex-col md:flex-row md:justify-between md:px-16 py-12 gap-4 md:py-20 px-4 bg-[#EAEBF0] md:w-[90%] m-auto w-[90%] rounded-3xl min-h-screen h-auto mb-12'>
          <ProcessIntro />
          <ProcessSteps/>
    </div>
  )
}

export default ProcessSection