console.log("Script cargado correctamente");
document.addEventListener('DOMContentLoaded', () => {    

  const btnVerificar = document.getElementById('btn-verificar-EI');
  const btnmuyBien = document.getElementById("btn-muyBienEI")
  
  function verbtnmuybien() {
    btnmuyBien.style.display = "block";
}
  
    btnVerificar.addEventListener('click', () => {
    verbtnmuybien();
    console.log("btn")
  });
});
