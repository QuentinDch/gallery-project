// main.js

// Global styles
import "../sass/main.scss";

// Import components
import { initMenuToggler } from "./components/menuToggler";

document.addEventListener("DOMContentLoaded", () => {
  console.log("Project loaded successfully!");

  initMenuToggler();
});
