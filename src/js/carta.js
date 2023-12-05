const tapas_button = document.querySelector('#tapas-button');
const tapas_container = document.querySelector('#tapas-container');
const tapas = document.querySelector('#tapas');

const dataTapas = [
    { 
        url: "/src/img/tapas/jamon.jpg", 
        nombre: "Jamón ibérico de bellota Juan Manuel D.O. Guijuelo (80g)", 
        precio: "26.00€" },
    { 
        url: "/src/img/tapas/cecinaVaca.jpg", 
        nombre: "Cecina de vaca, alcachofas confitadas y añejo de Barros", 
        precio: "19.50€" },
    { 
        url: "/src/img/tapas/ostrasRegal.jpg", 
        nombre: "Ostra Regal Special nº2 al natural (u.)", 
        precio: "4.85€" },
    { 
        url: "/src/img/tapas/ostrasGazpacho.jpg", 
        nombre: "Ostra con gazpacho de cerezas y Pedro Ximénez", 
        precio: "6.00€" },
    { 
        url: "/src/img/tapas/ostrasGambasRojas.jpg", 
        nombre: "Ostra a la brasa con gamba roja al ajillo", 
        precio: "7.00€" },
    { 
        url: "/src/img/tapas/sardinasEscabeche.jpg", 
        nombre: "Sardinas marinadas en escabeche de zanahoria y mango", 
        precio: "18.00€" },
    { 
        url: "/src/img/tapas/carpaccioGamba.jpg", 
        nombre: "Carpaccio de gambas, emulsion de cabezas, hinojo marino y ajo", 
        precio: "23.00€" },
    { 
        url: "/src/img/tapas/tartarAtun.jpg", 
        nombre: "Tártar Mediterráneo de atún Balfegó", 
        precio: "24.00€" },
    { 
        url: "/src/img/tapas/tartarMostaza.jpg", 
        nombre: "Steak tártar, cremoso de mostaza y mahonés", 
        precio: "21.00€" },
    { 
        url: "/src/img/tapas/ensaladaTomates.jpg", 
        nombre: "Ensalada de tomates con encurtidos caseros, algas y cítricos", 
        precio: "16.50€" },
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