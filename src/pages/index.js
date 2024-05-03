import { Layout } from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import peculiars from '../../public/images/profile/peculiars.png'
import { AnimatedText } from '@/components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons'
import { HireMe } from '@/components/HireMe'
import lightBulb from '../../public/images/svgs/miscellaneous_icons_1.svg';


export default function Home() {
  return (
    <>
      <Head>
        <title>Dynasty</title>
        <meta name="description" content="Welcome to my portfolio, I am Olaitan Damilare, a Frontend and Mobile Developer." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='flex items-center text-dark w-full min-h-[100%] dark:text-light'>
        <Layout className='sm:p-32 xl:py-0'>
          <div className='flex items-center justify-between w-full xs:flex-col lg:flex-row'>
            <div className='md:w-2/3 flex flex-col items-center self-center sm:text-center md:text-left xs:pt-16 sm:py-32 lg:py-0'>
              <AnimatedText text='Turning Vision Into Reality With Code.' className='sm:text-center md:text-left xs:text-6xl md:text-7xl'/>
              <p className='my-4 md:text-base font-medium'>As a skilled Developer, I am dedicated to turning ideas into innovative web applications. Explore my latest projects and articles, showcasing my expertise in web and mobile development.</p>
              <div className='flex items-center md:self-start gap-4 sm:self-center'>
                <Link className='bg-dark text-light py-2 px-6 rounded-md text-lg font-semibold flex gap-1 hover:bg-light hover:text-dark hover:outline outline-2 dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light' href='/doc.pdf' download={true} target='_blank'>Resume <LinkArrow className={"w-6"}/></Link>
                <Link className='text-lg font-medium text-dark underline capitalize dark:text-light' href='mailto:olaitandamilare230@gmail.com' target='_blank'>Contact</Link>
              </div>
            </div>
            <div className='w-1/2'>
              <Image src={peculiars} alt='The Developer image' className=' w-[30rem] h-auto xs:hidden lg:inline-block' priority sizes='(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw'/>
            </div>
          </div>
        </Layout>
        <HireMe/>
        <div className='absolute bottom-14 right-20 w-24 xl:right-14 xl:w-20 xs:hidden md:block'>
          <Image src={lightBulb} alt className='w-full h-auto' priority sizes='(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw'/>
        </div>
      </main>
    </>
  )
}
