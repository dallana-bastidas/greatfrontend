const tabs = document.querySelectorAll('[role="tab"]');
const panels = document.querySelectorAll('[role="tabpanel"]');

// 'tabs' es la lista de todos tus botones [role="tab"]
tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        // ¡Este código se ejecutará sin importar en qué pestaña hagas clic!
        console.log("Hiciste clic en una pestaña");
    });
});
