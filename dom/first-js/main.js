// Variables document
const h1Main = document.getElementById("h1-main");
const changeText = document.getElementById("change-text");

changeText.innerText = "I am a button";//Add text to button

changeText.addEventListener("click", () => {
    h1Main.innerText = "!Hola mundo";//Change text h1
    h1Main.style.color = "red";//Change color h1
    h1Main.style.backgroundColor = "blue";//Change color background
}); 