function convertOperatorToMaths(opererandArray, numberArray, arrayTotal) {

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

}

let numberArray = [12, 7, 5, 3, 7];
let opererandArray = ["+", "-", "x", "/"];
let arrayTotal = [];


convertOperatorToMaths(opererandArray, numberArray, arrayTotal);