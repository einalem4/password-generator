// Assignment code here
//how many characters would you like your password to conatin
//click ok to confirm including special characters
//click ok to confirm including numeric characters
//click ok to confirm including lowercase characters
//click ok to confirm including uppercase characters

//length of password is between 8-129 characters
//confirm user wants upper case
//confirm user wants lower case
//confirm user wants numbers
//confirm user wants special characters
//based on selections user is generated a password


var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var special = ['!', '@', '#', '$', '%', '=', '&', '*', '?', '_', '"', '(', '(', '+', ',', '-', '.', '/', ':', ';', '<', '>', '=', '?', '[', ']', '^', '{', '|', '}', '~', '/',];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var passLength = "";

var randomNumber = function (min, max) {
  var value = Math.floor(Math.random() * (max - min) + min);

  return value;
};

var generatePassword = function () {
  var passLength = window.prompt("How many characters would you like your password to conatin?");

  if (passLength <= 7 || passLength >= 129) {
    window.alert("Password length must be between 8-128 characters. Try again");
    return;
  }

  var upperCaseAlert = window.confirm("click OK to confirm including uppercase characters.");
  var lowerCaseAlert = window.confirm("click OK to confirm including lowercase characters.");
  var numberAlert = window.confirm("click OK to confirm including numeric characters.");
  var specialAlert = window.confirm("click OK to confirm including special characters.");

  while (upperCaseAlert === false && lowerCaseAlert === false && numberAlert === false && specialAlert === false) {
    alert("You must choose at least one option");
    break;
  }

  for (var i = 0; i < passLength.length; i++); {
    console.log(passLength);
  }

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
  console.log(characters);
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
