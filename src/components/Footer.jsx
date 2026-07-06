import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="portfolio-footer">
      <div className="footer-container">
        <div className="footer-brand">
          <div className="footer-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="logo-icon-bw">
              <circle cx="15" cy="12" r="6" strokeWidth="1.8" />
              <circle cx="9" cy="12" r="5" fill="currentColor" strokeWidth="1.8" />
            </svg>
          </div>
          <div className="footer-divider">———— This is the footer ————</div>
        </div>
        <div className="social-links">
          <a href="mailto:okogwuc@yahoo.com" className="social-link">Email</a>
          <a href="https://www.linkedin.com/in/chijioke-okogwu/" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
          <a href="https://github.com/Williamokogwu" target="_blank" rel="noopener noreferrer" className="social-link">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
