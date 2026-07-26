'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import type { FotoGaleria } from '@/types';
import styles from './Carousel.module.css';

interface CarouselProps {
  fotos: FotoGaleria[];
}

const AUTOPLAY_MS = 5000;

export default function Carousel({ fotos }: CarouselProps) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const isReducedMotion =
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false;

  const goTo = useCallback(
    (index: number, dir?: number) => {
      const next = (index + fotos.length) % fotos.length;
      setDirection(dir ?? (next > current ? 1 : -1));
      setCurrent(next);
    },
    [current, fotos.length]
  );

  const next = useCallback(() => goTo(current + 1, 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1, -1), [current, goTo]);

  const startAutoplay = useCallback(() => {
    if (isReducedMotion || fotos.length < 2) return;
    timerRef.current = setInterval(next, AUTOPLAY_MS);
  }, [isReducedMotion, fotos.length, next]);

  const stopAutoplay = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
  }, []);

  const restartAutoplay = useCallback(() => {
    stopAutoplay();
    startAutoplay();
  }, [stopAutoplay, startAutoplay]);

  useEffect(() => {
    startAutoplay();
    return stopAutoplay;
  }, [startAutoplay, stopAutoplay]);

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? '-100%' : '100%', opacity: 0 }),
  };

  // Touch / drag support
  const dragStartX = useRef(0);

  return (
    <div className={styles.carousel}>
      <div
        className={styles.track}
        onMouseEnter={stopAutoplay}
        onMouseLeave={startAutoplay}
        onTouchStart={(e) => { dragStartX.current = e.touches[0].clientX; }}
        onTouchEnd={(e) => {
          const delta = e.changedTouches[0].clientX - dragStartX.current;
          if (Math.abs(delta) > 40) {
            if (delta < 0) { goTo(current + 1, 1); } else { goTo(current - 1, -1); }
            restartAutoplay();
          }
        }}
      >
        <AnimatePresence custom={direction} initial={false}>
          <motion.div
            key={current}
            className={styles.slide}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.65, ease: [0.65, 0, 0.35, 1] }}
          >
            <Image
              src={fotos[current].src}
              alt={fotos[current].alt}
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, 1180px"
              priority={current === 0}
            />
            <div className={styles.caption}>{fotos[current].legenda}</div>
          </motion.div>
        </AnimatePresence>

        <button
          className={`${styles.navBtn} ${styles.prev}`}
          onClick={() => { prev(); restartAutoplay(); }}
          aria-label="Foto anterior"
        >
          &#8249;
        </button>
        <button
          className={`${styles.navBtn} ${styles.next}`}
          onClick={() => { next(); restartAutoplay(); }}
          aria-label="Próxima foto"
        >
          &#8250;
        </button>
      </div>

      <div className={styles.dots} role="tablist" aria-label="Navegação do carrossel">
        {fotos.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === current}
            aria-label={`Ir para foto ${i + 1}`}
            className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
            onClick={() => { goTo(i); restartAutoplay(); }}
          />
        ))}
      </div>
    </div>
  );
}
