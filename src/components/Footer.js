import React from 'react'
import { Layout } from './Layout'
import Link from 'next/link'

export const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light'>
        <Layout className='flex items-center justify-between pt-3'>
            <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
            <div className='flex items-center'>
                <span className='flex items-center'>Build with <span className=' text-primary dark:text-primaryDark text-2xl px-1'>&#9825; </span>by&nbsp;<Link className='underline underline-offset-2' href='/'>Dynasty</Link></span>
            </div>
            <Link className='underline underline-offset-2' href='/'>Say hello</Link>
        </Layout>
    </footer>
  )
}
