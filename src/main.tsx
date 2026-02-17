import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import './index.css'
import Router from './Router'
import { ThemeProvider } from './context/ThemeContext'

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
)
