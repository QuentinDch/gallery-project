import gsap from "gsap";

const defaultEase = "power4.inOut";

function resetHeaderPosition() {
  gsap.set(".section-header h2", { y: 50 });
  gsap.set(".section-header p", { y: 20 });
  gsap.set(".faq-section__list li", { y: 165 });
  gsap.set(".infos-section__contact div", { y: 75 });
  gsap.set([".auth-form div", ".auth-form button"], { y: 180 });
}

export function animateMenuIn(menu, menuLabelOpen, menuLabelClose) {
  resetHeaderPosition();

  gsap.set(menuLabelClose, { transform: "translate3d(0%, 110%, 0px)" });
  gsap.set(menu, { clipPath: "inset(100% 0% 0% 0%)" });

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

  gsap.to(".faq-section__list li", {
    y: 0,
    duration: 1,
    delay: 1,
    stagger: 0.1,
    ease: "power3.out",
  });

  gsap.to(".infos-section__contact div", {
    y: 0,
    duration: 1,
    delay: 1.1,
    ease: "power3.out",
  });

  gsap.to(".auth-form div", {
    y: 0,
    duration: 1,
    delay: 1,
    stagger: 0.1,
    ease: "power3.out",
  });
  gsap.to(".auth-form button", {
    y: 0,
    duration: 1,
    delay: 1.25,
    ease: "power3.out",
  });
}

export function animateMenuOut(menu, menuLabelOpen, menuLabelClose) {
  gsap.set(menuLabelOpen, { transform: "translate3d(0%, 110%, 0px)" });

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
      resetHeaderPosition();
      gsap.set(menu, { opacity: 1, top: "0px" });
    },
  });
}
