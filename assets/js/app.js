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

let personajesMostrados = personajes;

const contenedor = document.querySelector("#contenedorPersonajes");
const inputFiltro = document.querySelector("#filtro");
const btnFiltrar = document.querySelector("#btnFiltrar");

function renderizarPersonajes(listaPersonajes) {
  contenedor.innerHTML = "";

  listaPersonajes.forEach((personaje) => {
    const { nombre, imagen, id } = personaje;

    contenedor.innerHTML += `
      <div class="col-md-4">
        <div class="card">

          <img src="${imagen}" class="card-img-top">

          <div class="card-body">
            <h5 class="card-title">${nombre}</h5>

            <button class="btn btn-danger" data-id="${id}">
              Eliminar
            </button>

          </div>
        </div>
      </div>
    `;
  });
}

/* render inicial */
renderizarPersonajes(personajesMostrados);

/* FILTRO */
btnFiltrar.addEventListener("click", () => {
  const textoBuscado = inputFiltro.value.toLowerCase();

  personajesMostrados = personajes.filter((personaje) =>
    personaje.nombre.toLowerCase().includes(textoBuscado),
  );

  renderizarPersonajes(personajesMostrados);
});

/* FORMULARIO */
const formPersonaje = document.querySelector("#formPersonaje");
const inputNombre = document.querySelector("#nombre");
const inputImagen = document.querySelector("#imagen");

formPersonaje.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const nombre = inputNombre.value;
  const imagen = inputImagen.value;

  const nuevoPersonaje = {
    id: Date.now(),
    nombre,
    imagen,
  };

  personajes.push(nuevoPersonaje);

  personajesMostrados = personajes;

  renderizarPersonajes(personajesMostrados);

  inputNombre.value = "";
  inputImagen.value = "";
});

/* ELIMINAR */
contenedor.addEventListener("click", (evento) => {
  if (evento.target.classList.contains("btn-danger")) {
    const id = Number(evento.target.dataset.id);

    personajesMostrados = personajesMostrados.filter((p) => p.id !== id);

    renderizarPersonajes(personajesMostrados);
  }
});
