#! /usr/bin/env node
import inquirer from "inquirer";
const myPin = 4321;
let myBalance = 50000;
let pinAnswer = await inquirer.prompt({
    name: "pin",
    message: "Enter your pin:",
    type: "number",
});
if (pinAnswer.pin === myPin) {
    console.log("Correct!!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Please select options",
            type: "list",
            choices: ["check balance", "withdraw"],
        },
    ]);
    if (operationAns.operation === "check balance") {
        console.log(`Your current amount is ${myBalance} PKR`);
    }
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter your amount:",
                type: "number",
            }
        ]);
        if (myBalance >= amountAns.amount) {
            (myBalance -= amountAns.amount);
            console.log(`Your remaining amount is: ${myBalance} PKR`);
        }
        else {
            console.log("Insufficient Balance!");
        }
    }
}
else {
    console.log("Invalid Pin Number!");
}
