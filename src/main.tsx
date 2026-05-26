import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";

import App from "./App";

import "./index.css";
import "./styles/theme.css";
import "./styles/layout.css";
import "./styles/pages.css";
import "./styles/scrollbar.css";
import { LanguageProvider } from "./context/LanguageContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename="/dev-porfolio">
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </BrowserRouter>
  </StrictMode>
);