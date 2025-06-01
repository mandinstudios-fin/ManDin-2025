import React from 'react'
<<<<<<< HEAD
=======
import { Routes, Route } from 'react-router-dom'
>>>>>>> 07fe806 (Initial commit on june-version branch)
import Hero from './components/Hero'
import Services from './components/Services'
import Blogs from './components/Blogs'
import Footer from './components/Footer'
<<<<<<< HEAD
import { ContactProvider } from './hooks/contactHook'
=======
import PrivacyPolicy from './components/PrivacyPolicy'
import RefundPolicy from './components/RefundPolicy'
>>>>>>> 07fe806 (Initial commit on june-version branch)

// Clean Classic Divider Component
const SectionDivider = ({ variant = 'default' }: { variant?: 'default' | 'thin' | 'minimal' }) => {
  const dividerStyles: Record<'default' | 'thin' | 'minimal', React.JSX.Element> = {
    default: (
      <div className="w-full max-w-[1400px] mx-auto px-[2rem] py-[3rem] lg:py-[5rem]">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      </div>
    ),
    thin: (
      <div className="w-full max-w-[1200px] mx-auto px-[2rem] py-[2rem] lg:py-[3rem]">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      </div>
    ),
    minimal: (
      <div className="w-full max-w-[1000px] mx-auto px-[2rem] py-[1rem] lg:py-[2rem]">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
      </div>
    )
  }

  return dividerStyles[variant]
}

<<<<<<< HEAD
function App() {
  return (
    <ContactProvider>
      <div className="App">
        <Hero />
        <Services />
        <SectionDivider variant="thin" />
        <Blogs />
        <Footer />
      </div>
    </ContactProvider>
=======
// Home page component
const HomePage = () => {
  return (
    <>
      <Hero />
      <Services />
      <SectionDivider variant="thin" />
      <Blogs />
      <Footer />
    </>
  )
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
      </Routes>
    </div>
>>>>>>> 07fe806 (Initial commit on june-version branch)
  )
}

export default App