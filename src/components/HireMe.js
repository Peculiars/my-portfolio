import React from 'react';
import { CircularText } from './Icons';
import Link from 'next/link';


export const HireMe = () => {
  return (
    <div className='fixed left-6 bottom-16 flex items-center justify-center overflow-hidden'>
        <div className='w-32 h-auto flex items-center justify-center relative'>
           <CircularText className={'fill-dark animate-spin-slow dark:fill-light'}/>
           <Link href='mailto:olaitandamilare230@gmail.com' target='_blank' className='flex items-center justify-center absolute text-xs bg-dark text-light py-0.5 px-2 rounded-full w-16 h-16 font-semibold shadow-md hover:bg-light hover:text-dark hover:outline outline-2 dark:bg-light dark:text-dark'>Hire Me</Link>
        </div>
    </div>
  )
}
