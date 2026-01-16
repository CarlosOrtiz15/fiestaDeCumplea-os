document.addEventListener("DOMContentLoaded", () => {

    function abrirModalConVideo(url) {
        const modal = document.getElementById("emergente");
        const iframe = document.querySelector("#emergente iframe");

        iframe.src = url;
        modal.style.display = "block";
    }

    const btnVerificar = document.getElementById("btn-verificar-juego6");
    const respuestaU = document.getElementById("respuestaJuego6");
    const respuestaCorrecta = "la playa";
    
    btnVerificar.addEventListener("click", () => {
        respuestaU.value = respuestaU.value.toLowerCase().trim();
        if (respuestaU.value === respuestaCorrecta) {
            respuestaU.style.backgroundColor = "green"
            abrirModalConVideo("https://www.youtube.com/embed/GEIR6rdUNUM");
        } else {
            respuestaU.style.backgroundColor = "red"
        }
    });
});