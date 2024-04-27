import Image from 'next/image'
import Link from 'next/link';
import { GithubIcon } from '@/components/Icons'

export const Project=({type, title, img, link, github})=>{
    return(
      <article className='relative w-full flex flex-col items-start justify-center rounded-3xl border-2 border-dark p-6 bg-light shadow-2xl'>
        <Link className='w-full cursor-pointer overflow-hidden rounded-lg' href={link} target='_blank'>
          <Image src={img} alt={title} />
        </Link>
  
        <div className='w-full flex flex-col items-start justify-between mt-4'>
          <span className='text-xl font-medium text-primary'>{type}</span>
          <Link className='hover:underline underline-offset-2' href={link} target='_blank'>
            <h2 className='my-2 w-full text-3xl text-left font-bold'>{title}</h2>
          </Link>
          <div className='mt-2 flex items-center gap-2'>
            <Link className='text-md font-semibold underline' href={link} target='_blank'> Visit</Link>
            <Link className='' href={github} target='_blank'> <GithubIcon className='w-8'/> </Link>
          </div>
        </div>
      </article>
    )
  }