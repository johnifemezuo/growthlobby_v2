"use client"

import React from 'react'
import HeroSection from '@/components/Modules/Works/WorkHeroSection/WorkHeroSection'
import WorkSample from '@/components/Modules/Works/WorkSample/WorkSample'
import { useSuspenseQuery } from '@apollo/client';
import { PROJECT_QUERY } from '@/base/query/project';
import { IProjectData } from '@/base/interface/IProject';
import Head from 'next/head';


export default function OurWorksPage () {
  const { data } = useSuspenseQuery<IProjectData>(PROJECT_QUERY);
    
      const projects = data?.projects || {};
  
  return (
    <div>
      <Head>
        <title>Growthlobby | Work </title>
      </Head>
      <HeroSection />
      <WorkSample projects={projects} />
    </div>
  )
}
