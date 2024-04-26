import React, { useRef } from 'react'
import { LiIcon } from './LiIcon'

export const CertDetails = ({title, place, year, desc}) => {
    const ref = useRef(null)
  return (  
    <li ref={ref} className='my-8 flex flex-col items-start justify-between w-[60%] mx-auto'>
        <LiIcon reference={ref}/>
        <div>
            <h3 className='capitalize font-bold text-2xl'>{title}</h3>
            <span className='capitalize text-dark/75 font-medium '>{year} | {place}</span>
            <p className='font-medium w-full'>{desc}</p>
        </div>
    </li>
  )
}
