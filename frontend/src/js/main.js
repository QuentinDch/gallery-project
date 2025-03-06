// main.js

// Global styles
import "../sass/main.scss";

// Import components
import { initMenuToggler } from "./components/menuToggler";
import { loginUser } from "./components/login";
import { logoutUser } from "./components/logout";
import { setAuthButtonState } from "./components/setAuthButtonState";
import { initializeFooterDate } from "./components/dateUtils";

document.addEventListener("DOMContentLoaded", () => {
  console.log("Project loaded successfully!");

  initializeFooterDate();
  initMenuToggler();
  setAuthButtonState();
  loginUser();
  logoutUser();
});
