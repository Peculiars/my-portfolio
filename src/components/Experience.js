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
                    <ExpDetails position='Frontend Developer' company='De-Virtuosphere' href={'https://v1.virtuobusiness.com/'} time='2024 - Current' address='Remote' work="Develop and optimize user interfaces for Virtuo's NFC-based solutions, ensuring a seamless and intuitive user experience. Collaborate with backend developers and UI/UX designers to deliver scalable and efficient frontend solutions."/>
                    <ExpDetails position='Software Developer Intern' company='Cowrywise' href={'https://cowrywise.com/'} time='Nov., 2023 - Feb., 2024' address='Ikeja, GRA, Lagos' work="Contributed to the development and optimization of the Cowrywise web platform, enhancing user experience and accessibility. Gained hands-on experience in working with APIs, state management, and financial technology solutions."/>
                    <ExpDetails position='Frontend Developer' company='HNG Internship' href={'https://hng.tech/internship'} time='HNGi9, 2023' address='Remote' work='Participated in an intensive, fast-paced remote internship focused on real-world software development and collaboration. Worked with technologies like React, JavaScript, and CSS to build user-friendly web applications. Completed multiple tasks and projects under strict deadlines.'/>
                </ul>
            </div>
        </div>
  )
}
