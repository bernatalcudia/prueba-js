//metodo discoteca

function entradaDiscoteca() {
    let edad = prompt('-----------------------\nCual es tu edad?\n--------------------------');
    if (+edad >= 18) {
        console.log('Entras a la discoteca');
    } else {
        console.log('No entras a la discoteca');
    }
}

//----------------------------------------------------------
//metodo saludar

function saludarNombre() {
    let nombre = prompt('-----------------------\nCual es tu nombre?\n--------------------------');
    console.log('Hi ' + nombre);
}


