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
