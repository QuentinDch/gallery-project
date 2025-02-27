// main.js

// Global styles
import "../sass/main.scss";

// Import components
import { initMenuToggler } from "./components/menuToggler";
// Import page transition
// import { initPageTransition } from "./components/pageTransition";

document.addEventListener("DOMContentLoaded", () => {
  console.log("Project loaded successfully!");

  // initPageTransition();
  initMenuToggler();
});
