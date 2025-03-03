// // buttonAuthToggler.js

// import gsap from "gsap";

// export function buttonAuthToggler() {
//   const btnTogglerLogin = document.querySelector(".btn-toggler-login");
//   const btnTogglerLogout = document.querySelector(".btn-toggler-logout");

//   const btnLabelLogin = btnTogglerLogin.querySelector(".navbar__login-label");
//   const btnLabelLogout = btnTogglerLogout.querySelector(".navbar__login-label");

//   let isLogin = false;
//   const defaultEase = "power4.inOut";

//   gsap.set(btnLabelLogin, { transform: "translate3d(0%, 0%, 0px)" });

//   function logoutButton() {
//     if (isLogin) return;
//     isLogin = true;

//     gsap.set(btnTogglerLogin, { pointerEvents: "none" });
//     gsap.set(btnTogglerLogout, { pointerEvents: "all" });

//     gsap.to(btnLabelLogin, {
//       transform: "translate3d(0%, -110%, 0px)",
//       duration: 1.25,
//       ease: defaultEase,
//     });
//     gsap.to(btnLabelLogout, {
//       transform: "translate3d(0%, 0%, 0px)",
//       duration: 1.25,
//       ease: defaultEase,
//     });
//   }

//   function loginButton() {
//     if (!isLogin) return;
//     isLogin = false;

//     gsap.set(btnTogglerLogin, { pointerEvents: "all" });
//     gsap.set(btnTogglerLogout, { pointerEvents: "none" });

//     gsap.to(btnLabelLogin, {
//       transform: "translate3d(0%, 0%, 0px)",
//       duration: 1.25,
//       ease: defaultEase,
//     });
//     gsap.to(btnLabelLogout, {
//       transform: "translate3d(0%, -110%, 0px)",
//       duration: 1.25,
//       ease: defaultEase,
//     });
//   }
// }
