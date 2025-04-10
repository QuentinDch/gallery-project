// Fonction pour récupérer les projets
export async function fetchProjects() {
  try {
    const response = await fetch("http://localhost:5000/api/projects");
    const projects = await response.json();
    renderProjects(projects);
  } catch (error) {
    console.error("Error fetching gallery data:", error.message);
  }
}

// Fonction pour afficher les projets
function renderProjects(projects) {
  const projectContainer = document.querySelector(".archives");
  projectContainer.innerHTML = "";

  projects.forEach((project) => {
    console.log(project);
    console.log("Project:", project);
    console.log("Category:", project.category);
    const projectElement = document.createElement("div");
    projectElement.className = "project";

    // Attribut data-category (simple string ici)
    projectElement.setAttribute(
      "data-category",
      project.category?._id || "Uncategorized"
    );

    // Création de l'image
    const img = document.createElement("img");
    img.src = project.image;
    img.alt = project.title;

    // Création de l'élément info
    const infoProjectElement = document.createElement("div");
    infoProjectElement.className = "info-project";

    const title = document.createElement("p");
    title.className = "title";
    title.textContent = project.title;

    const category = document.createElement("p");
    category.className = "category";
    category.textContent = project.category?.title || "Uncategorized";

    const year = document.createElement("p");
    year.className = "year";
    year.textContent = project.year;

    // Construction de la structure
    infoProjectElement.appendChild(title);
    infoProjectElement.appendChild(category);
    infoProjectElement.appendChild(year);

    projectElement.appendChild(img);
    projectElement.appendChild(infoProjectElement);

    projectContainer.appendChild(projectElement);
  });
}
