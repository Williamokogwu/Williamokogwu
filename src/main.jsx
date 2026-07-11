import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource/redaction'
import '@fontsource/redaction/700.css'
import './index.css'
import App from './App.jsx'

// StrictMode highlights unsafe patterns during development without affecting production output.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
