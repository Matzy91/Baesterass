/**
 * Återanvändbar knapp-komponent
 * 
 * - Kan användas överallt (oberoende av popup)
 * - Variant styr utseendet (primary / cancel)
 * - onClick är valfritt, mest för att se vad som sker i konsolen eller skicka vidare
 * - className är valfritt, läggs till i klasslistan
 * - toggleOnClick: om true, läggs en funktion till som växlar variant vid klick
 */
export function createButton({
  label = "Click me",
  labelPrimary = null,
  labelSecondary = null,
  variant = "primary", // "primary" | "cancel"
  className = "",
  onClick = null,
  toggleOnClick = false, // om true, läggs en toggle-funktion till
} = {}) {
  const button = document.createElement("button");

  // Grundläggande inställningar
  button.textContent = label;
  button.type = "button";
  button.className = `btn ${variant === "cancel" ? "btn-cancel" : "btn-primary"} ${className}`.trim();
  button.dataset.variant = variant;

  // Gör det möjligt att byta variant i efterhand
  button.setVariant = (newVariant) => { // "primary" | "cancel"
    button.dataset.variant = newVariant;
    button.classList.remove("btn-primary", "btn-cancel"); 
    button.classList.add(newVariant === "cancel" ? "btn-cancel" : "btn-primary"); //
  };

  if (toggleOnClick) { //om toggleOnClick är true läggs en eventlistener till
    button.addEventListener("click", () => { //Om toggle är på och knappen klickas ändra variant
      const next = button.dataset.variant === "cancel" ? "primary" : "cancel";
      button.setVariant(next);
      
      // const isCancel = button.classList.contains("btn-cancel"); // kolla om nuvarande variant är cancel
      // button.setVariant(isCancel ? "primary" : "cancel"); // om det är cancel, byt till primary, annars tvärtom
    if (labelPrimary && labelSecondary){ //om både labelPrimary och labelSecondary finns
      button.textContent = next === "cancel" ? labelSecondary : labelPrimary; //ändra texten beroende på variant
    } else { //om inte båda finns använd standardtexter som är AVBRYT OCH OK!

      if (button.textContent.toLowerCase().includes("avbryt")){ // Kollar om texten är avbryt
        button.textContent = "Ok!"; //ändra till Ok!
      }else if (button.textContent.toLowerCase().includes("Ok!")){ //kolla om texten är Ok!
        button.textContent = "Avbryt"; //ändra till Avbryt
      }
    }
    });
  }

  if (onClick) {
    button.addEventListener("click", onClick);
  }

  return button;
}
