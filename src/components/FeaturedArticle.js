import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {motion} from 'framer-motion';

const FramerImage = motion(Image)

export const FeaturedArticle = ({img, title, time, summary, link}) => {
  return (
    <li className='relative col-span-1 w-full bg-light p-4 border-dark border-2 rounded-2xl inline-block'>
        <Link className='w-full cursor-pointer overflow-hidden rounded-lg' href={link} target='_blank'>
          <FramerImage whileHover={{scale: 1.01}} transition={{duration: 0.2}} src={img} alt={title} className='w-full h-auto rounded-lg' />
        </Link>
        <Link className='' href={link} target='_blank'>
          <h2 className='capitalize text-2xl font-bold my-2 hover:underline'>{title}</h2>
        </Link>
        <p className='text-sm mb-2'>{summary}</p>
        <span className='text-primary font-semibold'>{time}</span>
    </li>
  )
}
