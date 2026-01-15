//PARA AGREGAR CUALQUIER MODAL SE SIGUEN LAS SIGUIENTES INSTRUCCIONES:
//----------------------------------------------------------------
//Simplemente creas el botóon html de las manitas y lo pones en el lugar que mejor te parezca dentro del html, la plantilla es la siguiente:
/* <button class="iconlsmbutton" id="">
  <img
    src="./imgs/manitas.png"
    alt="Icono clickeable para traducción a lengua de señas mexicana"
  />
</button>; */
// y en el apartado id del button, le añades el nombre del modal que quieres que aparezca ahí
//Por facilidad decidimos empezar todos los nombres con "modal" y que tengan un nombre explícito de lo que dirá el modal
//una vez añadida la id del button, entra abajo en el diccionario de modales existentes y añade nombre del modal nuevo(key) y vinculo html del
//embebido de youtube(key). Cuando le das insertar en html a un video de youtube te da una etiqueta de iframe, el link embebido está dentro
//de esa etiqueta de iframe, solo copiala y pegala como value de la key.
//Ese es todo el proceso para añadir un nuevo modal.
//ALGUNOS MODALES YA ESTÁN DEFINIDOS, PERO DADO QUE AL MOMENTO DE ENTREGAR ESTE CÓDIGO AÚN NO SE GRABAN LOS VIDEOS, EL LINK EMBEBIDO ESTÁ EN BLANCO
//FAVOR DE REVISAR SI EL MODAL QUE INTENTA INGRESAR YA ESTÁ DEFINIDO PERO CON UN ENLACE VACÍO.
window.onload = function () {
  var modal = document.getElementById("emergente");
  const buttons = document.querySelectorAll('[id*="modal"]');
  var span = document.getElementById("span1");

  //   console.log(buttons);
  //   console.log("CARGARON");

var modalesExistentes = {
    modalverificarRespuestas: "https://www.youtube.com/embed/PMZdq8qryPY?si=667Sy6NGvO72eoPF",
    modalLoHicisteBien: "https://www.youtube.com/embed/GEIR6rdUNUM?si=0o9SiLrXfnYwT2Ir",
    modalAciertos: "https://www.youtube.com/embed/3wBzN_NTDto?si=YKwPcxb7BJ13IjU-",
    modalErrores: "https://www.youtube.com/embed/OUSj2zRb_EE?si=8clQQSZxKd1etYq_",
    modalRegresar: "https://www.youtube.com/embed/pV3O0vJA_84?si=DYpgJJZQIbpGbotV",
    modalSiguiente: "https://www.youtube.com/embed/WHciLN4oqZk?si=ouUWc4obec4CltLn",
    modalfiestadecumpleaños: "https://www.youtube.com/embed/uYYH2l-e9g8?si=AfeUNjG55b0bi970",
    modalcualconcual: "https://www.youtube.com/embed/HryACyFC81k?si=AIDFBEKKhTtWmZQM",
    modalRelacionalaimagenconlapalabra: "https://www.youtube.com/embed/_VTmeZbN0QQ?si=Z2cKGQh1isbImDlM",
    modalCompletaLaInvitacion: "https://www.youtube.com/embed/BgxHb2Gp8RY ",
    modalObservaLaInvitacionYColocaDondeCorresponda: "https://www.youtube.com/embed/BgxHb2Gp8RY ",
    modalCambiaLaInvitacion: "https://www.youtube.com/embed/_vAjL3Bz9iE ",
    modalLafiestaYaNoSeraEnSuCasa: "https://www.youtube.com/embed/nuo6SwC1lRY ",
    modalMiraYResponde: "https://www.youtube.com/embed/d6LLtJSpuoA",
    modalASofiaLeLlegoUnaNuevaInvitacion: "https://wwww.youtube.com/embed/tI1aIw6T3DI",
    modalEscribeLaHora: "https://www.youtube.com/embed/0y7GcLnJKEs"
  };
  // Al hacer clic en el botón, mostrar el modal
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      var idButton = this.id;
      var videoUrl = modalesExistentes[idButton];
      var iframe = document.querySelector("#emergente iframe");
      iframe.src = videoUrl;
      modal.style.display = "block";
    });
  });

  // Al hacer clic en la "X", cerrar el modal
  span.onclick = function () {
    modal.style.display = "none";
  };

  // Al hacer clic fuera del modal, cerrarlo
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
};
