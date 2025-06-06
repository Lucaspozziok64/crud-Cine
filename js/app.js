import Pelicula from "./classPelicula.js";
//Funciones
const crearPelicula = () => {

  const nuevaPelicula = new Pelicula(inputNombre.value, inputGenero.value, inputAnio.value);
  console.log(nuevaPelicula)
  peliculasCreadas.push(nuevaPelicula)
  guardarLocalStorage()
}

const guardarLocalStorage = () => {
  localStorage.setItem('agendaPeliculas', JSON.stringify(peliculasCreadas));
}

//Variables
const formularioPelicula = document.getElementById("formularioPelicula");
const inputNombre = document.querySelector('#inputNombre');
const inputGenero = document.querySelector('#inputGenero');
const inputAnio = document.querySelector('#inputAño');
const peliculasCreadas = JSON.parse(localStorage.getItem('agendaPeliculas')) || []

//Manejadores de eventos
formularioPelicula.addEventListener("submit", (e) => {
  e.preventDefault();
  crearPelicula()
});
