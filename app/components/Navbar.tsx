'use client';

import { useState, useEffect } from 'react';
import { User, Briefcase, Zap, Clock, Mail } from 'lucide-react';

const links = [
  { href: '#about',      label: 'About',      icon: User },
  { href: '#projects',   label: 'Projects',   icon: Briefcase },
  { href: '#skills',     label: 'Skills',     icon: Zap },
  { href: '#experience', label: 'Experience', icon: Clock },
  { href: '#contact',    label: 'Say Hi',     icon: Mail },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav className={scrolled ? 'scrolled' : ''}>
        <div className="nav-inner" style={{ justifyContent: 'flex-end' }}>

          <ul className="nav-links">
            {links.map(({ href, label, icon: Icon }) => (
              <li key={href}>
                <a href={href} onClick={(e) => scrollTo(e, href)}>
                  <Icon size={14} />
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <button
            className={`hamburger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        {links.map(({ href, label, icon: Icon }) => (
          <a key={href} href={href} className="mobile-link" onClick={(e) => scrollTo(e, href)}>
            <Icon size={20} style={{ display: 'inline', marginRight: '0.5rem', verticalAlign: 'middle' }} />
            {label}
          </a>
        ))}
      </div>
    </>
  );
}
