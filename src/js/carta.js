const tapas_button = document.querySelector('#tapas-button');
const tapas_container = document.querySelector('#tapas-container');
const tapas = document.querySelector('#tapas');

tapas_button.addEventListener('click', async () => {
    event.preventDefault();
    
    const arrow = tapas_button.querySelector('i');
    tapas_container.classList.toggle('hidden');
    tapas_button.classList.toggle('text-white');
    tapas_button.classList.toggle('bg-red-900');
    arrow.classList.toggle('fa-arrow-up');

    if (tapas.innerHTML == "") {
        try {
            const response = await fetch('./dataTapas.JSON');
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

const pescados_button = document.querySelector('#pescados-button');
const pescados_container = document.querySelector('#pescados-container');
const pescados = document.querySelector('#pescados');


pescados_button.addEventListener('click', async () => {
    const arrow = pescados_button.querySelector('i');
    pescados_container.classList.toggle('hidden');
    pescados_button.classList.toggle('text-white');
    pescados_button.classList.toggle('bg-red-900');
    arrow.classList.toggle('fa-arrow-up');

    if (pescados.innerHTML == "") {
        try {
            const response = await fetch('./dataPescado.JSON');
            const dataPescados = await response.json();

            for (const pescado of dataPescados) {
                let htmlProducto = generarHtmlProducto(pescado);
                pescados.innerHTML += htmlProducto;
            }
        } catch (error) {
            console.error('Error fetching or parsing JSON:', error);
        }
    }
})


const carnes_button = document.querySelector('#carnes-button');
const carnes_container = document.querySelector('#carnes-container');
const carnes = document.querySelector('#carnes');


carnes_button.addEventListener('click', async () => {
    const arrow = carnes_button.querySelector('i');
    carnes_container.classList.toggle('hidden');
    carnes_button.classList.toggle('text-white');
    carnes_button.classList.toggle('bg-red-900');
    arrow.classList.toggle('fa-arrow-up');

    if (carnes.innerHTML == "") {
        try {
            const response = await fetch('./dataCarne.JSON');
            const dataCarne = await response.json();

            for (const carne of dataCarne) {
                let htmlProducto = generarHtmlProducto(carne);
                carnes.innerHTML += htmlProducto;
            }
        } catch (error) {
            console.error('Error fetching or parsing JSON:', error);
        }
    }
})


function generarHtmlProducto(plato) {
    const platoHTML = `
            <div class="group">
                <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                    <img src=${plato.url} 
                        alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                        class="h-full w-full object-cover object-center group-hover:opacity-75">
                </div>
                <h3 class="mt-4 text-gray-700 font-bold">${plato.nombre}</h3>
                <p class="text-sm text-gray-500">(${plato.ingredientes})<p>
                <p class="text-sm text-red-700">${plato.alergenos}<p>
                <p class="mt-1 text-lg text-gray-900 font-bold">${plato.precio.toFixed(2)}€</p>
            </div>`;

    return platoHTML;
}



