async function obtenerInfo() {
    const url = new URL(
        "https://www.greatfrontend.com/api/projects/challenges/e-commerce/products",
    );
    url.searchParams.set("per_page", "2");

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
        const data = await response.json();
        crearCard(data.data);
    } catch (error) {
        console.error("ERROR:", error.message);
    }
}

const contenedor = document.getElementById("contenedorProductos");

contenedor.addEventListener("click", (event) => {
    const colorSeleccionado = event.target.closest("[data-color]");

    if (colorSeleccionado) {
        //dataset es una interfaz  de js que permite acceder a todos los atributos personalizdos
        const idDelProducto = colorSeleccionado.dataset.productId;

        const targetElement = document.getElementById(
            `color-text-${idDelProducto}`,
        );

        if (targetElement) {
            targetElement.textContent = colorSeleccionado.dataset.color;
        }
    }
});

function crearCard(productos) {
    const htmlCards = productos
        .map((producto) => {
            return `
            <div class="flex  flex-col  card bg-white md:m-2 lg:m-2  ">
                <div class="flex flex-1 justify-center items-center ">
                    <img src="${producto.images[0].image_url}" class=" m-6 size-56  flex-1 object-cover min-w-0 rounded-md"/>
                </div>

                <div class="ml-6 flex flex-col gap-2">
                <p id="color-text-${producto.id}" class="text-gray-600">${producto.colors[0]}</p>
                <h3 class="">${producto.name}</h3>
                <span class="text-gray-600">$${producto.priceRange.highest}</span>
                <div class="colors-container">
                    ${producto.colors
                        .map(
                            (color) => `
                        <span
                            data-color="${color}"
                            data-product-id="${producto.id}"
                            class="inline-block size-6 bg-${color}-500 bg-${color} rounded-full border cursor-pointer">
                        </span>
                    `,
                        )
                        .join("")}
                </div>
                </div>






            </div>
        `;
        })
        .join("");

    contenedor.innerHTML = htmlCards;
}

obtenerInfo();
