
let horas = document.querySelector("#horas");
let minutos = document.querySelector("#minutos");
let segundos = document.querySelector("#segundos");

function atualizarHora() {
    const date = new Date();
    
    horas.textContent = date.getHours().toString().padStart(2, '0');
    minutos.textContent = date.getMinutes().toString().padStart(2, '0');
    segundos.textContent = date.getSeconds().toString().padStart(2, '0');

}

atualizarHora();

setInterval(atualizarHora, 1000);


// segundos.style.color = ;
    

