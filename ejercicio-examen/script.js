// EJERCICIO VIERNES NEGRO
// EJ1.1 dado un array de números, separar los números pares de los impares en dos arrays diferentes.
const numeros = [12, 7, 5, 89, 34, 22, 13, 78, 99, 100, 200, 201, 75, 62];

let pares = [];
let inpares = [];
let suma = [];

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 == 0) {
        pares.push(numeros[i])
    } else {
        inpares.push(numeros[i])
    }
}
console.log('----------------------------------------------------------------------------')

// Ej1.2 con los dos arrays resultantes del apartado anterior, vamos a sumar la primera posición de los pares con la primera de los impares, la segunda de los pares con la segunda de los impares, etc.
for (let i = 0; i < pares.length; i++) {
    suma[i] = pares[i] + inpares[i]
}
console.log(suma)


// Ej1.3 Con el array de suma, vamos a mostrar todos los elementos, uno a uno mostrando también la posición que ocupan dentro del array:
console.log('----------------------------------------------------------------------------')

for (let i = 0; i < suma.length - 1; i++) {
    console.log('Su indice es ' + i + ' y su valor es: ' + suma[i]);
}
// Ej1.4 Con el array de suma, vamos a mostrar todos los elementos, uno a uno mostrando también la posición que ocupan dentro del array, pero en orden inverso:
console.log('----------------------------------------------------------------------------')
for (let i = suma.length - 1; i >= 0; i--) {
    console.log('Su indice es ' + i + ' y su valor es: ' + suma[i]);
}

