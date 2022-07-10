// Start by displaying the zero number on our calculator screen

zeroTotal = "0";

currentTotal = 0;
total = 0;
numberArray = [];


operationArray = [];

// for (let i = 0; i < operationArray.length; i++) {
//     numberArray.push(Number(operationArray[i]))
// }

opererandArray = [];

currentNumber = "";

zeroTotal = "0";
const display = document.querySelector("#numDisplay");
display.classList.add('content');
display.textContent = zeroTotal;

// Event Listener used in case a user wants to delete the previous number entered. 
const deleteOps = document.querySelector("#delete");
deleteOps.onclick = function () {

    if (currentNumber.length > 1) {
        operationArray.pop()
        numberArray.pop()
        currentNumber = currentNumber.slice(0, currentNumber.length - 1);
        display.textContent = currentNumber;
    } else if (currentNumber.length == 0) {
        currentNumber = ""
        zeroTotal = "0";
        display.textContent = zeroTotal;
        operationArray.push("+");
    } else if (display.textContent == currentTotal) {
        return;
    }
}

const clear = document.querySelector("#clear");
clear.onclick = function () {
    delete zeroTotal;
    currentNumber = "";
    zeroTotal = "0";

    display.textContent = zeroTotal;

    operationArray = [];
    numberArray = [];

    currentTotal = 0;
    total = 0;
}

const parenteses = document.querySelector("#parenteses");
const plusMinus = document.querySelector("#plusMoins");
const perc = document.querySelector("#perc");


// perc.onclick = function () {
//     deleteOps.onclick = function () {
//         currentNumberslice(0, currentNumber.length - 1);
//             display.textContent = currentNumber;
//         } else {
//             ;
//             currentNumber = ""
//             zeroTotal = "0";
//             display.textContent = zeroTotal;
//             operationArray.push(currentNumber);
//             operationArray.push("+");
//             var percNumber = Number(currentNumber) * 100;
//             display.textContent = percNumber.toString() + "%";
//         }

//     var percNumber = Number(currentNumber) * 100;
//     display.textContent = percNumber.toString() + "%";

// }

// We have nine event listeners for the numbers on our numpad. Each event (+, -, *, /, **) will concatenate a string and that will 
// be converted into a Number in a designated array. 

const nine = document.querySelector("#nine")
nine.onclick = function () {
    if (currentNumber.length < 21) {
        currentNumber += "9";
        display.textContent = currentNumber;
    } else if (currentNumber.length >= 21 && currentNumber.length  <= 23) {
        currentNumber += "9";
        display.textContent = currentNumber;
        display.style.fontSize = "35px"
    } else return;
}
const eight = document.querySelector("#eight");
eight.onclick = function () {
    if (currentNumber.length < 21) {
        currentNumber += "8";
        display.textContent = currentNumber;
    } else if (currentNumber.length >= 21 && currentNumber.length  <= 23) {
        currentNumber += "8";
        display.textContent = currentNumber;
        display.style.fontSize = "36px"
    } else return;
}
const seven = document.querySelector("#seven");
seven.onclick = function () {
    if (currentNumber.length < 21) {
        currentNumber += "7";
        display.textContent = currentNumber;
    } else if (currentNumber.length >= 21 && currentNumber.length  <= 23) {
        currentNumber += "7";
        display.textContent = currentNumber;
        display.style.fontSize = "36px"
    } else return;
}

const six = document.querySelector("#six");
six.onclick = function () {
    if (currentNumber.length < 21) {
        currentNumber += "6";
        display.textContent = currentNumber;
    } else if (currentNumber.length >= 21 && currentNumber.length  <= 23) {
        currentNumber += "6";
        display.textContent = currentNumber;
        display.style.fontSize = "36px"
    } else return;
}

const five = document.querySelector("#five");
five.onclick = function () {
    if (currentNumber.length < 21) {
        currentNumber += "5";
        display.textContent = currentNumber;
    } else if (currentNumber.length >= 21 && currentNumber.length  <= 23) {
        currentNumber += "5";
        display.textContent = currentNumber;
        display.style.fontSize = "36px"
    } else return;
}

const four = document.querySelector("#four");
four.onclick = function () {
    if (currentNumber.length < 21) {
        currentNumber += "4";
        display.textContent = currentNumber;
    } else if (currentNumber.length >= 21 && currentNumber.length  <= 23) {
        currentNumber += "4";
        display.textContent = currentNumber;
        display.style.fontSize = "35px";
    } else return;
}

const three = document.querySelector("#three");
three.onclick = function () {
    if (currentNumber.length < 21) {
        currentNumber += "3";
        display.textContent = currentNumber;
    } else if (currentNumber.length >= 21 && currentNumber.length  <= 23) {
        currentNumber += "3";
        display.textContent = currentNumber;
        display.style.fontSize = "36px"
    } else return;
}

const two = document.querySelector("#two");
two.onclick = function () {
    if (currentNumber.length < 21) {
        currentNumber += "2";
        display.textContent = currentNumber;
    } else if (currentNumber.length >= 21 && currentNumber.length  <= 23) {
        currentNumber += "2";
        display.textContent = currentNumber;
        display.style.fontSize = "36px"
    } else return;
}

const one = document.querySelector("#one");
one.onclick = function () {
    if (currentNumber.length < 21) {
        currentNumber += "1";
        display.textContent = currentNumber;
    } else if (currentNumber.length >= 21 && currentNumber.length  <= 23) {
        currentNumber += "1";
        display.textContent = currentNumber;
        display.style.fontSize = "36px"
    } else return;
}

const zero = document.querySelector("#zero");
zero.onclick = function () {
    if (currentNumber.length < 23 && currentNumber !== "0") {
        currentNumber += "0";
        display.textContent = currentNumber;
    } else return;
}

// This function creates a decimal number
const point = document.querySelector("#point");
point.onclick = function () {
    if (currentNumber.includes(".")) {
        display.textContent = currentNumber;
    } else {
        currentNumber += "."
        display.textContent = currentNumber;
    }
}
// This function add the "+" operand to an operand Array
const plus = document.querySelector("#plus");
plus.onclick = function () {
    numberArray.push(Number(currentNumber));
    operationArray.push(currentNumber);
    opererandArray.push("+");
    currentNumber = "";
}

// This function add the "-" operand to an operand Array
const minus = document.querySelector("#minus");
minus.onclick = function () {
    numberArray.push(Number(currentNumber));
    operationArray.push(currentNumber);
    opererandArray.push("-");
    currentNumber = "";
}

// This function add the "/" operand to an operand Array
const division = document.querySelector("#division");
division.onclick = function () {
    numberArray.push(Number(currentNumber));
    operationArray.push(currentNumber);
    opererandArray.push("/");
    console.log(operationArray);
    currentNumber = "";
}

// This function add the "*" operand to an operand Array
const multiple = document.querySelector("#multiple");
multiple.onclick = function () {
    numberArray.push(Number(currentNumber));
    operationArray.push(currentNumber);
    opererandArray.push("x");
    console.log(operationArray);
    currentNumber = "";
}

// This function add the ** operand to an operand Array
const exp = document.querySelector("#exp");
exp.onclick = function () {
    numberArray.push(Number(currentNumber));
    operationArray.push(currentNumber);
    opererandArray.push("**");
    console.log(operationArray);
    currentNumber = "";
}


//The operate function will proceed all 5 type of math operations : Sums, subtractions, multiplications, divisions and powers. 
const equal = document.querySelector("#equal")
equal.onclick = function operate() {
    numberArray.push(Number(currentNumber));

    if (opererandArray.slice(opererandArray.length - 1, opererandArray.length)[0] == '+') {

        if (currentTotal == 0) {
            total = numberArray.slice(numberArray.length - 2, numberArray.length - 1)[0] + numberArray.slice(numberArray.length - 1, numberArray.length)[0];
            currentTotal += total;
            display.textContent = numberArray.slice(numberArray.length - 2, numberArray.length - 1)[0].toString() + " + " + numberArray.slice(numberArray.length - 1, numberArray.length)[0].toString() + " = " + currentTotal.toString();

        } else {
            array = [];
            array.push(currentTotal);
            currentTotal = currentTotal + numberArray.slice(numberArray.length - 1, numberArray.length)[0];
            display.textContent = array[0].toString() + " + " + numberArray.slice(numberArray.length - 1, numberArray.length)[0].toString() + " = " + currentTotal.toString()
        }
    } else if (opererandArray.slice(opererandArray.length - 1, opererandArray.length)[0] == '-') {

        if (currentTotal == 0) {
            total = numberArray.slice(numberArray.length - 2, numberArray.length - 1)[0] - numberArray.slice(numberArray.length - 1, numberArray.length)[0];
            currentTotal = total;
            display.textContent = numberArray.slice(numberArray.length - 2, numberArray.length - 1)[0].toString() + " - " + numberArray.slice(numberArray.length - 1, numberArray.length)[0].toString() + " = " + currentTotal.toString();
        } else {
            array = [];
            array.push(currentTotal);
            currentTotal = currentTotal - numberArray.slice(numberArray.length - 1, numberArray.length)[0];
            display.textContent = array[0].toString() + " - " + numberArray.slice(numberArray.length - 1, numberArray.length)[0].toString() + " = " + currentTotal.toString()
        }
    } else if (opererandArray.slice(opererandArray.length - 1, opererandArray.length)[0] == 'x') {

        if (currentTotal == 0) {
            total = numberArray.slice(numberArray.length - 2, numberArray.length - 1)[0] * numberArray.slice(numberArray.length - 1, numberArray.length)[0];
            currentTotal = total;
            display.textContent = numberArray.slice(numberArray.length - 2, numberArray.length - 1)[0].toString() + " X " + numberArray.slice(numberArray.length - 1, numberArray.length)[0].toString() + " = " + currentTotal.toString();
        } else {
            array = [];
            array.push(currentTotal);
            currentTotal = currentTotal * numberArray.slice(numberArray.length - 1, numberArray.length)[0];
            display.textContent = array[0].toString() + " X " + numberArray.slice(numberArray.length - 1, numberArray.length)[0].toString() + " = " + currentTotal.toString()
        }
    } else if (opererandArray.slice(opererandArray.length - 1, opererandArray.length)[0] == '/') {

        if (currentTotal == 0) {
            total = numberArray.slice(numberArray.length - 2, numberArray.length - 1)[0] / numberArray.slice(numberArray.length - 1, numberArray.length)[0];
            currentTotal = total;
            display.textContent = numberArray.slice(numberArray.length - 2, numberArray.length - 1)[0].toString() + " / " + numberArray.slice(numberArray.length - 1, numberArray.length)[0].toString() + " = " + currentTotal.toString();
        } else {
            array = [];
            array.push(currentTotal);
            currentTotal = currentTotal / numberArray.slice(numberArray.length - 1, numberArray.length)[0];
            display.textContent = array[0].toString() + " / " + numberArray.slice(numberArray.length - 1, numberArray.length)[0].toString() + " = " + currentTotal.toString()
        }
    } else if (opererandArray.slice(opererandArray.length - 1, opererandArray.length)[0] == '**') {

        if (currentTotal == 0) {
            total = numberArray.slice(numberArray.length - 2, numberArray.length - 1)[0] ** numberArray.slice(numberArray.length - 1, numberArray.length)[0];
            currentTotal = total;
            display.textContent = numberArray.slice(numberArray.length - 2, numberArray.length - 1)[0].toString() + " ^ " + numberArray.slice(numberArray.length - 1, numberArray.length)[0].toString() + " = " + currentTotal.toString();
        } else {
            array = [];
            array.push(currentTotal);
            currentTotal = currentTotal ** numberArray.slice(numberArray.length - 1, numberArray.length)[0];
            display.textContent = array[0].toString() + " ^ " + numberArray.slice(numberArray.length - 1, numberArray.length)[0].toString() + " = " + currentTotal.toString()
        }
    }
}