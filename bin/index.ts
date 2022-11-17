#! /usr/bin/env node
interface calc {
  add(a: number, b: number): number;
  sub(a: number, b: number): number;
  division: (a: number, b: number) => number;
  Multiplication: (a: number, b: number) => number;
}
let calculator: calc = {
  add(a, b) {
    return a + b;
  },
  sub(a, b) {
    return a - b;
  },
  division: (a, b) => a / b,
  Multiplication: (a, b) => a * b,
};

var prompt1 = require("prompt-sync")();
var value1 = prompt1("enter first number : ");
var value2 = prompt1("enter Second number : ");
var num1 = Number(value1);
var num2 = Number(value2);

if (value1 === "" && value2 === "") {
  console.error("Please enter at least 2 numbers");
  process.exit(1); //an error occurred
}
if (isNaN(num1) || isNaN(num2)) {
  console.error("First or Second or Both Input are not number");
  process.exit(1); //an error occurred
}
console.log(
  "-------Options-------\n 1) Enter Number 'One' for Addition \n 2) Enter Number 'Two' for Substraction \n 3) Enter Number 'Three' for Division \n 4) Enter Number 'Four' for Multiplication\n"
);
var choice = prompt1("\nenter choice : ");
var choice1 = Number(choice);

function Choices(choice1: number) {
  switch (choice1) {
    case 1:
      console.log(`\nThe Result of Addition is : ${calculator.add(num1, num2)}`);
      break;
    case 2:
      console.log(
        `\nThe Result of Substraction is : ${calculator.sub(num1, num2)}`
      );
      break;
    case 3:
      console.log(
        `\nThe Result of Division is : ${calculator.division(num1, num2)}`
      );
      break;
    case 4:
      console.log(
        `\nThe Result of Multiplication is : ${calculator.Multiplication(
          num1,
          num2
        )}`
      );
      break;
    default:
      console.log("Invalid Choice !");
  }
}
Choices(choice1);
process.exit(0); //no errors occurred
