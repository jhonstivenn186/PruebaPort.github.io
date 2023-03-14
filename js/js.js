let icon = document.querySelector(".nav-responsive");
icon.addEventListener("click", mostrar);
let bajo = document.getElementById("abajo");
bajo.addEventListener("click", tapar);
nav = document.getElementById("nav");
let quitarlo = document.getElementById("quitarse");
let poner = document.getElementById("ponerse");
let items = document.querySelectorAll(".lin");
let whatsapp = document.getElementById("btn-w");
items.forEach((item) => {
    item.addEventListener("click", tapar);
})

function mostrar() {
    nav.style.left = "0px";
    bajo.style.display = "block";
    poner.style.display = "none";
    quitarlo.style.display = "block";
    whatsapp.style.opacity = "0";
    whatsapp.style.zIndex = "-10";
}

function tapar() {
    nav.style.left = "-90%";
    bajo.style.display = "none";
    poner.style.display = "block";
    quitarlo.style.display = "none";
    whatsapp.style.opacity = "1";
    whatsapp.style.zIndex = "99999";
}

function seleccionar(link) {
    var opciones = document.querySelectorAll('.correr');
    link.classList.add("activar");
    link = Array.from(opciones).find(ese => {
        for (const ese of opciones) {
            if (ese !== link) {
                ese.classList.remove('activar');
            }
        }
    })

}





let slider = document.querySelector('.slider-contenedor');
let sliderInd = document.querySelectorAll('.slider-test');
let contador = 1;
let tamañoWidth = sliderInd[0].clientWidth;
let intervalo = 2500;

window.addEventListener("resize", function () {
    tamañoWidth = sliderInd[0].clientWidth;
})

setInterval(function tiempo() {
    slides()
}, intervalo);

function slides() {
    slider.style.transform = 'translate(' + (- tamañoWidth * contador) + 'px';

    slider.style.transition = 'transform 1s';

    contador++;

    if (contador === sliderInd.length) {
        contador = 0;
        setTimeout(function () {
            slider.style.transform = 'translate(0px)';
            slider.style.transition = 'transform 1s'
        }, intervalo)
    } else {

    }
}
function slides2() {
    slider.style.transform = 'translate(' + (+ tamañoWidth * contador) + 'px';

    slider.style.transition = 'transform 1s';

    contador--;

    if (contador === sliderInd.length) {
        contador = 0;
        setTimeout(function () {
            slider.style.transform = 'translate(0px)';
            slider.style.transition = 'transform 0s'
        }, intervalo)
    } else {

    }
}

let btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
    Swal.fire({
        icon: 'success',
        title: 'Enviado satisfactoriamente',
        showConfirmButton: false,
        timer: 1400
    })
    setTimeout(function () {
        Swal.fire({
            icon: 'error',
            title: 'No mentiras, no tengo hosting XD',
            showConfirmButton: false,
            timer: 1700
        })
    }, 1401);

})


AOS.init();
