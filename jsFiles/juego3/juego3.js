document.addEventListener('DOMContentLoaded', () => {    

    const correctCountElement = document.getElementById('correct-count-ci');
    const incorrectCountElement = document.getElementById('incorrect-count-ci');

    const btnVerificar = document.getElementById('btn-verificar-ci');
    const inputMonth = document.getElementById('inputMes-ci');
    const inputHour = document.getElementById('inputHora-ci');
    const inputDay = document.getElementById('inputDia-ci');
    const btnmuyBien = document.getElementById('btn-muyBienCI');
    const btnnonoCuidado = document.getElementById('btn-nonoCuidadoCI')
    function abrirModalConVideo(url) {
        const modal = document.getElementById("emergente");
        const iframe = document.querySelector("#emergente iframe");

        iframe.src = url;
        modal.style.display = "block";
    }

    const checkAnswers = () => {
        let correctCount = 0;
        let incorrectCount = 0;

        const answerDay = inputDay.value.trim().toLowerCase();
        const answerMonth = inputMonth.value.trim().toLowerCase();
        const answerHour = inputHour.value.trim().toLowerCase();

        // DÍA
        if (answerDay === '13' || answerDay === 'trece') {
            correctCount++;
            inputDay.classList.add('correct');
            inputDay.readOnly = true; // queda fijo
        } else {
            incorrectCount++;
            inputDay.style.backgroundColor = "rgb(238, 105, 90)";
            inputDay.style.color = "black";
        }

        // HORA
        if (answerHour === '11:00' || answerHour === '11' || answerHour === 'once') {
            correctCount++;
            inputHour.classList.add('correct');
            inputHour.readOnly = true;
        } else {
            incorrectCount++;
        }

        // MES
        if (answerMonth === 'septiembre') {
            correctCount++;
            inputMonth.classList.add('correct');
            inputMonth.readOnly = true;
        } else {
            incorrectCount++;
        }
        if (correctCount === 3) {
            //abrirModalConVideo("https://www.youtube.com/embed/GEIR6rdUNUM");
            btnmuyBien.style.display = "block";
        }
        if (incorrectCount != 0) {
            btnnonoCuidado.style.display = "block";
        } else {
            btnnonoCuidado.style.display = "none";
        }
        correctCountElement.innerText = correctCount;
        incorrectCountElement.innerText = incorrectCount;
        document.querySelectorAll(".aciertosErroresCOI").forEach(el => el.style.display = "block");
    };

    btnVerificar.addEventListener('click', checkAnswers);
    btnVerificar.addEventListener('keypress', checkAnswers);
    
    inputDay.addEventListener("input", () => {
    inputDay.style.backgroundColor = ""; 
    inputDay.style.color = "";
    });
    inputMonth.addEventListener("input", () => {
    inputMonth.style.backgroundColor = "";
    inputMonth.style.color = ""; 
    });
    inputHour.addEventListener("input", () => {
    inputHour.style.backgroundColor = ""; 
    inputHour.style.color = "";
    });
});
