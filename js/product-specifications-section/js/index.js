// # 1. Selección de elementos del DOM por atributos de accesibilidad
const tabs = document.querySelectorAll('[role="tab"]');
const panels = document.querySelectorAll('[role="tabpanel"]');

// # 2. Asignación de un Event Listener a cada pestaña
tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        // # 3. Obtención del ID del panel vinculado mediante aria-controls
        const targetId = tab.getAttribute("aria-controls");

        // # 4. Actualización del estado visual y técnico de todas las pestañas
        tabs.forEach((t) => {
            // Comparación lógica para determinar si el elemento actual es el clickeado
            const isActive = t === tab;

            // Sincronización del atributo aria-selected (true/false)
            t.setAttribute("aria-selected", isActive);

            // Gestión de clases de Tailwind mediante toggle basado en el booleano isActive
            t.classList.toggle("border-indigo-600", isActive);
            t.classList.toggle("text-indigo-600", isActive);
            t.classList.toggle("border-transparent", !isActive);
            t.classList.toggle("text-gray-500", !isActive);
        });

        // # 5. Gestión de visibilidad de los paneles de contenido
        panels.forEach((panel) => {
            // Verificación de correspondencia entre el ID del panel y el targetId
            const isTarget = panel.id === targetId;

            // El panel objetivo recibe 'block' y pierde 'hidden'; los demás lo opuesto
            panel.classList.toggle("hidden", !isTarget);
            panel.classList.toggle("block", isTarget);
        });
    });
});
