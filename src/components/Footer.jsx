import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{
      textAlign: 'center',
      padding: '2rem',
      marginTop: '4rem',
      borderTop: '1px solid var(--glass-border)',
      color: 'var(--text-muted)'
    }}>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '1rem' }}>
        <a href="https://linkedin.com/in/ritik-shakya-0784a81b6" target="_blank" rel="noreferrer" style={{ color: 'inherit' }}>
          <Linkedin size={20} />
        </a>
        <a href="mailto:ritikshakya101@gmail.com" style={{ color: 'inherit' }}>
          <Mail size={20} />
        </a>
      </div>
      <p className="font-mono" style={{ fontSize: '0.85rem' }}>
        Designed & Built by Ritik Shakya &copy; {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
