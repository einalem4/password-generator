// Assignment code here

var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var special = ['!', '@', '#', '$', '%', '=', '&', '*', '?', '_', '"', '(', '(', '+', ',', '-', '.', '/', ':', ';', '<', '>', '=', '?', '[', ']', '^', '{', '|', '}', '~', '/',];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];


var randomNumber = function (min, max) {
  var value = Math.floor(Math.random() * (max - min) + min);

  return value;
};

var generatePassword = function () {
  //ask how long they want password to be
  var passLength = window.prompt("How many characters would you like your password to contain?");

  //make sure the password is between 8 -128 characters
  if (passLength <= 7 || passLength >= 129) {
    window.alert("Password length must be between 8-128 characters. Try again");
    return;
  }

  //ask additional criteria questions
  var upperCaseAlert = window.confirm("click OK to confirm including uppercase characters.");
  var lowerCaseAlert = window.confirm("click OK to confirm including lowercase characters.");
  var numberAlert = window.confirm("click OK to confirm including numeric characters.");
  var specialAlert = window.confirm("click OK to confirm including special characters.");

  //if they answer no to all options, prompt to pick at least one
  while (upperCaseAlert === false && lowerCaseAlert === false && numberAlert === false && specialAlert === false) {
    alert("You must choose at least one option");
    var upperCaseAlert = window.confirm("click OK to confirm including uppercase characters.");
    var lowerCaseAlert = window.confirm("click OK to confirm including lowercase characters.");
    var numberAlert = window.confirm("click OK to confirm including numeric characters.");
    var specialAlert = window.confirm("click OK to confirm including special characters.");
  }

  var password = ""

  var characters = []

  if (upperCaseAlert === true) {
    characters = characters.concat(upperCase)
  }
  if (lowerCaseAlert === true) {
    characters = characters.concat(lowerCase)
  }
  if (numberAlert === true) {
    characters = characters.concat(number)
  }
  if (specialAlert === true) {
    characters = characters.concat(special)
  }

  //length of the password based on response
  for (var i = 0; i < passLength; i++) {
    var random = randomNumber(0, characters.length);
    password += characters[random];
  }
  return password;
};


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
