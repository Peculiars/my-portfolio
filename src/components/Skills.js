import React from 'react'
import { motion } from 'framer-motion'

export const Skills = ({name, x, y}) => {
    return(
        <motion.div className='flex items-center justify-center xs:bg-transparent xs:dark:bg-transparent xs:dark:text-normal sm:bg-dark text-dark xs:dark:text-light sm:dark:bg-light sm:dark:text-dark sm:font-semibold xs:font-normal rounded-full shadow-dark md:py-3 md:px-6 xs:py-1.5 xs:px-2 absolute cursor-pointer xs:text-sm md:text-base' whileHover={{scale: 1.1}} initial={{x:0, y:0}} whileInView={{x:x, y:y}} transition={{duration:1.5}} viewport={{once: true}}>
            {name}
        </motion.div>
    )
}
