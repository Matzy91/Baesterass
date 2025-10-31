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
  home.classList.add("home");
  home.innerHTML = `

      <p>this is not a footer this is home
      <br>
      <a href="">Länk</a></p>
      <button onclick="showPopup()" class="bg-blue-600 text-white px-4 py-2 rounded-lg">
      Visa popup
      </button>

      <div class="cta-slot"></div>

      <section class='testimonials'>
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

  home.querySelector(".testimonials").append(reviewContainer);

  return home;
}
