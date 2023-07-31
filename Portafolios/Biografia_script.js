//Desplasamiento de barra superior a titulos
document.addEventListener("DOMContentLoaded", function() {
    const desplasamiento = document.querySelectorAll(".agrandar");

    desplasamiento.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault(); 

            const seccionId = link.getAttribute("href");
            const seccion = document.querySelector(seccionId);

            if (seccion) {
                seccion.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});
