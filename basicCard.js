var inquirer = require('inquirer');
var fs = require('fs');
var input = process.argv[2];
var basicCardArray = [];

function BasicCard(front, back){
  this.front = front;
  this.back = back;
};

BasicCard.prototype.getCard = function() {
  console.log("Front: " + this.front);
  console.log("Back: " + this.back);
  var textLog = "Front: " + this.front + "," + "Back: " + this.back + ",";

  fs.appendFile("log.txt", textLog, function(error, data) {
    if (error) {
      console.log(error);
    }
    else {
      console.log(textLog);
    }
  });
};

inquirer.prompt([
  {
    name: "front",
    message: "Enter text for the front of the card: "
  },
  {
    name: "back",
    message: "Enter text for the back of the card: "
  }
]).then(function(answers){
  var newBasicCard = new BasicCard(answers.front,answers.back);
  newBasicCard.getCard();
  basicCardArray.push(newBasicCard);
  console.log("Basic Card Array Push: " + basicCardArray);
});

module.exports = BasicCard;
// https://github.com/tcbtran/Flashcard-Generator/blob/master/basic-card.js
