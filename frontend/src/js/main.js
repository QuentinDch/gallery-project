// main.js

// global styles
import "../sass/main.scss";

// import components
import { initMenuToggler } from "./components/menuToggler";

document.addEventListener("DOMContentLoaded", () => {
  console.log("Project loaded successfully!");

  initMenuToggler();
});
