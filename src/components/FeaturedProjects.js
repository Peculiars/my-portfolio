import Image from 'next/image'
import Link from 'next/link';
import { GithubIcon } from '@/components/Icons'
import {motion} from 'framer-motion';

const FramerImage = motion(Image)

export const FeaturedProjects=({type, title, summary, img, link, github})=>{
    return(
      <article className='relative w-full flex items-center justify-between rounded-3xl border-2 border-dark p-12 bg-light shadow-2xl'>
        <Link className='w-1/2 cursor-pointer overflow-hidden rounded-lg' href={link} target='_blank'>
          <FramerImage whileHover={{scale: 1.05}} transition={{duration: 0.2}} src={img} alt={title} />
        </Link>
  
        <div className='w-1/2 flex flex-col items-start justify-between pl-6'>
          <span className='text-xl font-medium text-primary'>{type}</span>
          <Link className='hover:underline underline-offset-2' href={link} target='_blank'>
            <h2 className='my-2 w-full text-4xl text-left font-bold'>{title}</h2>
          </Link>
          <p className='my-2 font-medium text-dark'>{summary}</p>
          <div className='mt-2 flex items-center gap-4'>
            <Link className='' href={github} target='_blank'> <GithubIcon className='w-10'/> </Link>
            <Link className='rounded-lg bg-dark text-light py-1 px-6 text-lg font-semibold' href={link} target='_blank'> Visit Project</Link>
          </div>
        </div>
      </article>
    )
  }