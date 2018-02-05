var hangmanWordBank = [
  {word: "Stroke", src: "./assets/images/stroke.jpg"},
  {word: "Diabetes", src: "./assets/images/diabetes.jpg"},
  {word: "Alzheimer", src: "./assets/images/alzeheimer.jpg"},
  {word: "Arthritis", src: "./assets/images/arthritis.jpg"},
  {word: "Common Cold", src: "./assets/images/commoncold.jpg"},
  {word: "Cancer", src: "./assets/images/cancer.jpg"},
  {word: "Yaws", src: "./assets/images/yaws.jpg"},
  {word: "Diarrheal Diseases", src: "./assets/images/diarrheal.jpg"},
  {word: "Tuberculosis", src: "./assets/images/Tuberculosis.jpg"},
  {word: "Alcoholism", src: "./assets/images/alcoholism.jpg"},
  {word: "Avian Influenza", src: "./assets/images/bird-flu.jpg"},
  {word: "Chicken Pox", src: "./assets/images/chickenpox.jpg"},
  {word: "Botulism", src: "./assets/images/botulism.jpg"},
  {word: "Malaria", src: "./assets/images/malaria.jpg"},
  {word: "tapeworm", src: "./assets/images/tapeworm.jpg"},
  {word: "flesh eating bacteria", src: "./assets/images/flesheatingbacteria.jpg"},
  {word: "Gout", src: "./assets/images/gout.jpg"},
  {word: "Hot Tub Rash", src: "./assets/images/hottubrash.jpg"},
  {word: "Inflammatory Bowel Disease", src: "./assets/images/IBD.jpg"},
  {word: "Jaundice", src: "./assets/images/jaundice.jpg"},
  {word: "Lupus", src: "./assets/images/lupus.jpg"},
  {word: "Lyme Disease", src: "./assets/images/lymedisease.jpg"},
  {word: "Measles", src: "./assets/images/measels.jpg"},
  {word: "Mumps", src: "./assets/images/mumps.jpg"},
  {word: "Heart Disease", src: "./assets/images/heartdisease.jpg"},
  {word: "Plague", src: "./assets/images/plague.jpg"},
  {word: "Polio", src: "./assets/images/polio.jpg"},
  {word: "Psoriasis", src: "./assets/images/psoriasis.jpg"},
  {word: "Rabies", src: "./assets/images/rabies.jpg"},
  {word: "Smallpox", src: "./assets/images/smallpox.jpg"},
  {word: "Dracunculiasis", src: "./assets/images/dracunculiasis.jpg"}
];

//how to acess 

hangmanWordBank[0];
hangmanWordBank[0].word;
hangmanWordBank[0].src;

// array for letters guessed by the user
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

window.onload = function() {
  document.getElementById("diseasePhotos").style.visibility = "hidden";

  // gamebegin to start game
  gameBegin();
};

function gameBegin() {
  // reset number of guesses and letters guessed array

  lettersGuessed = [];

  // write initial values for wins, losses, and remaining guesses to the screen
  document.getElementById("winCount").innerHTML = winCount;
  document.getElementById("lossCount").innerHTML = lossCount;
  document.getElementById("guessCount").innerHTML = guessesLeft;
  document.getElementById("guessedLetters").innerHTML = lettersGuessed;

  // choose a disease from the array

function gethangmanWord(){
  //generates random index
  var randomIndex = Math.floor(Math.random * hangmanWordBank.length);
  // sets handman word = random word from wordbank
  var hiddenAnswer = hangmanWordBank[i].word;
}

  randomIndex = Math.floor(Math.random() * hangmanWordBank.length);
  hangmanWordBank = hangmanWordBank[randomIndex].toLowerCase();

  guessesLeft = diseaseChosen.length;
  // create a variable to store the word in underscores
  hiddenAnswer = "";

  // replace disease name with underscores for game
  for (var i = 0; i < diseaseChosen.length; i++) {
    // replace only letters, not spaces
    if (diseaseChosen.charAt(i) !== " ") {
      hiddenAnswer += "_ ";
    } else {
      hiddenAnswer += "&nbsp;&nbsp;";
    }
  }

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
    var correctLetter = hangmanWordBank.charAt(i);

    if (correctLetter < 65 || correctLetter > 90) {
      hiddenAnswer += "&nbsp;&nbsp;";
      continue;
    }

    if (userChoice === diseaseChosen.charAt(i)) {
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

  document.getElementById("gameWord").innerHTML = hiddenAnswer;

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
      "The disease you've chosen " + diseaseChosen + ".";
    wins++;
    var audio = new Audio("assets/sounds/applaud.mp3");
    audio.play();
    gameBegin();
  }

  // define loss condition
  
  
  if (underscoreFound === true && guessesLeft === 0) {
    document.getElementById("diseaseImage").src = "./assets/images/diseasetent.jpg";
    document.getElementById("diseaseImage").style.visibility = "visible";
    document.getElementById("result").innerHTML =
      "You've chosen the wrong disease. The disease was" +
      diseaseChosen +
      ".";
    losses++;
    var audio = new Audio("assets/sounds/lose.mp3");
    audio.play();
    gameBegin();
  };

