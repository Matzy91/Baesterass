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
  home.classList.add("home", "flex", "items-center", "flex-col", "overflow-hidden");
  home.innerHTML = `
      <br>
      <h1 class="font-poiret">Washbear Spa</h1>
      <h5 class="text-blue-600">Where dirt goes to die...</h5>
      <br>
      <a href="/book"><button class="bg-blue-600 text-black px-4 py-2 rounded-lg">Boka</button></a>
      <br>
      <button onclick="showPopup()" class="bg-blue-600 text-black px-4 py-2 rounded-lg">
      Visa popup
      </button>
      <br> 
      <div class="cta-slot"></div>
      <br>
  
      <section class='testimonials flex flex-col items-center'>
      <h2>Testimonials</h2>
  
      </section>
  
     <label for="date" class="block text-sm font-medium text-gray-700 mb-1">Välj datum</label>
     <input type="date" id="date" name="date" class="border border-gray-300 rounded-lg px-3 py-2 w-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
    `;
  // 2) Skapa knappen
  const cta = createButton({
    label: "Ok!", // valfri text
    labelPrimary: "Boka tid", // valfri text för primary(grön) OM toggleOnClick är true
    labelSecondary: "Avbryt", // valfri text för secondary(röd) OM toggleOnClick är true
    variant: "primary", // "primary" | "cancel"
    toggleOnClick: true, // växla variant vid klick OM TRUE
    onClick: () => console.log("Knappen klickades"), // valfri onClick-funktion, mest för att logga i konsolen eller skicka vidare data
  });
  
  // 3) Append den i sloten
  home.querySelector(".cta-slot").append(cta);
  
  // (din befintliga kod)
  // renderConfirmedPopup();
  // ... bygg reviewContainer osv, MEN gör append efter innerHTML (vilket du redan gör)
  
  renderConfirmedPopup();
  
  const carouselContainer = document.createElement("div");
  carouselContainer.classList.add(
    "carousel-container", "max-w-7xl", "w-5/6", "px-10", "[mask-image:linear-gradient(to_right,_transparent,_black_6%,_black_94%,_transparent)]" 
  );
  const carouselTrack = document.createElement("div");
  carouselTrack.classList.add(
    "carousel-track", "inline-flex", "animate-[carouselAnimation_30s_linear_infinite_alternate-reverse]", "relative", "*:m-[10px]", "*:rounded-2xl"
  );
  
  let count = 0;

  reviews.forEach((review) => {
    if (review.rating >= 4 && count < 5) {
      const card = Card(review);
      carouselTrack.append(card);
      count++;
    }
  });
  
  
  home.querySelector(".testimonials").append(carouselContainer);
  home.querySelector(".carousel-container").append(carouselTrack);
  
  return home;
}
