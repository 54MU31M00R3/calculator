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
    return total;
}