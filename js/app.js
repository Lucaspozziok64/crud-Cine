import Pelicula from "./classPelicula.js";
//Funciones
const crearPelicula = () => {

  const nuevaPelicula = new Pelicula(inputNombre.value, inputGenero.value, inputAnio.value, inputImagen.value);
  console.log(nuevaPelicula)
  peliculasCreadas.push(nuevaPelicula)
  guardarLocalStorage()
  limpiarFormulario()
  creandoPelicula = true
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
                <button class="btn btn-warning mx-1" onClick="prepararPelicula('${pelicula.id}')">Editar</button
                ><button class="btn btn-danger mx-1" onClick="eliminarPelicula('${pelicula.id}')">Eliminar</button
                ><button class="btn btn-primary mx-1">Ver</button>
              </td>
            </tr>`
}

const cargarDatosTabla = () => {
  if(peliculasCreadas.lenght !== 0) {
    peliculasCreadas.map((pelicula, indice)=> mostrarPeliculaTabla(pelicula, indice + 1));
  }
}

window.eliminarPelicula = (id) => {
  console.log('Aqui deberia elimiinar pelicula por ID');
  const peliculaBuscada = peliculasCreadas.findIndex(
      (pelicula) => pelicula.id === id
    );
  peliculasCreadas.splice(peliculaBuscada, 1)
  console.log('Aqui deberia eliminar la pelicula del localstorage')
  guardarLocalStorage()
}

window.prepararPelicula = (id) => {
  console.log('Aqui deberia abrir el modal con los valores del campo');
  abirModal()
  const datosPelicula = peliculasCreadas.find((producto)=> producto.id === id);
  inputNombre.value = datosPelicula.nombre;
  inputGenero.value = datosPelicula.genero;
  inputAnio.value = datosPelicula.anio; 
  inputImagen.value = datosPelicula.imagen;

  idPeliculaEditar = id
  creandoPelicula = false  
}

const abirModal = () => {
  modalPelicula.show()
}

const editarPelicula = () => {

  const posicionPelicula = peliculasCreadas.findIndex((pelicula)=> pelicula.id === idPeliculaEditar)
  peliculasCreadas[posicionPelicula].nombre = inputNombre.value;
  peliculasCreadas[posicionPelicula].genero = inputGenero.value;
  peliculasCreadas[posicionPelicula].anio = inputAnio.value;
  peliculasCreadas[posicionPelicula].imagen = inputImagen.value;

  guardarLocalStorage()
  limpiarFormulario()
}

//Variables
const formularioPelicula = document.getElementById("formularioPelicula");
const inputNombre = document.querySelector('#inputNombre');
const inputGenero = document.querySelector('#inputGenero');
const inputAnio = document.querySelector('#inputAño');
const inputImagen = document.querySelector('#inputImagen');
const peliculasCreadas = JSON.parse(localStorage.getItem('agendaPeliculas')) || [];
const tablaPeliculas = document.querySelector('tbody');
const modalPelicula = new bootstrap.Modal(document.getElementById('modalPelicula'))
const btnAgregar = document.querySelector('.btn-success');
let creandoPelicula = true;
let idPeliculaEditar = null;

//Manejadores de eventos
btnAgregar.addEventListener('click', abirModal)
formularioPelicula.addEventListener("submit", (e) => {
  e.preventDefault();
  if(creandoPelicula) {
    creandoPelicula()
  } else {
    editarPelicula()
  }
});

cargarDatosTabla()
