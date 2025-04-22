import React from 'react'
import { Container } from '../Container/Container'

const BlogLoading = () => {
  return (
    <div className="text-center  bg-white w-full lg:h-[400px] py-12">
        <Container>
          <div className="loader bg-zinc-100 py-20 rounded-xl">
          <p className="text-lg text-zinc-700">Loading Content...</p>
          </div>
        </Container>
        </div>
  )
}

export default BlogLoading