import React from 'react'
import { motion } from 'framer-motion'

export const TransitionEffect = () => {
  return (
    <>
        <motion.div className='fixed top-0 right-full w-screen h-screen z-30 bg-primary'
        initial={{x:'100%',width:'100%'}}
        animate={{x:'0%', width: '0%'}}
        exit={{x:['0%', '100%'], width:['0%', '100%']}}
        transition={{duration:1, ease: 'easeInOut'}}/>

        <motion.div className='fixed top-0 right-full w-screen h-screen z-20 bg-light'
        initial={{x:'100%', width:'100%' }}
        animate={{x:'0%', width: '0%'}}
        transition={{duration:1.2, ease: 'easeInOut'}}/>

        <motion.div className='fixed top-0 right-full w-screen h-screen z-10 bg-dark'
        initial={{x:'100%',width:'100%' }}
        animate={{x:'0%', width: '0%'}}
        transition={{duration:1.4, ease: 'easeInOut'}}/>
    </>
  )
}
