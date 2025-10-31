import { reviews } from "../../Lists";
import Card from "../../components/reviewcard";

export default function testimonials() {
  const testimonials = document.createElement("main");
  testimonials.classList.add("testimonials");
  testimonials.innerHTML = `
    <h1>Testimonials</h1>
    <h2>Catchy heading</h2>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro obcaecati nesciunt minima omnis aliquam, temporibus facere alias unde sint rerum sunt sequi autem incidunt mollitia eaque vitae necessitatibus officia at?
    </p>

  `;

  const reviewContainer = document.createElement("div");
  reviewContainer.classList.add(
    "container",
    "grid",
    "grid-cols-1",
    "gap-2",
    "sm:grid-cols-2",
    "lg:grid-cols-3",
    "xl:grid-cols-4",
  );

  reviews.forEach((review) => {
    const card = Card(review);
    reviewContainer.append(card);
  });

  testimonials.append(reviewContainer);

  // i slutändan returneras elementet som skapades med document.createElement("div")
  return testimonials;
}
