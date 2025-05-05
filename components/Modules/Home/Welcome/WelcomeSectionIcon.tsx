import React from 'react'
import Image from 'next/image'

const WelcomeSectionIcon = () => {
  return (
      <div className="!sticky top-12  right-0 lg:pt-44">
          <Image
              width={300}
              height={300}
              alt='WelcomeSectionIcon'
              src='/images/Glass.png'
              className='md:w-full m-auto sticky top-0 right-12 lg:top-44'
          />
    </div>
  )
}

export default WelcomeSectionIcon