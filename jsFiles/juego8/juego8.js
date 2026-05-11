console.log("Script cargado correctamente");
document.addEventListener('DOMContentLoaded', () => {    

  const btnVerificar = document.getElementById('btn-verificar-EI');
  const btnmuyBien = document.getElementById("btn-muyBienEI")
  
    btnVerificar.addEventListener('click', () => {
    btnmuyBien.style.display = "block";
    console.log("btn")
  });
});
