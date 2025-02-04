const btPLus = document.querySelector(".js-plus");
const containerTransport = document.querySelector(".container-transport");

btPLus.addEventListener("click", ouvreEtFerme);

function ouvreEtFerme() {
    containerTransport.classList.toggle("container-transport-invisible");
}