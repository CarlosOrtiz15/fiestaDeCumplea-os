// scripts.js
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section");
  const dots = document.querySelectorAll(".dot");
  const menuButtons = document.querySelectorAll(".menuButton");
  const menuBtn = document.getElementById("menuBtn");
  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");
  const controls = document.getElementById("controles");
  const nextContainer = document.getElementById("siguienteContenedor");
  const prevContainer = document.getElementById("regresarContenedor");
  let currentIndex = 0;

  //ESTA PARTE ENSEÑA EL PRINCIPIO PARA BUSCAR UNA SECCIÓN POR CLASE
  // console.log(sections)
  // sections.forEach(element => {
  //   if(element.classList[1] == "ordenar") {
  //     console.log("ORDENÉ")
  //   }
  // })

  function ocultarBotones() {
    controls.style.display = "none";
  }
  //funcion para que los botones de siguiente, regresar y home,
  //no aparezcan en la primera seccion
  function actualizarBotones() {
    if (currentIndex === sections.length - 1 || currentIndex <= 1) {
      nextBtn.style.display = "none";
      nextContainer.style.display = "none";
    } else {
      nextBtn.style.display = "flex";
      nextContainer.style.display = "flex";
    }

    if (currentIndex <= 2) {
      prevBtn.style.display = "none";
      prevContainer.style.display = "none";
    } else {
      prevBtn.style.display = "flex";
      prevContainer.style.display = "flex";
    }

    if (currentIndex <= 1) {
      controls.style.display = "none";
    } else {
      controls.style.display = "flex";
    }
}

  function showSection(index) {
    sections.forEach((section, i) => {
      section.classList.toggle("active", i === index);
      dots[i].classList.toggle("active", i === index);
    });
    controls.style.display = "flex";
    actualizarBotones();
  }

  function nextSection() {
    currentIndex = (currentIndex + 1) % sections.length;
    showSection(currentIndex);
    window.scrollTo({
      top: 0,
    });
  }
  function prevSection() {
    currentIndex = (currentIndex - 1) % sections.length;
    showSection(currentIndex);
    window.scrollTo({
      top: 0,
    });
  }
  function menuSection() {
    currentIndex = 0;
    showSection(currentIndex);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    controls.style.display = "none";
  }

  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      const targetIndex = Number(dot.dataset.index);
      currentIndex = targetIndex;
      showSection(currentIndex);
    });
  });


  menuButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetIndex = Number(button.dataset.index); // lee data-index="X"
      currentIndex = targetIndex;
      showSection(currentIndex);
      window.scrollTo({ top: 0, behavior: "auto" });
    });
  });


  menuBtn.addEventListener("click", menuSection);
  nextBtn.addEventListener("click", nextSection);
  prevBtn.addEventListener("click", prevSection);

  // Inicializar
  showSection(currentIndex);
  ocultarBotones();
});