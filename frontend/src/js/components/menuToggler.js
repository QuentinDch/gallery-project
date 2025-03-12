// menuToggler.js
import gsap from "gsap";

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
  const defaultEase = "power4.inOut";

  gsap.set(".section-header h2", { y: 50 });
  gsap.set(".section-header p", { y: 20 });
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

    gsap.set(menuLabelClose, { transform: "translate3d(0%, 110%, 0px)" });
    gsap.set(menu, { clipPath: "inset(100% 0% 0% 0%)" });
    gsap.set(menuOpen, { pointerEvents: "none" });
    gsap.set([menu, menuClose], { pointerEvents: "all" });
    menu.setAttribute("aria-hidden", "false");

    gsap.to(menuLabelOpen, {
      transform: "translate3d(0%, -110%, 0px)",
      duration: 1.25,
      ease: defaultEase,
    });
    gsap.to(menuLabelClose, {
      transform: "translate3d(0%, 0%, 0px)",
      duration: 1.25,
      ease: defaultEase,
    });

    gsap.to(menu, {
      clipPath: "inset(0% 0% 0% 0%)",
      duration: 1.25,
      ease: defaultEase,
    });

    gsap.to(".section-header h2", {
      y: 0,
      duration: 1,
      delay: 0.75,
      ease: "power3.out",
    });

    gsap.to(".section-header p", {
      y: 0,
      duration: 1,
      delay: 1,
      ease: "power3.out",
    });
  }

  function closeMenu() {
    if (!isOpen) return;
    isOpen = false;

    document.removeEventListener("keydown", handleKeydown);

    gsap.set(menuLabelOpen, { transform: "translate3d(0%, 110%, 0px)" });
    gsap.set(menuOpen, { pointerEvents: "all" });
    gsap.set([menu, menuClose], { pointerEvents: "none" });
    menu.setAttribute("aria-hidden", "true");

    gsap.to(menuLabelOpen, {
      transform: "translate3d(0%, 0%, 0px)",
      duration: 1.25,
      ease: defaultEase,
    });
    gsap.to(menuLabelClose, {
      transform: "translate3d(0%, -110%, 0px)",
      duration: 1.25,
      ease: defaultEase,
    });

    gsap.to(menu, {
      clipPath: "inset(0% 0% 100% 0%)",
      duration: 1.25,
      ease: defaultEase,
    });

    gsap.to(menu, {
      top: "-300px",
      opacity: 0,
      duration: 1.25,
      ease: defaultEase,
      onComplete: () => {
        gsap.set(".section-header h2", { y: 50 });
        gsap.set(".section-header p", { y: 20 });
        gsap.set(menu, { opacity: 1, top: "0px" });
      },
    });
  }

  login.addEventListener("click", (event) => {
    event.preventDefault();
    openMenu();
    document.getElementById("email").focus();
  });
  menuOpen.addEventListener("click", () => openMenu());
  menuClose.addEventListener("click", () => closeMenu());
}
