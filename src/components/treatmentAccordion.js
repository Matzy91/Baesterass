import { makeIcon } from "./icon";
import iconList from "./icon";

export default function AccordionItem({ title, items }) {
  const item = document.createElement("div");
  item.classList.add(
    "accordion-item",
    "border-b",
    "last:border-b-0",
    "first:rounded-t-md",
    "last:rounded-b-md",
    "overflow-hidden",
  );

  const header = document.createElement("div");
  header.classList.add(
    "accordion-header",
    "flex",
    "gap-2",

    "justify-between",
    "p-5",
    "hover:bg-[var(--color-light-orange)]",
  );
  const h3 = document.createElement("h3");
  h3.classList.add("font-bold");
  const expandIcon = makeIcon("down", 25, 25);
  expandIcon.classList.add("accordion-icon");
  h3.textContent = title;

  header.append(h3, expandIcon);

  const content = document.createElement("div");
  content.classList.add(
    "accordion-content",
    "hidden",
    "p-5",
    "gap-4",
    "flex-col",
    "bg-[var(--color-light-white)]",
  );

  items.forEach((treatment) => {
    const div = document.createElement("div");
    div.classList.add("treatment-item");
    const nameP = document.createElement("p");
    nameP.innerHTML = `<a href="/book" class="font-extrabold">${treatment.name}</a>`;

    const costP = document.createElement("p");
    const localizedCost = Number(treatment.cost);
    costP.textContent = `Från ${localizedCost.toLocaleString("sv-SE")} SEK`;
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
      .forEach((img) => (img.src = iconList.down));

    if (!isOpen) {
      content.classList.add("active");

      expandIcon.src = iconList.up;
    } else {
      content.classList.remove("active");
      expandIcon.src = iconList.down;
    }
  });

  item.append(header, content);

  return item;
}
