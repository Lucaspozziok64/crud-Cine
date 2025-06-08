const parametroURL = new URLSearchParams(window.location.search);
const id = parametroURL.get("cod");

const botonReproducir = () => {
  Swal.fire({
  title: "Esta opcion aun no esta disponible, esta en desarrollo",
  text: "Gracias por tu visita!",
  icon: "warning"
});
}

const peliculasCreadas = JSON.parse(localStorage.getItem("agendaPeliculas"));
const peliculaBuscada = peliculasCreadas.find((pelicula) => pelicula.id === id);
const card = document.querySelector(".card");
const formBuscar = document.querySelector("form");
const btnReproducir = document.querySelector('.btn-tertiary');

formBuscar.addEventListener("submit", (e) => {
  e.preventDefault();
});

if (peliculaBuscada.imagen === "") {
  console.log(
    "Aqui deberia agregar el contenedor de la pelicula cons mensjae de que no cargo imagen"
  );
  card.innerHTML = `<img src="${peliculaBuscada.imagen}" class="imagenPelicula" alt="imagen de pelicula ${peliculaBuscada.nombre}" />
  <div class="overlay-text">
    <p class="text-danger text-center">Si quieres ver la imagen de tu pelicula vuelve al <strong>inicio</strong>, <strong>edita</strong> y <strong>carga</strong> una imagen valida</p>
  </div>
          <div class="card-body">
            <button class="btn btn-tertiary d-flex justify-content-center w-100 bg-success" onClick="botonReproducir()"><i class="bi bi-skip-start-circle fs-1"></i></button>
            <ul>
              <li>Nombre: <strong>${peliculaBuscada.nombre}🎥</strong></li>
              <li>Genero: <strong>${peliculaBuscada.genero}</strong></li>
              <li>Año publicacion: <strong>${peliculaBuscada.anio}</strong></li>
            <h5 class="card-title"></h5>
            </ul>
            <p class="card-text">
              <small class="text-body-secondary">Última actualización hace 3 minutos</small>
            </p>
          </div>`;
} else {
  card.innerHTML = `<img src="${peliculaBuscada.imagen}" class="imagenPelicula" alt="imagen de pelicula ${peliculaBuscada.nombre}" />
          <div class="card-body">
            <button class="btn btn-tertiary d-flex justify-content-center w-100 bg-success" onClick="botonReproducir()"><i class="bi bi-skip-start-circle fs-1"></i></button>
            <ul>
              <li>Nombre: <strong>${peliculaBuscada.nombre}🎥</strong></li>
              <li>Genero: <strong>${peliculaBuscada.genero}</strong></li>
              <li>Año publicacion: <strong>${peliculaBuscada.anio}</strong></li>
            <h5 class="card-title"></h5>
            </ul>
            <p class="card-text">
              <small class="text-body-secondary">Última actualización hace 3 minutos</small>
            </p>
          </div>`;
}
