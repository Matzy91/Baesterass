import { treatmentTypes } from "../../Lists";
import { treatmentList } from "../../Lists";
import AccordionItem from "../../components/treatmentAccordion.js";

export default function treatments() {
  const treatments = document.createElement("main");
  treatments.classList.add("treatments");
  treatments.innerHTML = `
    <h2>Behandlingar</h2>
  `;

  const accordion = document.createElement("article");
  accordion.classList.add("accordion");
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
