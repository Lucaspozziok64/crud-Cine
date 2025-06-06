import Pelicula from "./classPelicula.js";
//Funciones
const crearPelicula = () => {

  const nuevaPelicula = new Pelicula(inputNombre.value, inputGenero.value, inputAnio.value);
  console.log(nuevaPelicula)
  peliculasCreadas.push(nuevaPelicula)
  guardarLocalStorage()
  limpiarFormulario()
}

const guardarLocalStorage = () => {
  localStorage.setItem('agendaPeliculas', JSON.stringify(peliculasCreadas));
}

const limpiarFormulario = () => {
  formularioPelicula.reset()
}

const mostrarPeliculaTabla = (pelicula, indice) => {
  console.log('Aqui deberia agregar lgica para mostrar la pelicula creada')

  console.log(tablaPeliculas);
  tablaPeliculas.innerHTML += `<tr>
              <td>${indice}</td>
              <td>${pelicula.nombre}</td>
              <td>${pelicula.genero}</td>
              <td>${pelicula.anio}</td>
              <td>
                <button class="btn btn-warning mx-1">Editar</button
                ><button class="btn btn-danger mx-1">Eliminar</button
                ><button class="btn btn-primary mx-1">Ver</button>
              </td>
            </tr>`
}

const cargarDatosTabla = () => {
  if(peliculasCreadas.lenght !== 0) {
    peliculasCreadas.map((pelicula, indice)=> mostrarPeliculaTabla(pelicula, indice + 1));
  }
}

//Variables
const formularioPelicula = document.getElementById("formularioPelicula");
const inputNombre = document.querySelector('#inputNombre');
const inputGenero = document.querySelector('#inputGenero');
const inputAnio = document.querySelector('#inputAño');
const peliculasCreadas = JSON.parse(localStorage.getItem('agendaPeliculas')) || [];
const tablaPeliculas = document.querySelector('tbody');

//Manejadores de eventos
formularioPelicula.addEventListener("submit", (e) => {
  e.preventDefault();
  crearPelicula()
});

cargarDatosTabla()
