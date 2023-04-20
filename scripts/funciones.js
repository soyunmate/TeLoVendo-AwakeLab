"use strict";

// JQUERY ----------------------------

// $(document).ready(function () {
//   $("#tablaStats").DataTable({});
// });

const nameInput = document.getElementById("inputNombre");
const emailInput = document.getElementById("InputEmail");
const textInput = document.getElementById("FormControlTextarea1");
const btnSubmit = document.querySelector(".btn-primary");

const formValidation = function () {
  btnSubmit.addEventListener("click", function (e) {
    let alertString = "";

    if (!nameInput.value) alertString += "- Ingrese un Nombre\n";
    if (!emailInput.value) alertString += "- Ingrese un Email\n";
    if (!textInput.value) alertString += "- Ingrese un Mensaje\n";
    if (!emailInput.value.includes("@"))
      alertString += "- Email debe ser válido (contener un '@')";

    if (
      !nameInput.value ||
      !emailInput.value ||
      !textInput.value ||
      !emailInput.value.includes("@")
    ) {
      e.preventDefault();
      return alert(
        "Asegúrese de llenar correctamente todos los campos antes de enviar su mensaje:\n" +
          alertString
      );
    }

    alert("Mensaje Enviado con exito!");
  });
};

formValidation();
