import { AnimatedText } from '@/components/AnimatedText'
import { Layout } from '@/components/Layout'
import Head from 'next/head'
import { FeaturedProjects } from '@/components/FeaturedProjects'
import { Project } from '@/components/Project'
import project1 from '../../public/images/projects/project1.png'
import project4 from '../../public/images/projects/project4.png'
import project3 from '../../public/images/projects/project3.png'
import project6 from '../../public/images/projects/project6.png'
import project2 from '../../public/images/projects/project2.png'
import project5 from '../../public/images/projects/project5.png'


export default function Projects() {
  return (
    <>
      <Head>
        <title>Dynasty | Project page</title>
        <meta name="description" content="I'm a Frontend Developer, I create responsive website that suites you." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className='w-full flex flex-col items-center justify-center mb-10'>
        <Layout className=''>
          <AnimatedText text='Imagination Trumps Knowledge!' className='text-center py-10 xs:text-5xl sm:text-7xl'/>
          <div className='grid xs:grid-cols-12 xs:gap-y-10 sm:gap-x-8 lg:gap-14 pt-10'>
              <div className='relative col-span-12 rounded-3xl'>
                <div className='absolute top-0 md:-right-4 xs:-right-2 z-1 w-[101.1%] md:h-[103%] sm:h-[102%] xs:h-[102%] rounded-[2.5rem] bg-dark dark:bg-light'/>
                <FeaturedProjects
                title='Portfolio'
                img={project1}
                summary='A professional portfolio website using Next JS, Framer-motion, and TailwindCSS. It has smooth 
                page transitions, cool background effects, unique design and it is mobile responsive.'
                link='/'
                github='https://github.com/Peculiars/my-portfolio'
                type='Featured Project'
                />
              </div>
              <div className='relative sm:col-span-6 xs:col-span-12'>
                  <div className='absolute top-0 md:-right-4 xs:-right-2 z-1 w-[101.1%] md:h-[103%] sm:h-[102%] xs:h-[102%] rounded-[2.5rem] bg-dark dark:bg-light'/>
                    <Project
                    title='easybank Landing Page'
                    img={project4}
                    link='https://onlineeasybank.netlify.app'
                    github='https://github.com/Peculiars/easybank'
                    />
              </div>
              <div className='relative sm:col-span-6 xs:col-span-12'>
                  <div className='absolute top-0 md:-right-4 xs:-right-2 z-1 w-[101.1%] md:h-[103%] sm:h-[102%] xs:h-[102%] rounded-[2.5rem] bg-dark dark:bg-light'/>
                    <Project
                    title='tindog Landing Page'
                    img={project6}
                    link='https://dtindog.netlify.app'
                    github='https://github.com/Peculiars/Tindog'
                    />
              </div>
              <div className='relative col-span-12 rounded-3xl'>
                <div className='absolute top-0 md:-right-4 xs:-right-2 z-1 w-[101.1%] md:h-[103%] sm:h-[102%] xs:h-[102%] rounded-[2.5rem] bg-dark dark:bg-light'/> 
                <FeaturedProjects
                title='Responsive Admin Dashboard'
                img={project2}
                summary='A professional and responsive admin-dashboard, showcasing .'
                link='/'
                github='https://github.com/Peculiars/admin-dashboard'
                type='Featured Project'
                />
              </div>
              <div className='relative sm:col-span-6 xs:col-span-12'>
                  <div className='absolute top-0 md:-right-4 xs:-right-2 z-1 w-[101.1%] md:h-[103%] sm:h-[102%] xs:h-[102%] rounded-[2.5rem] bg-dark dark:bg-light'/>
                    <Project
                    title='Meenah Fashion Store'
                    img={project3}
                    link='https://meenah.netlify.app'
                    github='https://github.com/Peculiars/meenah'
                    />
              </div>
              <div className='relative sm:col-span-6 xs:col-span-12'>
                  <div className='absolute top-0 md:-right-4 xs:-right-2 z-1 w-[101.1%] md:h-[103%] sm:h-[102%] xs:h-[102%] rounded-[2.5rem] bg-dark dark:bg-light'/>
                    <Project
                    title='E-commerce Product Page'
                    img={project5}
                    link='https://e-commerce-product-view.netlify.app'
                    github='https://github.com/Peculiars/e-commerce-product-page'
                    />
              </div>
          </div>
        </Layout>
      </main>
    </>
  )
}
