import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Sparkles } from 'lucide-react';

export const Projects = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'DevOps', 'Security', 'AI/ML'];

  const filteredProjects =
    filter === 'All'
      ? portfolioData.projects
      : portfolioData.projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-header">
          <div className="badge" style={{ marginBottom: '1rem' }}>
            Portfolio Showcase
          </div>
          <h2 className="section-title">
            Featured <span className="text-gradient">Projects & Architectures</span>
          </h2>
          <p className="section-subtitle">
            Enterprise Infrastructure-as-Code automation, DevSecOps compliance frameworks, and AI delivery workflows.
          </p>
        </div>

        {/* Filter buttons */}
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '3rem' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className="glass-card"
              style={{
                padding: '0.6rem 1.5rem',
                borderRadius: '9999px',
                fontSize: '0.9rem',
                fontWeight: 600,
                cursor: 'pointer',
                color: filter === cat ? '#fff' : 'var(--text-secondary)',
                background: filter === cat ? 'var(--gradient-primary)' : 'var(--bg-glass)',
                border: filter === cat ? 'none' : '1px solid var(--border-color)',
                boxShadow: filter === cat ? '0 10px 20px -5px rgba(56, 189, 248, 0.4)' : 'none'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))',
            gap: '2rem'
          }}
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden'
              }}
            >
              {/* Cover Image Container */}
              <div style={{ height: '210px', width: '100%', overflow: 'hidden', position: 'relative' }}>
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }}
                  onMouseEnter={(e) => (e.target.style.transform = 'scale(1.06)')}
                  onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
                />

                {project.featured && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '12px',
                      right: '12px',
                      background: 'rgba(9, 13, 22, 0.85)',
                      backdropFilter: 'blur(8px)',
                      color: 'var(--accent-cyan)',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      padding: '0.3rem 0.6rem',
                      borderRadius: '6px',
                      border: '1px solid rgba(56, 189, 248, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.3rem'
                    }}
                  >
                    <Sparkles size={12} />
                    <span>Featured</span>
                  </div>
                )}
              </div>

              {/* Content Body */}
              <div style={{ padding: '1.75rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.6rem' }}>
                  {project.title}
                </h3>

                <p
                  style={{
                    fontSize: '0.92rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                    marginBottom: '1.25rem',
                    flex: 1
                  }}
                >
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        padding: '0.2rem 0.55rem',
                        borderRadius: '4px',
                        background: 'var(--bg-tertiary)',
                        color: 'var(--accent-indigo)',
                        border: '1px solid var(--border-color)'
                      }}
                    >
                      {tag}
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
