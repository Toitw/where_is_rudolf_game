
import { createRoot } from "react-dom/client";
import App from "../components/App";
import React from "react";

document.addEventListener("turbo:load", () => {
  const root = createRoot(
    document.body.appendChild(document.createElement("div"))
  );
  root.render(<App />);
});