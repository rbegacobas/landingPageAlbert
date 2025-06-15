"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from '../styles/Agency.module.css';

export default function Agency() {
  return (
    <section className={styles.agency} id="agency">
      <motion.div
        className={styles.agencyText}
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2>Nuestra <span className={styles.highlight}>Agencia</span></h2>
        <p>En Albert&Yudy combinamos tecnología, experiencia y confianza para ofrecerte soluciones financieras efectivas. Con años de experiencia en el mercado, hemos realizado miles de transacciones exitosas y contamos con una base sólida de clientes satisfechos que confían en nosotros cada día.

Nuestra reputación se basa en la transparencia, la legalidad y un enfoque centrado en el cliente. Nos enorgullece brindar un tiempo de respuesta rápido, atención personalizada y procesos seguros que garantizan tu tranquilidad.
En A&Y, transformamos tu confianza en resultados.</p>
        <button className={styles.secondaryBtn}>Contáctanos</button>
      </motion.div>
      <motion.div
        className={styles.agencyImg}
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <Image src="/assets/3d-clay-humans/agency.png" alt="3D Clay Human" width={270} height={270} />
      </motion.div>
    </section>
  );
} 