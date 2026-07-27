import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Terminal, Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer
      style={{
        padding: '3rem 0',
        borderTop: '1px solid var(--border-color)',
        background: 'var(--bg-primary)'
      }}
    >
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontWeight: 800, fontSize: '1.2rem' }}>
          <div
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              background: 'var(--gradient-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff'
            }}
          >
            <Terminal size={18} />
          </div>
          <span>Nitin Tiwari</span>
        </div>

        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', textAlign: 'center', maxWidth: '520px' }}>
          Senior DevOps Engineer | GitOps, Cloud Cost Optimization (FinOps) & DevSecOps Specialist. CKA, CKAD & Terraform Certified.
        </p>

        <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
          <a href="#about" style={{ color: 'inherit', textDecoration: 'none' }}>About</a>
          <a href="#skills" style={{ color: 'inherit', textDecoration: 'none' }}>Skills</a>
          <a href="#experience" style={{ color: 'inherit', textDecoration: 'none' }}>Experience</a>
          <a href="#projects" style={{ color: 'inherit', textDecoration: 'none' }}>Projects</a>
          <a href="#recognition" style={{ color: 'inherit', textDecoration: 'none' }}>Certifications</a>
          <a href="#contact" style={{ color: 'inherit', textDecoration: 'none' }}>Contact</a>
        </div>

        <div
          style={{
            fontSize: '0.82rem',
            color: 'var(--text-muted)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            paddingTop: '1rem',
            borderTop: '1px solid var(--border-color)',
            width: '100%',
            justifyContent: 'center'
          }}
        >
          <span>Crafted with</span>
          <Heart size={14} style={{ color: '#ef4444' }} />
          <span>by Nitin Tiwari © {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
};
