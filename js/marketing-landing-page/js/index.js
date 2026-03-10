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
        text: "Monthly",
        class: "",
    },
    {
        text: "Annually",
        class: "",
    },
    {
        text: "Buy now",
        class: "",
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
