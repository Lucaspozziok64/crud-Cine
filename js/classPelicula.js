class Pelicula {
  #id;
  #nombre;
  #genero;
  #anio;
  #imagen;
  constructor(nombre, genero, anio, imagen) {
    this.#id = crypto.randomUUID;
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
}
