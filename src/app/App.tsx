type AppProps = {
  title?: string;
};

export default function App({ title = "SkillSwap" }: AppProps) {
  return (
    <div
      className="app-root"
      style={{ fontFamily: "system-ui, Arial, sans-serif", lineHeight: 1.4 }}
    >
      <header
        style={{ padding: "1rem 1.25rem", borderBottom: "1px solid #e6e6e6" }}
      >
        <h1 style={{ margin: 0, fontSize: "1.25rem" }}>{title}</h1>
      </header>

      <main style={{ padding: "1.5rem" }}>
        <p>
          This is a minimal React application layout. Replace this with your app
          routes or components.
        </p>

        <section aria-label="content" style={{ marginTop: "1rem" }}>
          <div
            style={{
              padding: "1rem",
              border: "1px dashed #ddd",
              borderRadius: 6,
            }}
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
        style={{
          padding: "1rem 1.25rem",
          borderTop: "1px solid #e6e6e6",
          fontSize: "0.9rem",
        }}
      >
        <span>© {new Date().getFullYear()} SkillSwap</span>
      </footer>
    </div>
  );
}
