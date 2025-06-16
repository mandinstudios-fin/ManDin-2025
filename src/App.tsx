import React, { useState } from 'react'
import Hero from './components/Hero'
import Silk from './components/Silk'
import Services from './components/Services'
import WhoWeServe from './components/WhoWeServe'
import Blogs from './components/Blogs'
import OurNiche from './components/OurNiche'
import Footer from './components/Footer'
import Loader from './components/Loader'

const App = () => {
  const [loadingDone, setLoadingDone] = useState(false);

  return (
    <>
      {!loadingDone && <Loader onFinish={() => setLoadingDone(prev => !prev)} />}
      <div>
        <Hero />
        <Services />
        <WhoWeServe />
        <OurNiche />
        <Blogs />
        <Footer />
      </div>
    </>
  )
}

export default App