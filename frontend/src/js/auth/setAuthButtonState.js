// setAuthButtonState.js

import gsap from "gsap";
import { checkAuthStatus } from "./authStatus";

export async function setAuthButtonState() {
  const btnTogglerLogin = document.querySelector(".btn-toggler-login");
  const btnTogglerLogout = document.querySelector(".btn-toggler-logout");

  const btnLabelLogin = btnTogglerLogin.querySelector(".navbar__login-label");
  const btnLabelLogout = btnTogglerLogout.querySelector(".navbar__login-label");

  showLoginButton();

  checkAuthStatus().then((isLogin) => {
    if (isLogin) {
      showLogoutButton();
    }
  });

  function showLogoutButton() {
    gsap.set(btnTogglerLogin, { pointerEvents: "none" });
    gsap.set(btnTogglerLogout, { pointerEvents: "all" });
    gsap.set(btnLabelLogin, { transform: "translate3d(0%, -110%, 0px)" });
    gsap.set(btnLabelLogout, { transform: "translate3d(0%, 0%, 0px)" });
  }

  function showLoginButton() {
    gsap.set(btnTogglerLogin, { pointerEvents: "all" });
    gsap.set(btnTogglerLogout, { pointerEvents: "none" });
    gsap.set(btnLabelLogin, { transform: "translate3d(0%, 0%, 0px)" });
    gsap.set(btnLabelLogout, { transform: "translate3d(0%, -110%, 0px)" });
  }
}
