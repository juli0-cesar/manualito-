let numeroAleatorio = Math.floor(Math.random() * 10) + 1;
let contador = 3;
function reintentar(){
    if(contador>0){
        mensaje.textContent ='aun te quedan intentos !';
    }else if(userGuess == numeroAleatorio){
        mensaje.textContent='';
        contador=3;
    }else{
        mensaje.textContent='';
        contador=3;
    }
}
function adivinar() {
    const userGuess = document.getElementById('guessInput').value; 
    const mensaje = document.getElementById('mensaje');
    if(userGuess == numeroAleatorio){
        mensaje.textContent = `¡Felicidades! , el numero era ${ numeroAleatorio}, no fue tan dificil verdad ?`;
        mensaje.style.color = 'green';
    }else{
        if ( contador == 0) {
            mensaje.textContent ="fallaste, resultado era "+ numeroAleatorio;
            
        } else if (userGuess < numeroAleatorio) {
            mensaje.textContent = 'numero incorrecto,es mayor que '+userGuess+ ' te quedan: '+ contador + ' intentos';
            mensaje.style.color = 'orange';
            contador = contador - 1;
        }
         else {
            mensaje.textContent = 'numero incorrecto,es menor que'+userGuess + ' te quedan: '+ contador + ' intentos';
            mensaje.style.color = 'red';
            contador = contador - 1;
        }
    }
}
// ---------------------------------------------------------------------------------------------------------------------------------