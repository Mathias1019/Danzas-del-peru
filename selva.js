// ===============================
// Slideshow Selva
// ===============================

const img = document.getElementById("imagen");

const imagenes = [
  "selva/ayahuasca.jpg",
      "selva/el Buri Buriti.jpg",
      "selva/el Paucar.jpg",
      "selva/la Danza Amazonica.jpg",
      "selva/la Danza de la Boa.jpg"
      ,"selva/la Huambisa.jpg",
      "selva/la-Cajada.jpg",
      "selva/la-Fiesta-de-la-Anaconda.jpg",
      "selva/Orgullo-Shipibo.jpg",
      "selva/Sitaracuy.jpg"
    ];

let indice = 0;

function mostrarSiguienteFoto() {
  img.style.opacity = 0;

  setTimeout(() => {
    img.src = imagenes[indice];
    img.style.opacity = 1;
    indice = (indice + 1) % imagenes.length;
  }, 500);
}

mostrarSiguienteFoto();
setInterval(mostrarSiguienteFoto, 3000);

