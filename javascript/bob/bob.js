//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function(input) {
  return responseFor(input);
}

function responseFor (input) {
  if (isShouting(input)) {
    return answerFor.shouting;
  } else if (isAsking(input)) {
    return answerFor.asking;
  } else if(isStatingSomething(input)) {
    return answerFor.stating;
  } else {
    return answerFor.silence;
  };
}

var answerFor = {
  shouting: 'Whoa, chill out!',
  asking: 'Sure.',
  stating: 'Whatever.',
  silence: 'Fine. Be that way!'
}

var lastChar = function (input) {
  return input.charAt(input.length - 1);
}

function isShouting (input) {
  var isLettersAndUmlautCharsOnly = input.replace(/[^A-Za-z\xc4\xe4\xdc\xfc]/g, "");
  return (isLettersAndUmlautCharsOnly == isLettersAndUmlautCharsOnly.toUpperCase() && isLettersAndUmlautCharsOnly !== '' );
}

function isStatingSomething (input) {
  var isAlphanumnericCharsOnly = (/\w/).test(input)
  return  isAlphanumnericCharsOnly;
}

function isAsking(input) {
  var isEndingWithQuestionMark = lastChar(input) === '?';
  return isEndingWithQuestionMark;
}

module.exports = Bob;
