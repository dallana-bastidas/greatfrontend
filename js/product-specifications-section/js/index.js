const tabs = document.querySelectorAll('[role="tab"]');
const panels = document.querySelectorAll('[role="tabpanel"]');

tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        const panelId = tab.getAttribute("aria-controls");

        panels.forEach((p) => {
            p.classList.add("hidden");
        });

        tabs.forEach((t) => {
            t.setAttribute("aria-selected", "false");

            t.classList.remove("border-indigo-600", "text-indigo-600");
            // Ponemos el color inactivo que ya tenías
            t.classList.add("border-transparent", "text-gray-500");
        });

        const elPanelQueQuiero = document.getElementById(panelId);
        if (elPanelQueQuiero) {
            elPanelQueQuiero.classList.remove("hidden");
        }

        tab.setAttribute("aria-selected", "true");
        tab.classList.remove("border-transparent", "text-gray-500");
        tab.classList.add("border-indigo-600", "text-indigo-600");
    });
});
