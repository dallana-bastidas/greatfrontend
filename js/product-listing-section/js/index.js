async function obtenerInfo() {
    const url = new URL(
        "https://www.greatfrontend.com/api/projects/challenges/e-commerce/products",
    );
    url.searchParams.set("per_page", "2");

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Error HTTP detectado: ${response.status}`);
        }

        const data = await response.json();

        crearCard(data.data);
    } catch (error) {
        console.error("No se pudo obtener la información:", error.message);
    }
}

function crearCard(productos) {
    const contenedor = document.getElementById("contenedorProductos");

    contenedor.innerHTML = "";

    productos.forEach((producto) => {
        console.log("Estructura del producto:", producto);
        const cardHTML = `
            <div class="card">

            <div>
            <img src="${producto.images[0].image_url}" class="size-64"/>
            </div>
            <p> </p>

                <h3>${producto.name}</h3>
                <span>$${producto.priceRange.highest}</span>
                ${producto.colors
                    .map((color) => {
                        return `<span class="inline-block size-6 bg-${color}-500 bg-${color} rounded-full border"></span>`;
                    })
                    .join("")}

            </div>
        `;

        contenedor.innerHTML += cardHTML;
    });
}

obtenerInfo();
