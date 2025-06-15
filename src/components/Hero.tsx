"use client";

import { motion } from 'framer-motion';
import styles from '../styles/Hero.module.css';
import AnimatedSection from './AnimatedSection';

export default function Hero() {
  return (
    <AnimatedSection id="home" className={styles.hero}>
      <div className={styles.heroContent}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={styles.heroText}
        >
          <div className={styles.headlineGroup}>
              <h2 className={styles.headlinePrimary}>Cuida de los tuyos</h2>
              <h1 className={styles.headlineAccent}>estés donde estés.</h1>
          </div>
          
          <p>
          Desde recargas de celular, hasta envíos de remesas; estamos aquí para ayudarte a cuidar de tu familia. Un servicio cercano, confiable y pensado con el corazón.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={styles.ctaButton}
          >
            Empieza ahora
          </motion.button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className={styles.heroImage}
        >
          <img src="/assets/3d-clay-humans/hero.png" alt="Digital Marketing" />
        </motion.div>
      </div>
    </AnimatedSection>
  );
} 