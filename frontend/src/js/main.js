// main.js

// Global styles
import "../sass/main.scss";

// Import components
import { initMenuToggler } from "./components/menuToggler";
import { loginUser } from "./components/login";
import { logoutUser } from "./components/logout";
import { setAuthButtonState } from "./components/setAuthButtonState";

document.addEventListener("DOMContentLoaded", () => {
  console.log("Project loaded successfully!");

  initMenuToggler();
  setAuthButtonState();
  loginUser();
  logoutUser();
});
