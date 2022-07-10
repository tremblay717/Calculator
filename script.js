// Start by displaying the zero number on our calculator screen

zeroTotal = "0";

let currentNumber = "";

const display = document.querySelector("#numDisplay");
display.classList.add('content');
display.textContent = zeroTotal;


const deleteOps = document.querySelector("#delete");
deleteOps.onclick = function () {

    if (currentNumber.length > 1) {

        currentNumber = currentNumber.slice(0, currentNumber.length - 1);
        display.textContent = currentNumber;
    } else {     
             currentNumber = ""
            zeroTotal = "0";
            display.textContent = zeroTotal;
        }
    }


const clear = document.querySelector("#clear");
clear.onclick = function () {
    delete zeroTotal;
    currentNumber = ""
    zeroTotal = "0";
    display.textContent = zeroTotal;
}


const parenteses = document.querySelector("#parenteses");
const plusMinus = document.querySelector("#plusMoins");
const perc = document.querySelector("#perc");
const division = document.querySelector("#division");


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


// const plus = document.querySelector("#plus");
// plus.onclick = function () {

// }



const zero = document.querySelector("#zero");
zero.onclick = function () {
    currentNumber += "0";
    display.textContent = currentNumber;
}
const point = document.querySelector("#point");
const exp = document.querySelector("#exp");
const equal = document.querySelector("#equal");