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
        <title>My Project page</title>
        <meta name="description" content="I'm a Frontend Developer, I create responsive website that suites you." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className='w-full flex flex-col items-center justify-center mb-10'>
        <Layout className=''>
          <AnimatedText text='Imagination Trumps Knowledge!'/>
          <div className='grid grid-cols-12 gap-24 pt-10'>
              <div className='col-span-12 rounded-3xl'>
                <FeaturedProjects
                title='Portfolio'
                img={project1}
                summary='A professional portfolio website using Next JS, Framer-motion, and TailwindCSS. It has smooth 
                page transitions, cool background effects, unique design and it is mobile responsive.'
                link='/'
                github='/'
                type='Featured Project'
                />
              </div>
              <div className='col-span-6'>
                    <Project
                    title='easybank Landing Page'
                    img={project4}
                    link='/'
                    github='/'
                    />
              </div>
              <div className='col-span-6'>
                    <Project
                    title='tindog Landing Page'
                    img={project6}
                    link='/'
                    github='/'
                    />
              </div>
              <div className='col-span-12 rounded-3xl'>
                <FeaturedProjects
                title='Responsive Admin Dashboard'
                img={project2}
                summary='A professional portfolio website using Next JS, Framer-motion, and TailwindCSS. It has smooth 
                page transitions, cool background effects, unique design and it is mobile responsive.'
                link='/'
                github='/'
                type='Featured Project'
                />
              </div>
              <div className='col-span-6'>
                    <Project
                    title='Meenah Fashion Store'
                    img={project3}
                    link='/'
                    github='/'
                    />
              </div>
              <div className='col-span-6'>
                    <Project
                    title='E-commerce Product Page'
                    img={project5}
                    link='/'
                    github='/'
                    />
              </div>
          </div>
        </Layout>
      </main>
    </>
  )
}
