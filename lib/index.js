#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
import { createSpinner } from "nanospinner";
let playerName;
const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));
//Welcome Screen
const welcome = async () => {
    const rainbowTitle = chalkAnimation.rainbow(`This is the simple Calculator?
        Developed by Ahmed Ali Ansari \n`);
    await sleep();
    rainbowTitle.stop();
};
// User Name Input
const askName = async () => {
    const answers = await inquirer.prompt({
        name: "user_name",
        type: "input",
        message: "What is your name? ",
        default() {
            return "User";
        },
    });
    playerName = answers.user_name;
    console.log(`Hey There ! ${playerName}`);
};
let calculator = {
    add(number1, number2) {
        return number1 + number2;
    },
    sub(number1, number2) {
        return number1 - number2;
    },
    division: (number1, number2) => number1 / number2,
    Multiplication: (number1, number2) => number1 * number2,
};
console.clear();
await welcome();
await askName();
let want_to_Continue;
do {
    //Input Option and numbers from user
    const question = async () => {
        const operators = await inquirer.prompt([
            {
                name: "available_operations",
                type: "list",
                message: "Please use Arrow key to Select your option!\n",
                choices: ["Addition", "Substraction", "Division", "Multiplication"],
            },
            {
                name: "num1",
                type: "number",
                message: "enter first number : ",
                default() {
                    return console.error();
                },
            },
            {
                name: "num2",
                type: "number",
                message: "enter second number : ",
                default() {
                    return console.error();
                },
            },
        ]);
        // await question();
        return handleAnswer(operators.available_operations, operators.num1, operators.num2);
    };
    //making a choice function
    const handleAnswer = async (choose_operations, number1, number2) => {
        let answer;
        const spinner = createSpinner("Calculating...").start();
        await sleep();
        switch (choose_operations) {
            case "Addition":
                answer = calculator.add(number1, number2);
                spinner.success({
                    text: `\nThe Result of Addition is : ${chalk.bold.bgBlueBright(answer)}`,
                });
                break;
            case "Substraction":
                answer = calculator.sub(number1, number2);
                spinner.success({
                    text: `\nThe Result of Substraction is : ${chalk.bold.bgBlueBright(answer)}`,
                });
                break;
            case "Division":
                answer = calculator.division(number1, number2);
                spinner.success({
                    text: `\nThe Result of Division is : ${chalk.bold.bgBlueBright(answer)}`,
                });
                break;
            case "Multiplication":
                answer = calculator.Multiplication(number1, number2);
                spinner.success({
                    text: `\nThe Result of Multiplication is : ${chalk.bold.bgBlueBright(answer)}`,
                });
                break;
            default:
                console.log("Invalid Choice !");
        }
    };
    const want_to_calculate_more = async () => {
        const choice = await inquirer.prompt({
            name: "want_to_calculate_more",
            type: "confirm",
            message: "Do you want to continue for more operations ? ",
        });
        want_to_Continue = choice.want_to_calculate_more;
    };
    await question();
    await want_to_calculate_more();
    console.clear();
} while (want_to_Continue == true);
