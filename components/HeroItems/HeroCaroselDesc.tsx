"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const HeroCaroselDesc = () => {
  return (
          <div className="overflow-hidden w-full md:my-6 py-6">
          <motion.div
          className="flex items-center font-semibold text-3xl md:text-7xl space-x-6 whitespace-nowrap"
          animate={{ x: ["100%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
        >
            <Image
              width={100}
              height={100}
              src="/images/logo1.png"
              alt="Happiness"
              className="h-12 w-12 md:h-20 md:w-20"
            />
            
          <p className="text-calm">Creative Innovation</p>
          
            <Image
              width={100}
              height={100}
              src="/images/logo1.png"
              alt="Happiness"
              className="h-12 w-12 md:h-20 md:w-20"
            />
          
          <p className="ml-2 text-zinc-500">Brand Transformation</p>
          
            <Image
              width={100}
              height={100}
              src="/images/logo1.png"
              alt="Happiness"
              className="h-12 w-12 md:h-20 md:w-20"
            />
          
          <p className="ml-2 text-zinc-500">Design Meets Strategy</p>
          
            <Image
              width={100}
              height={100}
              src="/images/logo1.png"
              alt="Happiness"
              className="h-12 w-12 md:h-20 md:w-20"
            />
          
          <p className="ml-2 text-zinc-500">Digital Excellence</p>
          
            <Image
              width={100}
              height={100}
              src="/images/logo1.png"
              alt="Happiness"
              className="h-12 w-12 md:h-20 md:w-20"
            />
          
          </motion.div>
      </div>
  )
}

export default HeroCaroselDesc