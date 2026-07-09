import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

export default function Navbar({ theme, toggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;
  const resumeUrl = "/CHIJIOKE_W_OKOGWU.pdf";

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Dynamically determine current active page name for the header capsule
  let pageName = 'Work';
  if (currentPath === '/about') {
    pageName = 'About';
  } else if (currentPath === '/resume') {
    pageName = 'Resume';
  }

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo and breadcrumb page title wrapped in a custom capsule pill */}
        <Link to="/" className="logo-pill-link" aria-label="Home" onClick={handleLinkClick}>
          <div className="logo-pill">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="logo-icon-bw">
              <circle cx="15" cy="12" r="6" strokeWidth="1.8" />
              <circle cx="9" cy="12" r="5" fill="currentColor" strokeWidth="1.8" />
            </svg>
            <span className="logo-pill-sep">/</span>
            <span className="logo-pill-text">{pageName}</span>
          </div>
        </Link>

        {/* Hamburger Menu Toggle Button */}
        <button 
          className="hamburger-btn" 
          onClick={toggleMenu} 
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
        </button>

        {/* Navigation Controls Wrapper */}
        <nav className={`nav-controls ${isMenuOpen ? 'open' : ''}`}>
          <Link 
            to="/" 
            className={currentPath === '/' ? 'active' : ''}
            onClick={handleLinkClick}
          >
            Work
          </Link>
          <Link 
            to="/about" 
            className={currentPath === '/about' ? 'active' : ''}
            onClick={handleLinkClick}
          >
            About
          </Link>
          <a 
            href={resumeUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="nav-resume-link"
            onClick={handleLinkClick}
          >
            Resume
          </a>

          {/* Theme Toggle Button */}
          <button 
            onClick={toggleTheme} 
            className="theme-toggle-btn" 
            aria-label="Toggle dark mode"
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="toggle-icon">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="toggle-icon">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            )}
          </button>
        </nav>
      </div>
    </header>
  );
}
