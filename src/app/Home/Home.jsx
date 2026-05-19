import React from 'react'
import Hero from '../../components/Home/Hero'
import Section2 from '../../components/Home/Section2'
import Section3 from '../../components/Home/Section3'
import Testimonials from '../../components/Home/Section4'
import WhyChooseUs from '../../components/Home/WhyChooseUs'
import FeaturedBlogs from '../../components/Home/Blog'
import Founded from '../../components/Home/Founded'

const Home = () => {
  return (
    <div>
     <Hero/>
     <Section2/>
     <Section3/>
     <Testimonials/>
     <WhyChooseUs/> 
     <FeaturedBlogs/> 
     <Founded/> 
    </div>
  )
}

export default Home
