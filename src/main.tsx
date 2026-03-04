import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router'
import './index.css'
import Router from './Router'
import { ThemeProvider } from './context/ThemeContext'

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <ThemeProvider>
      <HashRouter>
        <Router />
      </HashRouter>
    </ThemeProvider>
  </StrictMode>,
)
