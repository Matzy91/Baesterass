export default function Card({rating, text, name}) {
  const card = document.createElement("div");
  card.classList.add("card",'flex', 'flex-col', 'gap-2');

const h3 = document.createElement("h3");
  h3.textContent = name;

  const p = document.createElement("p");
  p.textContent = text

  const stars = document.createElement("div");
  stars.className = "stars";

  for (let i = 1; i <= 5; i++) {
    const star = document.createElement('span')
    star.textContent = i <= rating ? "★" : "☆";
star.className = i <= rating ? "star filled" : "star";
stars.append(star)
  }

card.append(stars, p, name);


  return card
}