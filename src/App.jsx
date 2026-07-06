import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import './App.css';

// Redirect route for '/resume' to directly open Google Drive if typed in URL bar
function ResumeRedirect() {
  useEffect(() => {
    window.location.replace("https://drive.google.com/file/d/1Nde4FpJ2kaHwWhFiU3rxT1H2d1CDr94N/view?usp=sharing");
  }, []);
  return (
    <div style={{ padding: '6rem 0', textAlign: 'center', fontFamily: 'Inter, sans-serif' }}>
      <p style={{ color: 'var(--text-color-light)' }}>Redirecting to Google Drive resume...</p>
    </div>
  );
}

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <Router>
      <div className="App">
        {/* Navbar stays globally visible on top, stretches full width */}
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        
        {/* Dynamic page contents switch here based on URL path */}
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