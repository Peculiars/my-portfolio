import { AnimatedText } from '@/components/AnimatedText'
import { FeaturedArticle } from '@/components/FeaturedArticle'
import { Layout } from '@/components/Layout'
import {motion, useMotionValue} from 'framer-motion'
import article1 from '../../public/images/articles/pagination-article.jpg'
import article2 from '../../public/images/articles/react-loading.jpg'
import article3 from '../../public/images/articles/form-validation.png'
import article4 from '../../public/images/articles/smooth-scrolling.png'
import article5 from '../../public/images/articles/modal.png'
import article6 from '../../public/images/articles/todo-list.png'
import article7 from '../../public/images/articles/redux.png'
import article8 from '../../public/images/articles/hoc.jpg'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useRef } from 'react'
const FramerImage = motion(Image)

const HoverImg =({title, img, link})=>{
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event){
    imgRef.current.style.display = 'inline-block';
    x.set(event.pageX);
    y.set(-10);
  }

  function handleMouseleave(event){
    imgRef.current.style.display = 'none';
    x.set(0);
    y.set(0);
  }
  return(
    <Link href={link} target='_blank' onMouseMove={handleMouse} onMouseLeave={handleMouseleave}>
      <h2 className='capitalize md:text-xl xs:text-xs xs:font-normal md:font-semibold hover:underline'>{title}</h2>
      <FramerImage priority sizes='(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw' style={{x:x, y:y}} initial={{opacity: 0}} whileInView={{opacity:1, transition:{duration:0.8}}} ref={imgRef} src={img} alt={title} className='w-96 h-auto hidden absolute z-10 rounded-lg'/>
    </Link>
  )
}

const Article =({img, title, date, link})=>{
  return(
    <motion.li initial={{y:200}} whileInView={{y:0, transition:{duration:0.7, ease:"easeInOut"}}} className='relative w-full xs:px-2 md:px-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark border-2 border-dark dark:border-light dark:bg-dark dark:text-light border-r-4 border-b-4'>
      <HoverImg title={title} img={img} link={link}/>
      <span className='text-primary dark:text-primaryDark xs:font-normal md:font-semibold pl-4 xs:text-xs md:text-base'>{date}</span>
    </motion.li>
  )
}
export default function Articles() {

  return (
    <>
      <Head>
        <title>Dynasty | Articles</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className='w-full flex flex-col items-center justify-center overflow-hidden'>
        <Layout>
          <AnimatedText text='Words Can Change The World!' className='text-center py-10 xs:text-5xl sm:text-7xl xs:px-0'/>
          <ul className='relative grid xs:grid-cols-1 md:grid-cols-2 gap-16 py-10'>
            <div className='relative'>
              <div className='absolute top-0.5 xs:-right-1.5 md:-right-3 z-1 xs:w-[101%] xs:h-[101.5%] md:w-[101.7%] md:h-[102%] rounded-[2rem] bg-dark dark:bg-light'/>
                <FeaturedArticle 
                title='Build A Custom Pagination Component In Reactjs From Scratch'
                summary='Learn how to build a custom pagination component in ReactJS from scratch. 
                  Follow this step-by-step guide to integrate Pagination component in your ReactJS project.'
                time='9 min read'
                link='/'
                img={article1}/>
            </div>
            <div className='relative'>
              <div className='absolute top-0.5 xs:-right-1.5 md:-right-3 z-1 xs:w-[101%] xs:h-[101.5%] md:w-[101.7%] md:h-[102%] rounded-[2rem] bg-dark dark:bg-light'/>
              <FeaturedArticle 
              title='Creating Stunning Loading Screens In React: Build 3 Types Of Loading Screens'
              summary='Learn how to create stunning loading screens in React with 3 different methods. 
                      Discover how to use React-Loading, React-Lottie & build a custom loading screen.'
              time='10 min read'
              link='/'
              img={article2}/>
            </div>
          </ul>
          <h2 className='font-bold text-4xl w-full text-center my-10 dark:text-light'>All Articles</h2>
          <ul className=' mb-48'>
            <Article 
            title='Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling' 
            date='March 22, 2024' 
            link='/' 
            img={article3}
            />
            <Article 
            title='Silky Smooth Scrolling In Reactjs: A Step-By-Step Guide For React Developers' 
            date='March 30, 2024' 
            link='/' 
            img={article4}
            />
            <Article 
            title='Creating An Efficient Modal Component In React Using Hooks And Portals' 
            date='April 05, 2024' 
            link='/' 
            img={article5}
            />
            <Article 
            title='Build A Fabulous Todo List App With React, Redux And Framer-Motion' 
            date='April 08, 2024' 
            link='/' 
            img={article6}
            />
            <Article 
            title="Redux Simplified: A Beginner's Guide For Web Developers" 
            date='April 14, 2024' 
            link='/' 
            img={article7}
            />
            <Article 
            title='What Is Higher Order Component (Hoc) In React?' 
            date='April 20, 2024' 
            link='/' 
            img={article8}
            />
          </ul>
        </Layout>
      </main>
    </>
  )
}
