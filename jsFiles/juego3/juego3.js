document.addEventListener('DOMContentLoaded', () => {    

    const correctCountElement = document.getElementById('correct-count-ci');
    const incorrectCountElement = document.getElementById('incorrect-count-ci');
    //const incorrectTextElement = document.getElementById('incorrect-text-ci');
    const btnVerificar = document.getElementById('btn-verificar-ci');
    const inputMonth = document.getElementById('inputMes-ci');
    const inputHour = document.getElementById('inputHora-ci');
    const inputDay = document.getElementById('inputDia-ci');




    const checkAnswers = () => {
        console.log("Hola")
        let correctCount = 0;
        let incorrectCount = 0;
        const answerDay = inputDay.value.trim().toLowerCase();
        const answerMonth = inputMonth.value.trim().toLowerCase();
        const answerHour = inputHour.value.trim().toLowerCase();
        
        console.log("Día:", answerDay);
        console.log("Mes:", answerMonth);
        console.log("Hora:", answerHour);

        if(answerDay === '13' || answerDay === 'trece') {
            correctCount++;
        } else {
            incorrectCount++;
        }
        if(answerHour === '11:00' || answerHour === '11' || answerHour === 'once') {
            correctCount++;
        } else {
            incorrectCount++;
        }
        if(answerMonth === 'septiembre') {
            correctCount++;
        } else {
            incorrectCount++;
        }
        correctCountElement.innerText = correctCount;
        incorrectCountElement.innerText = incorrectCount;
    };
    btnVerificar.addEventListener('click', checkAnswers);

});