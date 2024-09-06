const screen = document.querySelector("#screen");
const numpad = document.querySelectorAll(".operand");
const operators = document.querySelectorAll(".operator");
const symbols = ["*","/","-","+"];

const decimalBtn = document.querySelector("#decimal");
const delBtn = document.querySelector("#delete");
const allClearBtn = document.querySelector("#all-clear");
const equalsBtn = document.querySelector("#equals");

let screenText = [];
let runningTotal = 0;

screen.textContent = '';
numpad.forEach(operand => {
    operand.addEventListener("click", () => {
        screenText.push(operand.textContent.trim());
        screen.textContent = screenText.join('');
        console.log(screenText)
    })
});

operators.forEach(operator => {
    operator.addEventListener("click", () => {
        if (screenText.length === 0){
            screenText.push('Ans')
        }

        if (!(symbols.includes(screenText[screenText.length -1]))){
            screenText.push(operator.textContent.trim());
        } else {
            screenText[screenText.length -1] = operator.textContent.trim();
        }
        screen.textContent = screenText.join('');
        console.log(screenText)
    })
});

decimalBtn.addEventListener("click", () => {
    if (!((screenText[screenText.length -1] === '.') || screenText.includes('.'))){
        screenText.push(decimalBtn.textContent.trim());
        screen.textContent = screenText.join('');
    } else if (screenText.includes('.') && (screenText.some((text) => symbols.includes(text)))) {
        for (let i = screenText.length -1; i >=0; i--){
            if (symbols.includes(screenText[i])) {
                currentNum = screenText.slice(i)
                break;
            }
        }
        if (!(currentNum.includes('.'))){
            screenText.push(decimalBtn.textContent.trim());
            screen.textContent = screenText.join('');
        }
    }
});

delBtn.addEventListener("click", () => {
    screenText.pop();
    screen.textContent = screenText.join('');
});

allClearBtn.addEventListener("click", () => {
    screenText = [];
    runningTotal = 0;
    screen.textContent = screenText;
});

equalsBtn.addEventListener("click", () => {
    total = operate(screenText);
    runningTotal = total;
    screen.textContent = runningTotal;
    screenText = [];
});

function add(a, b) {
    let sum = a + b;
    return sum;
}

function subtract(a, b) {
    let difference = a - b;
    return difference;
}

function multiply(a, b) {
    let product = a * b;
    return product;
}

function divide(a, b) {
    let quotient = a / b;
    return quotient;
}

function operate(array) {
    let concatNumbers = [];
    let number = '';

    for (let i = 0; i < array.length; i++){
        if (symbols.includes(array[i])){
            concatNumbers.push(number, array[i])
            number = '' + array[++i];
            if (i === array.length - 1) {
                concatNumbers.push(number);
            }
        } else if (i === array.length - 1) {
            number += array[i];
            concatNumbers.push(number);
        }
        else {
            number += array[i];
        }
    }


    if (concatNumbers[0] == 'Ans'){
        concatNumbers.splice(0, 1, runningTotal)
    } 
    
    let firstOperand = parseFloat(concatNumbers[0])
    let secondOperand = parseFloat(concatNumbers[2])

    console.log(concatNumbers)
    if (concatNumbers[1]=== "*"){
        return multiply(firstOperand, secondOperand);
    } else if (concatNumbers[1]=== "/"){
        return divide(firstOperand, secondOperand);
    } else if (concatNumbers[1]=== "+"){
        return add(firstOperand, secondOperand);
    } else if (concatNumbers[1]=== "-"){
        return subtract(firstOperand, secondOperand);
    }
}