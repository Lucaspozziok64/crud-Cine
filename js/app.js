import Pelicula from "./classPelicula.js";
//Funciones
const crearPelicula = () => {
  const nuevaPelicula = new Pelicula(
    inputNombre.value,
    inputGenero.value,
    inputAnio.value,
    inputImagen.value
  );
  console.log(nuevaPelicula);
  peliculasCreadas.push(nuevaPelicula);
  guardarLocalStorage();
  limpiarFormulario();
  creandoPelicula = true;

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });
  Toast.fire({
    icon: "success",
    title: "Pelicula Agregada",
  });
  cerrarModal();
  actualizarTabla()
};

const guardarLocalStorage = () => {
  localStorage.setItem("agendaPeliculas", JSON.stringify(peliculasCreadas));
};

const limpiarFormulario = () => {
  formularioPelicula.reset();
};

const mostrarPeliculaTabla = (pelicula, indice) => {
  console.log("Aqui deberia agregar lgica para mostrar la pelicula creada");

  console.log(tablaPeliculas);
  tablaPeliculas.innerHTML += `<tr>
              <td>${indice}</td>
              <td>${pelicula.nombre}</td>
              <td>${pelicula.genero}</td>
              <td>${pelicula.anio}</td>
              <td>
                <button class="btn btn-warning mx-1" onClick="prepararPelicula('${pelicula.id}')">Editar</button
                ><button class="btn btn-danger mx-1" onClick="eliminarPelicula('${pelicula.id}')">Eliminar</button
                ><button class="btn btn-primary mx-1" onClick="verPelicula('${pelicula.id}')">Ver</button>
              </td>
            </tr>`;
};

const cargarDatosTabla = () => {
  if (peliculasCreadas.lenght !== 0) {
    peliculasCreadas.map((pelicula, indice) =>
      mostrarPeliculaTabla(pelicula, indice + 1)
    );
  }
};

window.eliminarPelicula = (id) => {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger",
    },
    buttonsStyling: false,
  });
  swalWithBootstrapButtons
    .fire({
      title: "Estas seguro de eliminar esta pelicula?",
      text: "¡No podrás revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Si, Eliminar!",
      cancelButtonText: "No, cancelar!",
      reverseButtons: true,
    })
    .then((result) => {
      if (result.isConfirmed) {
        console.log("Aqui deberia elimiinar pelicula por ID");
        const peliculaBuscada = peliculasCreadas.findIndex(
          (pelicula) => pelicula.id === id
        );
        peliculasCreadas.splice(peliculaBuscada, 1);
        console.log("Aqui deberia eliminar la pelicula del localstorage");
        guardarLocalStorage();
        actualizarTabla()
        swalWithBootstrapButtons.fire({
          title: "Elimanado!",
          text: "La pelicula ha sido eliminada exitosamente",
          icon: "success",
        });
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire({
          title: "Cancelaste",
          text: "La pelicula sigue estando disponible :)",
          icon: "error",
        });
      }
    });
};

window.prepararPelicula = (id) => {
  console.log("Aqui deberia abrir el modal con los valores del campo");
  abirModal();
  const datosPelicula = peliculasCreadas.find((producto) => producto.id === id);
  inputNombre.value = datosPelicula.nombre;
  inputGenero.value = datosPelicula.genero;
  inputAnio.value = datosPelicula.anio;
  inputImagen.value = datosPelicula.imagen;

  idPeliculaEditar = id;
  creandoPelicula = false;
};

const abirModal = () => {
  modalPelicula.show();
};

const editarPelicula = () => {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger",
    },
    buttonsStyling: false,
  });
  swalWithBootstrapButtons
    .fire({
      title: "Estas seguro de editar esta pelicula?",
      text: "¡No podrás revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Si, editar!",
      cancelButtonText: "No, cancelar!",
      reverseButtons: true,
    })
    .then((result) => {
      if (result.isConfirmed) {
        const posicionPelicula = peliculasCreadas.findIndex(
          (pelicula) => pelicula.id === idPeliculaEditar
        );
        peliculasCreadas[posicionPelicula].nombre = inputNombre.value;
        peliculasCreadas[posicionPelicula].genero = inputGenero.value;
        peliculasCreadas[posicionPelicula].anio = inputAnio.value;
        peliculasCreadas[posicionPelicula].imagen = inputImagen.value;

        guardarLocalStorage();
        limpiarFormulario();
        cerrarModal();
        actualizarTabla()

        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          },
        });
        Toast.fire({
          icon: "success",
          title: "Pelicula Editada",
        });
      }
    });
};

const cerrarModal = () => {
  modalPelicula.hide();
};

const actualizarTabla = () => {

  tablaPeliculas.innerHTML = "";
  peliculasCreadas.forEach((pelicula, indice)=> { mostrarPeliculaTabla(pelicula, indice + 1)})
}

window.verPelicula = (id) => {
  console.log('Estoy invocando la funcion ver Pelicula')
  window.location.href = './pages/detallePelicula.html?cod=' + id;
}

//Variables
const formularioPelicula = document.getElementById("formularioPelicula");
const inputNombre = document.querySelector("#inputNombre");
const inputGenero = document.querySelector("#inputGenero");
const inputAnio = document.querySelector("#inputAño");
const inputImagen = document.querySelector("#inputImagen");
const peliculasCreadas =
  JSON.parse(localStorage.getItem("agendaPeliculas")) || [];
const tablaPeliculas = document.querySelector("tbody");
const modalPelicula = new bootstrap.Modal(
  document.getElementById("modalPelicula")
);
const btnAgregar = document.querySelector(".btn-success");
let creandoPelicula = true;
let idPeliculaEditar = null;

//Manejadores de eventos
btnAgregar.addEventListener("click", abirModal);
formularioPelicula.addEventListener("submit", (e) => {
  e.preventDefault();
  if (creandoPelicula) {
    crearPelicula();
    cerrarModal();
  } else {
    editarPelicula();
  }
});

cargarDatosTabla();
