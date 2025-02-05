const button = document.getElementById('button');
const h1Main = document.getElementById('main-h1');

button.innerText = 'Press me';

function clickChange(event) {
    event.preventDefault();
    const nombre = prompt('Dime tu nombre');

    h1Main.setAttribute('class', 'titulo');

    h1Main.innerText = 'Hola ' + nombre;


}
button.addEventListener('click', clickChange);