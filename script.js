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

const seven = document.querySelector("#seven");
seven.onclick = function () {
    currentNumber += "7";
    display.textContent = currentNumber;
}

const eight = document.querySelector("#eight");
eight.onclick = function () {
    currentNumber += "8";
    display.textContent = currentNumber;
}

const nine = document.querySelector("#nine");
nine.onclick = function () {
    currentNumber += "9";
    display.textContent = currentNumber;
}

const multiple = document.querySelector("#multiple");

const four = document.querySelector("#four");
four.onclick = function () {
    currentNumber += "4";
    display.textContent = currentNumber;
}

const five = document.querySelector("#five");
five.onclick = function () {
    currentNumber += "5";
    display.textContent = currentNumber;
}


const six = document.querySelector("#six");
six.onclick = function () {
    currentNumber += "6";
    display.textContent = currentNumber;
}

const minus = document.querySelector("#minus");
minus.onclick = function () {
    numberArray.push(Number(currentNumber));
    operationArray.push(currentNumber);
    opererandArray.push("-");
    console.log(operationArray);
    currentNumber = "";
}

const one = document.querySelector("#one");
one.onclick = function () {
    currentNumber += "1";
    display.textContent = currentNumber;
}

const two = document.querySelector("#two");
two.onclick = function () {
    currentNumber += "2";
    display.textContent = currentNumber;
}
const three = document.querySelector("#three");
three.onclick = function () {
    currentNumber += "3";
    display.textContent = currentNumber;
}

var operations = 0;

const plus = document.querySelector("#plus");
plus.onclick = function () {


    numberArray.push(Number(currentNumber));
    operationArray.push(currentNumber);
    opererandArray.push("+");
    console.log(operationArray);
    currentNumber = "";
}


const zero = document.querySelector("#zero");
zero.onclick = function () {
    currentNumber += "0";
    display.textContent = currentNumber;
}


const point = document.querySelector("#point");
point.onclick = function () {

    if (currentNumber.includes(".")) {
        display.textContent = currentNumber;
    } else {
        currentNumber += "."
        display.textContent = currentNumber;
    }
}


const exp = document.querySelector("#exp");


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
    }

    if (opererandArray.slice(opererandArray.length - 1, opererandArray.length)[0] == '-') {

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
    }
}