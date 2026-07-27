'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { SOCIAL_LINKS } from '@/data/social';
import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer} id="contato">
      <div className="wrap">
        <motion.div
          className={styles.cta}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <h3 className={styles.ctaTitle}>
            Toda semana tem um lugar reservado pra você.
          </h3>
          <Button href="#cultos" variant="primary">
            Ver horário de culto
          </Button>
        </motion.div>

        {/* Redes Sociais */}
        <motion.div
          className={styles.socialRow}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
        >
          <span className={styles.socialLabel}>Siga a gente</span>
          <div className={styles.socialIcons}>
            {SOCIAL_LINKS.map(({ label, href, svgPath }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={styles.socialLink}
              >
                <svg
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d={svgPath} />
                </svg>
                <span>{label}</span>
              </a>
            ))}
          </div>
        </motion.div>

        <div className={styles.bottom}>
          <span>Igreja Batista da Graça — Maringá, PR &copy; {year}</span>
          <nav className={styles.links} aria-label="Links do rodapé">
            <a href="#sobre">Sobre</a>
            <a href="#cultos">Cultos</a>
            <a href="#galeria">Galeria</a>
            <a href="#local">Local</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
