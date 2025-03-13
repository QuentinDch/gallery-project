// dateUtils.js

const yearElement = document.getElementById("year");

export function initializeFooterDate() {
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}
