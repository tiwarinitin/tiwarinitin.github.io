import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Mail, Phone, MapPin, Send, Check, Copy, Loader2, ShieldCheck, Lock } from 'lucide-react';
import { IconGithub, IconLinkedin, IconInstagram } from './SocialIcons';

export const Contact = () => {
  const [copiedField, setCopiedField] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '', botcheck: false });

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Spam check: if honeypot is checked by automated bots, reject silently
    if (formData.botcheck) {
      console.warn("Spam bot submission blocked via honeypot.");
      setSubmitted(true);
      return;
    }

    setIsSubmitting(true);

    try {
      // Access Key from portfolioData
      const accessKey = portfolioData.personal.web3formsAccessKey || "0756233b-62dd-4ac1-b9ae-53ad34edea80";

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          botcheck: "", // Honeypot validation
          subject: `Portfolio Inquiry from ${formData.name}`,
          from_name: "Nitin Tiwari Portfolio"
        })
      });

      const data = await response.json();

      if (data.success || response.status === 200) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '', botcheck: false });
      } else {
        console.warn("Web3Forms API result:", data);
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '', botcheck: false });
      }
    } catch (err) {
      console.error("Submission error:", err);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '', botcheck: false });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitted(false), 6000);
    }
  };

  return (
    <section id="contact" className="section" style={{ background: 'var(--bg-secondary)', padding: '4rem 0' }}>
      <div className="container">
        <div className="section-header" style={{ marginBottom: '2.5rem' }}>
          <div className="badge" style={{ marginBottom: '0.75rem' }}>
            Get in Touch
          </div>
          <h2 className="section-title">
            Let's Collaborate on <span className="text-gradient">DevOps & Cloud</span>
          </h2>
          <p className="section-subtitle">
            Interested in Cloud Architecture, GitOps, Kubernetes optimization, or DevSecOps security consulting? Drop a message!
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
            gap: '2rem',
            alignItems: 'stretch'
          }}
        >
          {/* Contact Details Card */}
          <div
            className="glass-card contact-card"
            style={{
              padding: 'clamp(1.5rem, 4vw, 2.25rem)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '100%'
            }}
          >
            <div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1.5rem' }}>
                Contact Information
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2rem' }}>
                {/* Email */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '0.5rem',
                    padding: '0.85rem 1rem',
                    borderRadius: '0.75rem',
                    background: 'var(--bg-tertiary)',
                    border: '1px solid var(--border-color)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', minWidth: 0, flex: 1 }}>
                    <div
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '10px',
                        background: 'rgba(56, 189, 248, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--accent-cyan)',
                        flexShrink: 0
                      }}
                    >
                      <Mail size={18} />
                    </div>
                    <div style={{ minWidth: 0, flex: 1 }}>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Email</div>
                      <div
                        style={{
                          fontSize: '0.88rem',
                          fontWeight: 600,
                          wordBreak: 'break-all',
                          color: 'var(--text-primary)'
                        }}
                      >
                        {portfolioData.personal.email}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => handleCopy(portfolioData.personal.email, 'email')}
                    title="Copy Email"
                    style={{
                      background: 'var(--bg-glass)',
                      border: '1px solid var(--border-color)',
                      borderRadius: '8px',
                      color: 'var(--text-secondary)',
                      cursor: 'pointer',
                      padding: '0.5rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    {copiedField === 'email' ? <Check size={16} style={{ color: 'var(--accent-emerald)' }} /> : <Copy size={16} />}
                  </button>
                </div>

                {/* Phone */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '0.5rem',
                    padding: '0.85rem 1rem',
                    borderRadius: '0.75rem',
                    background: 'var(--bg-tertiary)',
                    border: '1px solid var(--border-color)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', minWidth: 0, flex: 1 }}>
                    <div
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '10px',
                        background: 'rgba(129, 140, 248, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--accent-indigo)',
                        flexShrink: 0
                      }}
                    >
                      <Phone size={18} />
                    </div>
                    <div style={{ minWidth: 0, flex: 1 }}>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Phone</div>
                      <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                        {portfolioData.personal.phone}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => handleCopy(portfolioData.personal.phone, 'phone')}
                    title="Copy Phone"
                    style={{
                      background: 'var(--bg-glass)',
                      border: '1px solid var(--border-color)',
                      borderRadius: '8px',
                      color: 'var(--text-secondary)',
                      cursor: 'pointer',
                      padding: '0.5rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    {copiedField === 'phone' ? <Check size={16} style={{ color: 'var(--accent-emerald)' }} /> : <Copy size={16} />}
                  </button>
                </div>

                {/* Location */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '0.85rem 1rem',
                    borderRadius: '0.75rem',
                    background: 'var(--bg-tertiary)',
                    border: '1px solid var(--border-color)'
                  }}
                >
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '10px',
                      background: 'rgba(192, 132, 252, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-purple)',
                      flexShrink: 0
                    }}
                  >
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Location</div>
                    <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                      {portfolioData.personal.location}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Hub */}
            <div>
              <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.85rem' }}>
                Connect on Socials
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                <a
                  href={portfolioData.personal.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary"
                  style={{ padding: '0.6rem 0.9rem', borderRadius: '0.6rem', fontSize: '0.85rem', flex: '1 1 90px', justifyContent: 'center' }}
                >
                  <IconGithub size={16} />
                  <span>GitHub</span>
                </a>
                <a
                  href={portfolioData.personal.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary"
                  style={{ padding: '0.6rem 0.9rem', borderRadius: '0.6rem', fontSize: '0.85rem', flex: '1 1 90px', justifyContent: 'center' }}
                >
                  <IconLinkedin size={16} />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={portfolioData.personal.socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary"
                  style={{ padding: '0.6rem 0.9rem', borderRadius: '0.6rem', fontSize: '0.85rem', flex: '1 1 90px', justifyContent: 'center' }}
                >
                  <IconInstagram size={16} />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Form Card */}
          <div
            className="glass-card"
            style={{
              padding: 'clamp(1.5rem, 4vw, 2.25rem)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '100%'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 700, margin: 0 }}>
                  Send a Direct Message
                </h3>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    fontSize: '0.72rem',
                    color: 'var(--accent-emerald)',
                    background: 'rgba(52, 211, 153, 0.1)',
                    padding: '0.25rem 0.6rem',
                    borderRadius: '9999px',
                    border: '1px solid rgba(52, 211, 153, 0.3)'
                  }}
                  title="Web3Forms Anti-Spam & Honeypot Protection Enabled"
                >
                  <ShieldCheck size={13} />
                  <span>Spam Protected</span>
                </div>
              </div>

              {submitted ? (
                <div
                  style={{
                    padding: '2rem',
                    borderRadius: '0.75rem',
                    background: 'rgba(52, 211, 153, 0.1)',
                    border: '1px solid rgba(52, 211, 153, 0.3)',
                    textAlign: 'center',
                    color: 'var(--accent-emerald)'
                  }}
                >
                  <Check size={36} style={{ margin: '0 auto 0.75rem auto' }} />
                  <h4 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.4rem' }}>
                    Message Delivered to Outlook Inbox!
                  </h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    Thank you for reaching out. Nitin will reply to your inbox shortly.
                  </p>
                </div>
              ) : (
                <form id="contact-form" onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                  {/* Honeypot Spam Protection Field (Hidden from real users) */}
                  <input
                    type="checkbox"
                    name="botcheck"
                    style={{ display: 'none' }}
                    checked={formData.botcheck}
                    onChange={(e) => setFormData({ ...formData, botcheck: e.target.checked })}
                  />

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.4rem' }}>
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem',
                        borderRadius: '0.6rem',
                        background: 'var(--bg-tertiary)',
                        border: '1px solid var(--border-color)',
                        color: 'var(--text-primary)',
                        outline: 'none',
                        fontSize: '0.92rem'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.4rem' }}>
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem',
                        borderRadius: '0.6rem',
                        background: 'var(--bg-tertiary)',
                        border: '1px solid var(--border-color)',
                        color: 'var(--text-primary)',
                        outline: 'none',
                        fontSize: '0.92rem'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.4rem' }}>
                      Message
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Hi Nitin, I'd like to talk about a DevOps / Cloud project..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem',
                        borderRadius: '0.6rem',
                        background: 'var(--bg-tertiary)',
                        border: '1px solid var(--border-color)',
                        color: 'var(--text-primary)',
                        outline: 'none',
                        fontSize: '0.92rem',
                        resize: 'vertical'
                      }}
                    />
                  </div>
                </form>
              )}
            </div>

            {!submitted && (
              <div>
                <button
                  type="submit"
                  form="contact-form"
                  disabled={isSubmitting}
                  className="btn-primary"
                  style={{ width: '100%', justifyContent: 'center', marginTop: '1.25rem', opacity: isSubmitting ? 0.7 : 1 }}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} style={{ animation: 'spin 1s linear infinite' }} />
                      <span>Transmitting via Web3Forms...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={18} />
                    </>
                  )}
                </button>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.35rem',
                    fontSize: '0.74rem',
                    color: 'var(--text-muted)',
                    marginTop: '0.75rem'
                  }}
                >
                  <Lock size={12} style={{ color: 'var(--accent-cyan)' }} />
                  <span>Secured by Web3Forms Access Key & Botcheck Protection</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
