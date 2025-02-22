"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const HeroCaroselDesc = () => {
  return (
      <>
      
          
          <div className="overflow-hidden w-full md:my-6 ">
          <motion.div
          className="flex items-center font-semibold text-2xl md:text-7xl whitespace-nowrap"
          animate={{ x: ["100%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
        >
          <p className="text-calm">Where Great Work Meets</p>
          <span className="ml-2"> Lasting Impact</span>
          <span className="ml-4">
            <Image
              width={100}
              height={100}
              src="/images/logo1.png"
              alt="Happiness"
              className="h-12 w-12 md:h-20 md:w-20"
            />
          </span>
          </motion.div>
      </div>
      </>
  )
}

export default HeroCaroselDesc