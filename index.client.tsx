/**
 * @file This is the client-side entry point for the React application.
 * This file is responsible for mounting the main React component (imported from index.tsx)
 * onto a DOM node in the HTML page.
 */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { default as Component } from "./index";
// Optionally: import your app's CSS
// import "./styles.css";

// Get the root DOM element from public/index.html where our React app will be rendered.
const elem = document.getElementById("root")!;
// Define the React application structure to be rendered.
// <StrictMode> is a React helper for checking potential problems in an application.
const app = (
  <StrictMode>
    <Component />
  </StrictMode>
);

// This code is for supporting Hot Module Replacement (HMR) in tools like Vite.
// HMR allows the browser to update only the changed parts of the code without a full page reload
// during development, greatly improving development efficiency.
if (import.meta.hot) {
  // With hot module reloading, `import.meta.hot.data` is persisted.
  const root = (import.meta.hot.data.root ??= createRoot(elem));
  root.render(app);
} else {
  // In a production environment, or when HMR is not available, use the standard way to render the application.
  // This will create a new root and render the application into it.
  // The hot module reloading API is not available in production.
  createRoot(elem).render(app);
}
