"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Token', path: '/token' },
  { name: 'WhitePaper', path: '/whitepaper' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="Logo" width={50} height={50} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <NavLink key={item.name} href={item.path} isActive={pathname === item.path}>
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Contact Button */}
        <Link href="/contact" className="hidden md:block bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition-colors">
          Contact
        </Link>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white py-4">
          {navItems.map((item) => (
            <NavLink key={item.name} href={item.path} isActive={pathname === item.path} mobile>
              {item.name}
            </NavLink>
          ))}
          <Link href="/contact" className="block text-center bg-purple-500 text-white mx-4 my-2 px-4 py-2 rounded hover:bg-purple-600 transition-colors">
            Contact
          </Link>
        </nav>
      )}
    </header>
  )
}

interface NavLinkProps {
  href: string
  isActive: boolean
  children: React.ReactNode
  mobile?: boolean
}

function NavLink({ href, isActive, children, mobile = false }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={`${
        mobile ? 'block py-2 px-4' : 'inline-block'
      } relative font-medium transition-colors hover:text-purple-500 ${
        isActive ? 'text-purple-500' : 'text-gray-700'
      }`}
    >
      {children}
      {isActive && (
        <svg
          className="absolute -bottom-1 left-0 w-full"
          width="82"
          height="8"
          viewBox="0 0 82 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M34.8263 0.766163C30.9739 1.02872 27.1668 1.35156 23.4542 1.7045C18.1986 2.20379 12.945 2.7203 7.72309 3.5381C6.07936 3.79636 4.41012 3.95991 2.77666 4.28273C1.75128 4.48502 0.391641 4.77337 0.213206 4.83362C0.119877 4.86806 0.0791612 4.91976 0.0660047 4.93697C-0.0265019 5.05749 -0.0096229 5.17366 0.0425919 5.26405C0.0635601 5.30278 0.116582 5.39751 0.263771 5.41043C10.1073 6.29279 20.1728 4.57111 30.0283 4.39033C47.1194 4.08043 64.7285 5.31143 81.684 7.99726C81.832 8.01878 81.9759 7.91115 81.9965 7.75189C82.0211 7.59694 81.9142 7.44629 81.7662 7.42477C64.782 4.73464 47.1441 3.49932 30.0201 3.81353C20.8352 3.98139 11.469 5.4922 2.27137 4.9757C2.48269 4.93265 2.68992 4.8896 2.87905 4.85086C4.50593 4.52804 6.16817 4.3688 7.80533 4.11055C13.0161 3.29275 18.259 2.77624 23.5076 2.28125C30.0201 1.66145 36.8162 1.12772 43.6658 0.878077C46.1162 0.916815 48.5584 0.955569 51.0006 1.00292C56.2837 1.10622 61.5916 1.40751 66.8624 1.81211C68.4494 1.93693 70.0364 2.06605 71.6234 2.17796C72.1496 2.2167 73.5064 2.32859 73.6955 2.31998C73.9299 2.31137 73.9751 2.10479 73.9792 2.07035C73.9915 1.99288 73.9833 1.88526 73.8682 1.79488C73.8559 1.78196 73.7819 1.73889 73.6174 1.71307C64.0337 0.189377 53.8004 -0.0645317 43.6741 0.301327C32.9926 0.142071 22.2701 0.0731716 11.6158 0C11.4632 0 11.3387 0.129145 11.3374 0.288401C11.3366 0.447657 11.4595 0.576807 11.6121 0.581111C19.3267 0.632762 27.0804 0.684383 34.8263 0.766163Z"
            fill="#FFA5CB"
          />
        </svg>
      )}
    </Link>
  )
}