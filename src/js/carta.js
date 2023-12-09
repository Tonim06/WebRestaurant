const tapas_button = document.querySelector('#tapas-button');
const tapas_container = document.querySelector('#tapas-container');
const tapas = document.querySelector('#tapas');


tapas_button.addEventListener('click', async () => {
    const arrow = tapas_button.querySelector('i');
    tapas_container.classList.toggle('hidden');
    tapas_button.classList.toggle('text-white');
    tapas_button.classList.toggle('bg-red-900');
    arrow.classList.toggle('fa-arrow-up');

    if (tapas.innerHTML == "") {
        try {
            const response = await fetch('/src/json/dataTapas.JSON');
            const dataTapas = await response.json();

            for (const tapa of dataTapas) {
                let htmlProducto = generarHtmlProducto(tapa);
                tapas.innerHTML += htmlProducto;
            }
        } catch (error) {
            console.error('Error fetching or parsing JSON:', error);
        }
    }
})

function generarHtmlProducto(tapa) {
    const platoHTML = `
            <div class="group">
                <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                    <img src=${tapa.url} 
                        alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                        class="h-full w-full object-cover object-center group-hover:opacity-75">
                </div>
                <h3 class="mt-4 text-gray-700 font-bold">${tapa.nombre}</h3>
                <p class="text-sm text-gray-500">(${tapa.ingredientes})<p>
                <p class="text-sm text-red-700">${tapa.alergenos}<p>
                <p class="mt-1 text-lg text-gray-900 font-bold">${tapa.precio.toFixed(2)}€</p>
            </div>`;

    return platoHTML;
}