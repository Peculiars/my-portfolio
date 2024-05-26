import React, { useRef } from 'react';
import {motion, useScroll } from 'framer-motion';
import { ExpDetails } from './ExpDetails';


export const Experience = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({target: ref, offset: ["start end", "center start"]})
  return (
        <div className='xs:my-40 sm:my-64'>
            <h2 className='font-bold xs:text-5xl sm:text-8xl text-center w-full mb-20'>Experience</h2>
            <div className='xs:w-[100%] sm:w-[75%] xs:mx-2 sm:mx-auto relative'>
                <ul ref={ref} className='w-full h-full flex flex-col items-start justify-between ml-4'>
                    <motion.div style={{scaleY: scrollYProgress}} className='absolute left-9 top-0 bg-dark dark:bg-light w-[4px] h-full origin-top'/>
                    <ExpDetails position='Frontend Developer (Internship)' company='Innovisionary Academy' time='2023 - 2024' address='Akoka, Lagos, Nig.' work='I am part of a highly productive team and our main goal is to create software applications which we build, test as well as debug. I work closely with other professionals like the Product Designers and Backend Developers with the same goal of meeting client expectations.'/>
                </ul>
            </div>
        </div>
  )
}
