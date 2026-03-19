fetch(
    "https://www.greatfrontend.com/api/projects/challenges/statistics-metrics",
)
    .then((response) => response.json())
    .then((data) => {
        crearCard(data.data);
    });

function crearCard(infoApi) {
    const info = document.getElementById("contenedor");

    info.innerHTML = "";

    infoApi.forEach((spanInfo) => {
        const newDiv = document.createElement("div");
        const newSpan = document.createElement("span");
        const newTitulo = document.createElement("span");

        newSpan.textContent = spanInfo.value.toLocaleString();
        newTitulo.textContent = spanInfo.metric;

        newDiv.appendChild(newSpan);
        newDiv.appendChild(newTitulo);

        newDiv.classList.add(
            "border-2",
            "border-gray-200",
            "h-24",
            "w-96",
            "mt-6",
            "rounded-md",
            "flex",
            "flex-col",
            "justify-center",
            "items-center",
            "bg-white",
        );

        newSpan.classList.add("text-4xl", "font-bold", "text-indigo-700");

        newTitulo.classList.add("text-sm", "text-gray-500");

        info.appendChild(newDiv);
    });
}
