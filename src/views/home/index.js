import { renderConfirmedPopup , showPopup, cancelAction} from "../../components/confirmPopUp"; 
import Card from "../../components/reviewcard";
import { reviews } from "../../Lists.js";
import { iconHTML } from "../../components/icon.js";
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
    label: "Boka tid",             // valfri text
    variant: "primary",            // "primary" | "cancel"
    onClick: () => console.log("Knappen klickades"),
  });

  // 3) Append den i sloten
  home.querySelector(".cta-slot").append(cta);

  // (din befintliga kod)
  // renderConfirmedPopup();
  // ... bygg reviewContainer osv, MEN gör append efter innerHTML (vilket du redan gör)

    
  renderConfirmedPopup();
  
  const reviewContainer = document.createElement('div')
  reviewContainer.classList.add('review-container', 'flex', 'flex-wrap')
  
  reviews.forEach(review => {
    const card = Card(review)
    reviewContainer.append(card)
    
  });
  
  
  home.querySelector('.testimonials').append(reviewContainer);
  document.body.insertAdjacentHTML("beforeend", iconHTML);
  
  
  return home;
}