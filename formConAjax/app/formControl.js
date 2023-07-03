import { Persona } from "../persona.js";

let data;
let miForm = new FormData(document.querySelector("#mi-form"));

let name = miForm.get("first_name");
let lastname = miForm.get("last_name");
let password = miForm.get("password");
let email = miForm.get("email");
let btnSubmit = document.querySelector("#btnSubmit");




let enviar = (name, lastname, password, email) => {
  let persona = new Persona(name, lastname, password, email);
  console.log(persona);
  return JSON.stringify(persona);
};
enviar(name, lastname, password, email);
btnSubmit.addEventListener("click", enviar());
