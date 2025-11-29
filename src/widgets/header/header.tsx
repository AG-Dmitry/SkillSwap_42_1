import styles from "./header.module.scss";
import { Link } from "react-router-dom";
import { Logo } from "../../shared/ui/logo/logo.tsx";

export const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.headerTitle}>
        <Link to="/" className={styles.navLink}>
          <Logo />
        </Link>
      </h1>
      <nav className={styles.nav} aria-label="main navigation">
        <Link to="/" className={styles.navLink}>
          О проекте
        </Link>
        <Link to="/profile" className={styles.navLink}>
          Все навыки
        </Link>
        <Link to="/favorites" className={styles.navLink}>
          Текстовый инпут для поиска навыка
        </Link>
        <Link to="/create-offer" className={styles.navLink}>
          Кнопка переключения темы
        </Link>
        <Link to="/login" className={styles.navLink}>
          Войти
        </Link>
        <Link to="/login" className={styles.navLink}>
          Зарегистрироваться
        </Link>
      </nav>
    </header>
  );
};
