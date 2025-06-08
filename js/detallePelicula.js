const parametroURL = new URLSearchParams(window.location.search);
const id = parametroURL.get("cod");

const peliculasCreadas = JSON.parse(localStorage.getItem("agendaPeliculas"));
const peliculaBuscada = peliculasCreadas.find((pelicula) => pelicula.id === id);
const card = document.querySelector(".card");

card.innerHTML = `<img src="${peliculaBuscada.imagen}" class="imagenPelicula" alt="imagen de pelicula ${peliculaBuscada.nombre}" />
          <div class="card-body">
            <button class="btn btn-tertiary d-flex justify-content-center w-100 bg-success"><i class="bi bi-skip-start-circle fs-1"></i></button>
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
