export function initAccordion() {
  const faqList = document.querySelector(".faq-section__list");
  const template = document.getElementById("accordion-template");

  const data = [
    {
      title: "What type of photography do you specialize in?",
      content:
        "I specialize in still life photography, capturing the essence of objects, light, and textures in a unique and personal way.",
    },
    {
      title: "Can I order a print of your photos?",
      content:
        "Yes, limited edition prints are available. Feel free to contact me to discuss formats and printing options.",
    },
    {
      title: "Do you accept commissions for specific projects?",
      content:
        "Yes, I collaborate with brands and individuals on custom projects. Reach out to discuss your ideas.",
    },
    {
      title: "How can I contact you for a collaboration?",
      content:
        "You can reach me through the Spectral agency via email at hello@spectraldiscovery.co.uk or by phone at +44 131 555 6789.",
    },
  ];

  if (!faqList || !template) return;

  data.forEach((item, index) => {
    const clone = template.content.cloneNode(true);
    const button = clone.querySelector(".accordion__button");
    const title = clone.querySelector(".accordion__title");
    const content = clone.querySelector(".accordion__content");
    const paragraph = clone.querySelector("p");

    title.textContent = item.title;
    paragraph.textContent = item.content;

    button.setAttribute("aria-controls", `accordion-content-${index + 1}`);
    content.setAttribute("id", `accordion-content-${index + 1}`);

    faqList.appendChild(clone);
  });

  const accordions = document.querySelectorAll(".accordion__button");

  function closeAllAccordions() {
    accordions.forEach((btn) => {
      btn.setAttribute("aria-expanded", "false");
      btn.nextElementSibling.style.height = "0px";
      btn.querySelector(".accordion__icon").classList.remove("rotated");

      const openLabel = btn.querySelector(".accordion__info--open");
      const closeLabel = btn.querySelector(".accordion__info--close");

      if (openLabel && closeLabel) {
        openLabel.style.clipPath = "inset(0% 0% -10% 0%)";
        closeLabel.style.clipPath = "inset(110% 0% 0% 0%)";
      }
    });
  }

  function toggleAccordion(button, content) {
    const isExpanded = button.getAttribute("aria-expanded") === "true";
    const openLabel = button.querySelector(".accordion__info--open");
    const closeLabel = button.querySelector(".accordion__info--close");

    closeAllAccordions();

    if (!isExpanded) {
      button.setAttribute("aria-expanded", "true");
      content.style.height = `${content.scrollHeight}px`;
      button.querySelector(".accordion__icon").classList.add("rotated");

      if (openLabel && closeLabel) {
        openLabel.style.clipPath = "inset(0% 0% 110% 0%)";
        closeLabel.style.clipPath = "inset(0% 0% -10% 0%)";
      }
    }
  }

  accordions.forEach((button, index) => {
    const content = document.getElementById(`accordion-content-${index + 1}`);

    button.addEventListener("click", () => {
      toggleAccordion(button, content);
    });
  });
}
