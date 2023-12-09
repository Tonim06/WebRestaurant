const vinos_section = document.querySelector('#vinos_section');

obtenerVinos();

async function obtenerVinos() {
    const response = await fetch('/src/json/dataVinos.JSON');
    const dataVinos = await response.json();
    console.log(dataVinos);

    const categorias = Object.keys(dataVinos);

    categorias.forEach((categoria, index) => {
        const vinosCategoria = dataVinos[categoria];
        vinos_section.innerHTML += generarTituloCategoria(categoria);
        const vinos_containers = document.querySelectorAll('.vinos_container');
      
        vinosCategoria.forEach(vino => {
          let htmlVino = generarHtmlProducto(vino.nombre, vino.bodega, vino.precio);
          vinos_containers[index].innerHTML += htmlVino;
        });
      });
}

function generarTituloCategoria(categoria) {
    const categoriaHTML = `
        <div class="vinos_container bg-gray-200 w-10/12 mt-10 py-10 rounded-lg flex justify-between items-center flex-col">
            <div>
                <h2 class="text-4xl font-bold">${categoria}</h2>
            </div>
        </div>`;

    return categoriaHTML;
}

function generarHtmlProducto(nombre, bodega, precio) {
    const platoHTML = `
            <div class="w-10/12 p-2 rounded-lg flex justify-between items-center">
                <div>
                    <h3 class="mt-4 text-sm text-gray-700 font-bold">${nombre}</h3>
                    <p class="mt-4 text-sm text-red-700">${bodega}</p>
                </div>
                <div>
                    <p class="mt-1 text-lg font-medium text-gray-900">${precio.toFixed(2)}€</p>
                </div>
            </div>`;

    return platoHTML;
}