document.addEventListener('DOMContentLoaded', () => {    

    const correctCountElement = document.getElementById('correct-count-ci');
    const incorrectCountElement = document.getElementById('incorrect-count-ci');

    const btnVerificar = document.getElementById('btn-verificar-ci');
    const inputMonth = document.getElementById('inputMes-ci');
    const inputHour = document.getElementById('inputHora-ci');
    const inputDay = document.getElementById('inputDia-ci');

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

        correctCountElement.innerText = correctCount;
        incorrectCountElement.innerText = incorrectCount;
    };

    btnVerificar.addEventListener('click', checkAnswers);
});
