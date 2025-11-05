import {
  renderConfirmedPopup,
  showPopup,
  cancelAction,
} from "../../components/confirmPopUp";
import Card from "../../components/reviewcard";
import { reviews } from "../../Lists.js";
import { createButton } from "../../components/button.js";

export default function home() {
  const home = document.createElement("div");
  home.classList.add("home", "flex", "items-center", "flex-col", "bg-light-blue", "p-standard", "rounded-standard", "drop-shadow-standard", "self-center", "w-[90vw]", "max-w-[1200px]", "h-[70vh]", "overflow-y-auto", "overflow-x-hidden", "scrollbar");
  home.innerHTML = `
      <br>
      <button onClick="location.href='book'">Boka</button>
      <br> 
      <div class="cta-slot"></div>

      <section class='testimonials flex flex-col items-center max-w-[100%]'>
      <h2 class="text-sm">Hör vad våra nöjda kunder har att säga!</h2>
      <br>
      </section>
    `;
  
  const carouselContainer = document.createElement("div");
  carouselContainer.classList.add(
    "carousel-container", "w-5/6", "px-10", "[mask-image:linear-gradient(to_right,_transparent,_black_6%,_black_94%,_transparent)]" 
  );
  const carouselTrack = document.createElement("div");
  carouselTrack.classList.add(
    "carousel-track", "inline-flex", "animate-[carouselAnimation_30s_linear_infinite_alternate-reverse]", "relative", "*:m-[10px]", "*:rounded-2xl"
  );
  
  let count = 0;
  
  reviews.forEach((review) => {
    if (review.rating == 5 && count < 7) {
      const card = Card(review);
      carouselTrack.append(card);
      count++;
    }
  });
  
  
  home.querySelector(".testimonials").append(carouselContainer);
  home.querySelector(".carousel-container").append(carouselTrack);
  
  return home;
}
