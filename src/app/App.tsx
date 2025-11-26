import styles from './styles/app.module.css';

type AppProps = {
  title?: string;
};

export default function App({ title = "SkillSwap" }: AppProps) {
  return (
    <div
      className={styles.app}
    >
      <header className={styles.header}
      >
        <h1 className={styles.headerTitle}>{title}</h1>
      </header>

      <main className={styles.main}>
        <p>
          This is a minimal React application layout. Replace this with your app
          routes or components.
        </p>

        <section aria-label="content" className={styles.section}>
          <div
            className={styles.sectionContent}
          >
            <strong>Getting started</strong>
            <ul>
              <li>
                Open <code>src/app/App.tsx</code> to edit this component.
              </li>
              <li>
                Run <code>npm run dev</code> to start the Vite dev server.
              </li>
            </ul>
          </div>
        </section>
      </main>

      <footer
        className={styles.footer}
      >
        <span>© {new Date().getFullYear()} SkillSwap</span>
      </footer>
    </div>
  );
}
