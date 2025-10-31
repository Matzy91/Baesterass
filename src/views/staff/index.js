import Card from "../../components/staffcards";
import { staffList } from "../../Lists";

export default function staffView() {
  const container = document.createElement("div");
  container.classList.add("grid", "grid-cols-1", "md:grid-cols-2", "gap-6", "p-6");

  staffList.forEach((staff) => {
    const treatments = `Behandlingar: ${staff.treatmentTypes.join(", ")}`;
    const availability = `Tillgänglig: ${staff.availability.join(", ")}`;

    const card = Card({
      name: staff.name,
      treatments: treatments,
      availability: availability,
      imageLink: staff.imageLink,
    });

    container.appendChild(card);
  });

  return container;
}