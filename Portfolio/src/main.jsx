import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

;(function () {
  const saved = localStorage.getItem('theme')
  if (saved === 'light') {
    document.documentElement.classList.remove('dark')
  } else {
    document.documentElement.classList.add('dark')
    if (!saved) localStorage.setItem('theme', 'dark')
  }
})()
// ───────────────────────────────────────────────────────────────────────────

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)