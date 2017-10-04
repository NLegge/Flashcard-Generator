//Link to inquirer package
var inquirer = require("inquirer");
//Import BasicCard constructor
var BasicCard = require("./BasicCard");
//Import ClozeCard constructor
var ClozeCard = require("./ClozeCard");
//Initialize card creation
initialize();
//Prompt the user to choose a card type. 
function initialize() {
  inquirer.prompt({
      name: "cardType",
      type: "rawlist",
      message: "Would you like to create a BASIC card or a CLOZE card?",
      choices: ["BASIC", "CLOZE"]
    })
    //Callback to grab user's answer and run a function
    .then(function(answer) {
      //Run createBasic function if they select BASIC or createCloze if they choose CLOZE
      if (answer.cardType.toUpperCase() === "BASIC") {
        createBasic();
      } else {
        createCloze();
      }
    });
}
//Create a cloze card
function createCloze() {
  inquirer.prompt([{
      type: "input",
      message: "Add a statement.",
      name: "fullText"
    },
    {
      type: "input",
      message: "Which part of this statement is the answer?",
      name: "cloze"
    },
  ]).then(function(answers) {
  	//Create a new cloze card using the ClozeCard constructor and print to the console.
    var newCard = new ClozeCard(answers.fullText, answers.cloze);
      if (newCard.fullText === newCard.partial) {
      	console.log("*****Invalid entry.*****"); 
  	} else {
  	    console.log(newCard.partial);
        console.log(newCard.cloze);
  	}
  	another();
  });
}
//Create a basic card
function createBasic() {
  inquirer.prompt([{
      type: "input",
      message: "Add a question.",
      name: "question"
    },
    {
      type: "input",
      message: "Add the answer",
      name: "answer"
    },
  ]).then(function(answers) {
  	//Create a new basic card using the BasicCard constructor and print to the console.
    var newCard = new BasicCard(answers.question, answers.answer);
    console.log(newCard.front);
    console.log(newCard.back);
    another();
  });
}
//Ask user if they would like to create another card
function another() {
  inquirer.prompt({
      name: "anotherCard",
      type: "rawlist",
      message: "Would you like to create an other card?",
      choices: ["YES", "NO"]
    })
    //Callback to grab user's answer and run a function
    .then(function(answer) {
      //Run initialize function if they select YES or console.log("Goodbye.") if they choose NO
      if (answer.anotherCard.toUpperCase() === "YES") {
        initialize();
      } else {
        console.log("Goodbye.")
      }
    });
}