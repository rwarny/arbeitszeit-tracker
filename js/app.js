import { status, tage, neuerTag, speichern, laden } from "./daten.js";

laden();

const buttons = document.querySelectorAll("[data-ziel]");

buttons.forEach(function(button) {
    button.addEventListener("click", function(event) {
        const zielId = event.currentTarget.dataset.ziel;

        document.querySelectorAll("section").forEach(function (section) {
            section.classList.remove("active");
        });
        document.getElementById(zielId).classList.add("active");
        document.querySelectorAll("nav button").forEach(function (navButton) {
            navButton.classList.remove("active");
        });
        event.currentTarget.classList.add("active");
    
    })
})
