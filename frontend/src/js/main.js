// main.js

// Global styles
import "../sass/main.scss";

// Import components
import { initMenuToggler } from "./features/menuToggler";
import { initAccordion } from "./components/accordion";
import { loginUser } from "./auth/login";
import { logoutUser } from "./auth/logout";
import { setAuthButtonState } from "./auth/setAuthButtonState";
import { initializeFooterDate } from "./utils/dateUtils";
import { fetchCategories } from "./components/categoryButtons";

document.addEventListener("DOMContentLoaded", () => {
  console.log("Project loaded successfully!");

  initializeFooterDate();
  initAccordion();
  initMenuToggler();
  setAuthButtonState();
  loginUser();
  logoutUser();
  fetchCategories();
});
