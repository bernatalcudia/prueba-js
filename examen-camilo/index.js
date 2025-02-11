const inputName = document.getElementById("input-name");
const inputEmail = document.getElementById("input-email");
const inputNumber = document.getElementById("input-number");

const sectionTwo = document.getElementById("section-2");


const button = document.getElementById("button");

button.innerText = "Add";

button.setAttribute("id", "button-ad")


const unOrderList = document.createElement("ul");

function addContact() {
    const inputNameValue = inputName.value;
    const inputEmailValue = inputEmail.value;
    const inputNumberValue = Number(inputNumber.value);

    const liName = document.createElement("li");
    liName.innerText = inputNameValue;
    const liEmail = document.createElement("li");
    liEmail.innerText = inputEmailValue;
    const liNumber = document.createElement("li");
    liNumber.innerText = inputNumberValue;

    unOrderList.append(liName, liEmail, liNumber);

    sectionTwo.appendChild(unOrderList);

    document.body.appendChild(sectionTwo);

    inputName.value = "";
    inputEmail.value = "";
    inputNumber.value = "";


}


button.addEventListener("click", addContact);







// Se deben mostrar los campos de nombre, email y numero de telefono junto con un boton de agregar. Estos deben tener estilos y ser intuitivos para el usuario

// ## Punto 3

// Al presionar el boton se debe crear un nuevo contacto y mostrarse en el DOM. Ademas queremos mostrar la inicial del nombre dentro de la lista de contactos.

// ## Punto 4

// Agregar otro boton, que al presionarlo muestra en un alert el contacto con el nombre mas largo.

// ## Punto 5 (opcional)

// La inicial del nombre mostrarla en un Avatar redondo como se muestra en la imagen.

// ## Imagen de referencia
// No es necesario que se vea exactamente igual pero sirve como referencia:

// ![image](https://github.com/user-attachments/assets/e72f355a-f159-4e4e-a78a-410d9c6689d4)








