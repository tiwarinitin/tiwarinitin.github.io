import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-header">
          <div className="badge" style={{ marginBottom: '1rem' }}>
            Career Journey
          </div>
          <h2 className="section-title">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="section-subtitle">
            Track record of driving DevOps transformations, Kubernetes administration, and SRE best practices.
          </p>
        </div>

        {/* Timeline Container */}
        <div style={{ maxWidth: '840px', margin: '0 auto', position: 'relative' }}>
          {/* Vertical Timeline Bar */}
          <div
            className="experience-timeline-bar"
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: '24px',
              width: '2px',
              background: 'linear-gradient(180deg, var(--accent-cyan) 0%, var(--accent-indigo) 100%)',
              opacity: 0.3
            }}
          />

          {portfolioData.experiences.map((exp, idx) => (
            <div
              key={idx}
              className="experience-item"
              style={{
                display: 'grid',
                gridTemplateColumns: '48px 1fr',
                gap: '1.25rem',
                marginBottom: '2.5rem',
                position: 'relative'
              }}
            >
              {/* Icon Marker */}
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: 'var(--bg-secondary)',
                  border: '2px solid var(--accent-cyan)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-cyan)',
                  boxShadow: '0 0 15px rgba(56, 189, 248, 0.3)',
                  zIndex: 2
                }}
              >
                <Briefcase size={20} />
              </div>

              {/* Experience Glass Card */}
              <div className="glass-card" style={{ padding: 'clamp(1.25rem, 3.5vw, 2rem)' }}>
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    gap: '0.75rem',
                    marginBottom: '1rem'
                  }}
                >
                  <div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                      {exp.role}
                    </h3>
                    <div
                      style={{
                        fontSize: '0.95rem',
                        fontWeight: 600,
                        color: 'var(--accent-indigo)',
                        marginTop: '0.2rem'
                      }}
                    >
                      {exp.company}
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center' }}>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        fontSize: '0.85rem',
                        color: 'var(--accent-cyan)',
                        fontWeight: 600,
                        fontFamily: 'var(--font-mono)'
                      }}
                    >
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.3rem',
                        fontSize: '0.8rem',
                        color: 'var(--text-muted)'
                      }}
                    >
                      <MapPin size={12} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <p
                  style={{
                    fontSize: '0.92rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                    marginBottom: '1.25rem'
                  }}
                >
                  {exp.description}
                </p>

                {/* Bullet Highlights */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.5rem' }}>
                  {exp.highlights.map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                      <CheckCircle2
                        size={16}
                        style={{ color: 'var(--accent-emerald)', marginTop: '0.2rem', flexShrink: 0 }}
                      />
                      <span style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Skill Badges */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {exp.skills.map((s, i) => (
                    <span
                      key={i}
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        padding: '0.2rem 0.55rem',
                        borderRadius: '6px',
                        background: 'var(--bg-tertiary)',
                        color: 'var(--accent-cyan)',
                        border: '1px solid var(--border-color)'
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
