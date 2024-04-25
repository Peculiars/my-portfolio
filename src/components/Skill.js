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
            <Skills name='CSS' x='-5vw' y='-10vw'/>
        </div>
    </>
  )
}
