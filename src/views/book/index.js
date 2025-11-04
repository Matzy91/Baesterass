import BookingCalendar from "../../components/BookingCalendar.js";

export default function book() {
  const root = document.createElement("div");
  root.className = "container mx-auto px-4 py-6";

  const wrapper = document.createElement("div");
  wrapper.className = "max-w-md mx-auto";

  const calendar = BookingCalendar();
  wrapper.appendChild(calendar);

  root.appendChild(wrapper);

  root.addEventListener("calendar:ready", (e) => {
    const { date, specialistId } = e.detail;
    console.log("Valt datum:", date, "Specialist:", specialistId);
  });

  return root;
}
