import React from 'react';
import { workProjects } from '../data/projects';
import './Home.css';

export default function Home() {
  return (
    <div className="home-container">
      {/* Editorial Hero (Left-Aligned) */}
      <section className="intro-hero">
        <h1 className="hero-title">
          Hey! I’m Chijioke, a software developer based in Wisconsin. I’m currently seeking engineering roles and preparing for my MSc. ✌️
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
        
        {/* Scroll Divider Cue - Left Aligned with single rightward extending line */}
        <div className="scroll-indicator">
          <p className="scroll-text">Selected Work</p>
          <span className="line"></span>
        </div>
      </section>

      {/* Symmetric Bold Grid Section */}
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
