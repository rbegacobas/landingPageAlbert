"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../styles/Header.module.css';
import { useScrollSection } from '../hooks/useScrollSection';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
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
        <div className={styles.logo}>
          <span>Albert&Yudy</span>
        </div>
        <nav className={styles.nav}>
          <ul>
            <li className={activeSection === 'home' ? styles.active : ''}>
              <Link href="#home">Inicio</Link>
            </li>
            <li className={activeSection === 'services' ? styles.active : ''}>
              <Link href="#services">Servicios</Link>
            </li>
            <li className={activeSection === 'solutions' ? styles.active : ''}>
              <Link href="#solutions">Solución</Link>
            </li>
            <li className={activeSection === 'agency' ? styles.active : ''}>
              <Link href="#agency">Agencia</Link>
            </li>
            <li className={activeSection === 'testimonials' ? styles.active : ''}>
              <Link href="#testimonials">Testimonios</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
} 