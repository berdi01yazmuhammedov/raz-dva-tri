import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo} onClick={closeMenu}>
        <h2>Раз Два Три</h2>
      </Link>

      {/* Бургер */}
      <div
        className={`${styles.burger} ${menuOpen ? styles.active : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Навигация */}
      <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
        <ul>
          <li><Link to="/lessons" onClick={closeMenu}>Уроки</Link></li>
          <li><Link to="/train" onClick={closeMenu}>Тренажёры</Link></li>
          <li><Link to="/accomplishments" onClick={closeMenu}>Достижения</Link></li>
          <li><Link to="/profile" onClick={closeMenu}>Профиль</Link></li>
        </ul>
      </nav>

      {/* Оверлей */}
      {menuOpen && <div className={styles.overlay} onClick={closeMenu}></div>}
    </header>
  );
};

export default Header;
