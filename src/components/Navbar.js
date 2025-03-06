import Link from 'next/link'
import React, { useState } from 'react'
import { Logo } from '@/components/Logo'
import { useRouter } from 'next/router'
import { GithubIcon, LinkedInIcon, MoonIcon, SunIcon, TwitterIcon } from './Icons'
import { motion } from 'framer-motion'
import { useThemeSwitcher } from './hooks/useThemeSwitcher'

const CustomLink =({href, title, className=""})=>{
    const router = useRouter()
    return (
        <Link href={href} className={`${className} group relative`}>
            {title}
            <span className={`absolute bottom-0 left-0 h-[1.5px] inline-block bg-dark dark:bg-light group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? 'w-full' : 'w-0'}`}>&nbsp;</span>
        </Link>
    )
}

const CustomMobileLink =({href, title, toggle, className=""})=>{
    const router = useRouter()

    const handleClick=()=>{
        toggle()
        router.push(href)
    }
    return (
        <button href={href} className={`${className} group relative text-light dark:text-dark`} onClick={handleClick}>
            {title}
            <span className={`absolute bottom-0 left-0 h-[1.5px] inline-block bg-light dark:bg-dark group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? 'w-full' : 'w-0'}`}>&nbsp;</span>
        </button>
    )
}

export const Navbar = () => {
    const [mode, setMode] = useThemeSwitcher();
    const [isOpen, setIsOpen] = useState(false);

    const handleClick=()=>{
        setIsOpen(!isOpen);
    }

  return (
    <header className='w-full py-4 font-medium flex items-center justify-between dark:text-light xs:px-10 md:px-32'>
        <button className=' flex-col justify-center items-center sm:flex md:hidden' onClick={handleClick}>
            <span className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm ${isOpen ? ' rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
            <span className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
        </button>

        <div className='flex items-center justify-between w-full xs:hidden md:flex'>
            <nav className='flex items-center gap-6'>
                <CustomLink href='/' title='Home'/>
                <CustomLink href='/about' title='About'/>
                <CustomLink href='/projects' title='Projects'/>
                <CustomLink href='/articles' title='Articles'/>
            </nav>
            <Logo/>
            <nav className='flex items-center gap-5'>
                <motion.a href='https://www.linkedin.com/in/olaitan-damilare-ba5897184' target={'_blank'} whileHover={{y: -5}} whileTap={{scale: 0.8}}><LinkedInIcon/></motion.a>
                <motion.a href='https://twitter.com/0x2dynasty' target={'_blank'} whileHover={{y: -5}} whileTap={{scale: 0.8}}><TwitterIcon/></motion.a>
                <motion.a href='https://github.com/Peculiars' target={'_blank'} whileHover={{y: -5}} whileTap={{scale: 0.8}}><GithubIcon/></motion.a>
        
                <button onClick={()=> setMode(mode === 'light'? 'dark' : 'light')}>
                    {mode === 'dark' ? <SunIcon className={'fill-dark'}/> : <MoonIcon className={'fill-dark'}/>}
                </button>
            </nav>
        </div>

        {
            isOpen ? 
            <motion.div className='flex-col items-center justify-between min-w-[70vw] fixed z-50 top-1/2 left-1/2 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32' initial={{scale:0, opacity:0, x:'-50%', y:'-50%'}} animate={{scale:1, opacity:1}} transition={{duration:0.4}}>
            <nav className='flex flex-col items-center justify-center gap-6'>
                <CustomMobileLink href='/' title='Home' toggle={handleClick}/>
                <CustomMobileLink href='/about' title='About' toggle={handleClick}/>
                <CustomMobileLink href='/projects' title='Projects' toggle={handleClick}/>
                <CustomMobileLink href='/articles' title='Articles' toggle={handleClick}/>
            </nav>
            <nav className='flex items-center justify-center gap-5 mt-5'>
                <motion.a href='https://www.linkedin.com/in/olaitan-damilare-ba5897184' target={'_blank'} whileHover={{y: -5}} whileTap={{scale: 0.8}}><LinkedInIcon/></motion.a>
                <motion.a href='https://twitter.com/D_peculiars' target={'_blank'} whileHover={{y: -5}} whileTap={{scale: 0.8}}><TwitterIcon/></motion.a>
                <motion.a href='https://github.com/Peculiars' className='bg-light dark:bg-dark rounded-full' target={'_blank'} whileHover={{y: -5}} whileTap={{scale: 0.8}}><GithubIcon/></motion.a>
        
                <button onClick={()=> setMode(mode === 'light'? 'dark' : 'light')}>
                    {mode === 'dark' ? <SunIcon className={'fill-dark bg-dark rounded-full'}/> : <MoonIcon className={'fill-dark bg-light rounded-full'}/>}
                </button>
            </nav>
        </motion.div>
            : null
        }
        
    </header>
  )
}
