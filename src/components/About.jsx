import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { TrendingDown, Cloud, ShieldCheck, Cpu } from 'lucide-react';

export const About = () => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'TrendingDown':
        return <TrendingDown size={28} style={{ color: 'var(--accent-purple)' }} />;
      case 'Cloud':
        return <Cloud size={28} style={{ color: 'var(--accent-cyan)' }} />;
      case 'ShieldCheck':
        return <ShieldCheck size={28} style={{ color: 'var(--accent-emerald)' }} />;
      default:
        return <Cpu size={28} style={{ color: 'var(--accent-indigo)' }} />;
    }
  };

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header">
          <div className="badge" style={{ marginBottom: '1rem' }}>
            Technical Core
          </div>
          <h2 className="section-title">
            Architecting <span className="text-gradient">Resilient Cloud Infrastructure</span>
          </h2>
          <p className="section-subtitle">
            ~7 years of experience specializing in GitOps Architecture, FinOps Cloud Cost Optimization (24% proven savings), and DevSecOps security.
          </p>
        </div>

        {/* Pillars Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: '2rem'
          }}
        >
          {portfolioData.pillars.map((pillar) => (
            <div key={pillar.id} className="glass-card" style={{ padding: '2.25rem' }}>
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '12px',
                  background: 'var(--bg-tertiary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem',
                  border: '1px solid var(--border-color)'
                }}
              >
                {getIcon(pillar.icon)}
              </div>

              <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.75rem' }}>
                {pillar.title}
              </h3>

              <p
                style={{
                  fontSize: '0.95rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6,
                  marginBottom: '1.5rem'
                }}
              >
                {pillar.description}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {pillar.techs.map((tech, i) => (
                  <span
                    key={i}
                    style={{
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      padding: '0.25rem 0.6rem',
                      borderRadius: '6px',
                      background: 'var(--bg-tertiary)',
                      color: 'var(--accent-cyan)',
                      border: '1px solid var(--border-color)'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
