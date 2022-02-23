import styles from './Navbar.module.css';
import Link from 'next/link';
import Image from 'next/image';

const logo = "/images/logo.png";

export default function Navbar() {
  //console.log(process.env.DB_PASS);
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About Us</a>
      </Link>
      <Image src={ logo } width={50} height={50} alt="Logo"/>
      <Link href="/weather">
        <a>Weather</a>
      </Link>      
      <Link href="/about">
        <a>About Us</a>
      </Link>
    </nav>
  )
}