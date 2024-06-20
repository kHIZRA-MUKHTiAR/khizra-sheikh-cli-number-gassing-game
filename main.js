#! /usr/bin/env node
import inquirer from "inquirer";
// computer will generate random number
// user input for gassing number
// compare user input with computer generated number and show result
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGussedNumber",
        type: "number",
        message: "please guess a number between 1-6:"
    }
]);
if (answer.userGussedNumber === randomNumber) {
    console.log("congratulations! you gussed right Number.");
}
else {
    console.log("you gussed wrong Number");
}
