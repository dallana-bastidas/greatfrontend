const tabs = document.querySelectorAll('[role="tab"]');
const panels = document.querySelectorAll('[role="tabpanel"]');
const color = document.querySelectorAll("[aria-selected]");

tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        const panelId = tab.getAttribute("aria-controls");
        panels.forEach((panels) => {
            panels.classList.add("hidden");
        });
        const elPanelQueQuiero = document.getElementById(panelId);
        if (elPanelQueQuiero) {
            elPanelQueQuiero.classList.remove("hidden");
        }
    });
});

color.forEach((tab) => {
    tab.addEventListener("click", () => {
        const botonSeleccionado = tab.getAttribute("aria-selected");

        color.forEach((tabs) => {
            color.classList.add("hidden");
        });
        const activarBotones = document.getElementById(botonSeleccionado);
        if (activarBotones) {
        }
    });
});
