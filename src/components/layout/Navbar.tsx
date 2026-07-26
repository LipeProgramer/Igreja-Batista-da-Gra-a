'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';
import styles from './Navbar.module.css';
import type { NavLink } from '@/types';

const NAV_LINKS: NavLink[] = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#cultos', label: 'Cultos' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#local', label: 'Local' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 20);
  });

  return (
    <motion.nav
      className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 0.8, 0.24, 1] }}
    >
      <div className={styles.inner}>
        <Link href="/" className={styles.brand}>
          <Image
            src="/assets/images/logo-preta.png"
            alt="Igreja Batista da Graça"
            width={38}
            height={38}
            style={{ height: 38, width: 'auto' }}
            priority
          />
          <div className={styles.mark}>
            Igreja Batista da Graça
            <span>Maringá · PR</span>
          </div>
        </Link>

        <nav className={styles.links} aria-label="Navegação principal">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className={styles.link}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </motion.nav>
  );
}
