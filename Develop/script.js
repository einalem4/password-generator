// Assignment code here
//how many characters would you like your password to conatin
//click ok to confirm including special characters
//click ok to confirm including numeric characters
//click ok to confirm including lowercase characters
//click ok to confirm including uppercase characters

var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var special = ['!', '@', '#', '$', '%', '=', '&', '*', '?', '_', '"', '(', '(', '+', ',', '-', '.', '/', ':', ';', '<', '>', '=', '?', '[', ']', '^', '{', '|', '}', '~', '/',];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var generatePassword = function () {

  var passLength = window.prompt("how many characters would you like your password to conatin?");

  while (passLength <= 7 || passLength >= 129) {
    window.alert("Password length must be between 8-128 characters. Try again");
    break;
  }
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
