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
                    <ExpDetails position='Frontend Developer' company='Innovisionary Academy' time='2024 - Present' address='Akoka, Lagos, Nig.' work='Worked as a part of dynamic team, working on coding, testing and debugging software application. collaborating closely with professionals, contributing to innovative solutions that meet clients need.'/>
                    <ExpDetails position='Web Developer' company='Magnificient Therapy' time='2023 - 2024' address='Sabo-yaba, Lagos, Nig.' work='Played a crucial role in enhancing the accessibility and functionality of their online platform. I designed, developed and maintained the website'/>
                </ul>
            </div>
        </div>
  )
}
