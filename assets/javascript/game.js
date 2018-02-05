var hangmanWordBank = [
  { word: "Stroke", src: "../images/stroke.jpg" },
  { word: "Diabetes", src: "../images/diabetes.jpg" },
  { word: "Alzheimer", src: "../images/alzeheimer.jpg" },
  { word: "Arthritis", src: "../images/arthritis.jpg" },
  { word: "Common Cold", src: "../images/commoncold.jpg" },
  { word: "Cancer", src: "../images/cancer.jpg" },
  { word: "Yaws", src: "../images/yaws.jpg" },
  { word: "Diarrheal Diseases", src: "../images/diarrheal.jpg" },
  { word: "Tuberculosis", src: "../images/Tuberculosis.jpg" },
  { word: "Alcoholism", src: "../images/alcoholism.jpg" },
  { word: "Avian Influenza", src: "../images/bird-flu.jpg" },
  { word: "Chicken Pox", src: "../images/chickenpox.jpg" },
  { word: "Botulism", src: "../images/botulism.jpg" },
  { word: "Malaria", src: "../images/malaria.jpg" },
  { word: "tapeworm", src: "../images/tapeworm.jpg" },
  { word: "flesh eating bacteria", src: "../images/flesheatingbacteria.jpg" },
  { word: "Gout", src: "../images/gout.jpg" },
  { word: "Hot Tub Rash", src: "../images/hottubrash.jpg" },
  { word: "Inflammatory Bowel Disease", src: "../images/IBD.jpg" },
  { word: "Jaundice", src: "../images/jaundice.jpg" },
  { word: "Lupus", src: "../images/lupus.jpg" },
  { word: "Lyme Disease", src: "../images/lymedisease.jpg" },
  { word: "Measles", src: "../images/measels.jpg" },
  { word: "Mumps", src: "../images/mumps.jpg" },
  { word: "Heart Disease", src: "../images/heartdisease.jpg" },
  { word: "Plague", src: "../images/plague.jpg" },
  { word: "Polio", src: "../images/polio.jpg" },
  { word: "Psoriasis", src: "../images/psoriasis.jpg" },
  { word: "Rabies", src: "../images/rabies.jpg" },
  { word: "Smallpox", src: "../images/smallpox.jpg" },
  { word: "Dracunculiasis", src: "../images/dracunculiasis.jpg" }
];

hangmanWordBank[0];
hangmanWordBank[0].word;
hangmanWordBank[0].src;

var lettersGuessed = [];

var winCount = 0;
var lossCount = 0;
var guessesRemaining = 10;

// GV
var hangmanWordBank;
var guessesLeft;
var hiddenAnswer;
var randomIndex;
var diseasePhotos;
var randomIndex;
var userChoice;

window.onload = function() {


  gameBegin();
};

function gameBegin() {
  document.getElementById("winCount").innerHTML = winCount;
  document.getElementById("lossCount").innerHTML = lossCount;
  document.getElementById("guessCount").innerHTML = guessesLeft;
  document.getElementById("guessedLetters").innerHTML = lettersGuessed;

  var randomIndex = Math.floor(Math.random() * hangmanWordBank.length);

  var hiddenAnswer = hangmanWordBank[randomIndex].word;

  guessesLeft = hangmanWordBank.length;

  hiddenAnswer = "";

  for (var i = 0; i < hiddenAnswer.length; i++) {
    if (hiddenAnswer.charAt(i) !== " ") {
      hiddenAnswer[i] = "_ ";
    } else {
      hiddenAnswer += "  ";
    }
  }

  document.getElementById("gameWord").innerHTML = hiddenAnswer;
}

document.onkeyup = function(event) {
  var userChoice = event.key.toLowerCase();

  lettersGuessed.push(userChoice);
  document.getElementById("guessedLetters").innerHTML = lettersGuessed;

  guessesLeft--;
  document.getElementById("guessCount").innerHTML = guessesLeft;
};

for (var i = 0; i < hangmanWordBank.length; i++) {
  var correctLetter = hangmanWordBank[0].word.charAt(i);

  if (correctLetter < 65 || correctLetter > 90) {
    hiddenAnswer += " ";
    continue;
  }

  if (userChoice === hangmanWordBank[0].word.charAt(i)) {
    hiddenAnswer += userChoice + " ";
  } else {
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

var underscoreFound = false;
for (var k = 0; k < hiddenAnswer.length; k++) {
  if (hiddenAnswer.charAt(k) === "_") {
    underscoreFound = true;
  }
}

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

if (underscoreFound === true && guessesLeft === 0) {
  document.getElementById("diseasePhotos").style.visibility = "visible";
  document.getElementById("result").innerHTML =
    "You've chosen the wrong disease. The disease was" + hangmanWordBank + ".";
  losses++;
  var audio = new Audio("assets/sounds/lose.mp3");
  audio.play();
  gameBegin();
}
