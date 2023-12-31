import { createRoot } from "react-dom/client";
import React from "react";
import App from "./App";
import './index.css';

function renderApp() {
  const container = document.getElementById("react-root");
  const root = createRoot(container!);
  root.render(<App />);
}

renderApp();
