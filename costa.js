
    // Lista de imágenes
    const imagenes = [
      "costa/festejo.jpg",
      "costa/alcatraz.jpg",
      "costa/el_son_de_los_Diablos.jpg",
      "costa/el_zapateo.jpg",
      "costa/lamigo_o_landero.jpg",
      "costa/lando.jpg",
      "costa/marinera.jpg",
      "costa/tondero.jpg",
      "costa/vals_criollo.jpg",
      "costa/zamacueca.jpg"
  
    ];

    let indice = 0;
    const img = document.getElementById("imagen");

    function mostrarSiguienteFoto() {
      // Cambiar la imagen con opacidad
      img.style.opacity = 0;

      setTimeout(() => {
        img.src = imagenes[indice];
        img.style.opacity = 1;

        indice = (indice + 1) % imagenes.length; // volver al inicio al final
      }, 500);
    }

    // Mostrar la primera imagen al cargar
    mostrarSiguienteFoto();

    // Cambiar imagen cada 3 segundos
    setInterval(mostrarSiguienteFoto, 3000);
