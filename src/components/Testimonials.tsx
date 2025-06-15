"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/Testimonials.module.css';

const testimonialsData = [
  {
    text: "Super recomendada esta agencia, siempre envio con Albert, nunca ha fallado.💯👏👏👏",
    author: 'Marisol Gonzales',
    role: 'User Facebook',
    avatar: '/assets/avatars/marisol.jpg',
    stars: 5,
  },
  {
    text: "Gracias. Mi dinero llego en segundo, rapidisimo.",
    author: 'Lohaiza Navarro',
    role: 'User Facebook',
    avatar: '/assets/avatars/lohaiza.jpg',
    stars: 4,
  },
  {
    text: "Hola.!!!!",
    author: 'deisy.palacio.3785',
    role: 'User Instagram',
    avatar: '/assets/avatars/deisi.jpg',
    stars: 5,
  },
];

const cardVariants = {
  center: { scale: 1.1, opacity: 1, zIndex: 2, filter: 'blur(0px)', boxShadow: '0 4px 24px rgba(0,0,0,0.10)', x: 0 },
  left: { scale: 0.9, opacity: 0.6, zIndex: 1, filter: 'blur(1px)', x: -220 },
  right: { scale: 0.9, opacity: 0.6, zIndex: 1, filter: 'blur(1px)', x: 220 },
  hidden: { scale: 0.7, opacity: 0, zIndex: 0, filter: 'blur(2px)', x: 0 },
};

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const total = testimonialsData.length;

  // Autoplay: cambia cada 4 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 4000);
    return () => clearInterval(timer);
  }, [total]);

  const nextTestimonial = () => setCurrent((prev) => (prev + 1) % total);
  const prevTestimonial = () => setCurrent((prev) => (prev - 1 + total) % total);

  // Calcula el índice de la tarjeta anterior y siguiente
  const getIndices = () => {
    const prev = (current - 1 + total) % total;
    const next = (current + 1) % total;
    return { prev, current, next };
  };

  const { prev, next } = getIndices();

  return (
    <section className={styles.testimonials}>
      <h2>Qué dicen nuestros <span className={styles.highlight}>Clientes</span></h2>
      <p className={styles.subtitle}>Vea los testimonio de como nuestra agencia ayuda a nuestros clientes a cumplir sus metas.</p>
      <div className={styles.carouselWrap}>
        <button className={styles.carouselBtn} onClick={prevTestimonial}>&#8592;</button>
        <div className={styles.carouselTrack}>
          {testimonialsData.map((testimonial, i) => {
            let position: 'center' | 'left' | 'right' | 'hidden' = 'hidden';
            if (i === current) position = 'center';
            else if (i === prev) position = 'left';
            else if (i === next) position = 'right';
            return (
              <motion.div
                key={i}
                className={styles.testimonialCard + ' ' + styles[position]}
                variants={cardVariants}
                initial={position}
                animate={position}
                exit="hidden"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              >
                <div className={styles.avatarRow}>
                  <img src={testimonial.avatar} alt={testimonial.author} className={styles.avatar} />
                  <div>
                    <span className={styles.author}>{testimonial.author}</span>
                    <span className={styles.role}>{testimonial.role}</span>
                  </div>
                </div>
                <p className={styles.text}>{testimonial.text}</p>
                <div className={styles.stars}>{'★'.repeat(testimonial.stars)}{'☆'.repeat(5 - testimonial.stars)}</div>
              </motion.div>
            );
          })}
        </div>
        <button className={styles.carouselBtn} onClick={nextTestimonial}>&#8594;</button>
      </div>
    </section>
  );
} 