import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import './App.css';

// Handles direct visits to /resume by replacing the app route with the PDF asset.
function ResumeRedirect() {
  useEffect(() => {
    window.location.replace("/CHIJIOKE_W_OKOGWU.pdf");
  }, []);
  return (
    <div style={{ padding: '6rem 0', textAlign: 'center', fontFamily: 'Inter, sans-serif' }}>
      <p style={{ color: 'var(--text-color-light)' }}>Loading resume...</p>
    </div>
  );
}

function App() {
  // Restore the visitor's saved preference, defaulting first-time visitors to light mode.
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    // CSS variables use this attribute to swap the site's color palette.
    document.documentElement.setAttribute('data-theme', theme);
    // Persist the selection so it survives page reloads and future visits.
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <Router>
      <div className="App">
        {/* Shared navigation receives the current theme and its update handler. */}
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        
        {/* Only the routed page changes; the site chrome remains consistent. */}
        <main className="main-viewport">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<ResumeRedirect />} />
          </Routes>
        </main>

        {/* Footer stays globally visible at the bottom */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
