import { AnimatedText } from '@/components/AnimatedText'
import { Layout } from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import dynasty from '../../public/images/profile/dynasty.png';
import { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import { Skill } from '@/components/Skill';
import { Experience } from '@/components/Experience';
import { Certification } from '@/components/Certification';
import { TransitionEffect } from '@/components/TransitionEffect'

export default function About() {

  const AnimatedNumbers=({value})=>{
    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {duration: 3000});
    const isInView = useInView(ref)

    useEffect(()=>{
      if(isInView){
        motionValue.set(value)
      }
    },[isInView, value, motionValue]);

    useEffect(()=>{
      springValue.on("change", (latest)=>{
        if(ref.current && latest.toFixed(0) <= value){
          ref.current.textContent = latest.toFixed(0);
        }
      })
    },[springValue, value])

    return <span ref={ref}></span>
  }
  return (
    <>
      <Head>
        <title>Dynasty | About me</title>
        <meta name="description" content="Learn more about Dynasty's unique approach, stack and expertise in web development" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TransitionEffect/>
      <main className='w-full dark:text-light'>
        <Layout>
          <AnimatedText text='Passion Fuels Purpose! ' className='xl:flex items-center justify-center text-center py-10 xs:text-5xl sm:text-7xl'/>
          <div className='grid w-full grid-cols-8 xs:gap-y-14 xs:gap-x-0 md:gap-16 my-4'>
            <div className=' xl:col-span-3 lg:col-span-4 xs:col-span-8 xs:order-2 flex flex-col items-center justify-start'>
              <h2 className='text-lg font-bold text-dark dark:text-light uppercase mb-4'>Biography</h2>
              <p className='font-medium my-2'>Hi, I'm Olaitan Damilare or you call me Dynasty, am a web and mobile developer with a passion for creating beautiful, functional, 
                and user-centered digital experiences. With 2 years of experience in the field. I am always looking for 
                new and innovative ways to bring my clients' visions to life.</p>

              <p className='font-medium my-2'>I believe that developing digital presence is something more than just making the UI looks pretty alone, it's more about solving problems and 
              creating intuitive, enjoyable experiences for users. </p>

              <p className='font-medium my-2'>Whether I'm working on a website, mobile app, or 
              other digital product, I bring my commitment to design excellence and user-centered thinking to 
              every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.</p>
            </div>
            <div className='relative xl:col-span-3 lg:col-span-4 xs:col-span-8 md:order-2 xs:order-1 bg-dark dark:bg-light rounded-[2rem] p-8 w-[80%] xs:w-[90%] xs:h-[50vh] lg:h-[90%] top-8 left-5'>
              <div className='w-[100%] h-[98%] bg-light dark:bg-dark dark:border-light rounded-2xl p-8 border-2 border-dark absolute -top-1 -left-2'>
                <Image priority sizes='(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw' src={dynasty} alt='Dynasty image' className='w-full h-[100%] rounded-2xl bg-dark'/>
              </div>
            </div>
            <div className='xl:col-span-2 xs:col-span-8 xs:order-3 flex items-end justify-between xs:flex-row xl:flex-col'>
                <div className='flex flex-col xs:items-center xl:items-end justify-center xs:text-center xl:text-right'>
                  <span className='xs:text-5xl md:text-7xl font-bold'><AnimatedNumbers value={8}/>+</span>
                  <h2 className='xs:text-sm md:text-xl capitalize font-medium text-dark/75 dark:text-light'>satisfield clients</h2>
                </div>
                <div className='flex flex-col xs:items-center xl:items-end justify-center xs:text-center xl:text-right'>
                <span className='xs:text-5xl md:text-7xl font-bold'><AnimatedNumbers value={10}/>+</span>
                  <h2 className='xs:text-sm md:text-xl capitalize font-medium text-dark/75 dark:text-light'>completed projects</h2>
                </div>
                <div className='flex flex-col xs:items-center xl:items-end justify-center xs:text-center xl:text-right'>
                <span className='xs:text-5xl md:text-7xl font-bold'><AnimatedNumbers value={2}/>+</span>
                  <h2 className='xs:text-sm md:text-xl capitalize font-medium text-dark/75 dark:text-light'>years of experience</h2>
                </div>
              </div>
          </div>
          <Skill/>
          <Experience/>
          <Certification/>
        </Layout>
      </main>
    </>
  )
}
