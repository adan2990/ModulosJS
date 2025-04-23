import { validarCantidad as valCant, validarRFC, } from "./validaciones.js";


import validarEmail from "./validaciones.js"; //importacion por default, en el archivo validaciones JS debe de agregar la palabra default despues del export

const txtPrueba = document.getElementById("txtPrueba");
const btnProbar = document.getElementById("btnProbar");
const alertResultado = document.getElementById("alertResultado");

//console.log(validarCantidad(cantidad));  //Si ponemos validad cantidad se autocompleta la linea 1 donde no habia nada

btnProbar.addEventListener("click", function (event) {
    event.preventDefault();

    alertResultado.innerHTML = valCant(txtPrueba.value) + "<br/>";
    alertResultado.innerHTML += validarRFC(txtPrueba.value) + "<br/>";
    alertResultado.innerHTML += validarEmail(txtPrueba.value) + "<br/>";
    //+= se usa para concatenar el resultado y el br el salto de linea, asi te da el resultado de cada uno

    alertResultado.style.display = "block";
})

