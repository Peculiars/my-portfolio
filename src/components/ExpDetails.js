import React, { useRef } from 'react'
import { LiIcon } from './LiIcon'

export const ExpDetails = ({position, company, time, address, work}) => {
    const ref = useRef(null)
  return (  
    <li ref={ref} className='my-8 flex flex-col items-center justify-between w-[60%] mx-auto'>
        <LiIcon reference={ref}/>
        <div>
            <h3 className='capitalize font-bold text-2xl'>{position}&nbsp; <span className='text-primary dark:text-primaryDark capitalize'>@{company}</span></h3>
            <span className='capitalize text-dark/75 font-medium '>{time} | {address}</span>
            <p className='font-medium w-full'>{work}</p>
        </div>
    </li>
  )
}
