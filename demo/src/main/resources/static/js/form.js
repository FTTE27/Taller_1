document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registroForm");
    const nombresInput = document.getElementById("nombres");
    const apellidosInput = document.getElementById("apellidos");
    const tipoInput = document.getElementById("tipo");
    const idDocInput = document.getElementById("idDoc");
    const fechaInput = document.getElementById("fecha");
    const numeroInput = document.getElementById("numero");


    const nombresCount = document.getElementById("nombresCount");
    const apellidosCount = document.getElementById("apellidosCount");
    const tipoCount = document.getElementById("tipoCount");
    const idDocCount = document.getElementById("idDocCount");
    const fechaCount = document.getElementById("fechaCount");
    const numeroCount = document.getElementById("numeroCount");
    const formErrors = document.getElementById("formErrors");

    const updateCount = (input, countElement, maxLength) => {
        countElement.textContent = `${input.value.length}/${maxLength}`;
    };

    const validateInput = (input, condition) => {
        if (condition) {
            input.classList.remove("is-invalid");
            input.nextElementSibling.style.display = "none";
        } else {
            input.classList.add("is-invalid");
            input.nextElementSibling.style.display = "block";
        }
    };
/*
    nombresInput.addEventListener("input", () => {
        updateCount(nombresInput, nombresCount, 100);
        validateInput(nombresInput, nombresInput.value.length > 0 && nombresInput.value.length <= 100);
    });

    apellidosInput.addEventListener("input", () => {
        updateCount(apellidosInput, apellidosCount, 100);
        validateInput(apellidosInput, apellidosInput.value.length > 0 && apellidosInput.value.length <= 100);
    });

    tipoInput.addEventListener("input", () => {
        updateCount(tipoInput, tipoCount, 100);
        validateInput(tipoInput, tipoCount.value.length > 0 && tipoCount.value.length <= 100);
    });

    idDocInput.addEventListener("input", () => {
        updateCount(idDocInput, idDocCount, 100);
        validateInput(idDocInput, idDocCount.value.length > 0 && idDocCount.value.length <= 100);
    });

    fechaInput.addEventListener("input", () => {
        updateCount(fechaInput, fechaCount, 100);
        validateInput(fechaInput, fechaCount.value.length > 0 && fechaCount.value.length <= 100);
    });

    numeroInput.addEventListener("input", () => {
        updateCount(numeroInput, numeroCount, 100);
        validateInput(numeroInput, numeroInput.value.length > 0 && numeroInput.value.length <= 100);
    });
*/
    form.addEventListener("submit", async (event) => {
        event.preventDefault();
        let formIsValid = true;
/*
        formIsValid = formIsValid && nombresInput.value.length > 0 && nombresInput.value.length <= 100;
        formIsValid = formIsValid && apellidosInput.value.length > 0 && apellidosInput.value.length <= 100;
        formIsValid = formIsValid && tipoCount.value.length > 0 && tipoCount.value.length <= 100;
        formIsValid = formIsValid && idDocCount.value.length > 0 && idDocCount.value.length <= 100;
        formIsValid = formIsValid && fechaCount.value.length > 0 && fechaCount.value.length <= 100;
*/
        if (formIsValid) {
            const formData = {
                nombre: nombresInput.value,
                apellidos: apellidosInput.value,
                tipo: tipoInput.value,
                idDoc: idDocInput.value,
                fecha: fechaInput.value,
                numero: numeroInput.value
            };

            try {
                const response = await fetch('/formulario-enviado', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });

                if (response.ok) {
                    alert("Formulario enviado correctamente");
                    form.reset();
                   /* nombresCount.textContent = "0/100";
                    apellidosCount.textContent = "0/100";
                    tipoInput.textContent = "0/100";
                    idDocInput.textContent = "0/100";
                    fechaInput.textContent = "0/100";
                    numeroInput.textContent = "0/100";*/
                    formErrors.style.display = "none";
                } else {
                    throw new Error('Error en el envío del formulario');
                }
            } catch (error) {
                formErrors.textContent = "Hubo un problema al enviar el formulario.";
                formErrors.style.display = "block";
            }
        } else {
            formErrors.textContent = "Por favor, corrija los errores en el formulario.";
            formErrors.style.display = "block";
        }
    });
});
