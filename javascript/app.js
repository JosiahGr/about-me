'use strict';

alert ('Hello and welcome.');
var userName = prompt ('What\'s your name?');
alert('Thanks for stopping by ' + userName + '. let\'s play a game!');
console.log('The users name is: ' + userName);

var correctAnswer = 0;

function question1() {
  var myAge = prompt ('Do you think I\'m older than 25? Answer with Y or N.').toUpperCase();
  if(myAge === 'Y' || myAge === 'YES') {
    alert('Yeah! You got it!');
    correctAnswer++;
  } else {
    alert('Nope. You\'re wrong. But that\'s okay!');
  }
  console.log('Q1 The user guessed: ' + myAge);
}

function question2() {
  var seattleNative = prompt ('Do you think I\'m a Seattle native? Answer Y or N').toUpperCase();
  if (seattleNative === 'N' || seattleNative === 'NO') {
    alert ('You\'re right! I\'m actually from Denver, Colorado');
    correctAnswer++;
  } else {
    alert ('Nope. I\'m actually from Denver, Colorado.');
  }
  console.log('Q2 The user guessed: ' + seattleNative);
}

function question3() {
  var cheese = prompt ('Do you think I like cheese? Answer Y or N.').toUpperCase();
  if(cheese === 'Y' || cheese === 'YES') {
    alert ('NO! I hate cheese. I really don\'t understand why its a thing.');
  } else {
    alert ('CORRECT! It\'s pretty nasty. I don\'t understand why it\'s a thing.');
    correctAnswer++;
  }
  console.log('Q3 The user guessed: ' + cheese);
}

function question4(){
  var inanimateObject = prompt ('If I could eliminate one inanimate object from existence, what would I choose? Type 1 for Selfie Sticks or 2 for Blue Cheese.').toUpperCase();
  if(inanimateObject === '1' || inanimateObject === 'ONE') {
    alert ('YES! They are so ridiculous looking.');
    correctAnswer++;
  } else {
    alert ('Wrong. While I think Blue Cheese is horrible, I can keep my distance. I truly wish selfie sticks weren\'t an actual thing.');
  }
  console.log('Q4 The user guessed: ' + inanimateObject);
}

function question5() {
  alert ('You\'re almost there! Three more questions.');
  var howAmIDoing = prompt ('Do I like scary Movies? Answer Y or N.').toUpperCase();
  if (howAmIDoing === 'Y' || howAmIDoing === 'YES') {
    alert ('Yes! I do. I have a scary movie night on Sundays where friends come over and we watch something scary. We literally made sweaters for it and we have a notebook of all the ones we have seen and how we rank them..');
    correctAnswer++;
  } else {
    alert ('Wrong! Scary movies are my bread and butter.');
  }
  console.log('Q5 The user guessed: ' + howAmIDoing);
}

function question6() {
  alert ('You only have 3 guesses on this next one. Be careful!');
  var attempts = 3;
  while (attempts > 0) {
    var answer = prompt('How many Siblings do I have?');
    if (answer === '5') {
      alert ('YEAH! You got it right! I have 3 sisters and 2 brothers.');
      correctAnswer++;
      console.log('User guessed how many siblings in ' + attempts + ' attempts.');
      return;
    }
    attempts--;
  } if (attempts === 0) {
    alert('Out of Tries! I actually have five siblings. Three sisters and two brothers.');
    console.log('User ran out of attempts.');
  }
}

function question7() {
  var attempt2;
  var success = false;
  var counter;
  var i;

  for(attempt2 = 0; attempt2 < 6; attempt2++) {
    var homeState = ['colorado', 'california', 'alaska'];
    var answer2 = prompt('Can you guess a state that I have lived in other than Washington?').toLowerCase();

    for(i = 0; i < homeState.length; i++) {
      if(answer2 === homeState[i]) {
        alert('That is correct! I love ' + homeState[i]);
        success = true;
        console.log('User guessed ' + homeState[i] + ' with ' + counter + 'attempt(s) left');
        correctAnswer++;
        break;
      }
    } if (success === true) {
      break;
    } else {
      counter = 5 - attempt2;
      alert('You have ' + counter + ' chance(s) left.');
      console.log('User guessed incorrectly with ' + counter + ' attempts left');
    }
  }
}

function finalScore() {
  if (correctAnswer > 6) {
    alert('Congratulations! You got ' + correctAnswer + ' answers correct out of 7 possible. A perfect score! Let\'s be friends.');
    console.log('User got: ' + correctAnswer + ' out of 7 correct.');
  } else if (correctAnswer === 0) {
    alert('Wow! You actually didn\'t get any of those right. Yikes. This must be so embarrassing for you.');
    console.log('User got: ' + correctAnswer + ' out of 7 correct.');
  } else {
    alert('You got ' + correctAnswer + ' out of a possible 7. Better luck next time!');
    console.log('User got: ' + correctAnswer + ' out of 7 correct.');
  }
}

question1();
question2();
question3();
question4();
question5();
question6();
question7();
finalScore();



alert ('Thank you ' + userName + ' for your time!');