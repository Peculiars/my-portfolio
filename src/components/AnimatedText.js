import React from 'react';
import { motion} from 'framer-motion';

export const AnimatedText = ({text, className=''}) => {
  const quotes ={
    initial:{
      opacity: 1,
    },
    animate:{
      opacity: 1,
      transition:{
        delay: 0.5,
        staggerChildren: 0.1,
      }
    }
  }

  const eachWord ={
    initial:{
      opacity: 0,
      y:60,
    },
    animate:{
      opacity: 1,
      y: 0,
      transition:{
        duration: 1,
      }
    }
  }


  return (
    <div className='w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden'>
        <motion.h1 className={`w-full text-dark font-bold capitalize text-7xl text-left dark:text-light ${className}`} variants={quotes} initial='initial' animate='animate'>
            {
            text.split(" ").map((word, index)=>
            <motion.span key={word + '-'+ index} className='inline-block' variants={eachWord}>{word}&nbsp;</motion.span>
                )
            }
        </motion.h1>
    </div>
  )
}


