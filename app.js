let num1 = '123';
let num2 = '2';
let operator = '-';

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
        return num1 + num2;
    } else if (operator == '-') {
        return num1 - num2;
    } else if (operator == '/') {
        return num1 / num2;
    } else if (operator == '*') {
        return num1 * num2;
    }
} 

console.log(operate(operator, num1, num2));



