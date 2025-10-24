export default function book() {
  let count = 1;

  const book = document.createElement("div");
  book.classList.add("book");
  book.innerHTML = `
    <h2>how many boats? BOOK</h2>
    <h2 id="boatHeading">⛵️</h2>
    <div class="buttons">
      <button id="incrementButton">Add boats</button>
      <button id="decrementButton">Remove boats</button>
    </div>
  `;
  const boatHeading = book.querySelector("#boatHeading");
  const incrementButton = book.querySelector("#incrementButton");
  const decrementButton = book.querySelector("#decrementButton");

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
  return book;
}