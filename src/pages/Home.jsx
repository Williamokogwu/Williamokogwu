import React from 'react';
import { workProjects } from '../data/projects';
import './Home.css';

export default function Home() {
  return (
    <div className="home-container">
      {/* Introduces the portfolio before visitors reach the project collection. */}
      <section className="intro-hero">
        <h1 className="hero-title">
          Hey! I’m Chijioke, a software developer based in Wisconsin. I’m currently seeking engineering roles and preparing for my MSc.
          {/* ✌️ */}
        </h1>
        <p className="status-text">
          He is currently{' '}
          <a 
            href="https://www.merriam-webster.com/dictionary/unemployed" 
            target="_blank" 
            rel="noopener noreferrer"
            className="definition-link"
          >
            unemployed.
          </a>
        </p>
        
        {/* Visual divider that labels the work section below. */}
        <div className="scroll-indicator">
          <p className="scroll-text">Selected Work</p>
          <span className="line"></span>
        </div>
      </section>

      {/* Project cards are generated from one shared data source to keep content consistent. */}
      <section className="experience-section" id="work">
        <div className="bold-projects-grid">
          {workProjects.map((project) => (
            <div key={project.id} className="project-card">
              <a 
                href={project.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="project-image-link"
                title={`View ${project.title} on GitHub`}
              >
                <div className="image-wrapper">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    loading="lazy" 
                    className="project-image"
                  />
                </div>
              </a>
              <div className="project-info">
                <h2 className="project-title-text">
                  <a 
                    href={project.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-title-link"
                  >
                    {project.title}
                  </a>
                </h2>
                <p className="project-desc-text">{project.summary}</p>
                <div className="project-tags">
                  {/* Tools are stored as a compact string and displayed as individual tags. */}
                  {project.tools.split(', ').map((tool, tIdx) => (
                    <span key={tIdx} className="project-tag-item">{tool}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
