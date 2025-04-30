import Link from 'next/link'
import { ArrowRight } from '../Icons/ArrowRight'

const ContactComp = () => {
  return (
    <div className="flex min-w-[350px] lg:w-auto bg-white border border-zinc-200 p-1  rounded-lg flex-row items-center justify-between lg:justify-center gap-2 mt-8">
              <Link
                href="/book"
                className="bg-gray-900 text-center text-white px-6 text-sm py-4 rounded-md hover:bg-black transition-colors w-full sm:w-auto"
              >
                BOOK A CALL
              </Link>
              <Link
                href="/pricing"
                className="flex border text-sm items-center justify-center gap-2 px-5 py-4 bg-zinc-200 rounded-md hover:bg-gray-100 transition-colors w-full sm:w-auto"
              >
                CONTACT US <ArrowRight />
              </Link>
            </div>
  )
}

export default ContactComp