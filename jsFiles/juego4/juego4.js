document.addEventListener("DOMContentLoaded", () => {
  const correct_count = document.getElementById("AciertosJ4");
  const incorrect_count = document.getElementById("ErroresJ4");

  const RPregunta1Si = document.getElementById("pregunta1Si");
  const RPregunta1No = document.getElementById("pregunta1No");
  const RPregunta2Si = document.getElementById("pregunta2Si");
  const RPregunta2No = document.getElementById("pregunta2No");
  const RPregunta3Si = document.getElementById("pregunta3Si");
  const RPregunta3No = document.getElementById("pregunta3No");
  const RPregunta4Si = document.getElementById("pregunta4Si");
  const RPregunta4No = document.getElementById("pregunta4No");
  function abrirModalConVideo(url) {
      const modal = document.getElementById("emergente");
      const iframe = document.querySelector("#emergente iframe");

      iframe.src = url;
      modal.style.display = "block";
  }

  const respuestasCorrectas = {
    pregunta1: false,
    pregunta2: true,
    pregunta3: false,
    pregunta4: false
  };

  const respuestasUsuario = {
    pregunta1: null,
    pregunta2: null,
    pregunta3: null,
    pregunta4: null
  };

  const botonesSeleccionados = {
    pregunta1: null,
    pregunta2: null,
    pregunta3: null,
    pregunta4: null
  };

  // Detectar clicks en botones
  const botones = document.querySelectorAll(".buttonSioNo");
  console.log("Botones encontrados:", botones.length); // para que veas en consola

  botones.forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.id; // ejemplo: "pregunta1Si"

      const pregunta = id.slice(0, 9); // "pregunta1"
      const respuesta = id.includes("Si"); // true o false

      // Guardar respuesta del usuario
      respuestasUsuario[pregunta] = respuesta;

      // Guardar botón seleccionado
      botonesSeleccionados[pregunta] = btn;

      // Quitar colores previos (por si cambia su elección)
      const grupo = document.querySelectorAll(`#${pregunta}Si, #${pregunta}No`);
      grupo.forEach(b => {
        b.style.backgroundColor = "";
        b.style.color = "";
        b.style.border = "";
      });
        btn.style.border = "3px solid blue";
      console.log("Click en:", id, "→", pregunta, respuesta);
    });
  });

  // Verificar respuestas
  document.getElementById("btn-verificar-4").addEventListener("click", () => {
    let aciertos = 0;
    let errores = 0;

    for (let pregunta in respuestasCorrectas) {
      const correcta = respuestasCorrectas[pregunta];
      const usuario = respuestasUsuario[pregunta];
      const btn = botonesSeleccionados[pregunta];

      if (!btn) {
        // No respondió → cuenta como error
        errores++;
        continue;
      }

      // Comparar respuestas
      if (usuario === correcta) {
        aciertos++;
        btn.style.backgroundColor = "green";
        btn.style.color = "white";

      } else {
        errores++;
        btn.style.backgroundColor = "red";
        btn.style.color = "white";
      }
    }

    // Mostrar resultados
    correct_count.textContent = aciertos;
    incorrect_count.textContent = errores;
    if(aciertos === 4) {
      abrirModalConVideo("https://www.youtube.com/embed/GEIR6rdUNUM");
    }
    document.querySelectorAll(".aciertosErroresMR").forEach(el => el.style.display = "block");
  });
});