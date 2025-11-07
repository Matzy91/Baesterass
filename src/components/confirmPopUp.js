export function renderConfirmedPopup() {
  const popupHTML = `
    <div id="confirmed-popup" class="fixed inset-0 flex items-center justify-center bg-black/40 hidden">
      <div class="bg-gray-100 rounded-2xl shadow-lg p-8 h-[fit-content] w-84 text-center relative popupMain">
        <button onclick="closePopup()" class="absolute top-2 right-2 text-gray-500 hover:text-black">✕</button>
        <div class="text-green-600 text-4xl mb-2 checkMark">✔</div>
        <h2 class="text-xl font-semibold confirmHeader">Bokning bekräftad</h2>
        <p class="text-sm text-gray-600 mt-1 chosenTreatment hidden">Denna behandling</p>
        <p class="text-sm text-gray-600 mt-1 chosenStaff">Denna person</p>
        <p class="text-sm text-gray-600 mt-1 chosenDate">Detta datum</p>
        <button onclick="cancelAction()" class="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 confirmButton">Ångra</button>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML("beforeend", popupHTML);
}

export function showPopup() {
  document.getElementById("confirmed-popup").classList.remove("hidden");
}

export function closePopup() {
  document.getElementById("confirmed-popup").classList.add("hidden");
}

export function cancelAction() {
  console.log("Avbrutet!");
  closePopup();
}

window.showPopup = showPopup;
window.closePopup = closePopup;
window.cancelAction = cancelAction;
