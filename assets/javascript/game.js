var diseaseChoices = [
  'Stroke',
  'Diabetes',
  'Alzheimer',
  'Arthritis',
  'Common Cold',
  'Cancer',
  'Yaws',
  'Diarrheal Diseases',
  'Tuberculosis',
  'Alcoholism',
  'Avian Influenza',
  'Chicken Pox',
  'Botulism',
  'Malaria',
  'tapeworm',
  'flesh eating bacteria',
  'Gout',
  'Hot Tub Rash',
  'Inflammatory Bowel Disease',
  'Jaundice',
  'Lupus',
  'Lyme Disease',
  'Measles',
  'Mumps',
  'Heart Disease',
  'Plague',
  'Polio',
  'Psoriasis',
  'Rabies',
  'Smallpox',
  'Dracunculiasis'
];

// disease Photos
var diseasePhotos = [
  '../images/stroke.jpg',
  '../images/diabetes.jpg',
  '../images/alzeheimer.jpg',
  '../images/arthritis.jpg',
  '../images/commoncold.jpg',
  '../images/cancer.jpg',
  '../images/yaws.jpg',
  '../images/diarrheal.jpg',
  '../images/Tuberculosis.jpg',
  '../images/alcoholism.jpg',
  '../images/bird-flu.jpg',
  '../images/chickenpox.jpg',
  '../images/botulism.jpg',
  '../images/malaria.jpg',
  '../images/tapeworm.jpg',
  '../images/flesheatingbacteria.jpg',
  '../images/gout.jpg',
  '../images/hottubrash.jpg',
  '../images/IBD.jpg',
  '../images/jaundice.jpg',
  '../images/lymedisease.jpg',
  '../images/measels.jpg',
  '../images/mumps.jpg',
  '../images/heartdisease.jpg',
  '../images/plague.jpg',
  '../images/polio.jpg',
  '../images/psoriasis.jpg',
  '../images/rabies.jpg',
  '../images/smallpox.jpg',
  '../images/dracunculiasis.jpg'
];

// array for letters guessed by the user
var lettersGuessed = [];

// variables for wins, losses, and remaining guesses
var wins = 0;
var losses = 0;

// global variables
var diseaseChosen;
var guessesLeft;
var hiddenAnswer;
var randomIndex;

window.onload = function() {
  document.getElementById('diseasePhotos').style.visibility = 'hidden';

  // call gamebegin to start game
  gameBegin();
};

function gameBegin() {
  // reset number of guesses and letters guessed array

  lettersGuessed = [];

  // write initial values for wins, losses, and remaining guesses to the screen
  document.getElementById('winCount').innerHTML = wins;
  document.getElementById('lossCount').innerHTML = losses;
  document.getElementById('guessCount').innerHTML = guessesLeft;
  document.getElementById('guessedLetters').innerHTML = lettersGuessed;

  // choose a team from the array
  randomIndex = Math.floor(Math.random() * diseaseChoices.length);
  diseaseChosen = diseaseChoices[randomIndex].toLowerCase();

  guessesLeft = diseaseChosen.length;
  // create a variable to store the word in underscores

  hiddenWord = diseaseChosen.split('');
  hiddenWord = hiddenWord.filter(function(str) {
    return /\S/.test(str);
  });

  document.getElementById('gameWord').innerHTML = hiddenAnswer;
}

document.onkeyup = function(event) {
  if (event.keyCode >= 65 && event.keyCode <= 90) {
    return;
    // Alphabet upper case
  } else if (event.keyCode >= 97 && event.keyCode <= 122) {
    return;
    // Alphabet lower case
  }

  // store the letter

  // push userChoice into the array of letters guessed by the user
  lettersGuessed.push(userChoice);
  document.getElementById('guessedLetters').innerHTML = lettersGuessed;

  // empty hiddenAnswer to rebuild
  hiddenAnswer = '';

  while (guessesLeft > 0) {
    var userChoice = event.key.toLowerCase();

    // check to see if the letter guessed is in the answer1
    for (var i = 0; i < diseaseChosen.length; i++) {
      var correctLetter = diseaseChosen.charAt(i);

      if (correctLetter < 65 || correctLetter > 90) {
        hiddenAnswer += '&nbsp;&nbsp;';
        continue;
      }

      if (userChoice === diseaseChosen.charAt(i)) {
        hiddenAnswer += userChoice + ' ';
      } else {
        // User gave wrong letter

        // Check array to see if the correct char was chosen
        // in the past
        var found = false;
        for (var j = 0; j < lettersGuessed.length; j++) {
          if (correctLetter === lettersGuessed[j]) {
            hiddenAnswer += lettersGuessed[j] + ' ';
            found = true;
            break;
          }
        }

        if (found === false) {
          hiddenAnswer += '_ ';
        }
      }
    }

    document.getElementById('gameWord').innerHTML = hiddenAnswer;

    // decrease guessesLeft by 1
    guessesLeft--;
    document.getElementById('guessCount').innerHTML = guessesLeft;
  }
  // define loss conditions

  var underscoreFound = false;
  for (var k = 0; k < hiddenAnswer.length; k++) {
    // if underscores remaining and no guesses left
    if (hiddenAnswer.charAt(k) === '_') {
      underscoreFound = true;
    }
  }

  // define win conditions
  if (underscoreFound === false && guessesLeft >= 0) {
    document.getElementById('diseasePhotos').src = diseasePhotos[randomIndex];
    document.getElementById('diseasePhotos').style.visibility = 'visible';
    document.getElementById('result').innerHTML = "The disease you've chosen " + diseaseChosen + '.';
    wins++;
    var audio = new Audio('assets/sounds/applaud.mp3');
    audio.play();
    gameBegin();
  }

  // define loss condition
  if (underscoreFound === true && guessesLeft === 0) {
    document.getElementById('teamImage').src = 'assets/images/lose.jpg';
    document.getElementById('teamImage').style.visibility = 'visible';
    document.getElementById('result').innerHTML =
      "You've chosen the wrong disease. The disease was the " + diseaseChosen + '.';
    losses++;
    var audio = new Audio('assets/sounds/lose.mp3');
    audio.play();
    gameBegin();
  }
};
