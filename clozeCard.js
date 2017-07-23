var inquirer = require('inquirer');
var fs = require('fs');
var clozeCardArray = [];
var loop = 1;

function ClozeCard(frontCloze, cloze){
  // Full Text
  this.textFunc = function(){
    var fullText = frontCloze;
    console.log("----------------*********************----------------")
    console.log("-------------- Full Text & Cloze Input --------------")
    console.dir("Full Text: " + fullText);
  }

  // Cloze Text
  this.clozeFunc = function(){
    var clozeText = cloze;
    console.dir("Cloze: " + clozeText);
  }

  // I can't figure out how to get the partial text portion here. It works down below in the
  // partialText() function, but not here.
  ClozeCard.prototype.getCard = function() {
    cloze = frontCloze.replace(cloze, "...");
    var textLog = "textFunc: " + frontCloze + "," + "clozeFunc: " + cloze + ",";

    fs.appendFile("cloze-log.txt", textLog, function(error, data) {
      if (error) {
        console.log(error);
      }
      else {
        console.log(textLog);
      }
    });
  };

  this.userInput = function(){
    var loopLength = 3;
    if (loop <= loopLength){
      inquirer.prompt([{
        name: "frontCloze",
        message: "Enter a question or statement for the front card number " + loop + "."
      },
      {
        name: "cloze",
        message: "Enter a section you would like to remove."
      }]).then(function(answers){
        console.log("--------------*********************--------------")
        console.log("----------- FrontCloze & Cloze Answer -----------")
        frontCloze = answers.frontCloze;
        console.log("frontCloze: " + frontCloze);
        cloze = answers.cloze;
        console.log("cloze: " + cloze);

        function newClozedCardFunction(){
          var newClozeCard = new ClozeCard(frontCloze, cloze);
          newClozeCard.getCard();
          clozeCardArray.push(newClozeCard);
          console.log("Cloze Card Array Push: " + clozeCardArray);
          loop++;
        }
        // var newClozeCard = new ClozeCard(frontCloze, cloze);
        // console.log("newClozeCard: " + newClozeCard);
        var clozeCardArrayLength = loopLength * 2;

        function clozeAndPartial(){
          if(clozeCardArray.length < clozeCardArrayLength){
            clozeCardArray.push(frontCloze, cloze);
            console.log("------------- Array Information ------------")
            console.log("Cloze card array: " + clozeCardArray);
            console.log("Array Length: " + clozeCardArray.length);

            console.log("--------------- Partial Text ---------------")
            function partialText(){
              cloze = frontCloze.replace(cloze, "...");
              console.log("Partial Text: " + cloze);
            }
            partialText();
          }
        }
        textFunc();
        clozeFunc();
        clozeAndPartial();
        if(!clozeAndPartial() && !textFunc() && !clozeFunc()){
          newClozedCardFunction();
        }

        // clozeCardArray.push(newClozeCard);
        // console.log("This is your new cloze card: " + newClozeCard);

        // loop++;
        // console.log("userInput: " + newClozeCard.userInput());
      });
    }
  };
  userInput();
};

ClozeCard();
module.exports = ClozeCard;
// https://github.com/tcbtran/Flashcard-Generator/blob/master/cloze-card.js
