const personajes = [
  {
    id: 1,
    nombre: "A-Bomb",
    imagen:
      "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/1-a-bomb.jpg",
  },
  {
    id: 2,
    nombre: "Abe Sapien",
    imagen:
      "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/2-abe-sapien.jpg",
  },
  {
    id: 3,
    nombre: "Abin Sur",
    imagen:
      "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/3-abin-sur.jpg",
  },
  {
    id: 4,
    nombre: "Abomination",
    imagen:
      "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/4-abomination.jpg",
  },
  {
    id: 5,
    nombre: "Abraxas",
    imagen:
      "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/5-abraxas.jpg",
  },
];

const contenedor = document.querySelector("#contenedorPersonajes");
/* para poder modificar el div donde van las cards */

const inputFiltro = document.querySelector("#filtro");
/* para poder leer lo que escribe el usuario */
const btnFiltrar = document.querySelector("#btnFiltrar");
/* para detectar cuándo hace click */

function renderizarPersonajes(listaPersonajes) {
  contenedor.innerHTML = "";
  /* esto limpia el contenedor para no renderizar cards y que sigan las anteriores */

  listaPersonajes.forEach((personaje) => {
    const { nombre, imagen } = personaje;
    /* esto simplifica la estructura: const nombre = personaje.nombre; | const imagen = personaje.imagen; (desestructuracion) */

    contenedor.innerHTML += `
    <div class="col-md-4">
        <div class="card">

            <img src="${imagen}" clas="card-img-top">
            <div class="card-body">
                <h5 class="card-tittle">${nombre}</h5>

                <button class="btn btn-danger">
                    Eliminar
                </button>

            </div>
        </div>
    </div> `;
    /* esto recorre cada elemento del arreglo */
  });
}

renderizarPersonajes(personajes);

btnFiltrar.addEventListener("click", () => {
  const textoBuscado = inputFiltro.value.toLowerCase();

  const personajesFiltrados = personajes.filter((personaje) => {
    return personaje.nombre.toLowerCase().includes(textoBuscado);
  });

  renderizarPersonajes(personajesFiltrados);
  //   console.log(personajesFiltrados);
  console.log(textoBuscado);
  /* muestra el contenido de <input id="filtro"> */
});
