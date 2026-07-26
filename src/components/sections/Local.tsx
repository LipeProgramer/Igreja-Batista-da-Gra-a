'use client';

import { motion, type Variants } from 'framer-motion';
import Eyebrow from '@/components/ui/Eyebrow';
import Button from '@/components/ui/Button';
import styles from './Local.module.css';

const revealVariant: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
};

export default function Local() {
  return (
    <section className={styles.local} id="local">
      <div className="wrap">
        <div className={styles.grid}>
          <motion.div
            variants={revealVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Eyebrow>Onde estamos</Eyebrow>
            <p className={styles.address}>
              Rua das Tipuanas, 924
              <br />
              Maringá — PR
              <br />
              87060-130
            </p>
            <ul className={styles.details}>
              <li>Estacionamento próximo ao templo</li>
              <li>Acesso fácil pela Av. Tuiuti</li>
            </ul>
            <div className={styles.cta}>
              <Button
                href="https://www.google.com/maps/search/?api=1&query=Rua+das+Tipuanas+924+Maringá+Paraná"
                variant="primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Abrir no mapa
              </Button>
            </div>
          </motion.div>

          <motion.div
            className={styles.mapFrame}
            variants={revealVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.15 }}
          >
            <iframe
              loading="lazy"
              src="https://maps.google.com/maps?q=Rua%20das%20Tipuanas%2C%20924%2C%20Maring%C3%A1%2C%20Paran%C3%A1&t=&z=15&ie=UTF8&iwloc=&output=embed"
              allowFullScreen
              title="Mapa Igreja Batista da Graça"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
