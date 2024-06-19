#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter firstnumber", type: "number", name: "firstnumber" },
  { message: "Enter Secondnumber", type: "number", name: "Secondnumber" },
  {
    message: "Select any of the operator to perform operation",
    type: "list",
    name: "operators",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);
if (answer.operators === "Addition") {
  console.log(answer.firstnumber + answer.Secondnumber);
} else if (answer.operators === "Subtraction") {
  console.log(answer.firstnumber - answer.Secondnumber);
} else if (answer.operators === "Multiplication") {
  console.log(answer.firstnumber * answer.Secondnumber);
} else if (answer.operators === "Division") {
  console.log(answer.firstnumber / answer.Secondnumber);
}
console.log("Please select valid operator");