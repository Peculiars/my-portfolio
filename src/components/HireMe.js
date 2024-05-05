import React from 'react';
import { CircularText } from './Icons';
import Link from 'next/link';


export const HireMe = () => {
  return (
    <div className='xs:absolute xs:right-5 lg:right-0 xl:left-5 xs:top-2 lg:top-96 xl:top-[32rem] flex items-center overflow-hidden'>
        <div className='xs:w-28 sm:w-32 h-auto flex items-center justify-center relative'>
           <CircularText className={'fill-dark animate-spin-slow dark:fill-light'}/>
           <Link href='mailto:olaitandamilare230@gmail.com' target='_blank' className='flex items-center justify-center absolute text-xs bg-dark text-light py-0.5 px-2 rounded-full w-16 h-16 md:font-semibold xs:font-medium shadow-md hover:bg-light hover:text-dark hover:dark:bg-dark hover:dark:text-light hover:outline outline-2 dark:bg-light dark:text-dark'>Hire Me</Link>
        </div> 
    </div>
  )
}
