import React from 'react'
import dynamic from 'next/dynamic'
import { NextPageWithLayout } from '@/interfaces/layout'
import { MainLayout } from '@/components/layout'
// import { HomeFeature, HomeHero, HomePopularCourse, HomeTestimonial, HomeOurMentors, DynamicHomeNewsLetter } from '@/components/home'

const DynamicHomeHero = dynamic(() => import('../components/home/hero'))
const DynamicHomeFeature = dynamic(() => import('../components/home/feature'))

const DynamicHomePopularCourse = dynamic(() => import('../components/home/popular-courses'), {
  ssr:false
})

const DynamicOurServices = dynamic(() => import('../components/home/ourservices'))

const DynamicHomeTechStack = dynamic(() => import('../components/home/techstack'), {
  ssr:false
})

const DynamicHomeTestimonial = dynamic(() => import('../components/home/testimonial'))
const DynamicHomeOurMentors = dynamic(() => import('../components/home/mentors'))
const DynamicHomeNewsLetter = dynamic(() => import('../components/home/newsletter'))

const DynamicHomeJoinCommunity = dynamic(() => import('../components/home/joincommunity'))
const DynamicHomeGetInTouch = dynamic(() => import('../components/home/getintouch'))

const Home: NextPageWithLayout = () => {
  return (
    <>
      <DynamicHomeHero />
      <DynamicHomePopularCourse />
      <DynamicHomeFeature />
      <DynamicOurServices />
      <DynamicHomeTechStack />
      <DynamicHomeJoinCommunity />
      <DynamicHomeGetInTouch />

      {/* <DynamicHomeTestimonial />
      <DynamicHomeOurMentors />*/}
      {/* <DynamicHomeNewsLetter />  */}
    </>
  )
}

Home.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default Home
