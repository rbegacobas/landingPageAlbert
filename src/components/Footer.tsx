import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Footer.module.css';

const currentYear = new Date().getFullYear();

const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <div className={styles.footerContent}>
      <div className={styles.footerBrand}>
        <span>Albert&Yudy</span>
        <div className={styles.footerSocial}>
          <a href="https://whatsapp.com/channel/0029VahEzm0Bfxo03hTp8u0R" target="_blank" rel="noopener noreferrer" title="Canal WhatsApp">
            <Image src="/assets/icons/whatsapp.png" alt="WhatsApp Canal" width={28} height={28} />
          </a>
          <a href="https://chat.whatsapp.com/IMXdnic6KjR01ZICwdhcol" target="_blank" rel="noopener noreferrer" title="Grupo WhatsApp">
            <Image src="/assets/icons/whatsappG.png" alt="WhatsApp Grupo" width={28} height={28} />
          </a>
          <a href="https://www.facebook.com/share/16ojUQQv2u/" target="_blank" rel="noopener noreferrer" title="Facebook">
            <Image src="/assets/icons/facebook.png" alt="Facebook" width={28} height={28} />
          </a>
          <a href="https://www.instagram.com/destinos_globais" target="_blank" rel="noopener noreferrer" title="Instagram">
            <Image src="/assets/icons/instagram.png" alt="Instagram" width={28} height={28} />
          </a>
          <a href="https://www.tiktok.com/@eu_sou_albert" target="_blank" rel="noopener noreferrer" title="TikTok">
            <Image src="/assets/icons/tiktok.png" alt="TikTok" width={28} height={28} />
          </a>
          <a href="mailto:suarez880223@gmail.com" title="Correo electrónico">
            <Image src="/assets/icons/mail.png" alt="Correo electrónico" width={28} height={28} />
          </a>
        </div>
        <div className={styles.footerLinks}>
          <Link href="/privacy-policy">Política de Privacidad</Link>
          <span style={{margin: '0 0.5rem'}}>|</span>
          <Link href="/terms">Términos y Condiciones</Link>
          <span style={{margin: '0 0.5rem'}}>|</span>
          <Link href="/legal">Información Legal</Link>
        </div>
      </div>
    </div>
    <div className={styles.footerBottom}>
      <span>All rights reserved {currentYear}</span>
    </div>
  </footer>
);

export default Footer; 