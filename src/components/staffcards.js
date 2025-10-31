export default function Card({ name, treatments, availability, imageLink }) {
  const card = document.createElement("div");
  card.classList.add("card", "flex", "flex-col", "gap-4", "bg-orange-400", "p-4", "rounded");

  const avatar = document.createElement("img");
  avatar.src = imageLink;
  avatar.alt = `${name}'s avatar`;
  avatar.classList.add(
    "rounded-full",
    "aspect-square",
    "h-14",
    "w-14",
    "object-cover"
  );

  const staff = document.createElement("div");
  staff.classList.add("flex", "gap-4", "items-center");

  const nameEl = document.createElement("h3");
  nameEl.textContent = name;
  nameEl.classList.add("text-lg", "font-bold");

  const treatmentsEl = document.createElement("p");
  treatmentsEl.textContent = treatments;
  treatmentsEl.classList.add("text-sm");

  const availEl = document.createElement("p");
  availEl.textContent = availability;
  availEl.classList.add("text-sm");

  staff.appendChild(avatar);
  staff.appendChild(nameEl);

  card.appendChild(staff);
  card.appendChild(treatmentsEl);
  card.appendChild(availEl);

  return card;
}