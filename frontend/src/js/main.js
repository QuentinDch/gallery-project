// main.js

// Global styles
import "../sass/main.scss";

// Import components
import { initMenuToggler } from "./components/menuToggler";
import { loginUser } from "./components/login";

document.addEventListener("DOMContentLoaded", () => {
  console.log("Project loaded successfully!");

  initMenuToggler();
  loginUser();
});
