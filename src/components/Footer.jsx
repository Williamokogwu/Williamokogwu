import React from 'react';
import './Footer.css';

/* Minimal SVG icons keep the footer compact while adding visual richness. */
const EmailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <polyline points="2 4 12 13 22 4"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="4"/>
    <line x1="8" y1="11" x2="8" y2="16"/>
    <line x1="8" y1="8" x2="8" y2="8.01"/>
    <line x1="12" y1="16" x2="12" y2="11"/>
    <path d="M16 16v-3a2 2 0 0 0-4 0"/>
  </svg>
);

const GitHubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="portfolio-footer">
      <div className="footer-container">
        <div className="footer-brand">
          {/* <div className="footer-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="logo-icon-bw">
              <circle cx="15" cy="12" r="6" strokeWidth="1.8" />
              <circle cx="9" cy="12" r="5" fill="currentColor" strokeWidth="1.8" />
            </svg>
          </div> */}
          <div className="footer-divider">© 2026 Chijioke Okogwu</div>
        </div>
        {/* External profile links are grouped to preserve a predictable footer layout. */}
        <div className="social-links">
          <a href="mailto:okogwuc@yahoo.com" className="social-link icon-link" aria-label="Send email">
            <EmailIcon />
            <span>Email</span>
          </a>
          <a href="https://www.linkedin.com/in/chijioke-okogwu/" target="_blank" rel="noopener noreferrer" className="social-link icon-link" aria-label="LinkedIn profile">
            <LinkedInIcon />
            <span>LinkedIn</span>
          </a>
          <a href="https://github.com/Williamokogwu" target="_blank" rel="noopener noreferrer" className="social-link icon-link" aria-label="GitHub profile">
            <GitHubIcon />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
