import { useState } from 'react';
import styles from '@/styles/Navbar.module.css';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo__container}>
        <Link href="/">
          <img src='/logo-menu.png' className={styles.logo}/> 
        </Link>
      </div>
      <div className={styles.hamburger} onClick={toggleMenu}>
        ☰
      </div>
      <ul className={`${styles.menu} ${isMenuOpen ? styles.open : ''}`}>
        <li><Link href="#nossa-historia">Nossa História</Link></li>
        <li><Link href="#cardapio">Cardápio</Link></li>
        <li><Link href="#nossas-unidades">Nossas Unidades</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
