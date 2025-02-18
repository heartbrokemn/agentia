'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const menus = [
  { label: 'Home', href: '/' },
  { label: 'Technology', href: '/technology' },
  { label: 'Contact', href: '/contact' },
  { label: 'Chat-me', href: '/chatme' },
]

const Navbar = () => {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className='flex w-full px-[5%] h-[6rem] py-6 sticky shadow-lg justify-between items-center bg-gradient-to-r from-[#2c0530] via-[#b204fc] to-[#0c0c0e]'>
      
      {/* Logo and Brand Name */}
      <div className="flex items-center gap-3 hover:antialiased">
        <Link className='hover:bg-transparent py-1 px-1' href={'/'}>
          <Image src="/images/logo.jpg" alt="Agentia World Logo" width={80} height={80} className="rounded-2xl" />
        </Link>
        <h1 className="text-white text-2xl font-bold">Agentia World</h1>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex gap-10">
        {menus.map((items, index) => (
          <Link key={index} href={items.href} className={pathname === items.href ? 'text-black font-semibold' : 'text-white font-medium'}>
            {items.label}
          </Link>
        ))}
      </div>

      {/* Hamburger Icon */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} absolute top-16 left-0 w-full bg-gradient-to-r from-[#2c0530] via-[#b204fc] to-[#0c0c0e] py-4 z-50`}>
        <div className="flex flex-col items-center">
          {menus.map((items, index) => (
            <Link key={index} href={items.href} className={pathname === items.href ? 'text-black font-semibold py-2' : 'text-white font-medium py-2'}>
              {items.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
