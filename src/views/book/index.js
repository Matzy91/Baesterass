import { doc } from "prettier";
import { treatmentList, treatmentTypes, sortOptions } from "../../Lists";
import { createButton } from "../../components/button";
import { renderConfirmedPopup, showPopup, closePopup, cancelAction } from "../../components/confirmPopUp";

export default function generatebook() {
    // ----------------- let's make some divs --------------------- //
    const book = document.createElement("div");
    book.classList.add("book", "flex", "items-center", "flex-col", "bg-light-blue", "p-standard", "rounded-standard", "drop-shadow-standard", "self-center", "w-[90vw]", "max-w-[1200px]", "h-[70vh]", "overflow-y-auto", "overflow-x-hidden", "scrollbar");
    book.innerHTML = `<h1 class="font-one text-center pb-1">Välj och boka behandling</h1>`; 
    
    const bookingContainer = document.createElement("div");
    bookingContainer.classList.add("bookingContainer", "flex", "flex-row", "[&>*]:p-2","w-[80vw]","max-w-[1180px]", "justify-center");
    
    const calendarContainer = document.createElement("div");
    calendarContainer.classList.add("calendarContainer", "w-[1/3]");
    // Datumval/kalender ska läggas in i calendarContainer här! 
    calendarContainer.innerHTML = `<img src="https://img.freepik.com/premium-vector/raccoon-continuous-line-art-drawing_266639-2928.jpg?w=360" alt="racoon">`;
    
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
    selectedTreatmentContainer.innerHTML = `<br><hr>`;
    const selectedTreatmentHeader = document.createElement("p");
    const selectedUl = document.createElement("ul"); 
    selectedTreatmentContainer.prepend(selectedTreatmentHeader, selectedUl);
    const selectedDateContainer = document.createElement("div"); // append valt datum och personal i denna
    
    totalContainer.classList.add("totalContainer", "inline-flex", "flex");
    totalContainer.innerHTML = "Total kostnad:&nbsp";
    const noCard = document.createElement("div");
    noCard.innerHTML = `
    <label class="text-sm">
    <input type="checkbox" class="noCard-check">
    Betala på plats
    </label>`;
    
    const cta = createButton({
        label: "Boka",
        variant: "primary",
        onClick: () => {
            if (document.querySelector(".noCard-check").checked == true) {
                renderConfirmedPopup();
                showPopup();
            }
            else {
                alert("Vi godkänner tyvärr inte kortbetalningar - välj att betala på plats för att gå vidare.")
            }
        }
    });
    cta.classList.add("min-w-fit");
    
    summaryContainer.append(selectedTreatmentContainer, selectedDateContainer, totalContainer, noCard,cta);
    
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
                else if (selectedUl.children.length == 1) {
                    selectedTreatmentHeader.innerHTML = `<b>Vald behandling:</b>`;
                }
                else {
                    selectedTreatmentHeader.innerHTML = ``;
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
