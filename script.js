// Start by displaying the zero number on our calculator screen

zeroTotal = "0";
currentTotal = 0;
total = 0;

// Array that stores our converted number strings to number type. 
numberArray = [];

// Keep track of the operation in the console - will be deleted
operationArray = [];

// To store our operators
opererandArray = [];

//Display Message Array
messageArray = []

currentNumber = "";


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
    } else if (currentNumber.length <= 1) {
        currentNumber = ""
        zeroTotal = "0";
        display.textContent = zeroTotal;
    } else if (display.textContent == currentTotal) {
        return;
    }
}

const clear = document.querySelector("#clear");
clear.onclick = function plusMinus() {
    delete zeroTotal;
    currentNumber = "";
    zeroTotal = "0";
    display.textContent = zeroTotal;
    operationArray = [];
    opererandArray = [];
    numberArray = [];
    currentTotal = 0;
    total = 0;
    arrayTotal = [];
    messageArray = [];
}

const parenteses = document.querySelector("#parenteses");

// This functions allows the user to convert a positive number to a negative number and vice versa 
const plusMinus = document.querySelector("#plusMoins");
plusMinus.onclick = function () {
    if (currentNumber.includes("-") == false) {
        array = [];
        array.push(currentNumber);
        currentNumber = "-" + array[0];
        display.textContent = currentNumber;
    } else {
        array = []
        array.push(currentNumber.slice(1, currentNumber.length)[0]);
        currentNumber = array[0];
        display.textContent = currentNumber;
    }
}

// converts a number to the percentage format

const perc = document.querySelector("#perc");
perc.onclick = function () {
    var percNumber = Number(currentNumber) * 100;
    if (percNumber % 1 == 0) {
        display.textContent = percNumber.toString() + "%";

    } else {
        display.textContent = percNumber.toFixed(4).toString() + "%";
    }
}

// We have nine event listeners for the numbers on our numpad. Each event (+, -, *, /, **) will concatenate a string and that will 
// be converted into a Number in a designated array. 
const nine = document.querySelector("#nine")
nine.onclick = function () {
    if (currentNumber.length < 21) {
        currentNumber += "9";
        display.textContent = messageArray.join(" ") + " " + currentNumber;;
    } else if (currentNumber.length >= 21 && currentNumber.length <= 23) {
        currentNumber += "9";
        display.textContent = messageArray.join(" ") + " " + currentNumber;;
        display.style.fontSize = "35px"
    } else return;
}
const eight = document.querySelector("#eight");
eight.onclick = function () {
    if (currentNumber.length < 21) {
        currentNumber += "8";
        display.textContent = messageArray.join(" ") + " " + currentNumber;;
    } else if (currentNumber.length >= 21 && currentNumber.length <= 23) {
        currentNumber += "8";
        display.textContent = messageArray.join(" ") + " " + currentNumber;;
        display.style.fontSize = "36px"
    } else return;
}

const seven = document.querySelector("#seven");
seven.onclick = function () {
    if (currentNumber.length < 21) {
        currentNumber += "7";
        display.textContent = messageArray.join(" ") + " " + currentNumber;;
    } else if (currentNumber.length >= 21 && currentNumber.length <= 23) {
        currentNumber += "7";
        display.textContent = messageArray.join(" ") + " " + currentNumber;;
        display.style.fontSize = "36px"
    } else return;
}

const six = document.querySelector("#six");
six.onclick = function () {
    if (currentNumber.length < 21) {
        currentNumber += "6";
        display.textContent = messageArray.join(" ") + " " + currentNumber;;
    } else if (currentNumber.length >= 21 && currentNumber.length <= 23) {
        currentNumber += "6";
        display.textContent = messageArray.join(" ") + " " + currentNumber;;
        display.style.fontSize = "36px"
    } else return;
}

const five = document.querySelector("#five");
five.onclick = function () {
    if (currentNumber.length < 21) {
        currentNumber += "5";
        display.textContent = messageArray.join(" ") + " " + currentNumber;;
    } else if (currentNumber.length >= 21 && currentNumber.length <= 23) {
        currentNumber += "5";
        display.textContent = messageArray.join(" ") + " " + currentNumber;;
        display.style.fontSize = "36px"
    } else return;
}

const four = document.querySelector("#four");
four.onclick = function () {
    if (currentNumber.length < 21) {
        currentNumber += "4";
        display.textContent = messageArray.join(" ") + " " + currentNumber;;
    } else if (currentNumber.length >= 21 && currentNumber.length <= 23) {
        currentNumber += "4";
        display.textContent = messageArray.join(" ") + " " + currentNumber;;
        display.style.fontSize = "36px"
    } else return;
}

const three = document.querySelector("#three");
three.onclick = function () {
    if (currentNumber.length < 21) {
        currentNumber += "3";
        display.textContent = messageArray.join(" ") + " " + currentNumber;;
    } else if (currentNumber.length >= 21 && currentNumber.length <= 23) {
        currentNumber += "3";
        display.textContent = messageArray.join(" ") + " " + currentNumber;;
        display.style.fontSize = "36px"
    } else return;
}

const two = document.querySelector("#two");
two.onclick = function () {
    if (currentNumber.length < 21) {
        currentNumber += "2";
        display.textContent = messageArray.join(" ") + " " + currentNumber;;
    } else if (currentNumber.length >= 21 && currentNumber.length <= 23) {
        currentNumber += "2";
        display.textContent = messageArray.join(" ") + " " + currentNumber;;
        display.style.fontSize = "36px"
    } else return;
}

const one = document.querySelector("#one");
one.onclick = function () {
    if (currentNumber.length < 21) {
        currentNumber += "1";
        display.textContent = messageArray.join(" ") + " " + currentNumber;;
    } else if (currentNumber.length >= 21 && currentNumber.length <= 23) {
        currentNumber += "1";
        display.textContent = messageArray.join(" ") + " " + currentNumber;;
        display.style.fontSize = "36px"
    } else return;

}

const zero = document.querySelector("#zero");
zero.onclick = function () {
    if (currentNumber.length < 23 && currentNumber !== "0") {
        currentNumber += "0";
        display.textContent = messageArray.join(" ") + " " + currentNumber;;
    } else return;
}
// This function creates a decimal number
const point = document.querySelector("#point");
point.onclick = function () {three
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
    messageArray.push(currentNumber)
    opererandArray.push("+");
    messageArray.push("+")
    display.textContent = messageArray.join(" ");
    currentNumber = "";
}

// This function add the "-" operand to an operand Array
const minus = document.querySelector("#minus");
minus.onclick = function () {
    numberArray.push(Number(currentNumber));
    messageArray.push(currentNumber)
    opererandArray.push("-");
    messageArray.push("-")
    display.textContent = messageArray.join(" ");
    currentNumber = "";
}

// This function add the "/" operand to an operand Array
const division = document.querySelector("#division");
division.onclick = function () {
    numberArray.push(Number(currentNumber));
    messageArray.push(currentNumber)
    opererandArray.push("/");
    console.log(operationArray);
    messageArray.push("/")
    display.textContent = messageArray.join(" ");
    currentNumber = "";
}

// This function add the "*" operand to an operand Array
const multiple = document.querySelector("#multiple");
multiple.onclick = function () {
    numberArray.push(Number(currentNumber));
    messageArray.push(currentNumber)
    opererandArray.push("x");
    messageArray.push("x")
    display.textContent = messageArray.join(" ");
    currentNumber = "";
}

// This function add the ** operand to an operand Array
const exp = document.querySelector("#exp");
exp.onclick = function () {
    numberArray.push(Number(currentNumber));
    messageArray.push(currentNumber)
    opererandArray.push("**");
    messageArray.push("**")
    display.textContent = messageArray.join(" ");
    currentNumber = "";
}

let arrayTotal = [];

//The operate function will proceed all 5 type of math operations : Sums, subtractions, multiplications, divisions and powers. 
const equal = document.querySelector("#equal")
equal.onclick = function operate() {
    numberArray.push(Number(currentNumber));

    if (opererandArray.length == 1) {

        if (opererandArray.slice(opererandArray.length - 1, opererandArray.length)[0] == '+') {

            if (currentTotal == 0) {
                total = numberArray.slice(numberArray.length - 2, numberArray.length - 1)[0] + numberArray.slice(numberArray.length - 1, numberArray.length)[0];
                currentTotal += total;
                currentNumber = currentTotal.toString()
                display.textContent = numberArray.slice(numberArray.length - 2, numberArray.length - 1)[0].toString() + " + " + numberArray.slice(numberArray.length - 1, numberArray.length)[0].toString() + " = " + currentTotal.toString();
            
            } else {
                array = [];
                array.push(currentTotal);
                currentTotal = currentTotal + numberArray.slice(numberArray.length - 1, numberArray.length)[0];
                currentNumber = currentTotal.toString()
                display.textContent = array[0].toString() + " + " + numberArray.slice(numberArray.length - 1, numberArray.length)[0].toString() + " = " + currentTotal.toString()
            }
        } else if (opererandArray.slice(opererandArray.length - 1, opererandArray.length)[0] == '-') {

            if (currentTotal == 0) {
                total = numberArray.slice(numberArray.length - 2, numberArray.length - 1)[0] - numberArray.slice(numberArray.length - 1, numberArray.length)[0];
                currentTotal = total;
                currentNumber = currentTotal.toString()
                display.textContent = numberArray.slice(numberArray.length - 2, numberArray.length - 1)[0].toString() + " - " + numberArray.slice(numberArray.length - 1, numberArray.length)[0].toString() + " = " + currentTotal.toString();
            } else {
                array = [];
                array.push(currentTotal);
                currentTotal = currentTotal - numberArray.slice(numberArray.length - 1, numberArray.length)[0];
                currentNumber = currentTotal.toString()
                display.textContent = array[0].toString() + " - " + numberArray.slice(numberArray.length - 1, numberArray.length)[0].toString() + " = " + currentTotal.toString()
            }
        } else if (opererandArray.slice(opererandArray.length - 1, opererandArray.length)[0] == 'x') {

            if (currentTotal == 0) {
                total = numberArray.slice(numberArray.length - 2, numberArray.length - 1)[0] * numberArray.slice(numberArray.length - 1, numberArray.length)[0];
                currentTotal = total;
                currentNumber = currentTotal.toString()
                display.textContent = numberArray.slice(numberArray.length - 2, numberArray.length - 1)[0].toString() + " x " + numberArray.slice(numberArray.length - 1, numberArray.length)[0].toString() + " = " + currentTotal.toString();
            } else {
                array = [];
                array.push(currentTotal);
                currentTotal = currentTotal * numberArray.slice(numberArray.length - 1, numberArray.length)[0];
                currentNumber = currentTotal.toString()
                display.textContent = array[0].toString() + " X " + numberArray.slice(numberArray.length - 1, numberArray.length)[0].toString() + " = " + currentTotal.toString()
            }
        } else if (opererandArray.slice(opererandArray.length - 1, opererandArray.length)[0] == '/') {

            if (currentTotal == 0) {
                total = numberArray.slice(numberArray.length - 2, numberArray.length - 1)[0] / numberArray.slice(numberArray.length - 1, numberArray.length)[0];
                currentTotal = total;
                currentNumber = currentTotal.toString()
                display.textContent = numberArray.slice(numberArray.length - 2, numberArray.length - 1)[0].toString() + " / " + numberArray.slice(numberArray.length - 1, numberArray.length)[0].toString() + " = " + currentTotal.toString();
            } else {
                array = [];
                array.push(currentTotal);
                currentTotal = currentTotal / numberArray.slice(numberArray.length - 1, numberArray.length)[0];
                currentNumber = currentTotal.toString()
                display.textContent = array[0].toString() + " / " + numberArray.slice(numberArray.length - 1, numberArray.length)[0].toString() + " = " + currentTotal.toString()
            }
        } else if (opererandArray.slice(opererandArray.length - 1, opererandArray.length)[0] == '**') {

            if (currentTotal == 0) {
                total = numberArray.slice(numberArray.length - 2, numberArray.length - 1)[0] ** numberArray.slice(numberArray.length - 1, numberArray.length)[0];
                currentTotal = total;
                currentNumber = currentTotal.toString()

                display.textContent = numberArray.slice(numberArray.length - 2, numberArray.length - 1)[0].toString() + " ^ " + numberArray.slice(numberArray.length - 1, numberArray.length)[0].toString() + " = " + currentTotal.toString();
            } else {
                array = [];
                array.push(currentTotal);
                currentTotal = currentTotal ** numberArray.slice(numberArray.length - 1, numberArray.length)[0];
                currentNumber = currentTotal.toString()
                display.textContent = array[0].toString() + " ^ " + numberArray.slice(numberArray.length - 1, numberArray.length)[0].toString() + " = " + currentTotal.toString()

            }

        } else {
            return;
        }

        opererandArray.pop();

        numberArray.push(currentTotal);


    } else if (opererandArray.length > 1) {

        convertOperatorToMaths(opererandArray, numberArray, arrayTotal)

    }

}

function convertOperatorToMaths(opererandArray, numberArray, arrayTotal) {

    let message = "";
    let total = "";

    for (let i = 0; i < numberArray.length - 1; i++) {
        if (opererandArray.slice(i, i + 1) == "+") {
            if (arrayTotal.length == 0) {
                let currentEquation = numberArray.slice(i, i + 1)[0] + numberArray.slice(i + 1, i + 2)[0];
                arrayTotal.push(currentEquation);

            } else {
                let currentEquation = arrayTotal.slice(arrayTotal.length - 1, arrayTotal.length)[0] + numberArray.slice(i + 1, i + 2)[0];
                arrayTotal.push(currentEquation);
            }
        } else if (opererandArray.slice(i, i + 1) == "-") {
            if (arrayTotal.length == 0) {
                let currentEquation = numberArray.slice(i, i + 1)[0] - numberArray.slice(i + 1, i + 2)[0];
                arrayTotal.push(currentEquation);
            } else {
                let currentEquation = arrayTotal.slice(arrayTotal.length - 1, arrayTotal.length)[0] - numberArray.slice(i + 1, i + 2)[0];
                arrayTotal.push(currentEquation);
            }
        } else if (opererandArray.slice(i, i + 1) == "/") {
            if (arrayTotal.length == 0) {
                let currentEquation = numberArray.slice(i, i + 1)[0] / numberArray.slice(i + 1, i + 2)[0];
                arrayTotal.push(currentEquation);
            } else {
                let currentEquation = arrayTotal.slice(arrayTotal.length - 1, arrayTotal.length)[0] / numberArray.slice(i + 1, i + 2)[0];
                arrayTotal.push(currentEquation);
            }
        } else if (opererandArray.slice(i, i + 1) == "x") {
            if (arrayTotal.length == 0) {
                let currentEquation = numberArray.slice(i, i + 1)[0] * numberArray.slice(i + 1, i + 2)[0];
                arrayTotal.push(currentEquation);
            } else {
                let currentEquation = arrayTotal.slice(arrayTotal.length - 1, arrayTotal.length)[0] * numberArray.slice(i + 1, i + 2)[0];
                arrayTotal.push(currentEquation);
            }
        } else if (opererandArray.slice(i, i + 1) == "**") {
            if (arrayTotal.length == 0) {
                let currentEquation = numberArray.slice(i, i + 1)[0] ** numberArray.slice(i + 1, i + 2)[0];
                arrayTotal.push(currentEquation);
            } else {
                let currentEquation = arrayTotal.slice(arrayTotal.length - 1, arrayTotal.length)[0] ** numberArray.slice(i + 1, i + 2)[0];
                arrayTotal.push(currentEquation);
            }
        }
        console.log(arrayTotal);
    }

    display.textContent = arrayTotal.slice(arrayTotal.length - 1, arrayTotal.length)[0];
    currentNumber = ""

}
