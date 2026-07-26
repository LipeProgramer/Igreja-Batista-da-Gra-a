'use client';

import { motion, type Variants } from 'framer-motion';
import Eyebrow from '@/components/ui/Eyebrow';
import styles from './Sobre.module.css';

const INFO_ROWS = [
  { label: 'Tradição', value: 'Batista' },
  { label: 'Fundação', value: 'Comunidade local' },
  { label: 'Pastor titular', value: 'Em transição' },
  { label: 'Cultos', value: 'Domingo, 18h30' },
  { label: 'Localização', value: 'Maringá, PR' },
] as const;

const revealVariant: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' as const },
  },
};

export default function Sobre() {
  return (
    <section className={styles.about} id="sobre">
      <div className="wrap">
        <div className={styles.grid}>
          <motion.div
            variants={revealVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <Eyebrow>Quem somos</Eyebrow>
            <p className={styles.lead}>
              Uma igreja <em>pequena em tamanho</em>, mas séria no cuidado com
              as pessoas e com a Palavra.
            </p>
            <p className={styles.body}>
              Seguimos a tradição batista: autonomia da igreja local, centralidade
              das Escrituras e liberdade de consciência. Estamos em um momento de
              transição — sem pastor titular no momento — e isso não nos impede de
              continuar nos reunindo, servindo e crescendo juntos.
            </p>
          </motion.div>

          <motion.div
            variants={revealVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: 0.15 }}
          >
            <dl className={styles.list}>
              {INFO_ROWS.map((row) => (
                <motion.div
                  key={row.label}
                  className={styles.row}
                  whileHover={{ paddingLeft: 8 }}
                  transition={{ duration: 0.3 }}
                >
                  <dt>{row.label}</dt>
                  <dd>{row.value}</dd>
                </motion.div>
              ))}
            </dl>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
