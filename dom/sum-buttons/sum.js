const inputBox = document.getElementById('input-box');
const buttonAdd = document.getElementById('button-add');
const buttonSum = document.getElementById('button-sum');
const unOrderList = document.createElement('ul');
const h1 = document.createElement('h1')

let total = 0;

buttonAdd.innerText = 'Add';
buttonSum.innerText = 'Calc';

function addNumbers(event) {
    event.preventDefault();
    const numbers = parseInt(inputBox.value)
    total += numbers;
    const li = document.createElement('li')
    li.innerText = 'Number ' + numbers
    unOrderList.appendChild(li);
    document.body.appendChild(unOrderList)
    console.log(total)
    inputBox.value = '';

}

function sumNumbers(event) {
    event.preventDefault();
    h1.innerText = 'Total is: ' + total;
    document.body.appendChild(h1);
    inputBox.value = '';

}



buttonAdd.addEventListener('click', addNumbers);
buttonSum.addEventListener('click', sumNumbers);
inputBox.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        inputBox.value = '';
        h1.innerText = '';
        unOrderList.innerText = '';
    }
});
