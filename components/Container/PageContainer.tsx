import React from 'react'

export const PageContainer = ({children, className}:{children?: React.ReactNode; className?: string;}) => {
  return (
    <div className={`${className} max-w-[1000px] mx-auto relative `}>{children}</div>
  )
}
