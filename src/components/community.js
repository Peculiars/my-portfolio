import React, { useRef } from 'react';
import {motion, useScroll } from 'framer-motion';
import { CommunityDetails } from './communityDetails';


export const Community = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({target: ref, offset: ["start end", "center start"]})
  return (
        <div className='xs:my-40 sm:my-64'>
            <h2 className='font-bold xs:text-5xl sm:text-8xl text-center w-full mb-20'>Community</h2>
            <div className='xs:w-[100%] sm:w-[75%] mx-auto relative'>
                <ul ref={ref} className='w-full h-full flex flex-col items-start justify-between ml-4 text-left'>
                    <motion.div style={{scaleY: scrollYProgress}} className='absolute left-9 top-0 bg-dark dark:bg-light w-[4px] h-full origin-top'/>
                    <CommunityDetails orgName="Google Developer Students Club" position="Core Team Member (Unilag Chapter)" since="2022"/>
                    <CommunityDetails orgName="Microsoft Learn" position="Student Ambassador (Unilag Chapter)" since="2023"/>
                    <CommunityDetails orgName="Cowrywise" position="Student Ambassador (Unilag Chapter)" since="2023"/>
                    <CommunityDetails orgName="Lagos Students Career Expo" position="Member" since="2024"/>
                </ul>
            </div>
        </div>
  )
}
