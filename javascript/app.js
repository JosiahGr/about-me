'use strict';

alert ('Hello and welcome.');

var userName = prompt ('What\'s your name?');
alert('Hello ' + userName);
console.log('The user entered: ' + userName);

var myAge = prompt ('Do you think I\'m older than 25? Answer with Y or N.').toUpperCase();

if(myAge === 'Y') {
    alert('Yeah! You got it!');
} else {
    alert('Nope. You\'re very wrong. But that\'s okay!');
}



