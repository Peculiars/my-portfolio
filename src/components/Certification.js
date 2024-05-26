import React, { useRef } from 'react';
import {motion, useScroll } from 'framer-motion';
import { CertDetails } from './CertDetails';


export const Certification = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({target: ref, offset: ["start end", "center start"]})
  return (
        <div className='xs:my-40 sm:my-64'>
            <h2 className='font-bold xs:text-5xl sm:text-8xl text-center w-full mb-20'>Certification</h2>
            <div className='xs:w-[100%] sm:w-[75%] mx-auto relative'>
                <ul ref={ref} className='w-full h-full flex flex-col items-start justify-between ml-4 text-left'>
                    <motion.div style={{scaleY: scrollYProgress}} className='absolute left-9 top-0 bg-dark dark:bg-light w-[4px] h-full origin-top'/>
                    <CertDetails title='Introduction to Frontend Developement' year='2023' place='Meta inc. (Coursera)' desc='This immersive journey deepened my understanding of HTML, CSS, JavaScript, Version Control, React — the cornerstones of modern web development. Through hands-on projects, I honed my skills, laying the groundwork for crafting dynamic user interfaces.'/>
                    <CertDetails title='Introduction to Web Development' year='2023' place='AppBrewery (Udemy)' desc='This course provided me with a comprehensive understanding of the fundamental concepts of web development. Through practical exercises and projects, I gained hands-on experience, setting a solid foundation for my journey in web development.'/>
                    <CertDetails title='Software Developement track' year='2024' place='3MTT' desc='Throughout this intensive program, I gained expertise in backend development using Node.js and Express.js, along with proficiency in frontend technologies. This comprehensive curriculum equipped me with the skills to architect robust software solutions, from server-side logic to user interface implementation.'/>
                </ul>
            </div>
        </div>
  )
}
