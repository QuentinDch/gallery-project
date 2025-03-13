// logoutUser.js

import { setAuthButtonState } from "./setAuthButtonState";

export function logoutUser() {
  document
    .getElementById("logout-button")
    .addEventListener("click", async () => {
      try {
        const response = await fetch("http://localhost:5000/api/auth/logout", {
          method: "POST",
          credentials: "include",
        });

        const data = await response.json();

        if (response.ok) {
          const form = document.getElementById("login-form");
          form.querySelectorAll("input").forEach((input) => {
            if (input.type === "checkbox") {
              input.checked = false;
              return;
            }
            input.value = "";
          });

          setAuthButtonState();
        }
      } catch (error) {
        console.error("Error:", error);
      }
    });
}
