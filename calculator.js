const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const display = document.querySelector("#display");
const equals = document.querySelector(".equals");
let firstNumber = "";
let secondNumber = "";
let operator = "";

numbers.forEach(number => {
    number.addEventListener("click", () => {
        secondNumber = secondNumber + number.getAttribute("value");
        console.log(secondNumber);
        console.log(firstNumber);
    })
})

operators.forEach(operator => {
    operator.addEventListener("click", () => {
        operator = operator.getAttribute("value");
        console.log(operator);
        firstNumber = secondNumber;
        secondNumber = "";
        console.log(secondNumber);
        console.log(firstNumber)
    })
})

equals.addEventListener("click", () => { 
    display.textContent = "" + operate(parseInt(firstNumber), parseInt(secondNumber), operator);
    console.log(display.textContent);
})

function operate(firstNumber, secondNumber, operator) {
    switch (operator) {
        case "+":
            return add(firstNumber, secondNumber);
        case "-":
            return substract(firstNumber, secondNumber);
        case "*":
            return multiply(firstNumber, secondNumber);
        case "/":
            return divide(firstNumber, secondNumber);
    }
}

function add(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}
function substract(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}
function multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}
function divide(firstNumber, secondNumber) {
    return firstNumber / secondNumber;
}