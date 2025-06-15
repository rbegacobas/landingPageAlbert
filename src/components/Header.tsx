"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Header.module.css';
import { useScrollSection } from '../hooks/useScrollSection';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeSection = useScrollSection();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.headerContent}>
        <Link href="/" className={styles.logo}>
          <Image 
            src="/assets/logo/logo.png" 
            alt="Albert&Yudy Logo" 
            width={75} 
            height={25}
            style={{ marginRight: '10px' }}
          />
          <span>Albert&Yudy</span>
        </Link>
        <nav className={`${styles.nav} ${isMenuOpen ? styles.active : ''}`}>
          <Link href="/#home" className={activeSection === 'home' ? styles.active : ''}>
            Inicio
          </Link>
          <Link href="/#services" className={activeSection === 'services' ? styles.active : ''}>
            Servicios
          </Link>
          <Link href="/#solutions" className={activeSection === 'solutions' ? styles.active : ''}>
            Soluciones
          </Link>
          <Link href="/#agency" className={activeSection === 'agency' ? styles.active : ''}>
            Agency
          </Link>
          <Link href="/#testimonials" className={activeSection === 'testimonials' ? styles.active : ''}>
            Testimonios
          </Link>
        </nav>
        <button 
          className={`${styles.menuButton} ${isMenuOpen ? styles.active : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header; 