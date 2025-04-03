import gsap from "gsap";

const defaultEase = "power4.inOut";

const banner = document.querySelector(".edit-bar");
const navbar = document.querySelector(".navbar");

let isConnect = false;

export function displayEditionBanner() {
  if (isConnect) return;
  isConnect = true;
  gsap.to(banner, {
    clipPath: "inset(0% 0% 0% 0%)",
    duration: 1.25,
    delay: 0.75,
    ease: defaultEase,
  });
  gsap.to(navbar, {
    marginTop: "34px",
    duration: 1.25,
    delay: 0.75,
    ease: defaultEase,
  });
}

export function hideEditionBanner() {
  if (!isConnect) return;
  gsap.to(banner, {
    clipPath: "inset(0% 0% 100% 0%)",
    duration: 1.25,
    ease: defaultEase,
  });
  gsap.to(navbar, {
    marginTop: "13px",
    duration: 1.25,
    ease: defaultEase,
  });

  isConnect = false;
}
