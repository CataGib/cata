// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

//Agregar amigos
function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo');
    let nombre = nombreAmigo.value.trim();

    if (nombre == '') {
        alert('Por favor, inserte un nombre.');
        //
    } else {
        listaAmigos.push(nombre);
        let lista = document.getElementById('listaAmigos');
        lista.innerHTML = listaAmigos.map(amigo => `<li>${amigo}</li>`).join('');
        nombreAmigo.value = '';
    }
    console.log(nombreAmigo);
    console.log(listaAmigos);
    console.log(listaAmigos.length);
    return nombreAmigo;  
}

//Sorteo
function sortearAmigo() {
    if(listaAmigos.length == 0){
        alert('Por favor, inserte un nombre.');
    } else {
        let amigoElegido = parseInt(Math.floor(Math.random() * listaAmigos.length +1)-1);
        console.log(amigoElegido);
        console.log(listaAmigos[amigoElegido]);
        asignarTextoElemento('ul',`Tu amigo secreto es: ${listaAmigos[amigoElegido]}`);
      }
    }
    