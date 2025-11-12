import { treatmentList, treatmentTypes, sortOptions } from "../../Lists";
import { createButton } from "../../components/button";
import { renderConfirmedPopup, showPopup} from "../../components/confirmPopUp";
import BookingCalendar from "../../components/BookingCalendar.js";
import {staffMembers } from "../../data/availabilityTest.js";

export default function generatebook() {
    // ----------------- let's make some divs --------------------- //
    const book = document.createElement("div");
    book.classList.add("book", "flex", "items-center", "flex-col", "bg-light-blue", "p-standard", "rounded-standard", "drop-shadow-standard", "self-center", "w-[90vw]", "max-w-[1200px]", "max-h-[70vh]", "h-[fit-content]", "overflow-y-auto", "overflow-x-hidden", "scrollbar");
    book.innerHTML = `<h1 class="font-one text-center pb-1">Välj och boka behandling</h1>`; 
    
    const bookingContainer = document.createElement("div");
    bookingContainer.classList.add("bookingContainer", "flex", "flex-row", "[&>*]:p-2","w-[80vw]","max-w-[1180px]", "justify-center", "mt-[10px]", "pb-[20px]");
    
    const calendarContainer = document.createElement("div");
    calendarContainer.classList.add("calendarContainer", "w-[1/3]");
    const calendar = BookingCalendar();
    calendarContainer.append(calendar);
    
    const filterContainer = document.createElement("div");
    filterContainer.classList.add("filterContainer", "min-w-full", "flex", "flex-col", "inline-flex", "justify-center", "text-[12px]");
    
    const selectionContainer = document.createElement("div");
    selectionContainer.classList.add("selectionContainer", "grow", "min-w-2/3")
    
    const lowerContainer = document.createElement("div");
    lowerContainer.classList.add("lowerContainer", "flex", "justify-between", "mr-4", "min-h-[307px]");
    
    selectionContainer.append(filterContainer, lowerContainer);
    bookingContainer.append(calendarContainer, selectionContainer);
    
    const filterTop = document.createElement("div");
    filterTop.classList.add("filter-top", "grid", "bg-blue-100", "rounded-md", "p-[3px]", "grid-cols-4", "[&>*]:shadow-sm/20", "items-center");
    const filterBtm = document.createElement("div");
    filterBtm.classList.add("filter-btm-left","[&>*]:shadow-sm/20", "rounded-md", "p-1", "justify-end", "flex");
    const dropDown = document.createElement("select");
    dropDown.classList.add("dropDown", "button", "text-[12px]");
    
    // ----------------- Sorting --------------------- //
    for (const option of sortOptions) {
        const optionElement = document.createElement("option");
        optionElement.textContent = option;
        dropDown.append(optionElement);
    }
    
    const sortBtn = document.createElement("button");
    sortBtn.textContent = "Sortera";
    sortBtn.classList = ("sortBtn", "max-h-fit", "text-[12px]");
    
    filterBtm.append(dropDown, sortBtn);
    filterContainer.append(filterTop, filterBtm);
    
    const boxArray = [];
    for (const type of treatmentTypes) {
        const typeDiv = document.createElement("button");
        typeDiv.classList.add("typeDiv", "flex", "basis-1/4", "text-center", "py-[3px]", "text-[12px]", "h-[26px]", "items-center", "justify-center", "min-w-[fit-content]");
        typeDiv.textContent = type;
        filterTop.append(typeDiv);
        boxArray.push(typeDiv);
    }
    
    for (let box of boxArray) {
        box.addEventListener("click", function() {
            for (let box of boxArray) {
                box.style.backgroundColor = "";
            };
            const selectedType = box.textContent;
            filterTreatments(selectedType);
            box.style.backgroundColor = "var(--color-dark-white)";
        });
    };
    
    function aToO() {
        treatmentList.sort((a, b) => a.name.localeCompare(b.name));
        checkoutList();
    }
    function oToA() {
        treatmentList.sort((a, b) => b.name.localeCompare(a.name));
        checkoutList();
    }
    function highToLow() {
        treatmentList.sort((a, b) => b.cost-a.cost);
        checkoutList();
    }
    function lowToHigh() {
        treatmentList.sort((a, b) => a.cost-b.cost);
        checkoutList();
    }
    sortBtn.addEventListener("click", function() {
        const selectedSort = dropDown.value;
        switch(selectedSort) {
            case "Alfabetiskt, A → Ö":
            aToO();
            break;
            case "Alfabetiskt, Ö → A":
            oToA();
            break;
            case "Pris, högt → lågt":
            highToLow();
            break;
            case "Pris, lågt → högt":
            lowToHigh();
            break;
        }
    })
    
    // ----------------- Filtering --------------------- //
    book.append(bookingContainer);  
    const clearBtn = document.createElement("button");
    clearBtn.classList.add("clearBtn", "flex", "basis-1/4", "text-center", "py-2", "shadow-sm/20", "uppercase", "underline", "text-[12px]", "h-[26px]", "items-center", "justify-center", "min-w-[fit-content]");
    clearBtn.textContent = "Rensa filter";
    // should this also clear any checked boxes???? perhaps 
    filterTop.append(clearBtn);
    
    function filterTreatments(selectedType) {
        const allBoxes = document.querySelectorAll(".treatmentBox");
        allBoxes.forEach(box => {
            const types = box.dataset.type.split(",");
            if (types.includes(selectedType)) {
                box.style.display = "flex";
            }
            else {
                box.style.display = "none";
            }
        })
        clearBtn.addEventListener("click", function() {
            allBoxes.forEach(box => {
                box.style.display = "flex";
            })
            for (let box of boxArray) {
                box.style.backgroundColor = "";
            }
        })
    }
    
    // ------------ Selection & Summary -------------- //
    const treatmentContainer = document.createElement("div");
    treatmentContainer.classList.add("treatmentContainer", "min-w-4/6", "flex", "flex-col");
    
    const summaryContainer = document.createElement("div");
    summaryContainer.classList.add("summaryContainer", "flex", "flex-col", "justify-end", "ml-4", "min-w-1/4");
    lowerContainer.append(treatmentContainer, summaryContainer);
    
    const totalContainer = document.createElement("div");
    const selectedTreatmentContainer = document.createElement("div");
    const selectedTreatmentHeader = document.createElement("p");
    selectedTreatmentHeader.innerHTML = `<b>Vald behandling:<b>`;
    const selectedUl = document.createElement("ul"); 
    selectedTreatmentContainer.prepend(selectedTreatmentHeader, selectedUl);
    const selectedDateContainer = document.createElement("div");
    selectedDateContainer.classList.add("mb-2", "text-sm", "selectedDateContainer", "mb-[20px]");
    selectedDateContainer.innerHTML = `<hr>`;
    
    // element för datum och personalval
    const selDateEl = document.createElement("p");
    const selStaffEl = document.createElement("p");
    selectedDateContainer.prepend(selDateEl, selStaffEl);
    
    let currentSelection = {
        date: null,
        specialistId: null,
    }
    
    function renderSelection({date, specialistId}){
        currentSelection.date = date;
        currentSelection.specialistId = specialistId;
        
        const staffName =
        specialistId
        ? (staffMembers.find(s => s.id === specialistId).name ?? specialistId)
        : "";
        
        selDateEl.innerHTML =`<span class="text-base font-bold">Datum:</span> ${date || ""}`;
        selStaffEl.innerHTML = `<span class="text-base font-bold">Specialist:</span> ${staffName || ""}`;
    }
    
    //Lyssnar om något sker i kalender-komponenten
    calendar.addEventListener("booking:change", (e) => {
        renderSelection(e.detail);
    });
    
    if(typeof calendar.getSelection === "function") {
        renderSelection(calendar.getSelection());
    }
    
    totalContainer.classList.add("totalContainer", "inline-flex", "flex");
    totalContainer.innerHTML = "Total kostnad:&nbsp";
    const noCard = document.createElement("div");
    noCard.innerHTML = `
    <label class="text-sm">
    <input type="checkbox" class="noCard-check">
    Betala på plats
    </label>`;
    
    summaryContainer.append(selectedTreatmentContainer, selectedDateContainer, totalContainer, noCard);
    const cta = createButton({
        label: "Boka",
        variant: "primary",
        onClick: () => {
            const noCardChecked = document.querySelector(".noCard-check").checked;
            const anyTreatmentChecked = Array.from(document.querySelectorAll(".treatmentCheck")).some(checkBox => checkBox.checked);
            const { date, specialistId } = currentSelection;
            const selectedDate = currentSelection.date;
            
            renderConfirmedPopup();
            showPopup();
            
            const confirmHeader = document.querySelector(".confirmHeader");
            const chosenStaff = document.querySelector(".chosenStaff");
            const chosenTreatment = document.querySelector(".chosenTreatment");
            const chosenDate = document.querySelector(".chosenDate");
            const confirmButton = document.querySelector(".confirmButton");
            const checkMark = document.querySelector(".checkMark");
            
            chosenTreatment.classList.add("hidden");
            chosenDate.classList.add("hidden");
            checkMark.classList.add("hidden");
            
            confirmButton.classList.remove("bg-red-600", "hover:bg-red-700");
            confirmButton.classList.add("bg-dark-green", "hover:bg-light-green")
            
            if (!anyTreatmentChecked) {
                console.log("Choose at least 1 - You haven't selected a treatment.")
                confirmHeader.textContent = "Obs!";
                chosenStaff.textContent = "Du måste välja minst 1 behandling innan du bokar.";
                confirmButton.textContent = "OK";
            }
            else if (!selectedDate && anyTreatmentChecked) {
                console.log("Choose date - You've selected a treatment but no date.")
                confirmHeader.textContent = "Obs!";
                chosenStaff.textContent = "Du måste välja ett datum för att gå vidare.";
                confirmButton.textContent = "OK";
            }
            else if (selectedDate && anyTreatmentChecked && !noCardChecked) {
                console.log("Accept card - Date and treatment are selected but you've not accepted our no card policy")
                confirmHeader.textContent = "Obs!";
                chosenStaff.textContent = "Vi godkänner tyvärr inte kortbetalningar - välj att betala på plats för att gå vidare.";
                confirmButton.textContent = "OK";
            }
            else if (selectedDate && anyTreatmentChecked && noCardChecked) {
                console.log("Success, you've booked!")
                chosenDate.classList.remove("hidden");
                chosenTreatment.classList.remove("hidden");
                checkMark.classList.remove("hidden");
                confirmHeader.innerHTML = `Bokning bekräftad!`;
                
                const selectedTreatments = Array.from(document.querySelectorAll(".treatmentCheck:checked")).map(checkBox => checkBox.closest(".labelGroup").querySelector(".treatmentLabel").textContent);
                const treatmentListString = selectedTreatments.join(", ");
                
                chosenTreatment.innerHTML = `<b>Vald behandling:</b><br>${treatmentListString}`;
                chosenStaff.innerHTML = `<b>Vald specialist:</b><br>${specialistId}`;
                chosenDate.innerHTML = `<b>Datum:</b><br>${date}`;
                confirmButton.textContent = "Ångra";
                confirmButton.classList.remove("bg-dark-green", "hover:bg-light-green");
                confirmButton.classList.add("bg-red-600", "hover:bg-red-700");
            }
            else {
                console.log("Something's gone terribly awry.")
            }
        }
    });
    
    cta.classList.add("min-w-fit");
    summaryContainer.append(cta);
    
    let totalNumber = document.createElement("p");
    let cost = 0;
    totalNumber.append(cost, ":-");
    totalNumber.classList.add("font-extrabold");
    
    function checkoutList() {
        treatmentContainer.innerHTML = "";
        for (const treatment of treatmentList) {
            const treatmentCheck = document.createElement("input");
            treatmentCheck.setAttribute("type", "checkbox");
            treatmentCheck.classList.add("treatmentCheck", "w-[30px]", "ml-[-30px]");
            const selectedLi = document.createElement("li");
            treatmentCheck.addEventListener("change", function() {
                if (treatmentCheck.checked){
                    cost = Number(cost) + Number(treatment.cost);
                    totalNumber.textContent = cost.toLocaleString("sv-SE") + ":-";
                    selectedLi.textContent = treatment.name;
                    selectedUl.appendChild(selectedLi);
                }
                else {
                    cost = Number(cost) - Number(treatment.cost);
                    totalNumber.textContent = cost.toLocaleString("sv-SE") + ":-";
                    selectedUl.removeChild(selectedLi);
                }
                if (selectedUl.children.length > 1) {
                    selectedTreatmentHeader.innerHTML = `<b>Valda behandlingar:<b>`;   
                }
                else {
                    selectedTreatmentHeader.innerHTML = `<b>Vald behandling:<b>`;
                }
            })
            
            const treatmentLabel = document.createElement("label");
            treatmentLabel.textContent = treatment.name;
            treatmentLabel.classList.add("treatmentLabel", "font-bold", "flex-1");
            
            const labelGroup = document.createElement("div");
            labelGroup.classList.add("labelGroup", "items-center", "flex", "flex-1", "gap-[10px]", "ml-[30px]");
            treatmentLabel.prepend(treatmentCheck);
            labelGroup.append(treatmentLabel);
            
            const treatmentCost = document.createElement("p");
            treatmentCost.textContent = Number(treatment.cost).toLocaleString("sv-SE") + ":-";
            treatmentCost.classList.add("treatmentCost", "text-right", "min-w-[60px]");
            
            const treatmentBox = document.createElement("div");
            treatmentBox.dataset.type = treatment.type.join(",");
            treatmentBox.classList.add("treatmentBox", "flex", "flex-row", "items-start");
            treatmentBox.append(labelGroup, treatmentCost);
            treatmentContainer.append(treatmentBox);
        }
        totalContainer.appendChild(totalNumber);  
    }
    checkoutList();
    return book;
}
