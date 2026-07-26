'use client';

import { motion } from 'framer-motion';
import Eyebrow from '@/components/ui/Eyebrow';
import Carousel from '@/components/ui/Carousel';
import { GALERIA_FOTOS } from '@/data/galeria';
import styles from './Galeria.module.css';

export default function Galeria() {
  return (
    <section className={styles.galeria} id="galeria">
      <div className="wrap">
        <motion.div
          className={styles.head}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div>
            <Eyebrow light>Galeria</Eyebrow>
            <h2 className={styles.title}>Momentos da nossa igreja</h2>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
        >
          <Carousel fotos={GALERIA_FOTOS} />
        </motion.div>
      </div>
    </section>
  );
}
