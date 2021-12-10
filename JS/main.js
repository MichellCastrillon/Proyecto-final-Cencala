// Se hace función para un evento click del menu reponsive
const ham = document.querySelector('.ham');
const enlaces = document.querySelector('.navBar');

ham.addEventListener("click", () =>{
    enlaces.classList.toggle('activado');
})

