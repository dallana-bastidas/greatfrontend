function renderCommentComponent(
    targetId,
    labelText,
    isError = false,
    isDisabled = false,
) {
    const container = document.getElementById(targetId);

    const wrapper = document.createElement("div");
    wrapper.className = "caja-comentarios";

    wrapper.innerHTML = `
        <label class="descripcion">${labelText}</label>
        <textarea maxlength="500" placeholder="Enter a description..."></textarea>
        <div class="contadores">
            <span class="error-mensaje"></span>
            <span class="contador">0/500</span>
        </div>
    `;

    container.appendChild(wrapper);

    const textarea = wrapper.querySelector("textarea");
    const errorMsg = wrapper.querySelector(".error-mensaje");
    const counter = wrapper.querySelector(".contador");

    // Estado inicial de error
    if (isError) {
        textarea.classList.add("error");
        errorMsg.textContent = "This field is required";
    }

    // Estado bloqueado (disabled)
    if (isDisabled) {
        textarea.disabled = true;
    }

    textarea.addEventListener("input", () => {
        const length = textarea.value.length;
        counter.textContent = `${length}/500`;

        if (length === 0) {
            errorMsg.textContent = "This field is required";
            textarea.classList.add("error");
            counter.classList.remove("error");
        } else if (length === 500) {
            errorMsg.textContent = "limite alcanzado";
            textarea.classList.add("error");
            counter.classList.add("error");
        } else {
            errorMsg.textContent = "";
            textarea.classList.remove("error");
            counter.classList.remove("error");
        }
    });
}

// Configuración de las 3 instancias
renderCommentComponent("input-container", "Description 1");
renderCommentComponent("input-container", "Description 2", true);
renderCommentComponent("input-container", "Description 3", false, true);
