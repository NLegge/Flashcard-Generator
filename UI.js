//Link to inquirer package
var inquirer = require("inquirer");
//Prompt the user to make new cards
inquirer.prompt([
  {
    type: "input",
    message: "Add a question.",
    name: "question"
  },
  {
    type: "input",
    message: "Add the answer",
    name: "answer"
  },
]);

