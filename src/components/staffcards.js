import { makeIcon } from "../components/icon.js";

export default function Card({ name, treatments, availability, imageLink, information }) {
  const card = document.createElement("div");
  card.classList.add(
    "card", 
    "flex", 
    "flex-col", 
    "gap-2",
    "h-[320px]",
    "bg-amber-50", 
    "p-standard", 
    "rounded-2xl",
    "hover:bg-amber-100",
    "drop-shadow-standard",
    "group",
    "hover:[&>*:not(:last-child)]:opacity-0",
    "hover:[&>*:last-child]:opacity-100",
    "w-auto",
    "transition-all",
    "hover:-rotate-y-180",
    "cardFlip",
    "duration-1200"
  );
  
  const avatar = document.createElement("img");
  avatar.src = imageLink;
  avatar.alt = `${name}'s avatar`;
  avatar.classList.add(
    "rounded-full",
    "aspect-square",
    "h-24",
    "w-24",
    "object-cover"
  );
  
  const staff = document.createElement("div");
  staff.classList.add(
    "flex", 
    "gap-4", 
    "items-center",
    "mb-2"
  );
  
  const nameEl = document.createElement("h3");
  nameEl.textContent = name;
  nameEl.classList.add("text-xl", "font-bold", "font-one");
  
  const treatmentsContainer = document.createElement("div");
  treatmentsContainer.classList.add("flex", "flex-col", "gap-1");
  
  const treatmentsTitle = document.createElement("p");
  treatmentsTitle.textContent = "Specialområde:";
  treatmentsTitle.classList.add("text-sm", "font-semibold");
  treatmentsContainer.appendChild(treatmentsTitle);
  
  const treatmentsList = document.createElement("ul");
  treatmentsList.classList.add("list-disc", "pl-5");
  
  treatments.forEach(treatment => {
    const li = document.createElement("li");
    li.textContent = treatment;
    treatmentsList.appendChild(li);
  });
  treatmentsContainer.appendChild(treatmentsList);
  
  const availabilityContainer = document.createElement("div");
  availabilityContainer.classList.add("flex", "flex-col");
  
  const availabilityTitle = document.createElement("p");
  availabilityTitle.textContent = "Tillgänglig:";
  availabilityTitle.classList.add("text-sm", "font-semibold");
  
  const availabilityText = document.createElement("li");
  availabilityText.textContent = availability.join(", ");
  availabilityText.classList.add("text-sm", "pl-5", "list-none");
  
  availabilityContainer.appendChild(availabilityTitle);
  availabilityContainer.appendChild(availabilityText);
  
  const backPage = document.createElement("div");
  const infoText = document.createElement("p");
  infoText.classList.add("text-justify");
  
  let infoArray = information.split(" ");
  let firstWord = infoArray.shift();
  firstWord = firstWord.toUpperCase();
  const firstWordElement = document.createElement("span");
  firstWordElement.innerText = firstWord;
  firstWordElement.classList.add("font-bold");
  information = infoArray.join(" ");
  
  infoText.textContent = " " + information;
  infoText.prepend(firstWordElement);
  
  const flipIcon = makeIcon("raccoon", 25, 25);
  flipIcon.classList.add("self-end", "justify-self-end");
  
  backPage.appendChild(infoText);
  backPage.appendChild(flipIcon);
  backPage.classList.add("group-hover:flex", "opacity-0", "flex-col", "h-[90%]", "justify-between", "absolute", "w-[90%]", "self-center", "transition-all", "p-[10px]", "-rotate-y-180");
  
  staff.appendChild(avatar);
  staff.appendChild(nameEl);
  
  card.appendChild(staff);
  card.appendChild(treatmentsContainer);
  card.appendChild(availabilityContainer);
  card.appendChild(backPage)
  
  return card;
}