// Métodos de Array
// No puedes usar bucles for (for, for in, for of...) Solo los métodos de array. Utiliza arrow function para los métodos que sean necesarias funciones

// Más información sobre métodos de Array AQUÍ

// Crea un array de números con 10 elementos tipo número
const array = [1, 12, 9, 56, 3, 87, 4, 10, 8, 10]
// Filtrar números pares con el método filter
const pair = array.filter((number) => number % 2 === 0);
console.log("pares: " + pair);
// Duplicar todos los números con el método map
const doubles = array.map((number) => {
    return number * 2;
});
console.log("el doble: " + doubles);
// Sumar todos los números con el método reduce
const sumNumbers = array.reduce((accumulator, currentValue) => {
    accumulator + currentValue;
})
console.log("Sumar todo: " + sumNumbers);
// Ordenar los números de menor a mayor

// Comprobar si todos los números son mayores que 0 con el método every
const greaterThanZero = (currentValue) => { currentValue > 0 };
console.log("Mayores a 0: " + array.every(greaterThanZero));
// Comprueba si al menos un elemento del array es mayor de 100 con el método some.
const greaterThanOneHundred = (currentValue) => { currentValue > 100 };
console.log(array.some(greaterThanOneHundred));
// Comprueba si todos los elementos del array cumplen con la condición de ser menores de 50 con every.

// Encontrar el primer número mayor o igual a 5 con el método find
// Encuentra el índice de un elemento en el array o el último índice si hay duplicados con indexOf y lastIndexOf
// Crear un nuevo array con los números impares con filter
// Crea otro array de números y concatenalo con el primer array
