var hangmanWordBank = [
  {word: "Stroke", src: "../images/stroke.jpg"},
  {word: "Diabetes", src: "../images/diabetes.jpg"},
  {word: "Alzheimer", src: "../images/alzeheimer.jpg"},
  {word: "Arthritis", src: "../images/arthritis.jpg"},
  {word: "Common Cold", src: "../images/commoncold.jpg"},
  {word: "Cancer", src: "../images/cancer.jpg"},
  {word: "Yaws", src: "../images/yaws.jpg"},
  {word: "Diarrheal Diseases", src: "../images/diarrheal.jpg"},
  {word: "Tuberculosis", src: "../images/Tuberculosis.jpg"},
  {word: "Alcoholism", src: "../images/alcoholism.jpg"},
  {word: "Avian Influenza", src: "../images/bird-flu.jpg"},
  {word: "Chicken Pox", src: "../images/chickenpox.jpg"},
  {word: "Botulism", src: "../images/botulism.jpg"},
  {word: "Malaria", src: "../images/malaria.jpg"},
  {word: "tapeworm", src: "../images/tapeworm.jpg"},
  {word: "flesh eating bacteria", src: "../images/flesheatingbacteria.jpg"},
  {word: "Gout", src: "../images/gout.jpg"},
  {word: "Hot Tub Rash", src: "../images/hottubrash.jpg"},
  {word: "Inflammatory Bowel Disease", src: "../images/IBD.jpg"},
  {word: "Jaundice", src: "../images/jaundice.jpg"},
  {word: "Lupus", src: "../images/lupus.jpg"},
  {word: "Lyme Disease", src: "../images/lymedisease.jpg"},
  {word: "Measles", src: "../images/measels.jpg"},
  {word: "Mumps", src: "../images/mumps.jpg"},
  {word: "Heart Disease", src: "../images/heartdisease.jpg"},
  {word: "Plague", src: "../images/plague.jpg"},
  {word: "Polio", src: "../images/polio.jpg"},
  {word: "Psoriasis", src: "../images/psoriasis.jpg"},
  {word: "Rabies", src: "../images/rabies.jpg"},
  {word: "Smallpox", src: "../images/smallpox.jpg"},
  {word: "Dracunculiasis", src: "../images/dracunculiasis.jpg"}
];



hangmanWordBank[0];
hangmanWordBank[0].word;
hangmanWordBank[0].src;


var lettersGuessed = [];

// variables for wins, losses, and remaining guesses
var winCount = 0;
var lossCount = 0;
var guessesRemaining = 10;

// global variables
var hangmanWordBank;
var guessesLeft;
var hiddenAnswer;
var randomIndex;
var diseasePhotos;
var randomIndex;
var userChoice;


window.onload = function() {
  document.getElementById("diseasePhotos").style.visibility = "hidden";

  // gamebegin to start game
  gameBegin();
};

function gameBegin() {
  // reset number of guesses and letters guessed array


  // write initial values for wins, losses, and remaining guesses to the screen
  document.getElementById("winCount").innerHTML = winCount;
  document.getElementById("lossCount").innerHTML = lossCount;
  document.getElementById("guessCount").innerHTML = guessesLeft;
  document.getElementById("guessedLetters").innerHTML = lettersGuessed;



  // choose a disease from the array

//function gethangmanWord(){
  //generates random index

//   return randomIndex;
//   return hiddenAnswer;

// }

var randomIndex = Math.floor(Math.random() * hangmanWordBank.length);


var hiddenAnswer = hangmanWordBank[randomIndex].word;

console.log(hiddenAnswer);
  // sets hangman word = random word from wordbank
  //var hiddenAnswer = hangmanWordBank[i].word;



  //randomIndex = Math.floor(Math.random() * hangmanWordBank.length);
  //hangmanWordBank = hangmanWordBank[randomIndex];

  guessesLeft = hangmanWordBank.length;
  // create a variable to store the word in underscores
  hiddenAnswer = "";

  // replace disease name with underscores for game
  for (var i = 0; i < hiddenAnswer.length; i++) {
    // replace only letters, not spaces
    if (hiddenAnswer.charAt(i) !== " ") {
      hiddenAnswer[i] = "_ ";
    } else {
      hiddenAnswer += "  ";
    }
  }

console.log(hiddenAnswer);

  document.getElementById("gameWord").innerHTML = hiddenAnswer;
}

document.onkeyup = function(event) {
  // determine if the key pressed was a letter
  //if (event.which < 65 || event.which > 90) {
  //return;
  //}

  // store the letter
  var userChoice = event.key.toLowerCase();

  // push userChoice into the array of letters guessed by the user
  lettersGuessed.push(userChoice);
  document.getElementById("guessedLetters").innerHTML = lettersGuessed;

  // decrease guessesLeft by 1
  guessesLeft--;
  document.getElementById("guessCount").innerHTML = guessesLeft;

  // empty hiddenAnswer to rebuild
  hiddenAnswer = "";

}
  // check to see if the letter guessed is in the answer1
  for (var i = 0; i < hangmanWordBank.length; i++) {
    var correctLetter = hangmanWordBank[0].word.charAt(i);

    if (correctLetter < 65 || correctLetter > 90) {
      hiddenAnswer += "&nbsp;&nbsp;";
      continue;
    }

    if (userChoice === hangmanWordBank[0].word.charAt(i)) {
      hiddenAnswer += userChoice + " ";
    } else {
      // User gave wrong letter

      // Check array to see if the correct char was chosen
      // in the past
      var found = false;
      for (var j = 0; j < lettersGuessed.length; j++) {
        if (correctLetter === lettersGuessed[j]) {
          hiddenAnswer += lettersGuessed[j] + " ";
          found = true;
          break;
        }
      }

      if (found === false) {
        hiddenAnswer += "_ ";
      }
    }
  }

  // define loss conditions

 
  var underscoreFound = false;
  for (var k = 0; k < hiddenAnswer.length; k++) {
    // if underscores remaining and no guesses left
    if (hiddenAnswer.charAt(k) === "_") {
      underscoreFound = true;
    }
  }

  // define win conditions

  function increaseWinCount() {
  winCount++;
}

  if (underscoreFound === false && guessesLeft >= 0) {
    document.getElementById("diseasePhotos").src = diseasePhotos[randomIndex];
    document.getElementById("diseasePhotos").style.visibility = "visible";
    document.getElementById("result").innerHTML =
      "The disease you've chosen " + hangmanWordBank + ".";
    wins++;
    var audio = new Audio("assets/sounds/applaud.mp3");
    audio.play();
    gameBegin();
  }

  // define loss condition
  
  
  if (underscoreFound === true && guessesLeft === 0) {
    //document.getElementById("diseasePhotos").src = "../images/diseasetent.jpg";
    document.getElementById("diseasePhotos").style.visibility = "visible";
    document.getElementById("result").innerHTML =
      "You've chosen the wrong disease. The disease was" +
     hangmanWordBank +
      ".";
    losses++;
    var audio = new Audio("assets/sounds/lose.mp3");
    audio.play();
    gameBegin();
  };

