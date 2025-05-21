import React, { useState } from 'react'
import Hero from './components/Hero'
import Services from './components/Services'
import Blogs from './components/Blogs'
import logo from './assets/Logo.png'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  

  return (
    <>
      <Hero />
      <Services />
      <Blogs />
      <Footer />
    </>
  )
}

export default App