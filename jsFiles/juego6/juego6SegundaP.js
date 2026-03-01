document.addEventListener("DOMContentLoaded", () => {

    function abrirModalConVideo(url) {
        const modal = document.getElementById("emergente");
        const iframe = document.querySelector("#emergente iframe");

        iframe.src = url;
        modal.style.display = "block";
    }

    const btnVerificar = document.getElementById("btn-verificar-juego6-2");
    const respuestaU = document.getElementById("respuestaJuego6-2");
    const btnmuyBien = document.getElementById('btn-muyBienCO2');
    const respuestasCorrectas = ["salon de fiestas", "salón de fiestas"];

    respuestaU.addEventListener("input", () => {
        respuestaU.style.backgroundColor = "";
        respuestaU.style.color = "";
    });

    btnVerificar.addEventListener("click", () => {
        const valor = respuestaU.value.toLowerCase().trim();
        if (respuestasCorrectas.includes(valor)) {
            respuestaU.style.backgroundColor = "rgb(70, 230, 137)"
            //abrirModalConVideo("https://www.youtube.com/embed/GEIR6rdUNUM");
            btnmuyBien.style.display = "block"
        } else {
            respuestaU.style.backgroundColor = "rgb(238, 105, 90)"
        }
    });
});