
import styles from './Layout.module.css';
import Navbar from './Navbar'
import Footer from './Footer'

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.app}>
      <Navbar />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  )
}