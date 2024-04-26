import React, { useRef } from 'react';
import {motion, useScroll } from 'framer-motion';
import { ExpDetails } from './ExpDetails';


export const Experience = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({target: ref, offset: ["start end", "center start"]})
  return (
        <div className='my-64'>
            <h2 className='font-bold text-8xl text-center w-full mb-20'>Experience</h2>
            <div className='w-[75%] mx-auto relative'>
                <ul ref={ref} className='w-full h-full flex flex-col items-start justify-between ml-4'>
                    <motion.div style={{scaleY: scrollYProgress}} className='absolute left-9 top-0 bg-dark w-[4px] h-full origin-top'/>
                    <ExpDetails position='Software Engineer Intern' company='Cowrywise' time='2024 - Present' address='GRA Ikeja, Lagos, Nig.' work='Worked as a part of dynamic team, working on coding, testing and debugging software application. collaborating closely with professionals, contributing to innovative financial solutions that impact users financial well-being'/>
                    <ExpDetails position='Web Developer' company='Magnificient Therapy' time='2023 - 2024' address='Sabo-yaba, Lagos, Nig.' work='Played a crucial role in enhancing the accessibility and functionality of their online platform. I designed, developed and maintained the website'/>
                </ul>
            </div>
        </div>
  )
}
