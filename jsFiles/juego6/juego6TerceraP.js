document.addEventListener("DOMContentLoaded", () => {

    const btnVerificar = document.getElementById("btn-verificar-juego6-3");
    const respuestaU = document.getElementById("respuestaJuego6-3");
    const btnmuyBien = document.getElementById('btn-muyBienCO3');
    const btnnonoCuidado = document.getElementById('btn-nonoCuidadoCO3')
    const respuestaCorrecta = "casa";

    respuestaU.addEventListener("input", () => {
        respuestaU.style.backgroundColor = "";
        respuestaU.style.color = "";
    });

    btnVerificar.addEventListener("click", () => {
        const valor = respuestaU.value.toLowerCase().trim();
        if (valor.includes(respuestaCorrecta)) {
            respuestaU.style.backgroundColor = "rgb(70, 230, 137)"
            btnmuyBien.style.display = "block"
            btnnonoCuidado.style.display = "none"
        } else {
            respuestaU.style.backgroundColor = "rgb(238, 105, 90)"
            btnnonoCuidado.style.display = "block"
        }
    });
});