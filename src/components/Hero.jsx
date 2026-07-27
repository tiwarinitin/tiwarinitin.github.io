import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowRight, Download, Award, Sparkles, Cpu } from 'lucide-react';

export const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const roles = [
    "Senior DevOps Engineer",
    "Platform & Cloud Architect",
    "CKA & CKAD Certified Specialist",
    "GitOps, FinOps & DevSecOps Expert"
  ];
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting && typedText === currentRole) {
        setTimeout(() => setIsDeleting(true), 1800);
      } else if (isDeleting && typedText === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        setTypedText(
          isDeleting
            ? currentRole.substring(0, typedText.length - 1)
            : currentRole.substring(0, typedText.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, roleIndex]);

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '6rem',
        paddingBottom: '4rem',
        position: 'relative'
      }}
    >
      <div className="container" style={{ width: '100%' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.1fr 0.9fr',
            gap: '3rem',
            alignItems: 'center'
          }}
          className="hero-grid"
        >
          {/* Left Column: Headline & Bio */}
          <div>
            {/* Status & Tags Pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <div className="badge">
                <Sparkles size={14} />
                <span>AI Enthusiast</span>
              </div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.35rem 0.85rem',
                  borderRadius: '9999px',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  background: 'rgba(192, 132, 252, 0.1)',
                  color: 'var(--accent-purple)',
                  border: '1px solid rgba(192, 132, 252, 0.3)'
                }}
              >
                <Cpu size={14} />
                <span>Platform Engineer</span>
              </div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.35rem 0.85rem',
                  borderRadius: '9999px',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  background: 'rgba(56, 189, 248, 0.1)',
                  color: 'var(--accent-cyan)',
                  border: '1px solid rgba(56, 189, 248, 0.3)'
                }}
              >
                <Award size={14} />
                <span>CKA & CKAD Certified</span>
              </div>
            </div>

            {/* Main Greeting */}
            <h1
              style={{
                fontSize: '3.2rem',
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: '-0.03em',
                marginBottom: '1rem'
              }}
            >
              Hi, I'm <span className="text-gradient">{portfolioData.personal.name}</span>
            </h1>

            {/* Typing Role */}
            <div
              style={{
                fontSize: '1.5rem',
                fontWeight: 600,
                color: 'var(--accent-cyan)',
                minHeight: '2.5rem',
                display: 'flex',
                alignItems: 'center',
                marginBottom: '1.5rem',
                fontFamily: 'var(--font-mono)'
              }}
            >
              <span>{typedText}</span>
              <span style={{ animation: 'pulse 1s infinite', opacity: 0.8 }}>|</span>
            </div>

            {/* Tagline / Bio */}
            <p
              style={{
                fontSize: '1.1rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.65,
                marginBottom: '2.5rem',
                maxWidth: '620px'
              }}
            >
              {portfolioData.personal.bio}
            </p>

            {/* CTA Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '3rem' }}>
              <a href="#projects" className="btn-primary">
                <span>View Featured Work</span>
                <ArrowRight size={18} />
              </a>
              <a
                href={portfolioData.personal.resumeLink}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
              >
                <Download size={18} />
                <span>Download CV</span>
              </a>
            </div>

            {/* Stats Row */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                gap: '1.5rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid var(--border-color)'
              }}
            >
              {portfolioData.stats.map((stat, i) => (
                <div key={i}>
                  <div
                    style={{
                      fontSize: '1.8rem',
                      fontWeight: 800,
                      color: 'var(--text-primary)',
                      fontFamily: 'var(--font-mono)'
                    }}
                  >
                    {stat.value}
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Enlarged Profile Glass Card Frame */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div
              className="glass-card animate-float"
              style={{
                padding: '0.75rem',
                width: '100%',
                maxWidth: '420px',
                aspectRatio: '1 / 1.15',
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '1.75rem',
                boxShadow: '0 25px 60px rgba(0, 0, 0, 0.4)',
                border: '1px solid var(--border-glow)'
              }}
            >
              {/* Glowing Ambient Gradient behind frame */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.15) 0%, rgba(192, 132, 252, 0.15) 100%)',
                  pointerEvents: 'none',
                  zIndex: 1
                }}
              />

              {/* Enlarged Photo Container */}
              <img
                src={portfolioData.personal.avatar}
                alt={portfolioData.personal.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '1.25rem',
                  position: 'relative',
                  zIndex: 2,
                  display: 'block'
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .hero-grid p {
            margin-left: auto;
            margin-right: auto;
          }
          .hero-grid div {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};
