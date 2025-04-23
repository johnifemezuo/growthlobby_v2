import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const WorkCard = ({slug, image, title, projectType}:{slug: string; image:string; title: string; projectType: string;}) => {
  return (
     <Link href={`works/${slug}`}>
                    <div
                      className={`relative group  border p-4 rounded-2xl lg:h-[530px] overflow-hidden `}
                    >
                      <div
                        className={`relative rounded-xl lg:rounded-2xl overflow-hidden   w-full  h-[300px] lg:h-[400px]`}
                      >
                        <Image
                          src={image}
                          alt={title}
                          fill
                          quality={100}
                          priority={true}
                          className="object-cover cursor-pointer hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="space-y-2 flex flex-col  mt-4">
                        <p className="text-sm text-gray-600 uppercase">
                          {projectType}
                        </p>
                        <p className="font-medium text-lg lg:text-xl hover:text-[#82941e] transition-colors duration-300  mt-2">
                          {title}
                        </p>
                      </div>
                    </div>
                  </Link>
  )
}

export default WorkCard