"use client";

import { motion, Variants } from 'framer-motion';
import styles from '../styles/Services.module.css';
import AnimatedSection from './AnimatedSection';

const services = [
  {
    title: "Enviar Remesa",
    description: "Envía dinero de forma segura y rápida a tus seres queridos. Las mejores tasas y comisiones del mercado.",
    icon: "/assets/icons/remesa.svg",
    features: ["Envío instantáneo", "Tasas competitivas", "Seguimiento en tiempo real"],
    color: "#FF6B6B"
  },
  {
    title: "Recargar Celular",
    description: "Recarga cualquier operador móvil al instante. Recibe confirmación inmediata y bonos exclusivos.",
    icon: "/assets/icons/celular.svg",
    features: ["Todas las operadoras", "Bonos exclusivos", "Confirmación instantánea"],
    color: "#4ECDC4"
  },
  {
    title: "Comprar Pasajes",
    description: "Reserva tus pasajes de bus con anticipación. Las mejores rutas y precios garantizados.",
    icon: "/assets/icons/pasaje.svg",
    features: ["Múltiples rutas", "Precios especiales", "Reserva anticipada"],
    color: "#45B7D1"
  }
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};

const featureVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};

export default function Services() {
  return (
    <AnimatedSection id="services" className={styles.services}>
      <div className={styles.servicesContent}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.servicesHeader}
        >
          <h2>Nuestros Servicios</h2>
          <p>Soluciones rápidas y confiables para estar cerca de los tuyos</p>
        </motion.div>

        



        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={styles.serviceCard}
              style={{ "--card-color": service.color } as React.CSSProperties}
            >
              <div className={styles.cardContent}>
                <div className={styles.iconContainer}>
                  <img src={service.icon} alt={service.title} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className={styles.featuresList}>
                  {service.features.map((feature, i) => (
                    <motion.li
                      key={feature}
                      variants={featureVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <span className={styles.checkIcon}>✓</span>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={styles.serviceButton}
                >
                  Comenzar ahora
                </motion.button>
              </div>
              <div className={styles.cardBackground} />
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
} 