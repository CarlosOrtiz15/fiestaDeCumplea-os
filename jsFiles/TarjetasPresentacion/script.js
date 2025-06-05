let javier1 = document.getElementById("javierMi");
let javier2 = document.getElementById("javierNombre");
let javier3 = document.getElementById("javierEs");
let javier4 = document.getElementById("javierJavier");
let javier5 = document.getElementById("javiTeng");

let maria1 = document.getElementById("mariaMe");
let maria2 = document.getElementById("mariaLlamo");
let maria3 = document.getElementById("mariaMaria");
let maria4 = document.getElementById("mariaAnos");

let diana1 = document.getElementById("DianaMi");
let diana2 = document.getElementById("DianaNombre");
let diana3 = document.getElementById("DianaEs");
let diana4 = document.getElementById("DianaDiana");
let diana5 = document.getElementById("DianaTengo");

let elena1 = document.getElementById("ElenaSoy");
let elena2 = document.getElementById("ElenaElena");
let elena3 = document.getElementById("ElenaAnos");
function respuestasTarjetas1() {
  if (javier1.value.toLowerCase() == "mi") {
    javier1.classList.add("correct");
    if (javier1.classList.contains("incorrect")) {
      javier1.classList.remove("incorrect");
    }
  } else {
    javier1.classList.add("incorrect");
    javier1.addEventListener("click", () => {
      if (javier1.classList.contains("incorrect")) {
        javier1.classList.remove("incorrect");
      }
    });
  }
  if (javier2.value.toLowerCase() == "nombre") {
    javier2.classList.add("correct");
    if (javier2.classList.contains("incorrect")) {
      javier2.classList.remove("incorrect");
    }
  } else {
    javier2.classList.add("incorrect");
    javier2.addEventListener("click", () => {
      if (javier2.classList.contains("incorrect")) {
        javier2.classList.remove("incorrect");
      }
    });
  }
  if (javier3.value.toLowerCase() == "es") {
    javier3.classList.add("correct");
    if (javier3.classList.contains("incorrect")) {
      javier3.classList.remove("incorrect");
    }
  } else {
    javier3.classList.add("incorrect");
    javier3.addEventListener("click", () => {
      if (javier3.classList.contains("incorrect")) {
        javier3.classList.remove("incorrect");
      }
    });
  }
  if (javier4.value.toLowerCase() == "javier") {
    javier4.classList.add("correct");
    if (javier4.classList.contains("incorrect")) {
      javier4.classList.remove("incorrect");
    }
  } else {
    javier4.classList.add("incorrect");
    javier4.addEventListener("click", () => {
      if (javier4.classList.contains("incorrect")) {
        javier4.classList.remove("incorrect");
      }
    });
  }

  if (javier5.value.toLowerCase() === "tengo") {
    javier5.classList.add("correct");
    if (javier5.classList.contains("incorrect")) {
      javier5.classList.remove("incorrect");
    }
  } else {
    javier5.classList.add("incorrect");
    javier5.addEventListener("click", () => {
      if (javier5.classList.contains("incorrect")) {
        javier5.classList.remove("incorrect");
      }
    });
  }
  if (maria1.value.toLowerCase() == "me") {
    maria1.classList.add("correct");
    if (maria1.classList.contains("incorrect")) {
      maria1.classList.remove("incorrect");
    }
  } else {
    maria1.classList.add("incorrect");
    maria1.addEventListener("click", () => {
      if (maria1.classList.contains("incorrect")) {
        maria1.classList.remove("incorrect");
      }
    });
  }
  if (maria2.value.toLowerCase() == "llamo") {
    maria2.classList.add("correct");
    if (maria2.classList.contains("incorrect")) {
      maria2.classList.remove("incorrect");
    }
  } else {
    maria2.classList.add("incorrect");
    maria2.addEventListener("click", () => {
      if (maria2.classList.contains("incorrect")) {
        maria2.classList.remove("incorrect");
      }
    });
  }
  if (maria3.value.toLowerCase() == "maria") {
    maria3.classList.add("correct");
    if (maria3.classList.contains("incorrect")) {
      maria3.classList.remove("incorrect");
    }
  } else {
    maria3.classList.add("incorrect");
    maria3.addEventListener("click", () => {
      if (maria3.classList.contains("incorrect")) {
        maria3.classList.remove("incorrect");
      }
    });
  }
  if (maria4.value.toLowerCase() == "años") {
    maria4.classList.add("correct");
    if (maria4.classList.contains("incorrect")) {
      maria4.classList.remove("incorrect");
    }
  } else {
    maria4.classList.add("incorrect");
    maria4.addEventListener("click", () => {
      if (maria4.classList.contains("incorrect")) {
        maria4.classList.remove("incorrect");
      }
    });
  }
}
function respuestasTarjetas2() {
  if (diana1.value.toLowerCase() == "mi") {
    diana1.classList.add("correct");
    if (diana1.classList.contains("incorrect")) {
      diana1.classList.remove("incorrect");
    }
  } else {
    diana1.classList.add("incorrect");
    diana1.addEventListener("click", () => {
      if (diana1.classList.contains("incorrect")) {
        diana1.classList.remove("incorrect");
      }
    });
  }
  if (diana2.value.toLowerCase() == "nombre") {
    diana2.classList.add("correct");
    if (diana2.classList.contains("incorrect")) {
      diana2.classList.remove("incorrect");
    }
  } else {
    diana2.classList.add("incorrect");
    diana2.addEventListener("click", () => {
      if (diana2.classList.contains("incorrect")) {
        diana2.classList.remove("incorrect");
      }
    });
  }
  if (diana3.value.toLowerCase() == "es") {
    diana3.classList.add("correct");
    if (diana3.classList.contains("incorrect")) {
      diana3.classList.remove("incorrect");
    }
  } else {
    diana3.classList.add("incorrect");
    diana3.addEventListener("click", () => {
      if (diana3.classList.contains("incorrect")) {
        diana3.classList.remove("incorrect");
      }
    });
  }
  if (diana4.value.toLowerCase() == "diana") {
    diana4.classList.add("correct");
    if (diana4.classList.contains("incorrect")) {
      diana4.classList.remove("incorrect");
    }
  } else {
    diana4.classList.add("incorrect");
    diana4.addEventListener("click", () => {
      if (diana4.classList.contains("incorrect")) {
        diana4.classList.remove("incorrect");
      }
    });
  }
  if (diana5.value.toLowerCase() == "tengo") {
    diana5.classList.add("correct");
    if (diana5.classList.contains("incorrect")) {
      diana5.classList.remove("incorrect");
    }
  } else {
    diana5.classList.add("incorrect");
    diana5.addEventListener("click", () => {
      if (diana5.classList.contains("incorrect")) {
        diana5.classList.remove("incorrect");
      }
    });
  }
  if (elena1.value.toLowerCase() == "soy") {
    elena1.classList.add("correct");
    if (elena1.classList.contains("incorrect")) {
      elena1.classList.remove("incorrect");
    }
  } else {
    elena1.classList.add("incorrect");
    elena1.addEventListener("click", () => {
      if (elena1.classList.contains("incorrect")) {
        elena1.classList.remove("incorrect");
      }
    });
  }
  if (elena2.value.toLowerCase() == "elena") {
    elena2.classList.add("correct");
    if (elena2.classList.contains("incorrect")) {
      elena2.classList.remove("incorrect");
    }
  } else {
    elena2.classList.add("incorrect");
    elena2.addEventListener("click", () => {
      if (elena2.classList.contains("incorrect")) {
        elena2.classList.remove("incorrect");
      }
    });
  }
  if (elena3.value.toLowerCase() == "años") {
    elena3.classList.add("correct");
    if (elena3.classList.contains("incorrect")) {
      elena3.classList.remove("incorrect");
    }
  } else {
    elena3.classList.add("incorrect");
    elena3.addEventListener("click", () => {
      if (elena3.classList.contains("incorrect")) {
        elena3.classList.remove("incorrect");
      }
    });
  }
}

function respuestasTarjetas() {
  respuestasTarjetas1();
  respuestasTarjetas2();
}
