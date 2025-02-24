import React from 'react'
import Image from 'next/image'

const WelcomeSectionIcon = () => {
  return (
      <div>
          <Image
              width={300}
              height={300}
              alt='WelcomeSectionIcon'
              src='/images/Glass.png'
              className='md:w-full m-auto'
          />
    </div>
  )
}

export default WelcomeSectionIcon