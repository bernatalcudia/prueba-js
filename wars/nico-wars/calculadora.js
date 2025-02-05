//metodo para sumar numeros
function sumar() {
    const numeroUno = Number(prompt('Dame un numero'))
    const numeroDos = Number(prompt('Dame otro numero'))
    console.log(numeroUno + numeroDos);
}
//metodo para restar numeros
function restar() {
    const numeroUno = Number(prompt('Dame un numero'))
    const numeroDos = Number(prompt('Dame otro numero'))
    console.log(numeroUno - numeroDos);

}
//metodo para dividir numeros
function dividir() {
    const numeroUno = Number(prompt('Dame un numero'))
    const numeroDos = Number(prompt('Dame otro numero'))
    console.log(numeroUno / numeroDos);
}
//metodo para el resto de los numeros
function resto() {
    const numeroUno = Number(prompt('Dame un numero'))
    const numeroDos = Number(prompt('Dame otro numero'))
    console.log(numeroUno % numeroDos);
}
//metodo para multiplicar numeros
function multiplicar() {
    const numeroUno = Number(prompt('Dame un numero'))
    const numeroDos = Number(prompt('Dame otro numero'))
    console.log(numeroUno * numeroDos);

}
//metodo calculadoraMenu
function calculadoraMenu() {
    let opcionElegida = 0;
    do {
        opcionElegida = Number(prompt('Que deseas hacer?\n0:Salir\n1:Sumar\n2:Restar\n3:Dividir\n4:Resto\n5:Multiplicar'))
        switch (opcionElegida) {
            case 1:
                sumar();
                break;
            case 2:
                restar();
                break;
            case 3:
                dividir();
                break;
            case 4:
                resto();
                break;
            case 5:
                multiplicar();
                break;
            default:
                opcionElegida = 0;
                break;
        }
    } while (opcionElegida > 0);

}

calculadoraMenu();