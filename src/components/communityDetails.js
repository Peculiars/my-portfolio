import React, { useRef } from 'react'
import { LiIcon } from './LiIcon'

export const CommunityDetails = ({orgName, since, position}) => {
    const ref = useRef(null)
  return (  
    <li ref={ref} className='my-8 flex flex-col items-start justify-between xs:w-[75%] sm:w-[60%] mx-auto'>
        <LiIcon reference={ref}/>
        <div>
            <h3 className='capitalize font-bold xs:text-xl sm:text-2xl xs:pb-3 transition-transform sm:pb-0'>{orgName}&nbsp; <span className='text-primary dark:text-primaryDark capitalize italic text-[18px] font-normal'>{position}</span></h3>
            <span className='flex items-center space-x-3 '>
                <p className='text-dark/75 dark:text-light/65 font-medium xs:text-sm sm:text-base'>Membership since</p>
                <span className='capitalize text-dark/75 dark:text-primaryDark font-medium'>{since}</span>
            </span>
        </div>
    </li>
  )
}
