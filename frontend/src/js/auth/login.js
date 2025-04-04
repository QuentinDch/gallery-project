// loginUser.js

import { setAuthButtonState } from "./setAuthButtonState";
import { closeMenu } from "../features/menuToggler";
import { displayEditionBanner } from "../features/editionBanner";

export function loginUser() {
  const loginForm = document.getElementById("login-form");

  loginForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const inputs = {
      email: document.getElementById("email"),
      password: document.getElementById("password"),
    };
    const rememberMe = document.getElementById("remember-me").checked;

    let hasError = false;

    // Validation des champs obligatoires
    Object.values(inputs).forEach((input) => {
      removeRequiredFieldMessage(input);
      if (!input.value.trim()) {
        showRequiredFieldMessage(input);
        hasError = true;
      }
    });

    if (hasError) return;

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: inputs.email.value,
          password: inputs.password.value,
          rememberMe,
        }),
        credentials: "include",
      });

      const data = await response.json();

      if (response.ok) {
        setAuthButtonState();
        closeMenu();
        displayEditionBanner();
      }
    } catch (error) {
      console.error(error);
    }
  });
}

function showRequiredFieldMessage(input) {
  const fieldContainer = input.closest(".auth-form__field");

  if (fieldContainer.querySelector(".auth-form__field--required")) return;

  const errorDiv = document.createElement("div");
  errorDiv.classList.add("auth-form__field--required");

  const message = document.createElement("span");
  message.textContent = "This field is required";

  errorDiv.appendChild(message);
  fieldContainer.appendChild(errorDiv);
}

function removeRequiredFieldMessage(input) {
  const fieldContainer = input.closest(".auth-form__field");
  const errorDiv = fieldContainer?.querySelector(".auth-form__field--required");

  if (errorDiv) errorDiv.remove();
}
