import styles from './Eyebrow.module.css';

interface EyebrowProps {
  children: React.ReactNode;
  light?: boolean;
}

export default function Eyebrow({ children, light = false }: EyebrowProps) {
  return (
    <div className={`${styles.eyebrow} ${light ? styles.light : ''}`}>
      {children}
    </div>
  );
}
