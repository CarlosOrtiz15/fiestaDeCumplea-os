let javier = document.getElementById("javierTengo");
let maria = document.getElementById("mariaTengo");
let carlos1 = document.getElementById("soyCarlos");
let carlos2 = document.getElementById("carlostengo");
let diana11 = document.getElementById("miDiana");
let diana22 = document.getElementById("nombreDiana");
let diana33 = document.getElementById("esDiana");
let diana44 = document.getElementById("dianaTengo");

function verificarEdad1() {
  if (javier.value === "tengo" || javier.value === "Tengo") {
    javier.classList.add("correct");
    if (javier.classList.contains("incorrect")) {
      javier.classList.remove("incorrect");
    }
  } else {
    javier.classList.add("incorrect");
    javier.addEventListener("click", () => {
      if (javier.classList.contains("incorrect")) {
        javier.classList.remove("incorrect");
      }
    });
  }
  if (maria.value === "tengo" || maria.value === "Tengo") {
    maria.classList.add("correct");
    if (maria.classList.contains("incorrect")) {
      maria.classList.remove("incorrect");
    }
  } else {
    maria.classList.add("incorrect");
    maria.addEventListener("click", () => {
      if (maria.classList.contains("incorrect")) {
        maria.classList.remove("incorrect");
      }
    });
  }
}
function verificarEdad2() {
  if (diana11.value === "mi" || diana11.value === "Mi") {
    diana11.classList.add("correct");
    if (diana11.classList.contains("incorrect")) {
      diana11.classList.remove("incorrect");
    }
  } else {
    diana11.classList.add("incorrect");
    diana11.addEventListener("click", () => {
      if (diana11.classList.contains("incorrect")) {
        diana11.classList.remove("incorrect");
      }
    });
  }
  if (diana22.value === "nombre" || diana22.value === "NOMBRE") {
    diana22.classList.add("correct");
    if (diana22.classList.contains("incorrect")) {
      diana22.classList.remove("incorrect");
    }
  } else {
    diana22.classList.add("incorrect");
    diana2.addEventListener("click", () => {
      if (diana22.classList.contains("incorrect")) {
        diana22.classList.remove("incorrect");
      }
    });
  }
  if (diana33.value === "ES" || diana33.value === "es") {
    diana33.classList.add("correct");
    if (diana33.classList.contains("incorrect")) {
      diana33.classList.remove("incorrect");
    }
  } else {
    diana33.classList.add("incorrect");
    diana33.addEventListener("click", () => {
      if (diana33.classList.contains("incorrect")) {
        diana33.classList.remove("incorrect");
      }
    });
  }
  if (diana44.value === "tengo" || diana44.value === "Tengo") {
    diana44.classList.add("correct");
    if (diana44.classList.contains("incorrect")) {
      diana44.classList.remove("incorrect");
    }
  } else {
    diana44.classList.add("incorrect");
    diana44.addEventListener("click", () => {
      if (diana44.classList.contains("incorrect")) {
        diana44.classList.remove("incorrect");
      }
    });
  }
  if (carlos1.value === "soy" || carlos1.value === "Soy") {
    carlos1.classList.add("correct");
    if (carlos1.classList.contains("incorrect")) {
      carlos1.classList.remove("incorrect");
    }
  } else {
    carlos1.classList.add("incorrect");
    carlos1.addEventListener("click", () => {
      if (carlos1.classList.contains("incorrect")) {
        carlos1.classList.remove("incorrect");
      }
    });
  }
  if (carlos2.value === "tengo" || carlos2.value === "Tengo") {
    carlos2.classList.add("correct");
    if (carlos2.classList.contains("incorrect")) {
      carlos2.classList.remove("incorrect");
    }
  } else {
    carlos2.classList.add("incorrect");
    carlos2.addEventListener("click", () => {
      if (carlos2.classList.contains("incorrect")) {
        carlos2.classList.remove("incorrect");
      }
    });
  }
}

function verificarEdad() {
  verificarEdad1();
  verificarEdad2();
}
