import { Layout } from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import peculiar from '../../public/images/profile/peculiar.png'
import { AnimatedText } from '@/components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons'
import { HireMe } from '@/components/HireMe'
import { TransitionEffect } from '@/components/TransitionEffect'


export default function Home() {
  return (
    <>
      <Head>
        <title>Peculiar</title>
        <meta name="description" content="Welcome to my portfolio, I am Olaitan Damilare, a Frontend and Mobile Developer." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type='image/icon' href="/favicon.ico" />
      </Head>
      <TransitionEffect/>
      <main className='flex items-center text-dark w-full min-h-[100%] dark:text-light'>
        <Layout className='xs:pt-32 md:py-64 lg:py-0'>
          <div className='flex items-center justify-between w-full xs:flex-col lg:flex-row'>
            <div className='lg:w-2/3 flex flex-col items-center self-center sm:text-center lg:text-left xs:pt-16 sm:py-32 lg:py-0'>
              <AnimatedText text='Turning Vision Into Reality With Code.' className='xs:text-center lg:text-left xs:text-4xl sm:text-6xl lg:text-5xl xl:text-7xl'/>
              <p className='my-4 sm:text-base xs:text-sm font-medium xs:text-center lg:text-left'>As a skilled Developer, I am dedicated to turning ideas into innovative web applications. Explore my latest projects and articles, showcasing my expertise in web and mobile development.</p>
              <div className='flex items-center lg:self-start xs:gap-4 sm:gap-10 sm:self-center sm:pt-10 lg:pt-0 md:pt-0 '>
                <Link className='bg-dark text-light py-2 px-6 rounded-md text-lg font-semibold flex gap-1 hover:bg-light hover:text-dark hover:outline outline-2 dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light' href='/Oluwadamilare2025.pdf' download={true} target='_blank'>Resume <LinkArrow className={"w-6"}/></Link>
                <Link className='text-lg font-medium text-dark underline capitalize dark:text-light' href='mailto:olaitandamilare230@gmail.com' target='_blank'>Contact</Link>
              </div>
            </div>
            <div className='lg:w-1/2 xs:w-full xs:pt-20 lg:pt-0 flex items-center justify-center'>
              <Image src={peculiar} alt='The Developer image' className='w-[30rem] h-auto inline-block' priority sizes='(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw'/>
            </div>
          </div>
        </Layout>
        <HireMe/>
      </main>
    </>
  )
}
