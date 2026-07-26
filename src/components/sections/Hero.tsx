'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import Eyebrow from '@/components/ui/Eyebrow';
import styles from './Hero.module.css';

const EASE: [number, number, number, number] = [0.16, 0.8, 0.24, 1];

export default function Hero() {
  const fadeUp = (delay: number) => ({
    hidden: { opacity: 0, y: 28 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, delay, ease: EASE },
    },
  });

  return (
    <header className={styles.hero}>
      {/* Orbit decorativo */}
      <motion.div
        className={styles.orbit}
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        aria-hidden="true"
      />

      <div className="wrap">
        <motion.div
          variants={fadeUp(0.05)}
          initial="hidden"
          animate="show"
        >
          <Eyebrow>Maringá · Paraná</Eyebrow>
        </motion.div>

        <motion.h1
          className={styles.title}
          variants={fadeUp(0.22)}
          initial="hidden"
          animate="show"
        >
          Um lugar simples
          <br />
          para uma fé <em>viva</em>.
        </motion.h1>

        <motion.p
          className={styles.sub}
          variants={fadeUp(0.38)}
          initial="hidden"
          animate="show"
        >
          A Igreja Batista da Graça é uma comunidade aberta a quem busca,
          questiona e quer crescer. Venha como estiver — o próximo culto é
          sempre um bom lugar para começar.
        </motion.p>

        <motion.div
          className={styles.cta}
          variants={fadeUp(0.54)}
          initial="hidden"
          animate="show"
        >
          <Button href="#cultos" variant="primary">
            Ver horário de culto
          </Button>
          <Button href="#local" variant="ghost">
            Como chegar
          </Button>
        </motion.div>

        <motion.div
          className={styles.scheduleMark}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className={styles.scheduleTime}>
            18<sup>h30</sup>
          </div>
          <div className={styles.scheduleMeta}>
            <strong>Culto de domingo</strong>
            Das 18h30 às 20h00
            <br />
            Rua das Tipuanas, 924 — Maringá/PR
          </div>
        </motion.div>
      </div>
    </header>
  );
}
