const checkboxInput = document.querySelector('input[type="checkbox"]');

const textFields = document.querySelectorAll('input[type="text"]');

const eraseButton = document.querySelector('button');

const emptyDiv = document.querySelector('div');

const colorInput = document.querySelector('#color');


//funktion för att hantera de event som sker
function handleInputEvent(e) {
    console.log("Event triggat av: ", e.target);//Skriver ut elementet som triggat eventet
    //Kontrollerar om det är inputfältet med id "content"
    if (e.target.id === "content") {
        const contentValue = e.target.value;//Hämta värdet från inputfältet jag har
        emptyDiv.textContent = contentValue;//Sätter värdet i div elementet
    }
}
//eventlyssnare för textfältet
textFields.forEach((textField) => {
    textField.addEventListener("input", handleInputEvent);
});
//eventlyssnaren för checkboxen
checkboxInput.addEventListener("change", () => {
    if (checkboxInput.checked) {
        emptyDiv.style.backgroundColor = colorInput.value || "lightgray"; // Använd färgen från inputfältet
    } else {
        emptyDiv.style.backgroundColor = "transparent"; // Återställ till transparent
    }
});

//eventlyssnaren för knappen
eraseButton.addEventListener("click", () => {
    emptyDiv.style.display = "home"; //gömmer div elementet
});
