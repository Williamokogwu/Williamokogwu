import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

export default function Navbar({ theme, toggleTheme }) {
  const location = useLocation();
  const currentPath = location.pathname;
  const resumeUrl = "https://drive.google.com/file/d/1Nde4FpJ2kaHwWhFiU3rxT1H2d1CDr94N/view?usp=sharing";

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo is a sleek, black/white overlapping circle icon */}
        <Link to="/" className="logo-link" aria-label="Home">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="logo-icon-bw">
            <circle cx="15" cy="12" r="6" strokeWidth="1.8" />
            <circle cx="9" cy="12" r="5" fill="currentColor" strokeWidth="1.8" />
          </svg>
        </Link>

        <nav className="nav-controls">
          <Link 
            to="/" 
            className={currentPath === '/' ? 'active' : ''}
          >
            Work
          </Link>
          <Link 
            to="/about" 
            className={currentPath === '/about' ? 'active' : ''}
          >
            About
          </Link>
          <a 
            href={resumeUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="nav-resume-link"
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
