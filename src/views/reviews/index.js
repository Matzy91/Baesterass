import { reviews } from "../../Lists";
import Card from "../../components/reviewcard";

export default function testimonials() {
  const testimonials = document.createElement("main");
  testimonials.classList.add("Recenssioner", "flex", "items-center", "flex-col", "bg-light-blue", "p-standard", "rounded-standard", "drop-shadow-standard", "self-center", "w-[90vw]", "max-w-[1200px]", "h-[70vh]", "overflow-y-auto", "overflow-x-hidden", "scrollbar");
  testimonials.innerHTML = `
    <h1 class="font-one">Recensioner</h1>
    <h2>Vi vill alltid att du ska gå ut med ett leende!</h2>
    <p>
        Kolla hur nöjda våra kunder är!
    </p>

  `;

  const reviewContainer = document.createElement("div");
  reviewContainer.classList.add(
    "grid",
    "grid-cols-1",
    "gap-4",
    "sm:grid-cols-2",
    "lg:grid-cols-3",
  );

  reviews.forEach((review) => {
    const card = Card(review);
    reviewContainer.append(card);
  });

  testimonials.append(reviewContainer);

  // i slutändan returneras elementet som skapades med document.createElement("div")
  return testimonials;
}
