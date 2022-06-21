//simple calculator using const

// using the operator  and expressing grouping 
const operator = prompt('Enter operator ( either +, -, * or / ): ');

// using the operand(number) input
const number1 = parseFloat(prompt('Enter first number: '));
const number2 = parseFloat(prompt('Enter second number: '));

let result;

// using if...else statement
if (operator == '+') {
    result = number1 + number2;
}
else if (operator == '-') {
    result = number1 - number2;
}
else if (operator == '*') {
    result = number1 * number2;
}
else {
    result = number1 / number2;
}

// using the browser console to display or view the result
document.write(`${number1} ${operator} ${number2} = ${result}`);

