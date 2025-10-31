import { makeIcon } from "./icon";

export default function AccordionItem({ title, items }) {
  const item = document.createElement("div");
  item.classList.add("accordion-item");

  const header = document.createElement("div");
  header.classList.add("accordion-header", "flex", "gap-2", "border-b");
  const h3 = document.createElement("h3");
  const expandIcon = makeIcon("right", 25, 25);
  expandIcon.classList.add("accordion-icon");
  h3.textContent = title;

  header.append(h3, expandIcon);

  const content = document.createElement("div");
  content.classList.add("accordion-content", "border-b");

  items.forEach((treatment) => {
    const div = document.createElement("div");
    div.classList.add("treatment-item");
    const nameP = document.createElement("p");
    nameP.textContent = treatment.name;

    const costP = document.createElement("p");
    costP.textContent = `Från ${treatment.cost} SEK`;

    div.append(nameP, costP);

    content.appendChild(div);
  });

  header.addEventListener("click", () => {
    const isOpen = content.classList.contains("active");
    document
      .querySelectorAll(".accordion-content")
      .forEach((el) => el.classList.remove("active"));

    document
      .querySelectorAll(".accordion-icon")
      .forEach((icon) => icon.classList.remove("open"));

    if (!isOpen) {
      content.classList.add("active");

      expandIcon.classList.add("open");
    } else {
      content.classList.remove("active");

      expandIcon.classList.remove("open");
    }
  });

  item.append(header, content);

  return item;
}
