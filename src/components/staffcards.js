export default function Card({ name, treatments, availability, imageLink }) {
  const card = document.createElement("div");
  card.classList.add("card", "flex", "flex-col", "gap-4", "bg-amber-50", "p-standard", "rounded-2xl");

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

  const treatmentsContainer = document.createElement("div");
  treatmentsContainer.classList.add("flex", "flex-col", "gap-1");
  
  const treatmentsTitle = document.createElement("p");
  treatmentsTitle.textContent = "Specialområde:";
  treatmentsTitle.classList.add("text-sm", "font-semibold");
  treatmentsContainer.appendChild(treatmentsTitle);

  const treatmentsList = document.createElement("ul");
  treatmentsList.classList.add("list-disc", "pl-5", "text-sm");
  
  treatments.forEach(treatment => {
    const li = document.createElement("li");
    li.textContent = treatment;
    treatmentsList.appendChild(li);
  });
  treatmentsContainer.appendChild(treatmentsList);

  const availEl = document.createElement("p");
  availEl.textContent = availability;
  availEl.classList.add("text-sm");

  staff.appendChild(avatar);
  staff.appendChild(nameEl);

  card.appendChild(staff);
  card.appendChild(treatmentsContainer);
  card.appendChild(availEl);

  return card;
}