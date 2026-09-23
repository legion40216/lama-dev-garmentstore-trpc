import React from 'react'

import NavGroup from './nav-left/nav-group'
import Link from 'next/link'
import Image from 'next/image'

export default function NavLeft() {
  return (
    <div className=''>
      <Link 
        className='flex items-center'
        href="/"
        >
        <Image
          src="/assets/logo.png"
          alt="Garment Store Logo"
          width={36}
          height={36}
          className="size-6"
        />
        <span className='hidden sm:block text-md font-medium tracking-wider'>
          Garment Store
        </span>
      </Link>
      {/* <NavGroup/> */}
    </div>
  )
}
