// menuToggler.js
import gsap from "gsap";

import { animateMenuIn, animateMenuOut } from "./menuAnimations";

export function initMenuToggler() {
  const login = document.querySelector(".navbar__login");
  const menuOpen = document.querySelector(".navbar__toggle--open");
  const menuClose = document.querySelector(".navbar__toggle--close");

  if (!menuOpen || !menuClose) {
    return;
  }

  const menuLabelOpen = menuOpen.querySelector(".navbar__toggle-label");
  const menuLabelClose = menuClose.querySelector(".navbar__toggle-label");
  const menu = document.querySelector(".site-menu");

  let isOpen = false;

  gsap.set(menuLabelOpen, { transform: "translate3d(0%, 0%, 0px)" });

  function handleKeydown(e) {
    if (e.key === "Escape") {
      closeMenu();
    }
  }

  function openMenu() {
    if (isOpen) return;
    isOpen = true;
    document.addEventListener("keydown", handleKeydown);

    animateMenuIn(menu, menuLabelOpen, menuLabelClose);
    menu.setAttribute("aria-hidden", "false");
    gsap.set(menuOpen, { pointerEvents: "none" });
    gsap.set([menu, menuClose], { pointerEvents: "all" });
  }

  function closeMenu() {
    if (!isOpen) return;
    isOpen = false;
    document.removeEventListener("keydown", handleKeydown);

    animateMenuOut(menu, menuLabelOpen, menuLabelClose);
    menu.setAttribute("aria-hidden", "true");
    gsap.set(menuOpen, { pointerEvents: "all" });
    gsap.set([menu, menuClose], { pointerEvents: "none" });
  }

  login.addEventListener("click", (event) => {
    event.preventDefault();
    openMenu();
    document.getElementById("email").focus();
  });

  menuOpen.addEventListener("click", () => openMenu());
  menuClose.addEventListener("click", () => closeMenu());
}
