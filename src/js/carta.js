const tapas_button = document.querySelector('#tapas-button');
const tapas_container = document.querySelector('#tapas-container');
const tapas = document.querySelector('#tapas');


tapas_button.addEventListener('click', async () => {
    const arrow = tapas_button.querySelector('i');
    tapas_container.classList.toggle('hidden');
    tapas_button.classList.toggle('text-white');
    tapas_button.classList.toggle('bg-red-700');
    arrow.classList.toggle('fa-arrow-up');

    if (tapas.innerHTML == "") {
        try {
            const response = await fetch('/src/json/dataTapas.JSON');
            const dataTapas = await response.json();

            for (const tapa of dataTapas) {
                let htmlProducto = generarHtmlProducto(tapa.url, tapa.nombre, tapa.precio);
                tapas.innerHTML += htmlProducto;
            }
        } catch (error) {
            console.error('Error fetching or parsing JSON:', error);
        }
    }
})

function generarHtmlProducto(url, nombre, precio) {
    const platoHTML = `
            <div class="group">
                <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                    <img src=${url} 
                                    alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                                    class="h-full w-full object-cover object-center group-hover:opacity-75">
                </div>
                <h3 class="mt-4 text-sm text-gray-700">${nombre}</h3>
                <p class="mt-1 text-lg font-medium text-gray-900">${precio}</p>
            </div>`;

    return platoHTML;
}