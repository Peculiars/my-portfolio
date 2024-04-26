import React from 'react'
import { motion } from 'framer-motion'

export const Skills = ({name, x, y}) => {
    return(
        <motion.div className='flex items-center justify-center bg-dark text-light font-semibold rounded-full shadow-dark py-3 px-6 absolute cursor-pointer' whileHover={{scale: 1.1}} initial={{x:0, y:0}} whileInView={{x:x, y:y}} transition={{duration:1.5}} viewport={{once: true}}>
            {name}
        </motion.div>
    )
}
