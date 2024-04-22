import Link from 'next/link'
import React from 'react'
import { Logo } from '@/components/Logo'
import { useRouter } from 'next/router'
import { GithubIcon, LinkedInIcon, TwitterIcon } from './Icons'
import { motion } from 'framer-motion'

const CustomLink =({href, title, className=""})=>{
    const router = useRouter()
    return (
        <Link href={href} className={`${className} group relative`}>
            {title}
            <span className={`absolute bottom-0 left-0 h-[1.5px] inline-block bg-dark group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? 'w-full' : 'w-0'}`}>&nbsp;</span>
        </Link>
    )
}

export const Navbar = () => {

  return (
    <header className='w-full px-32 py-4 font-medium flex items-center justify-between'>
        <nav className='flex items-center gap-6'>
            <CustomLink href='/' title='Home'/>
            <CustomLink href='/about' title='About'/>
            <CustomLink href='/projects' title='Projects'/>
            <CustomLink href='/articles' title='Articles'/>
        </nav>
        <Logo/>
        <nav className='flex items-center gap-5'>
            <motion.a href='https://linkedin.com' target={'_blank'} whileHover={{y: -5}} whileTap={{scale: 0.8}}><LinkedInIcon/></motion.a>
            <motion.a href='https://twitter.com' target={'_blank'} whileHover={{y: -5}} whileTap={{scale: 0.8}}><TwitterIcon/></motion.a>
            <motion.a href='https://github.com' target={'_blank'} whileHover={{y: -5}} whileTap={{scale: 0.8}}><GithubIcon/></motion.a>
        </nav>
    </header>
  )
}
