let opcionElegida = prompt('-----------------------\nElige una opcion:\n1-Dicosteca\n2-Saludar\n--------------------------');
switch (+opcionElegida) {
    case 1:
        let edad = prompt('-----------------------\nCual es tu edad?\n--------------------------');
        if (+edad >= 18) {
            console.log('Entras a la discoteca');
        } else {
            console.log('No entras a la discoteca');
        }
        break;

    case 2:
        let nombre = prompt('-----------------------\nCual es tu nombre?\n--------------------------');
        console.log('Hi ' + nombre);
        break;

    default:
        console.log('Opcion incorrecta');
        break;
}




