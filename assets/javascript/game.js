var diseaseChoices = [
"Stroke",
"Diabetes",
"Alzheimer",
"Arthritis",
"Common Cold",
"Cancer", 
"Yaws",
"Diarrheal Diseases",
"Tuberculosis",
"Alcoholism",
"Avian Influenza",
"Chicken Pox",
"Botulism",
"Malaria", 
"tapeworm",
"flesh eating bacteria",
"Gout", 
"Hot Tub Rash",
"Inflammatory Bowel Disease",
"Jaundice",
"Lupus",
"Lyme Disease",
"Measles",
"Mumps",
"Heart Disease",
"Plague",
"Polio",
"Psoriasis",
"Rabies",
"Smallpox",
"Dracunculiasis"];

// disease Photos
var diseasePhotos = [
"assets/images/stroke.jpg",
"assets/images/diabetes.jpg",
"assets/images/alzeheimer.jpg",
"assets/images/arthritis.jpg",
"assets/images/commoncold.jpg",
"assets/images/cancer.jpg",
"assets/images/yaws.jpg",
"assets/images/diarrheal.jpg",
"assets/images/Tuberculosis.jpg",
"assets/images/alcoholism.jpg",
"assets/images/bird-flu.jpg",
"assets/images/chickenpox.jpg",
"assets/images/botulism.jpg",
"assets/images/malaria.jpg",
"assets/images/tapeworm.jpg",
"assets/images/flesheatingbacteria.jpg",
"assets/images/gout.jpg",
"assets/images/hottubrash.jpg",
"assets/images/IBD.jpg",
"assets/images/jaundice.jpg",
"assets/images/lymedisease.jpg",
"assets/images/measels.jpg",
"assets/images/mumps.jpg",
"assets/images/heartdisease.jpg",
"assets/images/plague.jpg",
"assets/images/polio.jpg",
"assets/images/psoriasis.jpg",
"assets/images/rabies.jpg",
"assets/images/smallpox.jpg",
"assets/images/dracunculiasis.jpg",
];

// array for letters guessed by the user
var lettersGuessed = [];

// variables for wins, losses, and remaining guesses
var wins = 0;
var losses = 0;
var guessesLeft = 15;

// global variables
var diseaseChosen;
var hiddenAnswer;
var randomIndex;

window.onload = function() {

  document.getElementById("diseasePhotos").style.visibility = "hidden";

  // call gamebegin to start game
  gameBegin();

}

function gameBegin() {

  // reset number of guesses and letters guessed array
  guessesLeft = 15;
  lettersGuessed = [];

  // write initial values for wins, losses, and remaining guesses to the screen
  document.getElementById("winCount").innerHTML = wins;
  document.getElementById("lossCount").innerHTML = losses;
  document.getElementById("guessCount").innerHTML = guessesLeft;
  document.getElementById("guessedLetters").innerHTML = lettersGuessed;
  

  // choose a team from the array
  randomIndex = Math.floor(Math.random() * diseaseChoices.length);
  diseaseChosen = diseaseChoices[randomIndex];
  
  // create a variable to store the word in underscores
  hiddenAnswer = "";

  // replace team name with underscores for game
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
  if (event.which < 65 || event.which > 90) {
    return;
  }

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

  // check to see if the letter guessed is in the answer1
  for (var i = 0; i < diseaseChosen.length; i++) {

    var correctLetter = teamChosen.charAt(i);

    if (correctLetter < 65 || correctLetter > 90) {

      hiddenAnswer += "&nbsp;&nbsp;";
      continue;
    }

    if (userChoice === diseaseChosen.charAt(i)) {

      hiddenAnswer += userChoice + " ";

    } else { // User gave wrong letter

      // Check array to see if the correct char was chosen
      // in the past
      var found = false;
      for (var j = 0; j < lettersGuessed.length; j++) {

        if(correctLetter === lettersGuessed[j]) {
          hiddenAnswer += lettersGuessed[j] + " ";
          found = true;
          break;
        }
      }

      if(found === false) {
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
  if (underscoreFound === false && guessesLeft >= 0) {
    document.getElementById("diseasePhotos").src = diseasePhotos[randomIndex];
    document.getElementById("diseasePhotos").style.visibility = "visible";
    document.getElementById("result").innerHTML = "The disease you've chosen " + diseaseChosen + ".";
    wins++;
    var audio = new Audio('assets/sounds/applaud.mp3');
    audio.play();
    gameBegin();
  }

  // define loss condition
  if (underscoreFound === true && guessesLeft === 0) {
    document.getElementById("teamImage").src = "assets/images/lose.jpg";
    document.getElementById("teamImage").style.visibility = "visible";
    document.getElementById("result").innerHTML = "You've chosen the wrong disease. The disease was the " + diseaseChosen + ".";
    losses++;
    var audio = new Audio('assets/sounds/lose.mp3');
    audio.play();
    gameBegin();
  }
}