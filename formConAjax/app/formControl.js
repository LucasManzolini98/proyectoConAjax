console.log("clase formcontrol");

import { Persona } from "../persona.js";

let data;
let miForm = new FormData(document.querySelector("#mi-form"));

console.log(miForm)

for(var pair of miForm.entries()) {
  console.log(pair[0]+ ', '+ pair[1]); 
}

//miForm.addEventListener("submit", prueba());