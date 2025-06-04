import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Hero from './components/Hero'
import Services from './components/Services'
import Blogs from './components/Blogs'
import Footer from './components/Footer'
import TermsAndConditions from './components/TermsAndConditions'
import RefundPolicy from './components/RefundPolicy'
import PrivacyPolicy from './components/PrivacyPolicy'
import { ContactProvider } from './hooks/contactHook'

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

// Home Page Component
const HomePage = () => {
  return (
    <div className="App" style={{ backgroundColor: '#000000', minHeight: '100vh' }}>
      <Hero />
      <Services />
      <SectionDivider variant="thin" />
      <Blogs />
      <Footer />
    </div>
  )
}

function App() {
  return (
    <ContactProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/terms-conditions" element={<TermsAndConditions />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </ContactProvider>
  )
}

export default App