import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';


export const Logo = () => {
    const MotionLink = motion(Link);
  return (
    <div className='flex items-center justify-center '>
        <MotionLink href='/' className='bg-dark w-12 h-12 text-light flex items-center justify-center rounded-full text-lg font-bold' whileHover={{
          backgroundColor: ["#121212", "rgba(131,58,180,1)","rgba(253,29,29,1)","rgba(252,176,69,1)","rgba(131,58,180,1)", "#121212"], 
          scale:1.1, transition:{duration:1, repeat: Infinity}
          }}>
        DY
        </MotionLink>
    </div>
  )
}
