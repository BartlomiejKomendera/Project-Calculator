const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const display = document.querySelector("#display");
const equals = document.querySelector(".equals");
const reset = document.querySelector("#reset");
const backspace = document.querySelector("#backspace");
let firstNumber = "";
let secondNumber = "";
let operator = "";
let isFirstNumberSet = false;
display.textContent = "0";

numbers.forEach(number => {
    number.addEventListener("click", () => {
        if (!isFirstNumberSet) {
            firstNumber = firstNumber + number.getAttribute("value");
        }
        if (isFirstNumberSet) {
            secondNumber = secondNumber + number.getAttribute("value");
        }
        display.textContent = firstNumber + operator + secondNumber;
    })
})

operators.forEach(element => {
    element.addEventListener("click", () => {
        if (operator == "") {
            operator = element.getAttribute("value");
        } else {
            if (firstNumber.includes(".", 0) || secondNumber.includes(".", 0)) {
                display.textContent = "" + operate(parseFloat(firstNumber), parseFloat(secondNumber), operator);
            } else {
                display.textContent = "" + operate(parseInt(firstNumber), parseInt(secondNumber), operator);
            }
            operator = element.getAttribute("value");
            secondNumber = "";
        }
        isFirstNumberSet = true;
        display.textContent = firstNumber + operator + secondNumber;
    })
})

equals.addEventListener("click", () => {
    if (firstNumber.includes(".", 0) || secondNumber.includes(".", 0)) {
        display.textContent = "" + operate(parseFloat(firstNumber), parseFloat(secondNumber), operator);
    } else {
        display.textContent = "" + operate(parseInt(firstNumber), parseInt(secondNumber), operator);
    }
})

reset.addEventListener("click", () => {
    firstNumber = "";
    secondNumber = "";
    operator = "";
    isFirstNumberSet = false;
    display.textContent = "0";
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
    return Math.round((firstNumber + secondNumber) * 100) / 100;
}
function substract(firstNumber, secondNumber) {
    return Math.round((firstNumber - secondNumber) * 100) / 100;
}
function multiply(firstNumber, secondNumber) {
    return Math.round((firstNumber * secondNumber) * 100) / 100;
}
function divide(firstNumber, secondNumber) {
    return Math.round((firstNumber / secondNumber) * 100) / 100;
}