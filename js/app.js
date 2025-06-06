import Pelicula from "./classPelicula.js";
//Funciones
const crearPelicula = () => {

  const nuevaPelicula = new Pelicula(inputNombre.value, inputGenero.value, inputAnio.value);
  console.log(nuevaPelicula)
}


//Variables
const formularioPelicula = document.getElementById("formularioPelicula");
const inputNombre = document.querySelector('#inputNombre');
const inputGenero = document.querySelector('#inputGenero');
const inputAnio = document.querySelector('#inputAño');

//Manejadores de eventos
formularioPelicula.addEventListener("submit", (e) => {
  e.preventDefault();
  crearPelicula()
});
