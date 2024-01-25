
let numeroSecreto = 0;
let intentos = 0;
let listasNumerosSorteados = [];
let numeroMaximo = 10;



function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){

    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroDeUsuario === numeroSecreto){

        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${ intentos === 1 ? 'intento': 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {

        if ( numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El número secreto es menor');
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor')
        }

        intentos++;
        limpiarCaja();

    }
    return;
}

function limpiarCaja(){
    let valorCaja = document.querySelector('#valorUsuario').value = '';

}

function generarNumeroSecreto(){
   let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //Si ya sorteamos toos los numeros 
    if (listasNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se asignaron todos los elementos posibles')

    } else {

    // Si el numeroGenerado esta incluido en la lista
        if (listasNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
            //Recursividad: La función se llama así misma

        } else {
            listasNumerosSorteados.push(numeroGenerado);
            return numeroGenerado
        }
    }

}


function condicionesIniciales(){
    asignarTextoElemento("h1", "Juego del número secreto");
    asignarTextoElemento("p",`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    return;
}

function reiniciarJuego(){
    // limpiar caja
    limpiarCaja();

    //Indicar mensaje de intervalo de numeros
    condicionesIniciales();

    //Deshabilitar el boton de nuevo juego
   document.querySelector('#reiniciar').setAttribute('disabled', true);

    
}



condicionesIniciales();


