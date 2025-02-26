// menuToggler.js
import gsap from "gsap";

export function initMenuToggler() {
  const menuOpen = document.querySelector(".navbar__toggle--open");
  const menuClose = document.querySelector(".navbar__toggle--close");

  const menuLabelOpen = menuOpen.querySelector(".navbar__toggle-label");
  const menuLabelClose = menuClose.querySelector(".navbar__toggle-label");

  let isOpen = false;
  const defaultEase = "power4.inOut";

  gsap.set(menuLabelOpen, { transform: "translate3d(0%, 0%, 0px)" });

  function openMenu() {
    isOpen = true;

    gsap.set(menuLabelClose, { transform: "translate3d(0%, 110%, 0px)" });

    gsap.to(menuLabelOpen, {
      transform: "translate3d(0%, -110%, 0px)",
      duration: 1.25,
      ease: defaultEase,
    });
    gsap.to(menuLabelClose, {
      transform: "translate3d(0%, 0%, 0px)",
      duration: 1.5,
      ease: defaultEase,
    });

    menuOpen.style.pointerEvents = "none";
    menuClose.style.pointerEvents = "all";
  }

  function closeMenu() {
    isOpen = false;

    gsap.set(menuLabelOpen, { transform: "translate3d(0%, 110%, 0px)" });

    gsap.to(menuLabelOpen, {
      transform: "translate3d(0%, 0%, 0px)",
      duration: 1.5,
      ease: defaultEase,
    });
    gsap.to(menuLabelClose, {
      transform: "translate3d(0%, -110%, 0px)",
      duration: 1.25,
      ease: defaultEase,
    });

    menuOpen.style.pointerEvents = "all";
    menuClose.style.pointerEvents = "none";
  }

  menuOpen.addEventListener("click", openMenu);
  menuClose.addEventListener("click", closeMenu);
}
