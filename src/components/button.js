/**
 * Återanvändbar knapp-komponent
 * 
 * - Kan användas överallt (oberoende av popup)
 * - Variant styr utseendet (primary / cancel)
 * - onClick är valfritt
 */
export function createButton({
  label = "Click me",
  variant = "primary", // "primary" | "cancel"
  className = "",
  onClick = null,
} = {}) {
  const button = document.createElement("button");

  button.textContent = label;
  button.type = "button";
  button.className = `btn ${variant === "cancel" ? "btn-cancel" : "btn-primary"} ${className}`.trim();

  if (onClick) {
    button.addEventListener("click", onClick);
  }

  // Gör det möjligt att byta variant i efterhand
  button.setVariant = (newVariant) => {
    button.classList.remove("btn-primary", "btn-cancel");
    button.classList.add(newVariant === "cancel" ? "btn-cancel" : "btn-primary");
  };

  return button;
}
