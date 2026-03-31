let todosLosProductos = [];
let coloresSeleccionados = [];

// coneccion a la base de datos
async function obtenerInfo() {
    const url = new URL(
        "https://www.greatfrontend.com/api/projects/challenges/e-commerce/products",
    );
    url.searchParams.set("per_page", "9");

    //   url.searchParams.append("color", "black");
    //  url.searchParams.append("color", "pink");

    // https://www.greatfrontend.com/api/projects/challenges/e-commerce/products?per_page=20&color=black&color=pink
    // color=black&color=pink

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
        const json = await response.json();

        todosLosProductos = json.data;
        renderizarProductos(todosLosProductos);
    } catch (error) {
        console.log("fallo en fetch:", error.message);
    }
}

const contenedor = document.getElementById("contenedorProductos");
const filtrarSeccion = document.getElementById("filtrar");
const filtrarColeccion = document.getElementById("filtrarCollections");
const filtrarCategorias = document.getElementById("filtroCategoria");
const filtroColores = document.getElementById("filtro-colores");

// logica de la creancion de las card de los productos
contenedor.addEventListener("click", (event) => {
    const target = event.target.closest("[data-color]");
    if (!target) return;

    const id = target.dataset.productId;
    const colorLabel = document.getElementById(`color-text-${id}`);
    if (colorLabel) {
        colorLabel.textContent = target.dataset.color;
    }
});

function renderizarProductos(productos) {
    if (productos.length === 0) {
        contenedor.innerHTML = `<div class="p-10 text-center col-span-full text-gray-500">No se encontraron productos con este color.</div>`;
        return;
    }

    contenedor.innerHTML = productos
        .map((p) => {
            const id = p.product_id;
            return `
            <div class="flex flex-col bg-white m-2 p-4 rounded-lg shadow-sm">
                <div class="flex justify-center items-center h-64 overflow-hidden">
                    <img src="${p.images[0].image_url}" class="object-cover h-full w-full rounded-md"/>
                </div>
                <div class="mt-4 flex flex-col gap-1">
                    <p id="color-text-${id}" class="text-sm text-gray-400 capitalize">${p.colors[0]}</p>
                    <h3 class="font-bold text-gray-800">${p.name}</h3>
                    <span class="text-lg font-medium text-gray-900">$${p.priceRange.highest}</span>
                    <div class="flex gap-2 mt-3">
                        ${p.colors
                            .map(
                                (color) => `
                            <button
                                data-color="${color}"
                                data-product-id="${id}"
                                class="w-6 h-6 rounded-full border border-gray-200 transition-transform active:scale-90"
                                style="background-color: ${color}">
                            </button>
                        `,
                            )
                            .join("")}
                    </div>
                </div>
            </div>
        `;
        })
        .join("");
}

//logica para la funcionanidad del btn filter
document.getElementById("btn-filtrar").onclick = () =>
    filtrarSeccion.classList.remove("hidden");
document.getElementById("btn-cerrar").onclick = () =>
    filtrarSeccion.classList.add("hidden");

//logica para filtrar filtrarColeccion

filtrarColeccion.addEventListener("click", (event) => {
    const target = event.target.closest("[data-collection]");

    if (!target) return;

    const coleccionFiltrada = target.dataset.collection;
    const productosFiltrados = todosLosProductos.filter(
        (p) => p.collection?.collection_id === coleccionFiltrada,
    );
    renderizarProductos(productosFiltrados);
    filtrarSeccion.classList.add("hidden");
});

//logica para filtrar categorias
filtrarCategorias.addEventListener("click", (event) => {
    const target = event.target.closest("[data-categoria]");

    if (!target) return;

    const categoriaFiltrada = target.dataset.categoria;

    const productosFiltrados = todosLosProductos.filter(
        (p) => p.category.category_id === categoriaFiltrada,
    );
    renderizarProductos(productosFiltrados);
    filtrarSeccion.classList.add("hidden");
});

// logica de filtrar colores
filtroColores.addEventListener("click", (event) => {
    const target = event.target.closest("[data-color]");

    if (!target) return;

    const colorSeleccionado = target.dataset.color;

    // Toggle: agregar si no existe y  eliminar si ya existe
    // includes sirve como vigilante el en este caso esta preguntado si el color ya esta seleccionado, verifica el estado
    // filter crea un array
    if (coloresSeleccionados.includes(colorSeleccionado)) {
        coloresSeleccionados = coloresSeleccionados.filter(
            (c) => c !== colorSeleccionado,
        );
    } else {
        coloresSeleccionados.push(colorSeleccionado);
    }

    // Lógica de filtrado multi-color
    const productosFiltrados = todosLosProductos.filter((p) => {
        // Si no hay filtros, mostrar todo
        if (coloresSeleccionados.length === 0) return true;

        // Verifica si al menos uno de los colores del producto coincide con la selección
        return p.colors.some((colorProducto) =>
            coloresSeleccionados.includes(colorProducto),
        );
    });

    renderizarProductos(productosFiltrados);

    filtrarSeccion.classList.add("hidden");
});

obtenerInfo("color");
