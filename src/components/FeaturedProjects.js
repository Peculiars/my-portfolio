import Image from 'next/image'
import Link from 'next/link';
import { GithubIcon } from '@/components/Icons'
import {motion} from 'framer-motion';

const FramerImage = motion(Image)

export const FeaturedProjects=({type, title, summary, img, link, github})=>{
    return(
      <article className='relative w-full flex xs:flex-col md:flex-row items-center justify-between rounded-3xl border-2 border-dark dark:border-light xs:p-4 sm:p-8 md:p-12 bg-light shadow-2xl dark:bg-dark'>
        <Link className='xs:w-full md:w-1/2 cursor-pointer overflow-hidden rounded-lg' href={link} target='_blank'>
          <FramerImage whileHover={{scale: 1.05}} transition={{duration: 0.2}} src={img} alt={title} priority sizes='(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw'/>
        </Link>
  
        <div className='xs:w-full md:w-1/2 flex flex-col items-start justify-between xs:pl-0 md:pl-6'>
          <span className='text-xl font-medium text-primary dark:text-primaryDark xs:pt-1 md:pt-0'>{type}</span>
          <Link className='hover:underline underline-offset-2' href={link} target='_blank'>
            <h2 className='my-2 w-full sm:text-4xl xs:text-2xl text-left sm:font-bold xs:font-semibold dark:text-light'>{title}</h2>
          </Link>
          <p className='my-2 sm:font-medium xs:font-normal xs:text-sm sm:text-base text-dark dark:text-light'>{summary}</p>
          <div className='mt-2 flex items-center gap-4'>
            <Link className=' dark:text-light' href={github} target='_blank'> <GithubIcon className='w-10'/> </Link>
            <Link className='rounded-lg bg-dark dark:bg-light dark:text-dark text-light py-1 px-6 text-lg font-semibold' href={link} target='_blank'> Visit Project</Link>
          </div>
        </div>
      </article>
    )
  }