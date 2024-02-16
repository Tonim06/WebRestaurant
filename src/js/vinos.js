const vinos_section = document.querySelector('#vinos_section');

obtenerVinos();

async function obtenerVinos() {
    const response = await fetch('./json/dataVinos.JSON');
    const dataVinos = await response.json();

    const categorias = Object.keys(dataVinos);

    categorias.forEach((categoria, index) => {
        const vinosCategoria = dataVinos[categoria];
        vinos_section.innerHTML += generarTituloCategoria(categoria);
        const vinos_containers = document.querySelectorAll('.vinos_container');
      
        vinosCategoria.forEach(vino => {
          let htmlVino = generarHtmlProducto(vino);
          vinos_containers[index].innerHTML += htmlVino;
        });
      });
}

function generarTituloCategoria(categoria) {
    const categoriaHTML = `
        <div class="vinos_container bg-gray-200 w-10/12 mt-10 py-10 rounded-lg flex justify-between items-center flex-col">
            <div>
                <h2 class="text-4xl font-bold text-center">${categoria}</h2>
            </div>
        </div>`;

    return categoriaHTML;
}

function generarHtmlProducto(vino) {
    const platoHTML = `
            <div class="w-10/12 p-2 rounded-lg flex justify-between items-center">
                <div>
                    <h3 class="text-sm font-bold">${vino.nombre}</h3>
                    <p class="text-xs text-red-700">${vino.bodega}</p>
                </div>
                <div>
                    <p class="mt-1 text-lg text-gray-900 font-bold">${vino.precio.toFixed(2)}€</p>
                </div>
            </div>`;

    return platoHTML;
}

