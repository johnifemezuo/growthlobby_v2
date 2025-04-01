import React from 'react'
import Image from 'next/image'

const WelcomeSectionIcon = () => {
  return (
      <div className="sticky top-12 right-12">
          <Image
              width={300}
              height={300}
              alt='WelcomeSectionIcon'
              src='/images/Glass.png'
              className='md:w-full m-auto sticky top-12 right-12'
          />
    </div>
  )
}

export default WelcomeSectionIcon