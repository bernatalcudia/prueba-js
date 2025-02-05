
//Metodo par||inpar

function parOInpar(number) {
    if (number % 2 == 0) {
        return 'Es un numero par';
    }
    return 'Es un numero inpar';
}

for (let i = 0; i <= 100; i++) {
    console.log('El numero ' + i + ' es ' + parOInpar(i))

}
//----------------------------------------------------------
//Metodo saludar
function saludar(name) {
    console.log('Hi ' + name)
}

saludar('Bernat')
//----------------------------------------------------------
//Metodo dar las gracias
function darLasGracias() {
    return 'Gracias';
}

const gracias = darLasGracias()

console.log(gracias)

//----------------------------------------------------------
//Metodo saludar al sol
function saludarAlSOl() {
    console.log('hola sol')
}
saludarAlSOl();