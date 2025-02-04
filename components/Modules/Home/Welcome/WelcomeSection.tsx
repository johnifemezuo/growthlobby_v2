import React from 'react'
import WelcomeSectionContent from './WelcomeSectionContent'
import WelcomeSectionIcon from './WelcomeSectionIcon'

const WelcomeSection = () => {
  return (
    <div className='font-wixMadefor flex flex-col md:flex-row-reverse w-full justify-between md:px-16 py-12 gap-4 md:py-20 px-4'>
      <WelcomeSectionIcon />
      <WelcomeSectionContent />
    </div>
  )
}

export default WelcomeSection