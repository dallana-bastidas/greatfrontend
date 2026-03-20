const botones = [
    {
        text: "filter",
        class: "",
    },
    {
        text: "Sort by",
        class: "",
    },
];

const api = [
    "products.json",
    "product-reviews.json",
    "product-info.json",
    "product-imagenes.json",
    "inventory.json",
    "collections.json",
    "categories.json",
];

async function obtenerInformacion() {
    try {
        const responses = await Promise.all(
            api.map((recore) => fetch(`./data/${recore}`)),
        );

        const data = await Promise.all(
            responses.map(async (res) => {
                if (!res.ok) {
                    throw new Error(`failed to load ${res.url}`);
                }
                return res.json();
            }),
        );

        return data;
    } catch (error) {
        console.error(error);
    }
}
