import {
  renderConfirmedPopup,
  showPopup,
  cancelAction,
} from "../../components/confirmPopUp";
import Card from "../../components/reviewcard";
import { reviews } from "../../Lists.js";
import { iconHTML } from "../../components/icon.js";
import { createButton } from "../../components/button.js";

export default function home() {
  const home = document.createElement("div");
  home.classList.add("home");
  home.innerHTML = `
      <div class="bg-white/75 flex items-center flex-col p-7 rounded-standard">
    <p class="text-lg text-center font-medium">Välkommen till <span class="font-one font-extrabold uppercase">Washbear Spa</span>, vårt avslappnade paradis i Björnlunda, precis utanför Gnesta.<br>
        <span class="text-base">Varför inte boka din spa-upplevelse hos oss redan idag!</span>
    </p>
    <div class="mt-[5px]">
        <img src="/src/pictures/Spa-raccoon3.png" class="w-[250px] rounded-standard drop-shadow-standard float-right ml-[15px] bg-dark-green p-[10px]" alt="En avslappnad tvättbjörn i handduk"></img>
        <p>
            <span class="font-medium">Här på</span> <span class="font-one font-extrabold uppercase">Washbear Spa</span> går tiden i sin egna, lunkande takt. Vi tar din avslappning och välbefinnande på obekymrat allvar, och brinner för att du ska få den upplevelse och behandling som passar just <i>dig</i>.
        </p>
        <div class="mt-[5px]">
        <img src="/src/pictures/Spa-raccoon1.jpg" class="w-[350px] rounded-standard drop-shadow-standard float-right object-cover bg-dark-orange p-[10px] ml-[15px]" alt="En tvättbjörn som tvättar sig">
        <p class="mt-[13px]">
            <a href="/staff" class="font-medium">Vår kunniga och erfarna personal</a> ser till att du hamnar i rätt vårdande händer för din relaxupplevelse. Varför inte ta en titt på <a href="/treatments">vårt utbud av behandlingar</a>?
        </p>    
        
            <span class="font-medium">Vi erbjuder en mängd</span> olika upplevelser; tillgängliga för individer, par eller större grupper. Klicka på någon av ikonerna nedan för att läsa mer!
        </div>
        <div class="menuContainer flex flex-inline max-w-[fit-content] justify-self-center m-[5px] [&>*]:m-[10px]">
        </div>
    </div>
</div>
<button onClick="location.href='book'" class="frontCTA m-standard text-xl">Boka nu!</button>

<section class='testimonials flex flex-col items-center max-w-[100%] ml-[20px] mr-[20px] mb-[20px]'>
    <p class="text-sm m-1">Hör vad våra nöjda kunder har att säga!</p>
</section>
    `;
  
  // <img src="/src/pictures/Spa-raccoon1.jpg" class="w-[350px] rounded-standard drop-shadow-standard float-right object-cover border border-black" alt="En tvättbjörn som tvättar sig">
  // // 
  
  const carouselContainer = document.createElement("div");
  carouselContainer.classList.add(
    "carousel-container", "w-7/8", "[mask-image:linear-gradient(to_right,_transparent,_black_6%,_black_94%,_transparent)]" 
  );
  const carouselTrack = document.createElement("div");
  carouselTrack.classList.add(
    "carousel-track", "inline-flex", "animate-[carouselAnimation_30s_linear_infinite_alternate-reverse]", "relative", "*:m-[5px]", "*:rounded-2xl"
  );
  
  let count = 0;
  
  reviews.forEach((review) => {
    const card = Card(review);
    reviewContainer.append(card);
  });

  home.querySelector(".testimonials").append(reviewContainer);
  document.body.insertAdjacentHTML("beforeend", iconHTML);

  return home;
}
