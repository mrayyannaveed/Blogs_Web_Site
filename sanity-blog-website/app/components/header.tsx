import Link from 'next/link'
import React from 'react'
import { MdOutlineSportsVolleyball } from 'react-icons/md'

const Header = () => {
  return (
    <div>
        <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Link href={""} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <MdOutlineSportsVolleyball className='text-5xl text-indigo-600'/>
      <span className="ml-2 text-xl">Cricblocks</span>
    </Link>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link href={"/"} className="mr-5 hover:text-gray-900">Home</Link>
      <Link href={"/about"} className="mr-5 hover:text-gray-900">About</Link>
      <Link href={"/blog"} className="mr-5 hover:text-gray-900">Blog</Link>
      <Link href={"/contact"} className="mr-5 hover:text-gray-900">Contact</Link>
    </nav>
  </div>
</header>
    </div>
  )
}

export default Header