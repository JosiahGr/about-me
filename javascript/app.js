'use strict';

alert ('Hello and welcome.');

var userName = prompt ('What\'s your name?');

alert('Thanks for stopping by ' + userName + '. let\'s play a game!');
console.log('The users name is: ' + userName);

// // Question 1

var myAge = prompt ('Do you think I\'m older than 25? Answer with Y or N.').toUpperCase();

if(myAge === 'Y' || myAge === 'YES') {
  alert('Yeah! You got it!');
} else {
  alert('Nope. You\'re wrong. But that\'s okay!');
}
console.log('Q1 The user guessed: ' + myAge);

// // Question 2

var seattleNative = prompt ('Do you think I\'m a Seattle native? Answer Y or N').toUpperCase();

if (seattleNative === 'N' || seattleNative === 'NO') {
  alert ('You\'re right! I\'m actually from Denver, Colorado');
} else {
  alert ('Nope. I\'m actually from Denver, Colorado.');
}
console.log('Q2 The user guessed: ' + seattleNative);

// // Question 3

var cheese = prompt ('Do you think I like cheese? Answer Y or N.').toUpperCase();

if(cheese === 'Y' || cheese === 'YES') {
  alert ('NO! I hate cheese. I really don\'t understand why its a thing.');
} else {
  alert ('CORRECT! It\'s pretty nasty. I don\'t understand why it\'s a thing.');
}
console.log('Q3 The user guessed: ' + cheese);

// // Question 4

var inanimateObject = prompt ('If I could eliminate one inanimate object from existence, what would I choose? Type 1 for Selfie Sticks or 2 for Blue Cheese.').toUpperCase();

if(inanimateObject === '1' || inanimateObject === 'ONE') {
  alert ('YES! They are so ridiculous looking.');
} else {
  alert ('Wrong. While I think Blue Cheese is horrible, I can keep my distance. I truly wish selfie sticks weren\'t an actual thing.');
}

console.log('Q4 The user guessed: ' + inanimateObject);

// // Question 5

alert ('We are just about done. One Last question.');

var howAmIDoing = prompt ('Am I bad at coming up with yes or no questions? Answer Y or N.').toUpperCase();

if (howAmIDoing === 'Y' || howAmIDoing === 'YES') {
  alert ('Right? It took me way too long to come up with anything (including this copout last question).');
} else {
  alert ('Hey, thanks! You\'re too kind. Your compliment is going right up on my fridge.');
}

console.log('Q5 The user guessed: ' + howAmIDoing);

// // Question 6

alert ('You only have 3 guesses on this next one. Be careful!');

var attempts = 3;
while (attempts > 0) {
  var answer = prompt('How many Siblings do I have?');
  if (answer === '5') {
    alert ('YEAH! You got it right! I have 3 sisters and 2 brothers.');
    break;
  }
  attempts--;
}
if (attempts === 0) {
  alert('Out of Tries! I actually have five siblings. Three sisters and two brothers.');
}
console.log('User guessed how many siblings in ' + attempts + ' attempts.');

// Question 7

var attempt2 = 0;


while (attempt2 < 6) {
  var homeState = ['colorado', 'california', 'alaska'];
  var answer2 = prompt('Can you guess a state that I have lived in?').toLowerCase();

  for(var i = 0; i < homeState.length; i++) {
    if (answer2 === homeState[i]) {
      alert('That is correct! I love ' + homeState[i]);
      break;
    } if (answer2 !== homeState[i]) {
      attempt2++;
    } if (attempt2 === 6) {
      alert ('You are out of tries. I\'ve lived in California, Colorado and Alaska.');
      break;
    }
  } }

console.log('State guessed: ' + answer2);


alert ('Thanks ' + userName + ' for your time! See you soon.');