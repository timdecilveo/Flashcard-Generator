function basicCardFunction(){
  var BasicCard = require('./basicCard.js');
}
function clozeCardFunction(){
  var ClozeCard = require('./clozeCard.js');
}

var CardData = require('./cardData.js');
var inquirer = require('inquirer');
var fs = require('fs');

var basicCardArray = [];
var clozeCardArray = [];
var loop = 1;

function newBasicCardFunction(){
  // basicCardFunction();
  var newBasicCard = new basicCardFunction();
}
function newClozeCardFunction(){
  // clozeCardFunction()
  var newClozeCard = new clozeCardFunction();
}

// var answer = "";
// User is asked if they want to create a Basic Flashcard or a Cloze Delete Flashcard?
inquirer.prompt([{
	name: "typeOfCard",
	type: "rawlist",
	message: "Would you like to make a basic or cloze flashcard? Answer 1 or 2",
	choices: ["basic", "cloze"]
	}]).then(function(answers){
		answer = answers.typeOfCard;
    var flashcardLength = 3;
		console.log("----------**********----------");
		console.log("Answer questions to build " + flashcardLength + " " + answer + " flashcards.");
		console.log("----------**********----------");
		basicOrClozeChoice(answer);
});
//

function basicOrClozeChoice(choice){
	if (choice === "basic"){
		console.log("You chose " + choice + ".");
    newBasicCardFunction();

	} else if(choice === "cloze"){
		console.log("You chose " + choice + ".");
    newClozeCardFunction();
	}
}














// var cardChoice = process.argv[2];
// var newBasicCard = new basicCard();
// var newClozeCard = new clozeCard();

// Whether they select Basic or Cloze, store input to be used for "front" or "text"
// var input1 = process.argv[3];

// Whether they select Basic or Cloze, store input to be used for "back" or "cloze"
// var input2 = process.argv[4];
