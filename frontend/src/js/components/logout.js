// logoutUser.js

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
          window.location.href = "/login.html";
        }
      } catch (error) {
        console.error("Error:", error);
      }
    });
}
