import React, { useRef } from 'react'
import { LiIcon } from './LiIcon'

export const ExpDetails = ({position, company, time, address, work}) => {
    const ref = useRef(null)
  return (  
    <li ref={ref} className='my-8 flex flex-col items-center justify-between xs:w-[75%] sm:w-[60%] mx-auto'>
        <LiIcon reference={ref}/>
        <div>
            <h3 className='capitalize font-bold xs:text-xl sm:text-2xl xs:pb-3 sm:pb-0'>{position}&nbsp; <span className='text-primary dark:text-primaryDark capitalize'>@{company}</span></h3>
            <span className='capitalize text-dark/75 dark:text-light/65 font-medium xs:text-sm sm:text-base'>{time} | {address}</span>
            <p className='font-medium w-full xs:pt-3 sm:pt-0'>{work}</p>
        </div>
    </li>
  )
}
