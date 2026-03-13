const btnHeader = [
    {
        text: "Learn more",
        class: "rounded-md relative p-2 bg-white text-neutral-950 hover:bg-gray-200",
    },
    {
        text: "See pricing",
        class: "rounded-md p-2 bg-indigo-700 text-white hover:bg-indigo-500",
    },
];

const btnFooter = [
    {
        text: "Monthly ",
        class: " rounded-md p-2 text-black hover:bg-gray-300 border-2 border-gray-200 w-28",
    },
    {
        text: "Annually",
        class: "rounded-md p-2 text-black hover:bg-gray-300 border-2 border-gray-200 w-28",
    },
];

const precios = [
    {
        titulo: "Basic Plan ",
        text: "Access to a cureated selection of abstract images",
        precio: "$9.99",
        popularidad: false,
        frecuencia: "/month",
        description: "Billed monthly",
        opciones: [
            "Standard quality images",
            "Limited to personal use",
            "Email support",
        ],
        boton: "Buy Now",
    },

    {
        titulo: "Standard Plan ",
        text: "Next-level Integrations, priced economically",
        precio: "$19.99",
        popularidad: true,
        frecuencia: "/month",
        description: "Billed monthly",
        opciones: [
            "Expanded librart with more diverse abstract images",
            "High-resolution images avaliable ",
            "Priority email support",
        ],
        boton: "Buy Now",
    },

    {
        titulo: "Premium Plan",
        text: "Experience limitless living for porwer users ",
        precio: "$29.99",
        popularidad: false,
        frecuencia: "/month",
        description: "Billed monthly",
        opciones: [
            "Full access to the entire image libary,including exclusive content",
            "Highest quality images, incliding premium collections",
            "Commercial and resale rights",
            "Dedicated customer support line",
            "24/7 support responsive time ",
            "Advanced analytics and insights ",
        ],
        boton: "Buy Now",
    },
];

function crearBotones(listaDeBotones = [], idDestino) {
    const contenedor = document.getElementById(idDestino);

    if (!contenedor) {
        console.error(`No existe un elemento con el id: ${idDestino}`);
        return;
    }

    contenedor.innerHTML = "";

    listaDeBotones.forEach((botonInfo) => {
        const btn = document.createElement("button");
        btn.textContent = botonInfo.text;
        btn.className = `rounded-md p-2 ${botonInfo.class}`;
        contenedor.append(btn);
    });
}

crearBotones(btnHeader, "btnNav");
crearBotones(btnHeader, "pachulin");
crearBotones(btnFooter, "btnMes");

const LOGO_DATA = [
    { src: "img/instagram.jpg", alt: "Instagram" },
    { src: "img/kin.png", alt: "Kin" },
    { src: "img/leon.jpg", alt: "Leon" },
    { src: "img/logo.png", alt: "Logo" },
    { src: "img/mini.png", alt: "Mini" },
    { src: "img/netflix.png", alt: "Netflix" },
    { src: "img/nike.jpg", alt: "Nike" },
    { src: "img/react.png", alt: "React" },
];

function buildLogoSliderComponent() {
    const outerContainer = document.getElementById("scroll");
    outerContainer.className = "w-full overflow-hidden";

    const scroller = document.createElement("ul");

    scroller.className = "flex flex-nowrap items-center h-20";

    scroller.innerHTML = LOGO_DATA.map(
        (logo) =>
            `<li class="flex-shrink-0 px-4">
                <img src="${logo.src}" alt="${logo.alt}" class="h-16 w-32 object-contain">
            </li>`,
    ).join("");

    outerContainer.appendChild(scroller);
    //document.body.appendChild(outerContainer);

    const items = Array.from(scroller.children);
    items.forEach((item) => {
        const clone = item.cloneNode(true);
        clone.setAttribute("aria-hidden", "true");
        scroller.appendChild(clone);
    });

    let scrollAmount = 0;
    const speed = 1;

    function animate() {
        scrollAmount -= speed;

        const halfWidth = scroller.scrollWidth / 2;

        if (Math.abs(scrollAmount) >= halfWidth) {
            scrollAmount = 0;
        }

        scroller.style.transform = `translateX(${scrollAmount}px)`;
        requestAnimationFrame(animate);
    }

    animate();
}

window.addEventListener("load", () => {
    crearBotones(btnHeader, "btnNav");
    crearBotones(btnHeader, "pachulin");
    buildLogoSliderComponent();
});

function crearCard(datos) {
    const cartaCreada = document.getElementById("ventas");

    // Si cartaCreada es null, el JS fallará. Asegúrate de que el ID exista en tu HTML.
    if (!cartaCreada) return;

    const listaDeTarjetas = datos.map((plan) => {
        return `
            <div class=" mt-16 card border-2 border-solid  w-80 flex flex-col justify-between p-6 rounded-xl ${plan.popularidad ? "border-purple-600" : "border-gray-500"}">

                <p class="text-purple-700 text-center font-bold">
                    ${plan.popularidad ? "Most Popular" : "&nbsp;"}
                </p>

                <h1 class="font-bold text-2xl">${plan.titulo}</h1>

                <p class="text-gray-600 text-sm mb-4">${plan.text}</p>

                <div class="flex items-baseline gap-1">
                    <p class="font-bold text-3xl ${plan.popularidad ? "text-purple-700" : "text-black"}">${plan.precio}</p>
                    <p class="text-gray-500">${plan.frecuencia}</p>
                </div>

                <p class="text-gray-500 text-xs mb-6">${plan.description}</p>

                <div class="text-gray-600 space-y-3 flex-grow">
                    ${plan.opciones
                        .map(
                            (opcion) => `
                        <div class="flex items-center gap-2">
                            <span class="flex items-center justify-center bg-purple-100 text-purple-700 rounded-full w-5 h-5 text-xs">✔️</span>
                            <span>${opcion}</span>
                        </div>
                    `,
                        )
                        .join("")}
                </div>

                <button class="mt-8 py-3 px-6 rounded-lg font-semibold transition-colors ${plan.popularidad ? "bg-purple-700 hover:bg-purple-300 text-white w-full " : "bg-gray-100 hover:bg-gray-200  text-black w-full border border-gray-300"}">
                    ${plan.boton}
                </button>
            </div>
        `;
    });

    cartaCreada.innerHTML = listaDeTarjetas.join("");
}

crearCard(precios);
