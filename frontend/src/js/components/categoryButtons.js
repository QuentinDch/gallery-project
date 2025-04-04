// Fonction pour récupérer les catégories depuis l'API
export async function fetchCategories() {
  try {
    const response = await fetch("http://localhost:5000/api/categories");
    const categories = await response.json();

    // Une fois les catégories récupérées, générer les boutons
    renderCategoryButtons(categories);
  } catch (error) {
    console.error("Erreur lors de la récupération des catégories:", error);
  }
}

// Fonction pour générer les boutons de filtre
function renderCategoryButtons(categories) {
  const filterContainer = document.querySelector(".filter-options");

  // Parcourir toutes les catégories et créer un bouton pour chacune
  categories.forEach((category, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "filter-options-btn"; // Même classe que le bouton "All"
    button.id = (index + 1).toString(); // ID séquentiel commençant à 1
    button.setAttribute("aria-pressed", "false");
    button.setAttribute("aria-label", `Show ${category.title} items`);
    button.setAttribute(
      "data-filter",
      category.slug || category.title.toLowerCase()
    );

    const span = document.createElement("span");
    span.textContent = category.title;

    button.appendChild(span);
    filterContainer.appendChild(button); // Ajoute directement à la suite des éléments existants
  });

  // Mettre en place le système de filtrage
  setupFilterButtons();
  activateAllButton();
}

// Configuration du système de filtrage
function setupFilterButtons() {
  const allButtons = document.querySelectorAll(".filter-options-btn");

  allButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Désactiver tous les boutons
      allButtons.forEach((btn) => {
        btn.classList.remove("active");
        btn.setAttribute("aria-pressed", "false");
      });

      // Activer le bouton cliqué
      this.classList.add("active");
      this.setAttribute("aria-pressed", "true");

      // Filtrer les projets selon la catégorie
      const filter = this.getAttribute("data-filter");
      filterProjects(filter);
    });
  });
}

// Activer le bouton "All" par défaut
function activateAllButton() {
  const allButton = document.querySelector('[data-filter="all"]');
  if (allButton) {
    allButton.classList.add("active");
    allButton.setAttribute("aria-pressed", "true");
  }
}

// Filtrer les projets selon la catégorie
// function filterProjects(category) {
//   const projects = document.querySelectorAll(".project-item"); // Ajustez selon votre classe

//   projects.forEach((project) => {
//     if (category === "all") {
//       project.style.display = "block"; // Ou flex/grid selon votre layout
//     } else {
//       const projectCategories =
//         project.getAttribute("data-categories")?.split(",") || [];
//       if (projectCategories.includes(category)) {
//         project.style.display = "block";
//       } else {
//         project.style.display = "none";
//       }
//     }
//   });
// }
