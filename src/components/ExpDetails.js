import React from 'react'

export const ExpDetails = ({position, company, time, address, work}) => {
  return (
    <div className='w-[75%] mx-auto relative'>
        <ul>
            <li className='my-8 flex flex-col items-center justify-between w-[60%] mx-auto'>
                <div>
                    <h3 className=''>{position}&nbsp; @{company}</h3>
                    <span>{time} | {address}</span>
                    <p>{work}</p>
                </div>
            </li>
        </ul>
    </div>
  )
}
