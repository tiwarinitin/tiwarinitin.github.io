import React from 'react';
import { portfolioData } from '../data/portfolioData';

export const Recognition = () => {
  return (
    <section id="recognition" className="section">
      <div className="container">
        <div className="section-header">
          <div className="badge" style={{ marginBottom: '1rem' }}>
            Certifications & Credentials
          </div>
          <h2 className="section-title">
            Professional <span className="text-gradient">Certifications</span>
          </h2>
          <p className="section-subtitle">
            Industry-validated certifications in AI Architecture, Kubernetes Development & Administration, AWS, and Infrastructure as Code.
          </p>
        </div>

        {/* Certifications Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: '1.75rem'
          }}
        >
          {portfolioData.recognition.map((item) => (
            <div
              key={item.id}
              className="glass-card"
              style={{
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center'
              }}
            >
              {/* Badge Image */}
              <div
                style={{
                  width: '110px',
                  height: '110px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem',
                  filter: 'drop-shadow(0 10px 15px rgba(0, 0, 0, 0.4))'
                }}
              >
                <img
                  src={item.badgeUrl}
                  alt={item.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain'
                  }}
                />
              </div>

              <h4 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.3rem' }}>
                {item.title}
              </h4>
              <div
                style={{
                  fontSize: '0.85rem',
                  color: 'var(--accent-cyan)',
                  fontWeight: 600,
                  marginBottom: '1rem'
                }}
              >
                {item.issuer}
              </div>

              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
