import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { ContactProvider } from './hooks/contactHook.tsx'

// Ensure immediate black background
document.body.style.backgroundColor = '#000000';
document.documentElement.style.backgroundColor = '#000000';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ContactProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ContactProvider>
  </StrictMode>,
)
