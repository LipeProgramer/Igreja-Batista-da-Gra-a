'use client';

import { motion, type Variants } from 'framer-motion';
import Eyebrow from '@/components/ui/Eyebrow';
import { CULTOS } from '@/data/cultos';
import styles from './Cultos.module.css';

const revealVariant: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
};

export default function Cultos() {
  return (
    <section id="cultos" className={styles.section}>
      <div className="wrap">
        <motion.div
          className={styles.head}
          variants={revealVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div>
            <Eyebrow>Programação</Eyebrow>
            <h2 className={styles.title}>Horários de culto</h2>
          </div>
          <p className={styles.note}>
            Por enquanto, nossa programação regular acontece aos domingos. Novos
            horários serão adicionados conforme a igreja crescer.
          </p>
        </motion.div>

        <motion.ul
          className={styles.list}
          variants={revealVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {CULTOS.map((culto) => (
            <motion.li
              key={culto.nome}
              className={styles.row}
              whileHover={{ paddingLeft: 8 }}
              transition={{ duration: 0.3 }}
            >
              <span className={styles.day}>{culto.dia}</span>
              <span className={styles.name}>
                {culto.nome}
                <small>{culto.descricao}</small>
              </span>
              <span className={styles.time}>{culto.horario}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
