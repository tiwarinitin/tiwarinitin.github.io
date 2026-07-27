import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Server, Cpu, ShieldCheck, Code, CheckCircle2, Layers } from 'lucide-react';

export const SkillsMatrix = () => {
  const [activeTab, setActiveTab] = useState(0);

  const getCategoryIcon = (iconName, color = 'var(--accent-cyan)') => {
    switch (iconName) {
      case 'Server':
        return <Server size={20} style={{ color }} />;
      case 'Cpu':
        return <Cpu size={20} style={{ color }} />;
      case 'ShieldCheck':
        return <ShieldCheck size={20} style={{ color }} />;
      default:
        return <Code size={20} style={{ color }} />;
    }
  };

  return (
    <section id="skills" className="section" style={{ background: 'var(--bg-secondary)', padding: '4rem 0' }}>
      <div className="container">
        <div className="section-header" style={{ marginBottom: '2.5rem' }}>
          <div className="badge" style={{ marginBottom: '0.75rem' }}>
            Interactive Tech Stack
          </div>
          <h2 className="section-title">
            Technologies & <span className="text-gradient">Tools Deck</span>
          </h2>
          <p className="section-subtitle" style={{ maxWidth: '600px' }}>
            Explore Nitin's enterprise cloud-native stack, GitOps tools, security controls, and CI/CD automation.
          </p>
        </div>

        {/* Compact Deck Container */}
        <div
          className="glass-card"
          style={{
            padding: '1.75rem',
            borderRadius: '1.5rem',
            boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
            border: '1px solid var(--border-glow)'
          }}
        >
          {/* Deck Category Selectors */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.6rem',
              marginBottom: '1.75rem',
              paddingBottom: '1.25rem',
              borderBottom: '1px solid var(--border-color)'
            }}
          >
            {portfolioData.skillsCategory.map((cat, idx) => {
              const isActive = activeTab === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    padding: '0.6rem 1.1rem',
                    borderRadius: '9999px',
                    fontSize: '0.88rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    background: isActive ? 'var(--gradient-primary)' : 'var(--bg-tertiary)',
                    color: isActive ? '#fff' : 'var(--text-secondary)',
                    border: isActive ? 'none' : '1px solid var(--border-color)',
                    boxShadow: isActive ? '0 8px 20px rgba(56, 189, 248, 0.35)' : 'none'
                  }}
                >
                  {getCategoryIcon(cat.icon, isActive ? '#fff' : 'var(--accent-cyan)')}
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>

          {/* Active Category Display Box */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: 'rgba(56, 189, 248, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-cyan)'
                }}
              >
                <Layers size={20} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, margin: 0 }}>
                  {portfolioData.skillsCategory[activeTab].name}
                </h3>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', margin: 0 }}>
                  {portfolioData.skillsCategory[activeTab].description}
                </p>
              </div>
            </div>

            {/* Interactive Tech Badge Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))',
                gap: '0.85rem'
              }}
            >
              {portfolioData.skillsCategory[activeTab].skills.map((skill, sIdx) => (
                <div
                  key={sIdx}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.65rem',
                    padding: '0.7rem 1rem',
                    borderRadius: '0.75rem',
                    background: 'var(--bg-tertiary)',
                    border: '1px solid var(--border-color)',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    transition: 'transform 0.2s ease, border-color 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.borderColor = 'var(--accent-cyan)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = 'var(--border-color)';
                  }}
                >
                  <CheckCircle2 size={16} style={{ color: 'var(--accent-cyan)', flexShrink: 0 }} />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
