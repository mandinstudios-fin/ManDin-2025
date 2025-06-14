import React from 'react'
import Hero from './components/Hero'
import Silk from './components/Silk'
import Services from './components/Services'
import WhoWeServe from './components/WhoWeServe'
import Blogs from './components/Blogs'
import OurNiche from './components/OurNiche'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Hero />
      <Services />
      <WhoWeServe />
      <OurNiche />
      <Blogs />
      <Footer />
    </div>
  )
}

export default App