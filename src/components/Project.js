import Image from 'next/image'
import Link from 'next/link';
import { GithubIcon } from '@/components/Icons'
import {motion} from 'framer-motion';

const FramerImage = motion(Image)

export const Project=({type, title, img, link, github})=>{
    return(
      <article className='relative w-full flex flex-col items-start justify-center rounded-3xl border-2 border-dark dark:border-light p-6 bg-light dark:bg-dark shadow-2xl'>
        <Link className='w-full cursor-pointer overflow-hidden rounded-lg' href={link} target='_blank'>
          <FramerImage priority sizes='(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw' whileHover={{scale: 1.05}} transition={{duration: 0.2}} src={img} alt={title} />
        </Link>
  
        <div className='w-full flex flex-col items-start justify-between mt-4'>
          <span className='text-xl font-medium text-primary'>{type}</span>
          <Link className='hover:underline underline-offset-2' href={link} target='_blank'>
            <h2 className='my-2 w-full text-3xl text-left font-bold dark:text-light'>{title}</h2>
          </Link>
          <div className='mt-2 flex items-center gap-2 dark:text-light'>
            <Link className='text-md font-semibold underline' href={link} target='_blank'> Visit</Link>
            <Link className='' href={github} target='_blank'> <GithubIcon className='w-8'/> </Link>
          </div>
        </div>
      </article>
    )
  }