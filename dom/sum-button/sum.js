const button = document.getElementById('start');
button.innerText = 'started'


function started(event) {
    event.preventDefault();
    const tittle = document.createElement('h1');//create the tittle
    tittle.setAttribute('class', 'title');//set attribute to tittle
    let optionChoose = 0;
    let total = 0;
    do {
        optionChoose = Number(prompt('Choose a number to sum and write 0 to exit'));

        total += optionChoose;//sum numbers
    } while (optionChoose != 0);
    document.body.appendChild(tittle);//add tittle to body
    tittle.innerText = 'Your result is: ' + total;
}
button.addEventListener('click', started);