import React from "react";
import App from "./components/App";
import { initializeIcons } from "@fluentui/font-icons-mdl2";
import { createRoot } from "react-dom/client";

/* global document, Office */

initializeIcons();

let isOfficeInitialized = false;

const title = "Office Syntax Highlighter Task Pane Add-in";

const render = (Component: typeof App) => {
  createRoot(document.getElementById("container") as HTMLElement).render(
    <React.StrictMode>
      <Component title={title} isOfficeInitialized={isOfficeInitialized} />
    </React.StrictMode>
  );
};

/* Render application after Office initializes */
Office.onReady(() => {
  isOfficeInitialized = true;
  render(App);
});
