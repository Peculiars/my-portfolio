import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {motion} from 'framer-motion';

const FramerImage = motion(Image)

export const FeaturedArticle = ({img, title, time, summary, link}) => {
  return (
    <li className='relative col-span-1 w-full bg-light p-4 border-dark dark:border-light border-2 rounded-2xl inline-block dark:bg-dark dark:text-light'>
        <Link className='w-full cursor-pointer overflow-hidden rounded-lg' href={link} target='_blank'>
          <FramerImage whileHover={{scale: 1.01}} transition={{duration: 0.2}} src={img} alt={title} className='w-full h-auto rounded-lg' />
        </Link>
        <Link className='' href={link} target='_blank'>
          <h2 className='capitalize md:text-2xl font-bold my-2 hover:underline xs:text-xl'>{title}</h2>
        </Link>
        <p className='text-sm mb-2'>{summary}</p>
        <span className='text-primary dark:text-primaryDark font-semibold xs:text-sm md:text-base'>{time}</span>
    </li>
  )
}
