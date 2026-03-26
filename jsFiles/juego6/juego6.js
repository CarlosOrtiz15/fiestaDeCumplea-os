document.addEventListener("DOMContentLoaded", () => {

    function abrirModalConVideo(url) {
        const modal = document.getElementById("emergente");
        const iframe = document.querySelector("#emergente iframe");
        iframe.src = url;
        modal.style.display = "block";
    }

    const btnVerificar = document.getElementById("btn-verificar-juego6");
    const respuestaU = document.getElementById("respuestaJuego6");
    const btnmuyBien = document.getElementById('btn-muyBienCO');
    const btnnonoCuidado = document.getElementById('btn-nonoCuidadoCO')
    const respuestaCorrecta = "la playa";
    
    respuestaU.addEventListener("input", () => {
        respuestaU.style.backgroundColor = ""; 
        respuestaU.style.color = "";
    });

    btnVerificar.addEventListener("click", () => {
        const valorLimpio = respuestaU.value.toLowerCase().trim();
        respuestaU.value = valorLimpio;

        if (valorLimpio === respuestaCorrecta) {
            respuestaU.style.backgroundColor = "rgb(70, 230, 137)";
            //abrirModalConVideo("https://www.youtube.com/embed/GEIR6rdUNUM");
            btnmuyBien.style.display = "block"
            btnnonoCuidado.style.display = "none"
        } else {
            respuestaU.style.backgroundColor = "rgb(238, 105, 90)";
            btnnonoCuidado.style.display = "block"
        }
    });
});