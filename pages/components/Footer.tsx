import styles from './Footer.module.css';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      Made by <Link href="/"><a>Marcus Sneitz</a></Link> { currentYear }
    </footer>
  )
}