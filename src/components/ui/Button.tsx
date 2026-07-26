import styles from './Button.module.css';

type ButtonVariant = 'primary' | 'ghost';

interface ButtonProps {
  href: string;
  variant?: ButtonVariant;
  children: React.ReactNode;
  target?: string;
  rel?: string;
  className?: string;
}

export default function Button({
  href,
  variant = 'primary',
  children,
  target,
  rel,
  className = '',
}: ButtonProps) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={`${styles.btn} ${styles[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
