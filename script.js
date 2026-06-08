const reveals = document.querySelectorAll(".reveal");

function revelarElementos() {

    reveals.forEach(item => {

        const alturaJanela = window.innerHeight;
        const topoElemento = item.getBoundingClientRect().top;

        if (topoElemento < alturaJanela - 100) {
            item.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revelarElementos);

revelarElementos();