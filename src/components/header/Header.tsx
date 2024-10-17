import React from 'react';
import styles from './Header.module.css'; // Импортируем модульные стили

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.text_header}>CodeArena</h1>
      <nav className={styles.nav}>
        <a href="#home" className={styles.link}>О платформе</a>
        <a href="#about" className={styles.link}>Соревнования</a>
        <a href="#contact" className={styles.link}>Новости</a>
      </nav>
      <button className={styles.button_one}>Регестрация</button>
    </header>
  );
};

export default Header;
