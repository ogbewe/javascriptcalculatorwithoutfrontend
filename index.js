let num1 = parseFloat(prompt("Enter number 1:"));
let num2 = parseFloat(prompt("Enter number 2"));

let operator = prompt("Enter Operator (+,-,/,*)");

let result = 0;
if (isNaN(num1) || isNaN(num2)) {
  alert("Please enter a number");
} else {
  if (operator === "+") {
    result = num1 + num2;
  } else if (operator === "-") {
    result = num1 - num2;
  } else if (operator === "/") {
    result = num1 / num2;
  } else if (operator === "*") {
    result = num1 * num2;
  }

  alert(num1 + operator + num2 + "=" + result);
}
