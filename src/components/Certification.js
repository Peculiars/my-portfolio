import React, { useRef } from 'react';
import {motion, useScroll } from 'framer-motion';
import { CertDetails } from './CertDetails';


export const Certification = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({target: ref, offset: ["start end", "center start"]})
  return (
        <div className='my-64'>
            <h2 className='font-bold text-8xl text-center w-full mb-20'>Certification</h2>
            <div className='w-[75%] mx-auto relative'>
                <ul ref={ref} className='w-full h-full flex flex-col items-start justify-between ml-4 text-left'>
                    <motion.div style={{scaleY: scrollYProgress}} className='absolute left-9 top-0 bg-dark dark:bg-light w-[4px] h-full origin-top'/>
                    <CertDetails title='Introduction to Frontend Developement' year='2023' place='Meta inc. (Coursera)' desc='This immersive journey deepened my understanding of HTML, CSS, JavaScript, Version Control, React — the cornerstones of modern web development. Through hands-on projects, I honed my skills, laying the groundwork for crafting dynamic user interfaces.'/>
                    <CertDetails title='Introduction to Web Development' year='2023' place='AppBrewery (Udemy)' desc='This course provided me with a comprehensive understanding of the fundamental concepts of web development. Through practical exercises and projects, I gained hands-on experience, setting a solid foundation for my journey in web development.'/>
                    <CertDetails title='Mobile Developement track' year='2023' place='GDSC' desc='During this immersive experience, I delved into the world of mobile app development using React Native. Through GDSC comprehensive curriculum and hands-on projects, I acquired proficiency in building cross-platform mobile applications, laying the groundwork for my journey in mobile development.'/>
                    <CertDetails title='Software Developement track' year='2024' place='3MTT' desc='Throughout this intensive program, I gained expertise in backend development using Node.js and Express.js, along with proficiency in frontend technologies. This comprehensive curriculum equipped me with the skills to architect robust software solutions, from server-side logic to user interface implementation.'/>
                </ul>
            </div>
        </div>
  )
}
