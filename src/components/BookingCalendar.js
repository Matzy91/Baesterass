import AirDatepicker from "air-datepicker";
import "air-datepicker/air-datepicker.css";
import sv from "air-datepicker/locale/sv";

//hämtar statisk data från data/availabilityTest.js
import { staffMembers, availability } from "../data/availabilityTest.js";


//Låter användaren välja datum som sedan översätter det till en ISO-sträng, dvs en standard för datum för datorer. YYYY-MM-DD
const toISO = (d) => {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
};

// Hämtar personalobjekt av de som jobbar en viss dag
const getStaffForDate = (iso) => {
  const ids = availability[iso] || [];
  return staffMembers.filter((s) => ids.includes(s.id));
};

// export default function BookingCalendar()
//Är självaste komponenten som skapas och sedan retuneras i ett DOM-element
// Innehåller kalendern, personallistan och "nästa"-knapp
export default function BookingCalendar() {
  //Lokalt "state" i komponenten
  let selectedDate = "";
  let selectedStaffId = "";

  // Root-node som kapslar in hela komponenten
  const root = document.createElement("section");
  root.className =
    "rounded-2xl bg-slate-100 p-4 shadow-sm border border-slate-200";
  
  //Grund-HTML för att omsluta elementern innuti såsom kalendern och personal
  root.innerHTML = `
    <h3 class="text-xl font-semibold mb-3">Välj dag</h3>
    <div id="picker" class="mb-4"></div>

    <h4 class="text-base font-semibold mb-2">Välj specialist</h4>
    <div id="staff" class="space-y-2 mb-3 text-sm text-slate-700">
      <p class="text-slate-500">Välj en dag först.</p>
    </div>
  `;

  // refernser till diverise viktigta element
  const pickerHost = root.querySelector("#picker");
  const staffEl = root.querySelector("#staff");

  // Gör det lätt att läsa värdet utifrån
  root.getSelection = () => ({ date: selectedDate, specialistId: selectedStaffId });

  // Hjälpare: emit:a ett förändrings-event uppåt
  const emitChange = () => {
    root.dispatchEvent(
      new CustomEvent("booking:change", {
        bubbles: true,
        detail: { date: selectedDate, specialistId: selectedStaffId },
      })
    );
  };

  //Renderar personal-listan för `selectedDate`
  function renderStaff() {
    if (!selectedDate) {
      staffEl.innerHTML = `<p class="text-slate-500">Välj en dag först.</p>`;
      selectedStaffId = "";
      emitChange();
      return;
    }

    const list = getStaffForDate(selectedDate);

    if (!list.length) {
      staffEl.innerHTML = `<p>Inga frisörer tillgängliga för ${selectedDate}.</p>`;
      selectedStaffId = "";
      emitChange();
      return;
    }

    //radio inputs (alla delar samma name="spec" => single choice)
    staffEl.innerHTML = list
      .map(
        (s) => `
      <label class="flex items-center gap-2">
        <input type="radio" name="spec" value="${s.id}">
        <span>${s.name}</span>
      </label>`
      )
      .join("");

      //Nollställer tidigare val om datumet bytts
    selectedStaffId = "";
    emitChange();
  }

  // Initiera kalendern i "inline"-läge så den alltid syns
  // locale: sv så det blir på svenska
  // Sparar ISO-datum i selectedDate och rendera personalen på nytt
  new AirDatepicker(pickerHost, {
    inline: true,
    autoClose: true,
    locale: sv,
    onSelect: ({ date }) => {
      selectedDate = date ? toISO(date) : "";
      renderStaff();
    },
  });

  // Lyssnar på ändringar från radio-gruppen.
  // När en av personalen är valt uppdateras `selectedStaffID`
  // CTA aktiveras bara om både datum och personal är valda
  root.addEventListener("change", (e) => {
    if (e.target.name === "spec") {
      selectedStaffId = e.target.value;
      nextBtn.disabled = !(selectedDate && selectedStaffId);
    }
  });

  return root;
}