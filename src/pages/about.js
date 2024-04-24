import { AnimatedText } from '@/components/AnimatedText'
import { Layout } from '@/components/Layout'
import Head from 'next/head'

export default function About() {
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
          </div>
        </Layout>
      </main>
    </>
  )
}
