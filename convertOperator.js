// test function for the calculator in the event we have more than 1 operation to compute. 
function convertOperatorToMaths(opererandArray, numberArray, leng, total) {

  for (let i = 0; i < leng - 1; i++) {
    if (opererandArray.slice(i, i + 1) == "+") {
      if (total.length == 0) {
        let currentEquation = numberArray.slice(i, i + 1)[0] + numberArray.slice(i + 1, i + 2)[0];
        total.push(currentEquation);
      } else {
        let currentEquation = total.slice(total.length - 1, total.length)[0] + numberArray.slice(i + 1, i + 2)[0]
        total.push(currentEquation)
      }
    }
    else if (opererandArray.slice(i, i + 1) == "-") {
      if (total.length == 0) {
        let currentEquation = numberArray.slice(i, i + 1)[0] - numberArray.slice(i + 1, i + 2)[0];
        total.push(currentEquation);
      } else {
        let currentEquation = total.slice(total.length - 1, total.length)[0] - numberArray.slice(i + 1, i + 2)[0]
        total.push(currentEquation)
      }
    }
    else if (opererandArray.slice(i, i + 1) == "/") {
      if (total.length == 0) {
        let currentEquation = numberArray.slice(i, i + 1)[0] / numberArray.slice(i + 1, i + 2)[0];
        total.push(currentEquation);
      } else {
        let currentEquation = total.slice(total.length - 1, total.length)[0] / numberArray.slice(i + 1, i + 2)[0]
        total.push(currentEquation)
      }
    }
    else if (opererandArray.slice(i, i + 1) == "x") {
      if (total.length == 0) {
        let currentEquation = numberArray.slice(i, i + 1)[0] * numberArray.slice(i + 1, i + 2)[0];
        total.push(currentEquation);
      } else {
        let currentEquation = total.slice(total.length - 1, total.length)[0] * numberArray.slice(i + 1, i + 2)[0]
        total.push(currentEquation)
      }
    }
    else if (opererandArray.slice(i, i + 1) == "**") {
      if (total.length == 0) {
        let currentEquation = numberArray.slice(i, i + 1)[0] ** numberArray.slice(i + 1, i + 2)[0];
        total.push(currentEquation);
      } else {
        let currentEquation = total.slice(total.length - 1, total.length)[0] ** numberArray.slice(i + 1, i + 2)[0]
        total.push(currentEquation)
      }
    }
    console.log(total);
  }
}

let numberArray = [12, 7, 5, 3];
let opererandArray = ["+", "-", "x"];
let total = [];
var leng = numberArray.length;

convertOperatorToMaths(opererandArray, numberArray, leng, total);
