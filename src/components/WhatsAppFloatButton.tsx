"use client";
import Image from 'next/image';
import styles from '../styles/WhatsAppFloatButton.module.css';

export default function WhatsAppFloatButton() {
  return (
    <a
      href="https://wa.me/5541984385251?text=¡Hola!%20Quiero%20más%20información%20sobre%20los%20servicios."
      className={styles.whatsappFloat}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chatea por WhatsApp"
    >
      <Image 
        src="/assets/icons/whatsapplogo.png" 
        alt="WhatsApp" 
        width={38} 
        height={38}
      />
    </a>
  );
} 