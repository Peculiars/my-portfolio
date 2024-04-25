import { AnimatedText } from '@/components/AnimatedText'
import { Layout } from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import dynasty from '../../public/images/profile/dynasty.png';
import { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import { Skill } from '@/components/Skill';

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
      <main className='w-full'>
        <Layout>
          <AnimatedText text='Passion Fuels Purpose! ' className='flex items-center justify-center'/>
          <div className='grid w-full grid-cols-8 gap-16 my-4'>
            <div className=' col-span-3 flex flex-col items-center justify-start'>
              <h2 className='text-lg font-bold text-dark uppercase mb-4'>Biography</h2>
              <p className='font-medium my-2'>Hi, I'm Olaitan Damilare or you call me Dynasty, am a web and mobile developer with a passion for creating beautiful, functional, 
                and user-centered digital experiences. With 2 years of experience in the field. I am always looking for 
                new and innovative ways to bring my clients' visions to life.</p>

              <p className='font-medium my-2'>I believe that developing digital presence is something more than just making the UI looks pretty alone, it's more about solving problems and 
              creating intuitive, enjoyable experiences for users. </p>

              <p className='font-medium my-2'>Whether I'm working on a website, mobile app, or 
              other digital product, I bring my commitment to design excellence and user-centered thinking to 
              every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.</p>
            </div>
            <div className='relative col-span-3 bg-dark rounded-[2rem] p-8 w-[80%] h-[95%] top-8 left-5'>
              <div className='w-[98%] h-[98%] bg-light rounded-2xl p-8 border-2 border-dark absolute -top-1 -left-1'>
                <Image src={dynasty} alt='Dynasty image' className='w-full h-[100%] rounded-2xl bg-dark'/>
              </div>
            </div>
            <div className='col-span-2 flex items-end justify-between flex-col'>
                <div className='flex flex-col items-end justify-center'>
                <span className='text-7xl font-bold'><AnimatedNumbers value={50}/>+</span>
                  <h2 className='text-xl capitalize font-medium text-dark/75'>satisfield clients</h2>
                </div>
                <div className='flex flex-col items-end justify-center'>
                <span className='text-7xl font-bold'><AnimatedNumbers value={40}/>+</span>
                  <h2 className='text-xl capitalize font-medium text-dark/75'>completed projects</h2>
                </div>
                <div className='flex flex-col items-end justify-center'>
                <span className='text-7xl font-bold'><AnimatedNumbers value={2}/>+</span>
                  <h2 className='text-xl capitalize font-medium text-dark/75'>years of experience</h2>
                </div>
              </div>
          </div>
          <Skill/>
        </Layout>
      </main>
    </>
  )
}
