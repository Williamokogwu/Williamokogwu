import React, { useState } from 'react';
import './About.css';

export default function About() {
  // Retained for the optional carousel below so it can be re-enabled without changing its API.
  const [activeSlide, setActiveSlide] = useState(0);

  // Image metadata consumed by the currently disabled carousel section.
  const slides = [
    { id: 1, url: "/abstract.jpg", caption: "Abstract oil paint texture" },
    { id: 2, url: "/abstract_2.jpg", caption: "Geometric graphic design" },
    { id: 3, url: "/abstract_3.jpg", caption: "Macro water droplet abstraction" }
  ];

  // Keep timeline content separate from presentation so additional entries are easy to add.
  const experiences = [
    {
      id: 1,
      company: "University of Wisconsin - Parkside",
      role: "IT Support Specialist",
      year: "2024 - 2026"
    },
    // {
    //   id: 2,
    //   company: "Systems Labs",
    //   role: "Cloud Security Infrastructure Configurator",
    //   year: "2025"
    // }
  ];

  // Education uses the same row structure as experience for a consistent timeline layout.
  const education = [
    {
      id: 1,
      institution: "University of Wisconsin - Milwaukee",
      degree: "MSc in Computer Science",
      period: "2026 - Present"
    },
    {
      id: 2,
      institution: "University of Wisconsin - Parkside",
      degree: "B.S. in Computer Science",
      period: "2024 - 2026"
    }
  ];

  return (
    <section className="about-section">
      <div className="about-container">
        
        {/* Profile Card Header (Redesigned with custom B&W brand logo) */}
        {/* <div className="profile-badge-wrapper">
          <div className="profile-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="badge-logo-icon">
              <circle cx="15" cy="12" r="6" strokeWidth="1.8" />
              <circle cx="9" cy="12" r="5" fill="currentColor" strokeWidth="1.8" />
            </svg> */}
            {/* <span className="badge-name">Chijioke O</span> */}
            {/* <span className="badge-sep">/</span>
            <span className="badge-page">About</span> */}
          {/* </div>
        </div> */}

        {/* Introduction Block */}
        <header className="about-hero">
          <h1 className="about-main-title">Hi, I'm Chijioke.</h1>
          <p className="about-subtitle">Software developer & systems engineer</p>
        </header>

        {/* Short narrative gives context before the structured experience and education lists. */}
        <div className="about-narrative">
          <p className="narrative-paragraph">
            Currently, I'm preparing to expand my theoretical and technical foundations as an incoming MSc Student in Computer Science and IT at University of Wisconsin - Milwaukee, while actively seeking developer or cloud systems roles.
          </p>
          <p className="narrative-paragraph">
            Before that, I worked as an IT Support Specialist at University of Wisconsin - Parkside, maintaining directory services, configuring DNS/DHCP servers, and building automated internal regression testing suites.
          </p>
          <p className="narrative-paragraph">
            I love all things development, infrastructure, and automation. Recently, I've been really into serverless cloud architectures, experimenting with AWS Lambda functions, DynamoDB schema lookups, Playwright test coverage, and React Native budgeting apps.
          </p>
          <p className="narrative-paragraph">
            Outside of tech, you can find me watching early 2010s tv series (the long ones), watching comedy skits and touching grass.
          </p>
        </div>

        {/* Call to Action Banner Box */}
        {/* <div className="cta-banner">
          <div className="cta-left">
            <span className="cta-graphic-icon">🔥</span>
            <div className="cta-text-content">
              <p className="cta-header-msg">Got something cool? Let's build it :)</p>
              <p className="cta-sub-msg">Seeking software engineering and IT systems opportunities.</p>
            </div>
          </div>
          <div className="cta-right">
            <a href="mailto:chijioke@example.com" className="say-hello-btn">
              Say hello! ✉️
            </a>
          </div>
        </div> */}

        {/* Map entries into a reusable two-column timeline row. */}
        <div className="about-list-section">
          <h2 className="list-section-title">Experiences</h2>
          <div className="list-stack">
            {experiences.map((exp) => (
              <div key={exp.id} className="list-row">
                <div className="list-row-left">
                  <span className="list-row-bold">{exp.company}</span>
                  <span className="list-row-light">{exp.role}</span>
                </div>
                <span className="list-row-right">{exp.year}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="about-list-section">
          <h2 className="list-section-title">Education</h2>
          <div className="list-stack">
            {education.map((edu) => (
              <div key={edu.id} className="list-row">
                <div className="list-row-left">
                  <span className="list-row-bold">{edu.institution}</span>
                  <span className="list-row-light">{edu.degree}</span>
                </div>
                <span className="list-row-right">{edu.period}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Links */}
        {/* <div className="about-list-section">
          <h2 className="list-section-title">Contact</h2>
          <div className="contact-links-inline">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="contact-link-item">Twitter</a>
            <span className="link-pipe">|</span>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="contact-link-item">LinkedIn</a>
            <span className="link-pipe">|</span>
            <a href="mailto:okogwuc@yahoo.com" className="contact-link-item">Email</a>
          </div>
        </div> */}

        {/* Image Carousel / Slider commented out per user request
        <div className="media-carousel-section">
          <div className="carousel-display-box">
            <img 
              src={slides[activeSlide].url} 
              alt={slides[activeSlide].caption} 
              className="carousel-slide-image"
            />
          </div>
          <p className="carousel-caption">{slides[activeSlide].caption}</p>
          
          <div className="carousel-dots">
            {slides.map((slide, idx) => (
              <button
                key={slide.id}
                onClick={() => setActiveSlide(idx)}
                className={`carousel-dot ${activeSlide === idx ? 'active' : ''}`}
                aria-label={`Show slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
        */}

      </div>
    </section>
  );
}
