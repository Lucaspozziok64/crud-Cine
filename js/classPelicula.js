export default class Pelicula {
  #id;
  #nombre;
  #genero;
  #anio;
  #imagen;
  constructor(nombre, genero, anio, imagen) {
    this.#id = crypto.randomUUID();
    this.#nombre = nombre;
    this.#genero = genero;
    this.#anio = anio;
    this.#imagen = imagen;
  }

  //METODOS GETTERS
  get id() {
    return this.#id;
  }

  get nombre() {
    return this.#nombre;
  }

  get genero() {
    return this.#genero;
  }

  get anio() {
    return this.#anio;
  }

  get imagen() {
    return this.#imagen;
  }

  //METODOS SETTERS

  set nombre(nuevoNombre) {
    this.#nombre = nuevoNombre;
  }

  set genero(nuevoGenero) {
    this.#genero = nuevoGenero;
  }

  set anio(nuevoAnio) {
    this.#anio = nuevoAnio;
  }

  set imagen(nuevoImagen) {
    this.#imagen = nuevoImagen;
  }

  //METODO PARA STRINGIFY
  toJSON() {
    return {
      id: this.id,
      nombre: this.nombre,
      genero: this.genero,
      anio: this.anio,
      imagen: this.imagen
    };
  }
}
