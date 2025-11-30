import styles from "./styles/app.module.scss";
import { Outlet } from "react-router-dom";
import { Footer } from "../widgets/Footer/Footer.tsx";
import { Header } from "../widgets/Header/Header.tsx";
import { DecoratedButton } from "@/shared/ui/DecoratedButton/DecoratedButton.tsx";

// type AppProps = {
//   title?: string;
// };

export default function App() {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
      <DecoratedButton variant={"heart"} />
    </div>
  );
}
