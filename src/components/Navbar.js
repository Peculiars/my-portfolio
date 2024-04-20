import Link from 'next/link'
import React from 'react'
import { Logo } from '@/components/Logo'

export const Navbar = () => {
  return (
    <header className='w-full px-32 py-4 font-medium flex items-center justify-between'>
        <nav>
            <Link href='/'>Home</Link>
            <Link href='/about'>About</Link>
            <Link href='/projects'>Projects</Link>
            <Link href='/articles'>Articles</Link>
        </nav>
        <Logo/>
        <nav>
            <Link href='/'>H</Link>
            <Link href='/about'>A</Link>
            <Link href='/projects'>P</Link>
            <Link href='/articles'>A</Link>
        </nav>
    </header>
  )
}
