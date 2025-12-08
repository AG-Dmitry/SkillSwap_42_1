import styles from "./layout.module.scss";
import { Outlet } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";

export const Layout = () => (
  <div className={styles.pageContainer}>
    <Header />
    <main className={styles.main}>
      <Outlet />
    </main>
    <Footer />
  </div>
);
