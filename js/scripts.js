const btPLus = document.querySelector(".js-plus");
const colTransport = document.querySelector("container-transport");

btPLus.addEventListener("click", ouvreEtFerme);

function ouvreEtFerme() {
    colTransport.classList.toggle("container-transport");
}