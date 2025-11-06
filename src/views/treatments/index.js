import { treatmentTypes } from "../../Lists";
import { treatmentList } from "../../Lists";
import AccordionItem from "../../components/treatmentAccordion.js";

export default function treatments() {
  const treatments = document.createElement("main");
  treatments.classList.add("treatments","flex", "flex-col", "bg-light-blue", "p-standard", "rounded-standard", "drop-shadow-standard", "self-center", "w-[90vw]", "max-w-[1200px]", "h-[70vh]", "overflow-y-auto", "overflow-x-hidden", "scrollbar", "items-center");
  treatments.innerHTML = `
    <h1 class='font-one text-center pb-1'>Behandlingar</h1>
     <br>
    <p>Utforska vårt utbud av behandlingar här på <span class="font-one font-extrabold uppercase">Washbear Spa</span>.</p>
  `;
  let CTAcontainer = document.createElement("div");
  CTAcontainer.innerHTML = `<button onClick="location.href='book'" class="frontCTA m-standard text-xl">Boka nu!</button>`;
  treatments.append(CTAcontainer);

  const accordion = document.createElement("article");
  accordion.classList.add("accordion", 'bg-blue-100', 'rounded-md', 'm-2', 'w-full');
  treatments.append(accordion);
  
  treatmentTypes.forEach((type) => {
    const filtered = treatmentList.filter((treatment) => {
      const types = Array.isArray(treatment.type)
      ? treatment.type
      : [treatment.type];
      return types.includes(type);
    });
    
    if (filtered.length > 0) {
      const accordionItem = AccordionItem({ title: type, items: filtered });
      accordion.append(accordionItem);
    }
  });
  
  
  // i slutändan returneras elementet som skapades med document.createElement("div")
  return treatments;
}
