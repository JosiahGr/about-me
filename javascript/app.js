'use strict';

alert ('Hello and welcome.');

var userName = prompt ('What\'s your name?');
alert('Hello, ' + userName + '.');
console.log('The user entered: ' + userName);

// // Question 1

var myAge = prompt ('Do you think I\'m older than 25? Answer with Y or N.').toUpperCase();

if(myAge === 'Y') {
    alert('Yeah! You got it!');
} else {
    alert('Nope. You\'re very wrong. But that\'s okay!');
}
console.log('The user entered: ' + myAge);

// // Question 2

var seattleNative = prompt ('Do you think i\m a Seattle native? Answer Y or N').toUpperCase();

if (seattleNative === 'N') {
    alert ('You\'re right! I\'m actually from Denver, Colorado');
} else {
    alert ('Nope. I\'m actually from Denver, Colorado.');
}
console.log('The user entered: ' + seattleNative);

// Question 3

var cheese = prompt ('Do you think I like cheese? Answer Y or N.').toUpperCase();

if(cheese === 'Y') {
    alert ('NO! I hate cheese. I really don\'t understand why its a thing. Like wtf is Blue Cheese all about?')
} else {
    alert ('CORRECT! It\'s pretty nasty. I don\'t understand why it\'s a thing.')
}
console.log('The user entered: ' + cheese);

// Question 4

var inanimateObject = prompt ('If I could eliminate one inanimate object from existence, what would I choose? Type 1 for Selfie Sticks or 2 for Blue Cheese.');

if (inanimateObject === '1') {
    alert ('YES! They are so dumb. Yeah I\'m talking to all of you who use them. You look ridiculous.');
} else { 
    alert ('Wrong. While I think Blue Cheese is horrible, I can keep my distance. I truly wish selfie sticks weren\'t an actual thing.');
}

console.log('The user entered: ' + inanimateObject);

// Question 5 

alert ('We are just about done. One Last question.');

var howAmIDoing = prompt ('Am I bad at coming up with yes or no questions? Answer Y or N.').toUpperCase();

if (howAmIDoing === 'Y') {
    alert ('Right? It took me way too long to come up with anything (including this copout last question).');
} else {
    alert ('Hey, thanks! You\'re too kind. Your compliment is going right up on my fridge.');
}

console.log('The user entered: ' + inanimateObject);

alert ('Thanks ' + userName + ' for your time! See you soon.');