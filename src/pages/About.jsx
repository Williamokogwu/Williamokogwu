import React from 'react';
import './About.css';

export default function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-main-grid">
          
          {/* Left Column: B&W Abstract Photo */}
          <div className="about-image-side">
            <div className="about-image-container">
              <img 
                src="/abstract.jpg" 
                alt="Abstract art visualization" 
                className="about-profile-image" 
              />
            </div>
            <p className="image-caption">Abstract visualization</p>
          </div>

          {/* Right Column: Narrative Copy */}
          <div className="about-text-side">
            <h1 className="about-title-text">Hey! I'm Chijioke.</h1>
            <p className="about-intro-p">
              I'm an upcoming software developer, IT support specialist, and incoming MSc student based in Wisconsin. I build software systems that balance technical precision with straightforward, human utility.
            </p>

            <h2 className="about-subtitle-text">What I've been up to.</h2>
            <p className="about-body-p">
              My background bridges the gap between deep computer science fundamentals and hands-on systems administration. Recently, I've been developing full-stack financial applications, configuring serverless cloud infrastructure, and automating regression testing suites.
            </p>
            <p className="about-body-p">
              Whether optimizing database indexes in PostgreSQL, configuring VPCs and IAM boundaries in AWS, or configuring secure directory servers in a lab environment, I focus on building things that are resilient, scalable, and intuitive.
            </p>

            <h2 className="about-subtitle-text">Technical expertise.</h2>
            <p className="about-body-p">
              I work across multiple domains using a tailored stack:
            </p>
            <div className="about-tech-list">
              <div className="tech-group">
                <span className="tech-label">Development:</span> React, Node.js, PostgreSQL, Next.js
              </div>
              <div className="tech-group">
                <span className="tech-label">Systems & Cloud:</span> AWS (Lambda, DynamoDB), Active Directory, DNS/DHCP, Linux
              </div>
              <div className="tech-group">
                <span className="tech-label">QA & Tools:</span> Playwright, Automated Testing, Git, MIPS Assembly
              </div>
            </div>

            <h2 className="about-subtitle-text">Next chapters.</h2>
            <p className="about-body-p">
              I'm currently preparing to dive deeper into advanced computer science concepts and distributed architectures as an incoming Master’s student, while seeking my next collaborative engineering role.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
