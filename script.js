// Start by displaying the zero number on our calculator screen
zeroTotal = "0";
currentTotal = 0;
total = 0;

// Array that stores our converted number strings to number type. 
numberArray = [];

// Keep track of the operation in the console - will be deleted
operationArray = [];

// To store our operators
let operatorArray = [];

//Display Message Array
let messageArray = [];

// When pressing a button number, we define this number as a string
let currentNumber = "";


// display is the variable that we use to display our calculations on the calculator screen. 
const display = document.querySelector("#numDisplay");
display.classList.add('content');
display.textContent = zeroTotal;

// Event Listener used in case a user wants to delete the previous number entered. 
const deleteOps = document.querySelector("#delete");
deleteOps.onclick = function() {

  if (display.textContent == currentTotal) {
    return;
  } else if (((messageArray.slice(messageArray.length - 1, messageArray.length)[0] == "+" && currentNumber == "") ||
      (messageArray.slice(messageArray.length - 1, messageArray.length)[0] == "-" && currentNumber == "") ||
      (messageArray.slice(messageArray.length - 1, messageArray.length)[0] == "x" && currentNumber == "") ||
      (messageArray.slice(messageArray.length - 1, messageArray.length)[0] == "/" && currentNumber == "") ||
      (messageArray.slice(messageArray.length - 1, messageArray.length)[0] == "^" && currentNumber == ""))) {
    operatorArray.pop();
    messageArray.pop()
    currentNumber = numberArray.slice(numberArray.length - 1, numberArray.length).toString();
    numberArray.pop()
    display.textContent = messageArray.join(" ")
    messageArray.pop()

  } else if (currentNumber.length > 1) {
    currentNumber = currentNumber.slice(0, currentNumber.length - 1);
    display.textContent = messageArray.join(" ") + " " + currentNumber;
  } else if (currentNumber.length <= 1) {
    currentNumber = "0";
    zeroTotal = "0";
    display.textContent = messageArray.join(" ") + " " + zeroTotal;
  }
}

// Variable used to clear all our calculation variables
const clear = document.querySelector("#clear");
clear.onclick = function plusMinus() {
  delete zeroTotal;
  currentNumber = "";
  zeroTotal = "0";
  display.textContent = zeroTotal;
  operatorArray = [];
  numberArray = [];
  currentTotal = 0;
  total = 0;
  arrayTotal = [];
  messageArray = [];
  display.style.fontSize = "40px";
}

// This functions allows the user to convert a positive number to a negative number and vice versa 
const plusMinus = document.querySelector("#plusMoins");
plusMinus.onclick = function() {
  if (currentNumber.includes("-") == false) {
    array = [];
    array.push(currentNumber);
    currentNumber = "-" + array[0];
    display.textContent = messageArray.join(" ") + " " + currentNumber;;

  } else {
    array = []
    array.push(currentNumber.slice(1, currentNumber.length)[0]);
    currentNumber = array[0];
    display.textContent = messageArray.join(" ") + " " + currentNumber;;
  }
}

// converts a number to the percentage format
const perc = document.querySelector("#perc");
perc.onclick = function() {
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
nine.onclick = function() {
  if (currentNumber.length <= 10) {
    currentNumber += "9";
    display.textContent = messageArray.join(" ") + " " + currentNumber;
  } else return;
}
const eight = document.querySelector("#eight");
eight.onclick = function() {
  if (currentNumber.length <= 10) {
    currentNumber += "8";
    display.textContent = messageArray.join(" ") + " " + currentNumber;
  } else return;
}

const seven = document.querySelector("#seven");
seven.onclick = function() {
  if (currentNumber.length <= 10) {
    currentNumber += "7";
    display.textContent = messageArray.join(" ") + " " + currentNumber;
  } else return;
}

const six = document.querySelector("#six");
six.onclick = function() {
  if (currentNumber.length <= 10) {
    currentNumber += "6";
    display.textContent = messageArray.join(" ") + " " + currentNumber;
  } else return;
}

five.onclick = function() {
  if (currentNumber.length <= 10) {
    currentNumber += "5";
    display.textContent = messageArray.join(" ") + " " + currentNumber;
  } else return;
}

const four = document.querySelector("#four");
four.onclick = function() {
  if (currentNumber.length <= 10) {
    currentNumber += "4";
    display.textContent = messageArray.join(" ") + " " + currentNumber;
  } else return;
}

const three = document.querySelector("#three");
three.onclick = function() {
  if (currentNumber.length <= 10) {
    currentNumber += "3";
    display.textContent = messageArray.join(" ") + " " + currentNumber;
  } else return;
}
const two = document.querySelector("#two");
two.onclick = function() {
  if (currentNumber.length <= 10) {
    currentNumber += "2";
    display.textContent = messageArray.join(" ") + " " + currentNumber;
  } else return;
}

const one = document.querySelector("#one");
one.onclick = function() {
  if (currentNumber.length <= 10) {
    currentNumber += "1";
    display.textContent = messageArray.join(" ") + " " + currentNumber;;
  } else return;
}

const zero = document.querySelector("#zero");
zero.onclick = function() {
  if (currentNumber.length <= 10) {
    currentNumber += "0";
    display.textContent = messageArray.join(" ") + " " + currentNumber;
  } else return;
}
// This function creates a decimal number
const point = document.querySelector("#point");
point.onclick = function() {
  three
  if (currentNumber.includes(".")) {
    display.textContent = currentNumber;
  } else {
    currentNumber += "."
    display.textContent = currentNumber;
  }
}


// This function add the "+" operand to an operand Array
const plus = document.querySelector("#plus");
plus.onclick = function() {
  numberArray.push(Number(currentNumber));
  messageArray.push(currentNumber)
  operatorArray.push("+");
  messageArray.push("+")
  display.textContent = messageArray.join(" ");
  currentNumber = "";
}

// This function add the "-" operand to an operand Array
const minus = document.querySelector("#minus");
minus.onclick = function() {
  numberArray.push(Number(currentNumber));
  messageArray.push(currentNumber)
  operatorArray.push("-");
  messageArray.push("-")
  display.textContent = messageArray.join(" ");
  currentNumber = "";

}


// This function add the "/" operand to an operand Array
const division = document.querySelector("#division");
division.onclick = function() {
  numberArray.push(Number(currentNumber));
  messageArray.push(currentNumber)
  operatorArray.push("/");
  messageArray.push("/")
  display.textContent = messageArray.join(" ");
  currentNumber = "";
}

// This function add the "*" operand to an operand Array
const multiple = document.querySelector("#multiple");
multiple.onclick = function() {
  numberArray.push(Number(currentNumber));
  messageArray.push(currentNumber)
  operatorArray.push("x");
  messageArray.push("x")
  display.textContent = messageArray.join(" ");
  currentNumber = "";
}


// This function add the ** operand to an operand Array
const exp = document.querySelector("#exp");
exp.onclick = function() {
  numberArray.push(Number(currentNumber));
  messageArray.push(currentNumber)
  operatorArray.push("**");
  messageArray.push("^")
  display.textContent = messageArray.join(" ");
  currentNumber = "";
}


let arrayTotal = [];

//The operate function will proceed all 5 type of math operations : Sums, subtractions, multiplications, divisions and powers. 
const equal = document.querySelector("#equal")
equal.onclick = function operate() {

  numberArray.push(Number(currentNumber));

  if (operatorArray.length == 1) {

    if (operatorArray.slice(operatorArray.length - 1, operatorArray.length)[0] == '+') {

      if (currentTotal == 0) {
        total = numberArray.slice(numberArray.length - 2, numberArray.length - 1)[0] + numberArray.slice(numberArray
          .length - 1, numberArray.length)[0];
        currentTotal += total;
        currentNumber = currentTotal.toString()
        display.textContent = numberArray.slice(numberArray.length - 2, numberArray.length - 1)[0].toString() +
          " + " + numberArray.slice(numberArray.length - 1, numberArray.length)[0].toString() + " = " + currentTotal
          .toString();


      } else {
        array = [];
        array.push(currentTotal);
        currentTotal = currentTotal + numberArray.slice(numberArray.length - 1, numberArray.length)[0];
        currentNumber = currentTotal.toString()
        display.textContent = array[0].toString() + " + " + numberArray.slice(numberArray.length - 1, numberArray
          .length)[0].toString() + " = " + currentTotal.toString()
      }
    } else if (operatorArray.slice(operatorArray.length - 1, operatorArray.length)[0] == '-') {

      if (currentTotal == 0) {
        total = numberArray.slice(numberArray.length - 2, numberArray.length - 1)[0] - numberArray.slice(numberArray
          .length - 1, numberArray.length)[0];
        currentTotal = total;
        currentNumber = currentTotal.toString()
        display.textContent = numberArray.slice(numberArray.length - 2, numberArray.length - 1)[0].toString() +
          " - " + numberArray.slice(numberArray.length - 1, numberArray.length)[0].toString() + " = " + currentTotal
          .toString();
      } else {
        array = [];
        array.push(currentTotal);
        currentTotal = currentTotal - numberArray.slice(numberArray.length - 1, numberArray.length)[0];
        currentNumber = currentTotal.toString()
        display.textContent = array[0].toString() + " - " + numberArray.slice(numberArray.length - 1, numberArray
          .length)[0].toString() + " = " + currentTotal.toString()
      }
    } else if (operatorArray.slice(operatorArray.length - 1, operatorArray.length)[0] == 'x') {

      if (currentTotal == 0) {
        total = numberArray.slice(numberArray.length - 2, numberArray.length - 1)[0] * numberArray.slice(numberArray
          .length - 1, numberArray.length)[0];
        currentTotal = total;
        currentNumber = currentTotal.toString()
        display.textContent = numberArray.slice(numberArray.length - 2, numberArray.length - 1)[0].toString() +
          " x " + numberArray.slice(numberArray.length - 1, numberArray.length)[0].toString() + " = " + currentTotal
          .toString();
      } else {
        array = [];
        array.push(currentTotal);
        currentTotal = currentTotal * numberArray.slice(numberArray.length - 1, numberArray.length)[0];
        currentNumber = currentTotal.toString()
        display.textContent = array[0].toString() + " x " + numberArray.slice(numberArray.length - 1, numberArray
          .length)[0].toString() + " = " + currentTotal.toString()
      }
    } else if (operatorArray.slice(operatorArray.length - 1, operatorArray.length)[0] == '/') {

      if (currentTotal == 0) {
        total = numberArray.slice(numberArray.length - 2, numberArray.length - 1)[0] / numberArray.slice(numberArray
          .length - 1, numberArray.length)[0];
        if (numberArray.slice(numberArray.length - 1, numberArray.length)[0] == 0) {
          display.textContent = "Error; division by zero is not possible"
        } else {


          currentTotal = total;
          currentNumber = currentTotal.toString()
          display.textContent = numberArray.slice(numberArray.length - 2, numberArray.length - 1)[0].toString() +
            " / " + numberArray.slice(numberArray.length - 1, numberArray.length)[0].toString() + " = " + currentTotal
            .toString();
        }
      } else {
        array = [];
        array.push(currentTotal);
        if (numberArray.slice(numberArray.length - 1, numberArray.length)[0] == 0) {
          display.textContent = "Error; division by zero is not possible"
        } else {
          currentTotal = currentTotal / numberArray.slice(numberArray.length - 1, numberArray.length)[0];
        }
        if (numberArray.slice(numberArray.length - 1, numberArray.length)[0] == 0) {}
        currentNumber = currentTotal.toString()
        display.textContent = array[0].toString() + " / " + numberArray.slice(numberArray.length - 1, numberArray
          .length)[0].toString() + " = " + currentTotal.toString()
      }
      numberArray.push(currentTotal);

    } else if (operatorArray.slice(operatorArray.length - 1, operatorArray.length)[0] == '**') {

      if (currentTotal == 0) {
        total = numberArray.slice(numberArray.length - 2, numberArray.length - 1)[0] ** numberArray.slice(numberArray
          .length - 1, numberArray.length)[0];
        currentTotal = total;
        currentNumber = currentTotal.toString()

        display.textContent = numberArray.slice(numberArray.length - 2, numberArray.length - 1)[0].toString() +
          " ^ " + numberArray.slice(numberArray.length - 1, numberArray.length)[0].toString() + " = " + currentTotal
          .toString();
      } else {
        array = [];
        array.push(currentTotal);
        currentTotal = currentTotal ** numberArray.slice(numberArray.length - 1, numberArray.length)[0];
        currentNumber = currentTotal.toString()
        display.textContent = array[0].toString() + " ^ " + numberArray.slice(numberArray.length - 1, numberArray
          .length)[0].toString() + " = " + currentTotal.toString()

      }

    } else {
      return;
    }

    // We reset some arrays if the users want to make other calculations after he pushes on the equal buttons. 
    operatorArray = [];
    messageArray = [];
    numberArray = [];
    currentNumber = currentTotal.toString()
    currentTotal = 0;

  } else if (operatorArray.length > 1) {

    convertOperatorToMaths(operatorArray, numberArray, arrayTotal)
  }

}

function convertOperatorToMaths(operatorArray, numberArray, arrayTotal) {

  for (let i = 0; i < numberArray.length - 1; i++) {
    if (operatorArray.slice(i, i + 1) == "+") {
      if (arrayTotal.length == 0) {
        let currentEquation = numberArray.slice(i, i + 1)[0] + numberArray.slice(i + 1, i + 2)[0];
        arrayTotal.push(currentEquation);

      } else {
        let currentEquation = arrayTotal.slice(arrayTotal.length - 1, arrayTotal.length)[0] + numberArray.slice(i + 1,
          i + 2)[0];
        arrayTotal.push(currentEquation);
      }
    } else if (operatorArray.slice(i, i + 1) == "-") {
      if (arrayTotal.length == 0) {
        let currentEquation = numberArray.slice(i, i + 1)[0] - numberArray.slice(i + 1, i + 2)[0];
        arrayTotal.push(currentEquation);
      } else {
        let currentEquation = arrayTotal.slice(arrayTotal.length - 1, arrayTotal.length)[0] - numberArray.slice(i + 1,
          i + 2)[0];
        arrayTotal.push(currentEquation);
      }
    } else if (operatorArray.slice(i, i + 1) == "/") {
      if (arrayTotal.length == 0) {
        let currentEquation = numberArray.slice(i, i + 1)[0] / numberArray.slice(i + 1, i + 2)[0];
        arrayTotal.push(currentEquation);
      } else {
        let currentEquation = arrayTotal.slice(arrayTotal.length - 1, arrayTotal.length)[0] / numberArray.slice(i + 1,
          i + 2)[0];
        arrayTotal.push(currentEquation);
      }
    } else if (operatorArray.slice(i, i + 1) == "x") {
      if (arrayTotal.length == 0) {
        let currentEquation = numberArray.slice(i, i + 1)[0] * numberArray.slice(i + 1, i + 2)[0];
        arrayTotal.push(currentEquation);
      } else {
        let currentEquation = arrayTotal.slice(arrayTotal.length - 1, arrayTotal.length)[0] * numberArray.slice(i + 1,
          i + 2)[0];
        arrayTotal.push(currentEquation);
      }
    } else if (operatorArray.slice(i, i + 1) == "**") {
      if (arrayTotal.length == 0) {
        let currentEquation = numberArray.slice(i, i + 1)[0] ** numberArray.slice(i + 1, i + 2)[0];
        arrayTotal.push(currentEquation);
      } else {
        let currentEquation = arrayTotal.slice(arrayTotal.length - 1, arrayTotal.length)[0] ** numberArray.slice(i + 1,
          i + 2)[0];
        arrayTotal.push(currentEquation);
      }
    }

  }

  display.textContent = messageArray.join(" ") + " " + numberArray.slice(numberArray.length - 1, numberArray.length)[
    0] + " = " + arrayTotal.slice(arrayTotal.length - 1, arrayTotal.length)[0];
  currentNumber = arrayTotal.slice(arrayTotal.length - 1, arrayTotal.length)[0].toString()
  operatorArray = [];
  numberArray = [];
  currentTotal = 0;
  total = 0;
  arrayTotal = [];
  messageArray = [];



  if (messageArray.length >= 5) {
    display.style.fontSize = "24px";
  }

}