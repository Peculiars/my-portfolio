import { AnimatedText } from '@/components/AnimatedText'
import { FeaturedArticle } from '@/components/FeaturedArticle'
import { Layout } from '@/components/Layout'
import article1 from '../../public/images/articles/pagination-article.jpg'
import article2 from '../../public/images/articles/react-loading.jpg'
import Head from 'next/head'

export default function Articles() {
  return (
    <>
      <Head>
        <title>Damilare</title>
        <meta name="description" content="I'm a Frontend Developer, I create responsive website that suites you." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className='w-full flex flex-col items-center justify-center overflow-hidden'>
        <Layout>
          <AnimatedText text='Words Can Change The World!' className='text-center py-10'/>
          <ul className='relative grid grid-cols-2 gap-16 py-10'>
            <div className='relative'>
              <div className='absolute top-0.5 -right-3 z-1 w-[101.7%] h-[102%] rounded-[2rem] bg-dark'/>
                <FeaturedArticle 
                title='Build A Custom Pagination Component In Reactjs From Scratch'
                summary='Learn how to build a custom pagination component in ReactJS from scratch. 
                  Follow this step-by-step guide to integrate Pagination component in your ReactJS project.'
                time='9 min read'
                link='/'
                img={article1}/>
            </div>
            <div className='relative'>
              <div className='absolute top-0.5 -right-3 z-1 w-[101.7%] h-[102%] rounded-[2rem] bg-dark'/>
              <FeaturedArticle 
              title='Creating Stunning Loading Screens In React: Build 3 Types Of Loading Screens'
              summary='Learn how to create stunning loading screens in React with 3 different methods. 
                      Discover how to use React-Loading, React-Lottie & build a custom loading screen.'
              time='10 min read'
              link='/'
              img={article2}/>
            </div>
          </ul>
          <h2 className='font-bold text-4xl w-full text-center my-10'>All Articles</h2>
        </Layout>
      </main>
    </>
  )
}
