// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaNombres = [];

function añadirNombre() {
    let imputNombreAmigo = document.querySelector('#nombreAmigo');
    let nombreNuevo = imputNombreAmigo.value;

    if (!nombreNuevo) {
        alert('Escriba un nombre');
        return
    }
    
    listaNombres.push(nombreNuevo);
    imputNombreAmigo.value = '';
    imputNombreAmigo.focus();
    mostrarNombre();
}

function mostrarNombre() {
    let listaAmigos = document.querySelector('#listaAmigos');
    listaAmigos.innerHTML = '';

    for(let i = 0; i < listaNombres.length; i++) {
        let nombre = document.createElement('li');
        nombre.textContent = listaNombres[i];
        listaAmigos.append(nombre);
    }
}

function elegirNombre() {
    if (listaNombres.length === 0) {
        alert('No hay nombres')
        return
    }

    let nombreAlAzar = listaNombres[Math.floor(Math.random() * listaNombres.length)];
    let resultado = document.querySelector('#resultado');

    resultado.innerHTML = `La persona elegida es: ${nombreAlAzar}`;

    let listaAmigos = document.querySelector('#listaAmigos');
    listaAmigos.innerHTML = '';
}