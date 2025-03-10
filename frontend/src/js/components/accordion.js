// accordion.js

export function initAccordion() {
  const faqList = document.querySelector(".faq-section__list");
  const template = document.getElementById("accordion-template");

  const data = [
    {
      title: "Lorem, ipsum.",
      content: "Lorem ipsum dolor sit amet.",
    },
    {
      title: "Lorem, ipsum.",
      content: "Consectetur adipiscing elit.",
    },
    {
      title: "Lorem, ipsum.",
      content: "Sed do eiusmod tempor incididunt.",
    },
    {
      title: "Lorem, ipsum.",
      content: "Consectetur adipiscing elit. Sed do eiusmod tempor incididunt.",
    },
  ];

  if (!faqList || !template) return;

  data.forEach((item, index) => {
    const clone = template.content.cloneNode(true);
    const button = clone.querySelector(".accordion__button");
    const title = clone.querySelector(".accordion__title");
    const content = clone.querySelector(".accordion__content");
    const paragraph = clone.querySelector("p");
    const icon = clone.querySelector(".accordion__icon");

    title.textContent = item.title;
    paragraph.textContent = item.content;

    button.setAttribute("aria-controls", `accordion-content-${index + 1}`);
    content.setAttribute("id", `accordion-content-${index + 1}`);

    faqList.appendChild(clone);
  });

  const accordions = document.querySelectorAll(".accordion__button");

  accordions.forEach((button, index) => {
    const content = document.getElementById(`accordion-content-${index + 1}`);
    const icon = button.querySelector(".accordion__icon");

    button.addEventListener("click", () => {
      const isExpanded = button.getAttribute("aria-expanded") === "true";

      document.querySelectorAll(".accordion__button").forEach((btn) => {
        btn.setAttribute("aria-expanded", "false");
        btn.querySelector(".accordion__icon").style.transform = "rotate(0deg)";
      });

      document.querySelectorAll(".accordion__content").forEach((cont) => {
        cont.style.height = "0px";
      });

      if (!isExpanded) {
        button.setAttribute("aria-expanded", "true");
        content.style.height = `${content.scrollHeight}px`;
        icon.style.transform = "rotate(180deg)";
      }
    });
  });
}
