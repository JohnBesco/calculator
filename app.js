let num1;
let num2;
let operator;

function sumOf (num1, num2) {
    return (num1 + num2);
}

let sumResult = sumOf(num1, num2);

function subtract (num1, num2) {
    return (num1 - num2);
}

let subtractResult = subtract(num1, num2);

function divide (num1, num2) {
    return (num1 / num2);
}

let divideResult = divide(num1, num2);

function multiply (num1, num2) {
    return (num1 * num2);
}

let multiplyResult = multiply(num1, num2);


let operate = function(operator, num1, num2) {
    if (operator == '+') {
        return sumOf(num1, num2);
    } else if (operator == '-') {
        return subtract(num1, num2);
    } else if (operator == '/') {
        return divide(num1, num2)
    } else if (operator == '*') {
        return multiply(num1, num2);
    }
} 

const display = document.querySelector('#main-display');
const paragraph = document.createElement('p');
const btn = document.querySelectorAll('.numpad');
const operatorBtn = document.querySelectorAll('.operators');
const equalBtn = document.querySelector('.equal');

let currentNumber = '';
let storedNumber = '';
let selectedOperator = '';

btn.forEach(button => {
    button.addEventListener('click', () => {
        const number = button.value;
        currentNumber += number;
        console.log(button.value);
        updateDisplay();
    });
});

operatorBtn.forEach(operatorButton => {
    operatorButton.addEventListener('click', () => {
        selectedOperator = operatorButton.value;
        storedNumber = currentNumber;
        currentNumber = '';
        updateDisplay();
    });
});

equalBtn.addEventListener('click', () => {
    const result = operate(selectedOperator, parseFloat(storedNumber), parseFloat(currentNumber));
    currentNumber = result.toString();
    storedNumber = '';
    selectedOperator = '';
    updateDisplay();
});

function updateDisplay() {
    display.textContent = currentNumber;
}