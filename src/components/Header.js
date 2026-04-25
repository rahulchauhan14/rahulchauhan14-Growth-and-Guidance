'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import './Header.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo-container">
          <Link href="/" className="logo">
            <img src="/images/logo.png" alt="Growth & Guidance Logo" className="logo-img" />
            <div className="logo-text">
              <h2>Growth & Guidance</h2>
              <p>NJ Wealth Partner</p>
            </div>
          </Link>
        </div>

        <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle Menu">
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <nav className={`main-nav ${isMenuOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            <li><Link href="/" onClick={toggleMenu}>Home</Link></li>
            <li><Link href="/about" onClick={toggleMenu}>About</Link></li>
            <li><Link href="/services" onClick={toggleMenu}>Services</Link></li>
            <li><Link href="/mutual-funds" onClick={toggleMenu}>Mutual Funds</Link></li>
            <li><Link href="/sip-calculator" onClick={toggleMenu}>SIP Calculator</Link></li>
            <li><Link href="/gallery" onClick={toggleMenu}>Gallery</Link></li>
            <li><Link href="/resources" onClick={toggleMenu}>Resources</Link></li>
            <li><Link href="/contact" onClick={toggleMenu}>Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
