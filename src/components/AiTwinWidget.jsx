import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Bot, X, Send, Sparkles, User } from 'lucide-react';

export const AiTwinWidget = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: portfolioData.aiTwinKnowledge.welcomeMessage
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  if (!isOpen) return null;

  const handleSendMessage = (textToSend) => {
    const text = textToSend || inputValue;
    if (!text.trim()) return;

    // Add User Message
    const updatedMessages = [...messages, { sender: 'user', text }];
    setMessages(updatedMessages);
    if (!textToSend) setInputValue('');
    setIsTyping(true);

    // AI response logic
    setTimeout(() => {
      let botResponse =
        "Nitin is a Senior DevOps Engineer specializing in GitOps Architecture, FinOps Cloud Cost Optimization, DevSecOps, and CKA/CKAD Kubernetes. Feel free to contact him directly at nitin.tiwari6@outlook.com!";

      const lower = text.toLowerCase();
      if (lower.includes('experience') || lower.includes('cognizant') || lower.includes('company') || lower.includes('work') || lower.includes('history')) {
        botResponse = portfolioData.aiTwinKnowledge.faqs.experience;
      } else if (lower.includes('cert') || lower.includes('cka') || lower.includes('ckad') || lower.includes('claude') || lower.includes('aws') || lower.includes('terraform')) {
        botResponse = portfolioData.aiTwinKnowledge.faqs.certs;
      } else if (lower.includes('skill') || lower.includes('tool') || lower.includes('gitops') || lower.includes('finops') || lower.includes('devsecops')) {
        botResponse = portfolioData.aiTwinKnowledge.faqs.skills;
      } else if (lower.includes('contact') || lower.includes('hire') || lower.includes('email') || lower.includes('phone') || lower.includes('reach')) {
        botResponse = portfolioData.aiTwinKnowledge.faqs.contact;
      }

      setMessages((prev) => [...prev, { sender: 'bot', text: botResponse }]);
      setIsTyping(false);
    }, 500);
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        width: 'calc(100vw - 4rem)',
        maxWidth: '420px',
        height: '560px',
        maxHeight: 'calc(100vh - 5rem)',
        zIndex: 100,
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 25px 60px rgba(0, 0, 0, 0.6)',
        border: '1px solid var(--border-glow)'
      }}
      className="glass-card"
    >
      {/* Drawer Header */}
      <div
        style={{
          padding: '1.25rem',
          borderBottom: '1px solid var(--border-color)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: 'var(--bg-tertiary)',
          borderRadius: '1rem 1rem 0 0'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <div
            style={{
              width: '34px',
              height: '34px',
              borderRadius: '50%',
              background: 'var(--gradient-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff'
            }}
          >
            <Bot size={18} />
          </div>
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 700 }}>Nitin's AI Twin</h4>
            <div style={{ fontSize: '0.75rem', color: 'var(--accent-emerald)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-emerald)' }} />
              Senior DevOps Assistant
            </div>
          </div>
        </div>

        <button
          onClick={onClose}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--text-muted)',
            cursor: 'pointer'
          }}
        >
          <X size={20} />
        </button>
      </div>

      {/* Messages Body */}
      <div
        style={{
          flex: 1,
          padding: '1.25rem',
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}
      >
        {messages.map((msg, idx) => (
          <div
            key={idx}
            style={{
              display: 'flex',
              gap: '0.6rem',
              alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
              maxWidth: '85%'
            }}
          >
            {msg.sender === 'bot' && (
              <div
                style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  background: 'var(--bg-tertiary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-cyan)',
                  flexShrink: 0
                }}
              >
                <Sparkles size={14} />
              </div>
            )}

            <div
              style={{
                padding: '0.75rem 1rem',
                borderRadius: '1rem',
                fontSize: '0.88rem',
                lineHeight: 1.5,
                background:
                  msg.sender === 'user' ? 'var(--gradient-primary)' : 'var(--bg-tertiary)',
                color: msg.sender === 'user' ? '#fff' : 'var(--text-primary)',
                border: msg.sender === 'bot' ? '1px solid var(--border-color)' : 'none'
              }}
            >
              {msg.text}
            </div>

            {msg.sender === 'user' && (
              <div
                style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  background: 'var(--accent-indigo)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  flexShrink: 0
                }}
              >
                <User size={14} />
              </div>
            )}
          </div>
        ))}

        {isTyping && (
          <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
            Nitin's AI Twin is typing...
          </div>
        )}
      </div>

      {/* Suggested Quick Questions */}
      <div style={{ padding: '0.5rem 1.25rem', display: 'flex', gap: '0.4rem', overflowX: 'auto' }}>
        {portfolioData.aiTwinKnowledge.suggestedQuestions.slice(0, 2).map((q, i) => (
          <button
            key={i}
            onClick={() => handleSendMessage(q)}
            style={{
              padding: '0.4rem 0.75rem',
              borderRadius: '9999px',
              fontSize: '0.75rem',
              background: 'var(--bg-tertiary)',
              border: '1px solid var(--border-color)',
              color: 'var(--text-secondary)',
              whiteSpace: 'nowrap',
              cursor: 'pointer'
            }}
          >
            {q}
          </button>
        ))}
      </div>

      {/* Input Box */}
      <div
        style={{
          padding: '1rem 1.25rem',
          borderTop: '1px solid var(--border-color)',
          background: 'var(--bg-tertiary)',
          borderRadius: '0 0 1rem 1rem'
        }}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          style={{ display: 'flex', gap: '0.5rem' }}
        >
          <input
            type="text"
            placeholder="Ask about Nitin's DevOps experience..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            style={{
              flex: 1,
              padding: '0.6rem 0.9rem',
              borderRadius: '0.5rem',
              background: 'var(--bg-primary)',
              border: '1px solid var(--border-color)',
              color: 'var(--text-primary)',
              fontSize: '0.85rem',
              outline: 'none'
            }}
          />
          <button
            type="submit"
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '0.5rem',
              background: 'var(--gradient-primary)',
              border: 'none',
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
          >
            <Send size={16} />
          </button>
        </form>
      </div>
    </div>
  );
};
