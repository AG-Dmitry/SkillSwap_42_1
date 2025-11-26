import { Routes, Route } from "react-router-dom";
import App from "./App";

function Home() {
  return (
    <section>
      <h2>Welcome</h2>
      <p>This is the home page. Replace with your real content.</p>
    </section>
  );
}

function Profile() {
  return (
    <section>
      <h2>Profile</h2>
      <p>User profile content goes here.</p>
    </section>
  );
}

function NotFound() {
  return (
    <section>
      <h2>404 — Not Found</h2>
      <p>The requested page could not be found.</p>
    </section>
  );
}

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
