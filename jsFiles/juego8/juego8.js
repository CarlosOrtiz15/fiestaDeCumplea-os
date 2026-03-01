document.addEventListener('DOMContentLoaded', () => {    

  const btnVerificar = document.getElementById('btn-verificar-ei');
  const btnmuyBien = document.getElementById('btn-muyBienEI');
  const bravo = "https://www.youtube.com/embed/GEIR6rdUNUM";

  btnVerificar.addEventListener('click', () => {
    //iframe.src = bravo;
    btnmuyBien.style.display = "block"
  });

});