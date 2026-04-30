document.addEventListener('DOMContentLoaded', () => {    

    const correctCountElement = document.getElementById('AciertosJ5_2');
    const incorrectCountElement = document.getElementById('ErroresJ5_2');

    const btnVerificar = document.getElementById('btn-verificar-5_2');
    const input1 = document.getElementById('inputEH2');
    const btnmuyBien = document.getElementById('btn-muyBienEH2');
    const btnnonoCuidado = document.getElementById('btn-nonoCuidadoEH2')
    function abrirModalConVideo(url) {
        const modal = document.getElementById("emergente");
        const iframe = document.querySelector("#emergente iframe");

        iframe.src = url;
        modal.style.display = "block";
    }

    input1.addEventListener("input", () => {
        input1.style.backgroundColor = ""; 
        input1.style.color = "";
    });

    const checkAnswers = () => {
        let correctCount = 0;
        let incorrectCount = 0;

        const answer1 = input1.value.trim().toLowerCase();

        if (answer1 === '8pm' || answer1 === '08:00pm' || answer1=== '8:00pm' ||answer1 === '8' ||answer1 === '8:00') {
            correctCount++;
            input1.readOnly = true;
            input1.style.backgroundColor= "rgb(70, 230, 137)";
        } else {
            incorrectCount++;
            input1.style.backgroundColor= "rgb(238, 105, 90)"
        }

        if (correctCount === 1) {
            //abrirModalConVideo("https://www.youtube.com/embed/GEIR6rdUNUM");
            btnmuyBien.style.display = "block"
        }
        if (incorrectCount === 1) {
            btnnonoCuidado.style.display = "block";
        } else {
            btnnonoCuidado.style.display = "none";
        }
        correctCountElement.innerText = correctCount;
        incorrectCountElement.innerText = incorrectCount;
        document.querySelectorAll(".aciertosErroresEH_2").forEach(el => el.style.display = "block");
    };

    btnVerificar.addEventListener('click', checkAnswers);
});
