let resultadoYoSoy = document.getElementById("resultadoSec3");

let aciertosDivYoSoy = document.createElement("div");
aciertosDivYoSoy.setAttribute("id", "aciertosDivYoSoy");
aciertosDivYoSoy.classList.add("aciertosErrores");
let aciertosYoSoy = document.createElement("p");
aciertosYoSoy.setAttribute("id", "aciertosYoSoy");
let espacioYoSoy = document.createElement("br");
aciertosYoSoy.textContent = "Aciertos: ";

// Crear y añadir el botón de aciertos
let botonAciertosYoSoy = document.createElement("button");
botonAciertosYoSoy.classList.add("iconlsmbutton", "verificar");
botonAciertosYoSoy.setAttribute("id", "modalAciertos");
let imagenSenasAciertos = document.createElement("img");
imagenSenasAciertos.setAttribute("src", "./imgs/manitas.png");
imagenSenasAciertos.setAttribute(
  "alt",
  "Icono clickeable para traducción a lengua de señas mexicana"
);

botonAciertosYoSoy.appendChild(imagenSenasAciertos);
aciertosDivYoSoy.appendChild(botonAciertosYoSoy);
aciertosDivYoSoy.appendChild(aciertosYoSoy);
resultadoYoSoy.appendChild(aciertosDivYoSoy);
resultadoYoSoy.appendChild(espacioYoSoy);

// Crear la sección de errores
let erroresDivYoSoy = document.createElement("div");
erroresDivYoSoy.setAttribute("id", "erroresDivYoSoy");
erroresDivYoSoy.classList.add("aciertosErrores");
let erroresYoSoy = document.createElement("p");
erroresYoSoy.setAttribute("id", "erroresYoSoy");
erroresYoSoy.textContent = "Errores: ";

// Crear y añadir el botón de errores
let botonErroresYoSoy = document.createElement("button");
botonErroresYoSoy.classList.add("iconlsmbutton", "verificar");
botonErroresYoSoy.setAttribute("id", "modalErrores");

let imagenSenasErrores = document.createElement("img");
imagenSenasErrores.setAttribute("src", "./imgs/manitas.png");
imagenSenasErrores.setAttribute(
  "alt",
  "Icono clickeable para traducción a lengua de señas mexicana"
);

botonErroresYoSoy.appendChild(imagenSenasErrores);
erroresDivYoSoy.appendChild(botonErroresYoSoy);
erroresDivYoSoy.appendChild(erroresYoSoy);

resultadoYoSoy.appendChild(erroresDivYoSoy);

// Crear la sección de bravo
let bravoDivYoSoy = document.createElement("div");
bravoDivYoSoy.setAttribute("id", "bravoDivYoSoy");
bravoDivYoSoy.classList.add("aciertosErrores");
let bravoYoSoy = document.createElement("p");
bravoYoSoy.setAttribute("id", "bravoYoSoy");
bravoYoSoy.textContent = "¡Bravo, muy bien!";

// Crear y añadir el botón de bravo
let botonBravoYoSoy = document.createElement("button");
botonBravoYoSoy.classList.add("iconlsmbutton", "verificar");
botonBravoYoSoy.setAttribute("id", "modalLoHicisteBien");

let imagenSenasBravo = document.createElement("img");
imagenSenasBravo.setAttribute("src", "./imgs/manitas.png");
imagenSenasBravo.setAttribute(
  "alt",
  "Icono clickeable para traducción a lengua de señas mexicana"
);

botonBravoYoSoy.appendChild(imagenSenasBravo);
bravoDivYoSoy.appendChild(botonBravoYoSoy);
bravoDivYoSoy.appendChild(bravoYoSoy);
resultadoYoSoy.appendChild(bravoDivYoSoy);

// Inicialmente ocultar las secciones
resultadoYoSoy.style.display = "none";
// aciertosDivYoSoy.style.display = "none";
// erroresDivYoSoy.style.display = "none";
// bravoDivYoSoy.style.display = "none";

// Función para verificar respuestas y actualizar los resultados
function verificarRespuestas() {
  // Añadir el contenedor de errores si aún no está en el DOM
  resultadoYoSoy.appendChild(erroresDivYoSoy);

  // Obtener los elementos de la interfaz
  let aciertos = document.getElementById("aciertosYoSoy");
  let aciertosDiv = document.getElementById("aciertosDivYoSoy");
  let errores = document.getElementById("erroresYoSoy");
  let errorDiv = document.getElementById("erroresDivYoSoy");
  let bravoDivision = document.getElementById("bravoDivYoSoy");

  // Reiniciar display y contenido de las secciones
  aciertosDiv.style.display = "none";
  errorDiv.style.display = "none";
  bravoDivision.style.display = "none";
  aciertos.textContent = "";
  errores.textContent = "";

  // Array de inputs y respuestas correctas
  let inputs = [
    document.getElementById("input1"),
    document.getElementById("input2"),
    document.getElementById("input3"),
    document.getElementById("input4"),
    document.getElementById("input5"),
    document.getElementById("input6"),
  ];

  let respuestasCorrectas = ["soy", "luis", "yo", "maria", "yo", "soy"];

  // Variable para contar los aciertos
  let contador = 0;
  //Se les añade el onclick para quitar incorrect

  inputs.forEach((input) => {
    input.addEventListener("click", () => {
      input.classList.remove("incorrect");
    });
  });
  // Función auxiliar para desactivar el input correcto y marcar incorrecto si aplica
  function desactivar(input, respuestaCorrecta) {
    if (input.value.trim().toLowerCase() === respuestaCorrecta) {
      input.disabled = true;
      input.classList.remove("incorrect");
      input.classList.add("correct");
      return 1;
    } else {
      input.classList.add("incorrect");
      return 0;
    }
  }

  // Iterar sobre los inputs y respuestas
  for (let i = 0; i < inputs.length; i++) {
    contador += desactivar(inputs[i], respuestasCorrectas[i]);
  }

  // Mostrar la cantidad de aciertos y errores
  if (contador > 0 && contador < respuestasCorrectas.length) {
    aciertos.textContent = "Aciertos: " + contador.toString();
    aciertosDiv.style.display = "flex";
  }

  if (contador !== respuestasCorrectas.length) {
    errores.textContent =
      "Errores: " + (respuestasCorrectas.length - contador).toString();
    errores.style.display = "flex";
    errorDiv.style.display = "flex";
  }

  // Mostrar mensaje de "¡Bravo!" si se acertaron todas
  if (contador === respuestasCorrectas.length) {
    bravoDivision.style.display = "flex";
  }

  // Mostrar el contenedor de resultados
  resultadoYoSoy.style.display = "flex";
}

// Elemento donde se mostrará el resultado
let resultadoMeLlamo = document.getElementById("resultadoSec4");

// Crear y añadir la sección de aciertos
let aciertosDivMeLlamo = document.createElement("div");
aciertosDivMeLlamo.setAttribute("id", "aciertosDivMeLlamo");
aciertosDivMeLlamo.classList.add("aciertosErrores");

let aciertosMeLlamo = document.createElement("p");
aciertosMeLlamo.setAttribute("id", "aciertosMeLlamo");
let espacioMeLlamo = document.createElement("br");
aciertosMeLlamo.textContent = "Aciertos: ";

// Crear y añadir el botón de aciertos
let botonAciertosMeLlamo = document.createElement("button");
botonAciertosMeLlamo.classList.add("iconlsmbutton", "verificar");
botonAciertosMeLlamo.setAttribute("id", "modalAciertos");
let imagenSenasAciertosMeLlamo = document.createElement("img");
imagenSenasAciertosMeLlamo.setAttribute("src", "./imgs/manitas.png");
imagenSenasAciertosMeLlamo.setAttribute(
  "alt",
  "Icono clickeable para traducción a lengua de señas mexicana"
);

botonAciertosMeLlamo.appendChild(imagenSenasAciertosMeLlamo);
aciertosDivMeLlamo.appendChild(botonAciertosMeLlamo);
aciertosDivMeLlamo.appendChild(aciertosMeLlamo);
resultadoMeLlamo.appendChild(aciertosDivMeLlamo);
resultadoMeLlamo.appendChild(espacioMeLlamo);

// Crear la sección de errores
let erroresDivMeLlamo = document.createElement("div");
erroresDivMeLlamo.setAttribute("id", "erroresDivMeLlamo");
erroresDivMeLlamo.classList.add("aciertosErrores");

let erroresMeLlamo = document.createElement("p");
erroresMeLlamo.setAttribute("id", "erroresMeLlamo");
erroresMeLlamo.textContent = "Errores: ";

// Crear y añadir el botón de errores
let botonErroresMeLlamo = document.createElement("button");
botonErroresMeLlamo.classList.add("iconlsmbutton", "verificar");
botonErroresMeLlamo.setAttribute("id", "modalErrores");

let imagenSenasErroresMeLlamo = document.createElement("img");
imagenSenasErroresMeLlamo.setAttribute("src", "./imgs/manitas.png");
imagenSenasErroresMeLlamo.setAttribute(
  "alt",
  "Icono clickeable para traducción a lengua de señas mexicana"
);

botonErroresMeLlamo.appendChild(imagenSenasErroresMeLlamo);
erroresDivMeLlamo.appendChild(botonErroresMeLlamo);
erroresDivMeLlamo.appendChild(erroresMeLlamo);
resultadoMeLlamo.appendChild(erroresDivMeLlamo);

// Crear la sección de bravo
let bravoDivMeLlamo = document.createElement("div");
bravoDivMeLlamo.setAttribute("id", "bravoDivMeLlamo");
bravoDivMeLlamo.classList.add("aciertosErrores");
let bravoMeLlamo = document.createElement("p");
bravoMeLlamo.setAttribute("id", "bravoMeLlamo");

bravoMeLlamo.textContent = "¡Bravo, muy bien!";

// Crear y añadir el botón de bravo
let botonBravoMeLlamo = document.createElement("button");
botonBravoMeLlamo.classList.add("iconlsmbutton", "verificar");
botonBravoMeLlamo.setAttribute("id", "modalLoHicisteBien");

let imagenSenasBravoMeLlamo = document.createElement("img");
imagenSenasBravoMeLlamo.setAttribute("src", "./imgs/manitas.png");
imagenSenasBravoMeLlamo.setAttribute(
  "alt",
  "Icono clickeable para traducción a lengua de señas mexicana"
);

botonBravoMeLlamo.appendChild(imagenSenasBravoMeLlamo);
bravoDivMeLlamo.appendChild(botonBravoMeLlamo);
bravoDivMeLlamo.appendChild(bravoMeLlamo);
resultadoMeLlamo.appendChild(bravoDivMeLlamo);

// Inicialmente ocultar las secciones
resultadoMeLlamo.style.display = "none";

// Función para verificar respuestas y actualizar los resultados
function verificarRespuestas2() {
  // Obtener los elementos de la interfaz
  let aciertos = document.getElementById("aciertosMeLlamo");
  let aciertosDiv = document.getElementById("aciertosDivMeLlamo");
  let errores = document.getElementById("erroresMeLlamo");
  let errorDiv = document.getElementById("erroresDivMeLlamo");
  let bravoDivision = document.getElementById("bravoDivMeLlamo");

  // Reiniciar display y contenido de las secciones
  aciertosDiv.style.display = "none";
  errorDiv.style.display = "none";
  bravoDivision.style.display = "none";
  aciertos.textContent = "";
  errores.textContent = "";

  // Array de inputs y respuestas correctas
  let inputs = [
    document.getElementById("input2-1"),
    document.getElementById("input2-2"),
    document.getElementById("input2-3"),
    document.getElementById("input2-4"),
    document.getElementById("input2-5"),
    document.getElementById("input2-6"),
  ];

  let respuestasCorrectas = ["llamo", "luis", "me", "maria", "llamo", "me"];

  // Variable para contar los aciertos
  let contador = 0;

  // Función auxiliar para desactivar el input correcto y marcar incorrecto si aplica
  function desactivar(input, respuestaCorrecta) {
    if (input.value.trim().toLowerCase() === respuestaCorrecta) {
      input.disabled = true;
      input.classList.remove("incorrect");
      input.classList.add("correct");
      return 1;
    } else {
      input.classList.add("incorrect");
      return 0;
    }
  }

  // Iterar sobre los inputs y respuestas
  for (let i = 0; i < inputs.length; i++) {
    contador += desactivar(inputs[i], respuestasCorrectas[i]);
  }

  // Mostrar la cantidad de aciertos y errores
  if (contador > 0 && contador < respuestasCorrectas.length) {
    aciertos.textContent = "Aciertos: " + contador.toString();
    aciertosDiv.style.display = "flex";
  }

  if (contador !== respuestasCorrectas.length) {
    errores.textContent =
      "Errores: " + (respuestasCorrectas.length - contador).toString();
    errorDiv.style.display = "flex";
  }

  // Mostrar mensaje de "¡Bravo!" si se acertaron todas
  if (contador === respuestasCorrectas.length) {
    bravoDivision.style.display = "flex";
  }

  // Mostrar el contenedor de resultados
  resultadoMeLlamo.style.display = "flex";
}

/////////// CÓDIGO DEL MEMORAMA

const cards = document.querySelectorAll(".memory-card");

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let cardsFlippedCounter = 0;

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add("flip");

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;

    return;
  }

  hasFlippedCard = false;
  secondCard = this;

  checkForMatch();
}
function checkForMatch() {
  let isMatch = firstCard.dataset.name === secondCard.dataset.name;
  isMatch ? disableCards() : unflipCards();
}
function disableCards() {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);
  cardsFlippedCounter += 2;
  const firstFrontFace = firstCard.querySelector(".front-face");
  const secondFrontFace = secondCard.querySelector(".front-face");

  if (firstFrontFace && secondFrontFace) {
    firstFrontFace.style.border = "solid #2cb7b3 4px";
    secondFrontFace.style.border = "solid #2cb7b3 4px";
  }

  if (cardsFlippedCounter == 8) {
    const resultadoDiv = document.getElementById("resultadoSec6");
    resultadoDiv.style.display = "block";
  }
  resetBoard();
}
function unflipCards() {
  lockBoard = true;
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");

    resetBoard();
  }, 4500);
}
function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() {
  cards.forEach((card) => {
    let randomPos = Math.floor(Math.random() * 8);
    card.style.order = randomPos;
  });
})();

cards.forEach((card) => card.addEventListener("click", flipCard));
