"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/SimpleSolutions.module.css';

const steps = [
  {
    title: 'Contáctanos.',
    desc: 'Escríbenos por whatsapp al número de la empresa.'
  },
  {
    title: 'Consulta con nuestros agentes.',
    desc: 'Puedes preguntarnos sobre nuestros servicios y precios.'
  },
  {
    title: 'Realiza tu pago.',
    desc: 'Usamos medios de pago seguros y confiables.'
  }
];

export default function SimpleSolutions() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % steps.length);
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.simpleSolutions} id="solutions">
      <motion.div
        className={styles.solutionsImage}
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <img src="/assets/3d-clay-humans/solution.png" alt="Simple Solutions" />
      </motion.div>
      <motion.div
        className={styles.solutionsContent}
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <h2 className={styles.title}>
          Solucion <span className={styles.highlight}>Simple!</span>
        </h2>
        <p className={styles.desc}>
          Creamos soluciones simples y fáciles para que puedas cuidar de los tuyos.
        </p>
        <ul className={styles.stepsList}>
          {steps.map((step, idx) => (
            <li key={step.title} className={styles.stepItem}>
              <motion.div
                className={styles.circle}
                animate={{
                  backgroundColor:
                    idx <= active
                      ? 'var(--primary)'
                      : 'var(--primary-light)',
                  color: idx <= active ? '#fff' : 'var(--primary)'
                }}
                transition={{ duration: 0.4 }}
              >
                {idx + 1}
              </motion.div>
              <div className={styles.stepText}>
                <span className={styles.stepTitle}>{step.title}</span>
                <span className={styles.stepDesc}>{step.desc}</span>
              </div>
            </li>
          ))}
        </ul>
        <div className={styles.buttonsGroup}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className={styles.primaryBtn}
          >
            Empieza ahora
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
} 