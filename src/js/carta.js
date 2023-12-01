const tapas_button = document.querySelector('#tapas-button');
const tapas_container = document.querySelector('#tapas-container');
const tapas = document.querySelector('#tapas');

const dataTapas = [
    { 
        url: "/src/img/tapas/jamon.jpg", 
        nombre: "Jamón ibérico de bellota Juan Manuel D.O. Guijuelo (80g)", 
        precio: "26.00€" },
    { 
        url: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg", 
        nombre: "Cecina de vaca, alcachofas confitadas y añejo de Barros", 
        precio: "19.50€" },
    { 
        url: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg", 
        nombre: "Ostra Regal Special nº2 al natural (u.)", 
        precio: "4.85€" },
    { 
        url: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg", 
        nombre: "Ostra con gazpacho de cerezas y Pedro Ximénez", 
        precio: "6.00€" },
];

tapas_button.addEventListener('click', () => {
    const arrow = tapas_button.querySelector('i');
    tapas_container.classList.toggle('hidden');
    tapas_button.classList.toggle('text-white');
    tapas_button.classList.toggle('bg-red-700');
    arrow.classList.toggle('fa-arrow-up');

    if (tapas.innerHTML == "") {
        for (const tapa of dataTapas) {
            let htmlProducto = generarHtmlProducto(tapa.url, tapa.nombre, tapa.precio);
            tapas.innerHTML += htmlProducto;
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