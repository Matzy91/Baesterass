import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";

import about from "./views/about/index.js";
import home from "./views/home";
import book from "./views/book";
import headerHTML from "./views/static/header/index.html?raw";
import footerHTML from "./views/static/footer/index.html?raw";

const getCurrentPage = () => {
  const currentPage = window.location.pathname;

  switch (currentPage) {
    case "/home":
      return home();
    case "/about":
      return about();
    case "/book":
      return book();
    default:
      return (window.location.pathname = "/home");
  }
};

document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector("#counter"));

const renderApp = () => {
  const currentPage = getCurrentPage();

  if (typeof currentPage === "string") {
    app.innerHTML = `
     ${headerHTML}
      ${currentPage}
      ${footerHTML}
    `;
  } else {
    app.innerHTML = `
        ${headerHTML}
        ${footerHTML}
        `;

    app.insertBefore(currentPage, app.querySelector("footer"));
  }
};

renderApp();

// import "./style.css";

// // statiska sidor
// // måste referera till den specifika .html-filen pga "?raw"-suffixet
// import headerHTML from "./views/static/header/index.html?raw";
// import homeHTML from "./views/static/home/index.html?raw";
// import contactHTML from "./views/static/contact/index.html?raw";

// // dynamiska sidor
// // behöver bara referera till mappen om filen heter index.js.
// // filer med det namnet laddas automatiskt
// import about from "./views/about";
// import footer from "./views/footer";
// import { setRenderCallback } from "./store";

// // en funktion för att rendera olika sidor baserat på webbläsarens "path"
// // för att ändra pathen kan du t.ex. skapa en anchor tag med href="/home"
// // "/home" kommer då att läggas till i url:en
// const getCurrentPage = () => {
//   const currentPage = window.location.pathname;

//   switch (currentPage) {
//     case "/home":
//       return homeHTML;
//     case "/about":
//       return about();
//     case "/contact":
//       return contactHTML;
//     default:
//       return (window.location.pathname = "/home");
//   }
// };

// const app = document.querySelector("#app");

// // funktionen som renderar appen. kommer behöva köras om varje gång sidan ska omrenderas
// // detta är grunden i hur man gör statiska html-sidor till interaktiva applikationer
// const renderApp = () => {
//   const currentPage = getCurrentPage();

//   if (typeof currentPage === "string") {
//     app.innerHTML = `
//       ${headerHTML}
//       ${currentPage}
//       ${footer()}
//     `;
//   } else {
//     app.innerHTML = `
//         ${headerHTML}
//         ${footer()}
//         `;
//     // footer är en js-fil som returnerar en template string med html-element.
//     // ett mellanting mellan statisk och dynamisk

//     // currentPage är i det här fallet ett objekt innehållande HTML-element
//     // något i stil med document.createElement("div")
//     app.insertBefore(currentPage, app.querySelector("footer"));
//   }
// };

// // initial render
// renderApp();

// //rerender logic
// // en eventListner som lyssnar på ändringar i URL:ens historik
// window.addEventListener("popstate", renderApp);
