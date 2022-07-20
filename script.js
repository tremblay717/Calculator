// Start by displaying the zero number on our calculator screen
zeroTotal = "0";
currentTotal = 0;

// Array that stores our converted number strings to number type. 
numberArray = [];

//Used to store a previous total and force the user to either delete it or start from it when starting a new calculation
let memoryArray = [];

// To store our operators
let operatorArray = [];

//Display Message Array
let messageArray = [];

// When pressing a button number, we define this number as a string
let currentNumber = "";


// display is the variable that we use to display our calculations on the calculator screen. 
const display = document.querySelector("#numDisplay");
display.classList.add('content');
display.style.fontSize = '24px';
display.textContent = zeroTotal;

// Event Listener used in case a user wants to delete the previous number entered. 
const deleteOps = document.querySelector("#delete");
deleteOps.onclick = function() {

  if (display.textContent == currentTotal || memoryArray.length != 0) {
    return;
  } else if (((messageArray.slice(messageArray.length - 1, messageArray.length)[0] == "+" && currentNumber == "") ||
      (messageArray.slice(messageArray.length - 1, messageArray.length)[0] == "-" && currentNumber == "") ||
      (messageArray.slice(messageArray.length - 1, messageArray.length)[0] == "x" && currentNumber == "") ||
      (messageArray.slice(messageArray.length - 1, messageArray.length)[0] == "÷" && currentNumber == "") ||
      (messageArray.slice(messageArray.length - 1, messageArray.length)[0] == "^" && currentNumber == ""))) {

      // Deleting previous inputs in these two arrays
      operatorArray.pop();
      messageArray.pop();
      
      currentNumber = numberArray.slice(numberArray.length - 1, numberArray.length).toString();
      numberArray.pop();
      display.textContent = messageArray.join(" ");
      messageArray.pop();

  } 
  
  else if (((messageArray.slice(messageArray.length - 1, messageArray.length)[0] == "+" && currentNumber == "0") ||
      (messageArray.slice(messageArray.length - 1, messageArray.length)[0] == "-" && currentNumber == "0") ||
      (messageArray.slice(messageArray.length - 1, messageArray.length)[0] == "x" && currentNumber == "0") ||
      (messageArray.slice(messageArray.length - 1, messageArray.length)[0] == "÷" && currentNumber == "0") ||
      (messageArray.slice(messageArray.length - 1, messageArray.length)[0] == "^" && currentNumber == "0"))) {
        
        // Deleting previous inputs in these two arrays
        operatorArray.pop();
        messageArray.pop();
        currentNumber = numberArray.slice(numberArray.length - 1, numberArray.length).toString();
        numberArray.pop();
        display.textContent = messageArray.join(" ");
        messageArray.pop();
  } 
  
  else if (currentNumber.length > 1) {
    currentNumber = currentNumber.slice(0, currentNumber.length - 1);
    display.textContent = messageArray.join(" ") + " " + currentNumber;
  } 
  
  else if (currentNumber.length <= 1) {
    currentNumber = "0";
    zeroTotal = "0";
    display.textContent = messageArray.join(" ") + " " + zeroTotal;
  }
}

// Variable used to clear all our variables that were used for our various calculations.
const clear = document.querySelector("#clear");
clear.onclick = function plusMinus() {
  currentNumber = "";
  display.textContent = zeroTotal;
  operatorArray = [];
  numberArray = [];
  currentTotal = 0;
  arrayTotal = [];
  messageArray = [];
  memoryArray = [];
  display.style.fontSize = "24px";
}

// This functions allows the user to convert a positive number to a negative number and vice versa 
const plusMinus = document.querySelector("#plusMoins");
plusMinus.onclick = function() {

  // Preventing user to input a negative zero
  if (display.textContent == zeroTotal) {
    currentNumber = "";
    display.textContent = zeroTotal;
  } else if (currentNumber[0] == "0" & currentNumber.length == 1) {
    currentNumber = "0";
    display.textContent = messageArray.join(" ") + " " + currentNumber;
  } 
  
  // Turning a positive number to a negative
  else if (currentNumber.includes("-") == false) {
    currentNumber = "-" + currentNumber;
    display.textContent = messageArray.join(" ") + " " + currentNumber;
  } 
  // Turning a negative number to a positive
  else if (currentNumber.includes("-") == true && currentNumber.length == 1) {
    currentNumber = "";
    display.textContent = messageArray.join(" ") + " " + currentNumber;
  } else {
    array = []
    array.push(currentNumber.slice(1, currentNumber.length)[0]);
    currentNumber = array[0];
    display.textContent = messageArray.join(" ") + " " + currentNumber;
    array = [];
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
  if (currentNumber.length <= 10 && memoryArray.length == 0) {
    currentNumber += "9";
    display.textContent = messageArray.join(" ") + " " + currentNumber;
  } else {
    return;
  }
}
const eight = document.querySelector("#eight");
eight.onclick = function() {
  if (currentNumber.length <= 10 && memoryArray.length == 0) {
    currentNumber += "8";
    display.textContent = messageArray.join(" ") + " " + currentNumber;
  } else {
    return;
  }
}

const seven = document.querySelector("#seven");
seven.onclick = function() {
  if (currentNumber.length <= 10 && memoryArray.length == 0) {
    currentNumber += "7";
    display.textContent = messageArray.join(" ") + " " + currentNumber;
  } else {
    return;
  }
}
const six = document.querySelector("#six");
six.onclick = function() {
  if (currentNumber.length <= 10 && memoryArray.length == 0) {
    currentNumber += "6";
    display.textContent = messageArray.join(" ") + " " + currentNumber;
  } else {
    return;
  }
}

five.onclick = function() {
  if (currentNumber.length <= 10 && memoryArray.length == 0) {
    currentNumber += "5";
    display.textContent = messageArray.join(" ") + " " + currentNumber;
  } else {
    return;
  }
}

const four = document.querySelector("#four");
four.onclick = function() {
  if (currentNumber.length <= 10 && memoryArray.length == 0) {
    currentNumber += "4";
    display.textContent = messageArray.join(" ") + " " + currentNumber;
  } else {
    return;
  }
}

const three = document.querySelector("#three");
three.onclick = function() {
  if (currentNumber.length <= 10 && memoryArray.length == 0) {
    currentNumber += "3";
    display.textContent = messageArray.join(" ") + " " + currentNumber;
  } else {
    return;
  }
}
const two = document.querySelector("#two");
two.onclick = function() {
  if (currentNumber.length <= 10 && memoryArray.length == 0) {
    currentNumber += "2";
    display.textContent = messageArray.join(" ") + " " + currentNumber;
  } else {
    return;
  }
}

const one = document.querySelector("#one");
one.onclick = function() {
  if (currentNumber.length <= 10 && memoryArray.length == 0) {
    currentNumber += "1";
    display.textContent = messageArray.join(" ") + " " + currentNumber;;
  } else {
    return;
  }
}

const zero = document.querySelector("#zero");
zero.onclick = function() {
  if (currentNumber.length <= 10 && memoryArray.length == 0) {
    currentNumber += "0";
    display.textContent = messageArray.join(" ") + " " + currentNumber;
  } else {
    return;
  }
}
// This function creates a decimal number
const point = document.querySelector("#point");
point.onclick = function() {
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
  if (currentNumber != "" && operatorArray.length <=15) {
    memoryArray = [];
    numberArray.push(Number(currentNumber));
    messageArray.push(currentNumber)
    operatorArray.push("+");
    messageArray.push("+")
    display.textContent = messageArray.join(" ");
    currentNumber = "";
  } else {
    return;
  }
}

// This function adds the - operator
const minus = document.querySelector("#minus");
minus.onclick = function() {
  if (currentNumber != "" && operatorArray.length <=15) {
    memoryArray = [];
    numberArray.push(Number(currentNumber));
    messageArray.push(currentNumber)
    operatorArray.push("-");
    messageArray.push("-")
    display.textContent = messageArray.join(" ");
    currentNumber = "";
  } else {
    return;
  }
}


// This function adds the / operator
const division = document.querySelector("#division");
division.onclick = function() {
  if (currentNumber != "" && operatorArray.length <=15) {
    memoryArray = [];
    numberArray.push(Number(currentNumber));
    messageArray.push(currentNumber)
    operatorArray.push("/");
    messageArray.push("÷")
    display.textContent = messageArray.join(" ");
    currentNumber = "";
  } else {}
}

// This function adds the x operator
const multiple = document.querySelector("#multiple");
multiple.onclick = function() {
  if (currentNumber != "" && operatorArray.length <=15) {
    memoryArray = [];
    numberArray.push(Number(currentNumber));
    messageArray.push(currentNumber)
    operatorArray.push("x");
    messageArray.push("x")
    display.textContent = messageArray.join(" ");
    currentNumber = "";
  } else {
    return;
  }
}


// This function adds the ** operator
const exp = document.querySelector("#exp");
exp.onclick = function() {
  if (currentNumber != "" && operatorArray.length <=15) {
    memoryArray = [];
    numberArray.push(Number(currentNumber));
    messageArray.push(currentNumber)
    operatorArray.push("**");
    messageArray.push("^")
    display.textContent = messageArray.join(" ");
    currentNumber = "";
  } else {
    return;
  }
}


let arrayTotal = [];

//The operate function will proceed all 5 type of math operations : Sums, subtractions, multiplications, divisions and powers. 
const equal = document.querySelector("#equal")
equal.onclick = function () {

  numberArray.push(Number(currentNumber));
  operate(operatorArray, numberArray, arrayTotal)

  operatorArray = [];
  messageArray = [];
  numberArray = [];
  arrayTotal = [];
  currentTotal = 0;
}

// Function used to for calculations for more than one operators.
function operate(operatorArray, numberArray, arrayTotal) {

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

  if (numberArray.slice(numberArray.length - 1, numberArray.length)[0] != 0) {
    display.textContent = messageArray.join(" ") + " " + numberArray.slice(numberArray.length - 1, numberArray.length)[
      0] + " = " + arrayTotal.slice(arrayTotal.length - 1, arrayTotal.length)[0];
    currentNumber = arrayTotal.slice(arrayTotal.length - 1, arrayTotal.length)[0].toString()
    memoryArray.push(currentNumber);

  } else {
    display.textContent = "Error; division by zero is not possible";
    display.style.fontSize = '24px';
    currentNumber = "";
  }
}