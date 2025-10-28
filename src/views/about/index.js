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
