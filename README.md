# 🤖 JavaScript i praktiken - Simple SPA (Single page application)

I denna uppgift kommer ni att bygga en modulär webbapplikation bundlad med [Vite](https://vite.dev/). En s.k. "single page application". Den kommer innehålla flera olika sidor, vyer och komponenter, men så vitt webbläsaren vet kommer allt renderas på en och samma webbsida.

**Det är starkt rekommenderat att göra uppgiften i grupp** där ni kan ta hjälp av varandras idéer och kunskaper.

## 👨‍💻 Förberedelser

1 - Skapa själva projektet med Vite. Du kan följa [guiden på vite.dev](https://vite.dev/guide/#scaffolding-your-first-vite-project) eller helt enkelt skriva `npm create vite@latest appens-namn -- --template vanilla` i terminalen

- Ändra `appens-namn`till det du vill att din mapp och ditt projekt ska heta
- `--template vanilla` innebär att vi bara kommer jobba med JavaScript utan några ramverk. S.k. "vanilla JavaScript".

2 - Installera dependencies med `npm i` och kör `npm run dev` för att spinna upp en lokal devmiljö. Ofta får man frågan om man vill att detta ska göras automatiskt under installationsprocessen med Vite.

- Kika på koden som redan finns skapad i `index.html` och `main.js` för att få en uppfattning om var allting renderas i slutändan. `main.js` borde hämta in alla dina moduler och rendera dem inuti `<div class="app" id="app"></div>`.

3 - Skapa en mappstruktur inuti `/src` där statiska views, dynamiska views och components ligger separerade. Exempelvis:

```bash
src/
┣ assets/
┣ components/
┣ views/
┣   about/
┣       index.js
┣       style.css
┣   static/
┣       footer/
┣           index.html
┣           style.css
```

### Views & components

De större delarna av en app kallas för "views". Det kan röra sig om header, footer, sidebar eller liknande. Inuti views brukar man ha "pages" och "components". "Pages" är de olika "sidorna" användaren kan gå in på medan "components" är de mindre delarna av appen - Exempelvis knappar, inputs och andra återanvändbara småmoduler. I ett småskaligt projekt är det inte alltid nödvändigt att skilja på "views" och "pages". Välj den lösningen som blir smidigast och lättast att navigera sig igenom.

- "Static views" är ren HTML utan någon interaktivitet
  - De importeras till `main.js`med hjälp av "raw"-flaggan i Vite. Exempelvis `import headerHTML from "./views/static/header/index.html?raw";`
- "Dynamic views" är interaktiva vyer i form av `.js`-filer. Här kan du blanda JavaScript och HTML i en och samma modul.
- "Components" ska vara "stateless", det vill säga de ska inte innehålla någon logik eller dynamisk data som bara hör till en specifik del av appen. Istället ska den kunna ta emot olika properties och återanvändas för olika ändamål. Exempelvis en knapp som tar emot olika knapptexter och callback-funktoner att använda vid click events.

5 - Nu har du allt du behöver för att bygga din första JavaScript-app!

6 - Ändra löpande koden i `main.js`för att importera och rendera dina filer. Följ exemplet nedan:

```js
import "./style.css";

// statiska sidor
// måste referera till den specifika .html-filen pga "?raw"-suffixet
import headerHTML from "./views/static/header/index.html?raw";
import homeHTML from "./views/static/home/index.html?raw";
import contactHTML from "./views/static/contact/index.html?raw";

// dynamiska sidor
// behöver bara referera till mappen om filen heter index.js.
// filer med det namnet laddas automatiskt
import about from "./views/about";
import footer from "./views/footer";
import { setRenderCallback } from "./store";

// en funktion för att rendera olika sidor baserat på webbläsarens "path"
// för att ändra pathen kan du t.ex. skapa en anchor tag med href="/home"
// "/home" kommer då att läggas till i url:en
const getCurrentPage = () => {
  const currentPage = window.location.pathname;

  switch (currentPage) {
    case "/home":
      return homeHTML;
    case "/about":
      return about();
    case "/contact":
      return contactHTML;
    default:
      return (window.location.pathname = "/home");
  }
};

const app = document.querySelector("#app");

// funktionen som renderar appen. kommer behöva köras om varje gång sidan ska omrenderas
// detta är grunden i hur man gör statiska html-sidor till interaktiva applikationer
const renderApp = () => {
  const currentPage = getCurrentPage();

  if (typeof currentPage === "string") {
    app.innerHTML = `
      ${headerHTML}
      ${currentPage}
      ${footer()}
    `;
  } else {
    app.innerHTML = `
        ${headerHTML}
        ${footer()}
        `;
    // footer är en js-fil som returnerar en template string med html-element.
    // ett mellanting mellan statisk och dynamisk

    // currentPage är i det här fallet ett objekt innehållande HTML-element
    // något i stil med document.createElement("div")
    app.insertBefore(currentPage, app.querySelector("footer"));
  }
};

// initial render
renderApp();

//rerender logic
// en eventListner som lyssnar på ändringar i URL:ens historik
window.addEventListener("popstate", renderApp);
```

## 🖼️ Exempel på filer

### Statisk HTML-fil

Helt vanlig HTML-syntax, minus `<head>` och `<body>` då vi jobbar med en SPA och allt sånt redan skapas i `index.html` i projektets rot. Allt du behöver är ett parent element som omsluter allt annat inenhåll:

```html
<div class="contact">
  <h2>hello?</h2>
</div>
```

### En funktion som returnerar en template string

Här kan du hämta dynamiska värden från andra delar av ditt projekt och inkludera i din i övrigt statiska fil. Något slags mellanting:

```js
import favicon from "../../../public/favicon.png";

export default function footer() {
  return `
    <footer class="footer">
      <img src="${favicon}" alt="favicon" />
      <p>&copy; 2025</p>
    </footer>
    `;
}
```

### Dynamisk fil

Här kan du blanda template strings, HTML-taggar och JavaScript, men måste i slutändan returnera ett DOM-objekt:

```js
export default function about() {
  let count = 1;

  const about = document.createElement("div");
  about.classList.add("about");
  about.innerHTML = `
    <h2>how many boats?</h2>
    <h2 id="boatHeading">⛵️</h2>
    <div class="buttons">
      <button id="incrementButton">Add boats</button>
      <button id="decrementButton">Remove boats</button>
    </div>
  `;
  const boatHeading = about.querySelector("#boatHeading");
  const incrementButton = about.querySelector("#incrementButton");
  const decrementButton = about.querySelector("#decrementButton");

  if (count === 0) {
    decrementButton.disabled = true;
  }

  const updateBoats = () =>
    (boatHeading.innerHTML =
      Array.from({ length: count }, (_) => "⛵️").join("") || "no boats");

  incrementButton.addEventListener("click", () => {
    count++;
    updateBoats();
  });
  decrementButton.addEventListener("click", () => {
    if (count !== 0) {
      count--;
      updateBoats();
    }
  });

  // i slutändan returneras elementet som skapades med document.createElement("div")
  return about;
}
```

## 🎯 Mål

Bygg en liten webbapplikation, den kan handla om precis vad som helst men ett tips är att hålla scopet smått i början. Övningens syfte är att bekanta sig med bundlers och modulärt strukturerade webbapplikationer med hjälp av JavaScript. Alltså en sammanhängande applikation som består av flera mindre, återanvändbara delar.

### Förslag på saker att bygga

- En random value generator (Citat, namn, etc.)
- Att göra-lista
- En enkel miniräknare (Börja med addition, få det att fungera, lägg sedan till subtraktion etc.)

## 💡 Tips

- Om du väljer att skapa separata stylesheets för varje html/js-fil kan det vara smart att skapa ytterligare ett stylesheet i den överordnade mappen som importerar alla de individuella filernas stylesheets. Om du till exempel har fyra mappar med varsin CSS-fil inuti mappen "views" så skapar du en `style.csss` direkt i "views" som importerar alla de separata CSS-filerna. Den filen importeras i sin tur in i `style.css` direkt i mappen "src" och därefter in i `main.js`.
  - Ett alternativ till detta är att skippa CSS-filer helt och använda ett CSS-ramverk som Tailwind. Eftersom uppgiften använder en bundler är det enkelt att instalera ett CSS-ramverk som dependency.
- Till en början kommer denna uppgift innehålla flera koncept som vi ännu inte gått igenom. Därför kan det vara bra att dela upp den i omgångar vecka för vecka.
- Läs mer om modulära webbappar med vanilla JavaScript **[här](https://devdecodes.medium.com/building-modular-web-apps-with-vanilla-javascript-no-frameworks-needed-631710bae703)**

## 🎁 Bonusuppgifter

### Skapa ett globalt state

Skapa en klass med state, getters och setters som du sen kan importera i dina olika filer. På så vis kan du hantera ditt state på ett och samma ställe men ha global tillgång till det i din app. Exempel följer nedan

```js
class Store {
  constructor() {
    this.state = {
      count: 1,
    };
    this.renderCallback = null;
  }

  getCount() {
    return this.state.count;
  }

  setCount(newCount) {
    this.state.count = newCount;
    this.triggerRender();
  }

  setRenderCallback(renderApp) {
    this.renderCallback = renderApp;
  }

  triggerRender() {
    if (this.renderCallback) {
      this.renderCallback();
    }
  }
}
const store = new Store();

export const getCount = store.getCount.bind(store);
export const setCount = store.setCount.bind(store);
export const setRenderCallback = store.setRenderCallback.bind(store);
```
