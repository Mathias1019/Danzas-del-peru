// ===============================
// Slideshow Sierra
// ===============================

const img = document.getElementById("imagen");

const imagenes = [
  "sierra/Caporales.jpg",
  "sierra/Danza-de-Tijeras.jpg",
  "sierra/danza-el-Huayno.jpg",
  "sierra/Diablada.jpg",
  "sierra/huaconada.jpg",
  "sierra/Huaylash.jpg",
  "sierra/Pachahuara.jpg",
  "sierra/Sara Kutipay.jpg",
  "sierra/Tunantada.jpg",
  "sierra/Valicha.jpg"
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
