import React from 'react';
import { motion } from 'framer-motion';
import { Skills } from './Skills';

export const Skill = () => {
  return (
    <>
        <h2 className='font-bold text-8xl w-full text-center mt-64'>Skills</h2>
        <div className='relative w-full h-screen flex items-center justify-center rounded-full bg-circularLight'>
            <motion.div className='flex items-center justify-center bg-dark text-light font-semibold rounded-full shadow-dark p-5 cursor-pointer' whileHover={{scale: 1.1}}>
                web
            </motion.div>
            <Skills name='CSS3' x='0vw' y='-10vw'/>
            <Skills name='ReactJS' x='-30vw' y='-5vw'/>
            <Skills name='NextJS' x='30vw' y='6vw'/>
            <Skills name='TailwindCSS' x='0vw' y='20vw'/>
            <Skills name='Redux' x='-20vw' y='-15vw'/>
            <Skills name='HTML5' x='25vw' y='-5vw'/>
            <Skills name='ExpressJS' x='15vw' y='-17vw'/>
            <Skills name='NodeJS' x='0vw' y='10vw'/>
            <Skills name='Firebase' x='-20vw' y='15vw'/>
            <Skills name='JavaScript' x='18vw' y='15vw'/>
            <Skills name='React Native' x='-32vw' y='6vw'/>
            <Skills name='Framer motion' x='-15vw' y='2vw'/>
            <Skills name='BootStrap' x='15vw' y='2vw'/>
        </div>
    </>
  )
}
