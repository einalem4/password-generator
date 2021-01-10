// Assignment code here
//information stored in the criteria presented to the user
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var special = ['!', '@', '#', '$', '%', '=', '&', '*', '?', '_', '"', '(', '(', '+', ',', '-', '.', '/', ':', ';', '<', '>', '=', '?', '[', ']', '^', '{', '|', '}', '~', '/',];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var randomNumber = function (min, max) {
  var value = Math.floor(Math.random() * (max - min) + min);

  return value;
};

var generatePassword = function () {
  //ask the user how long they want their password to be
  var passLength = window.prompt("How many characters would you like your password to contain?");

  //make sure the password is between 8 -128 characters
  if (passLength <= 7 || passLength >= 129) {
    //if the password isn't between 8-128 characters then it lets the user know
    window.alert("Password length must be between 8-128 characters. Try again");
    return;
  }

  //Asks the user which items they would like included in their password
  var upperCaseAlert = window.confirm("click OK to confirm including uppercase characters.");
  var lowerCaseAlert = window.confirm("click OK to confirm including lowercase characters.");
  var numberAlert = window.confirm("click OK to confirm including numeric characters.");
  var specialAlert = window.confirm("click OK to confirm including special characters.");

  //if they answer no to all options user will be prompted to pick at least one
  while (upperCaseAlert === false && lowerCaseAlert === false && numberAlert === false && specialAlert === false) {
    alert("You must choose at least one option");
    //allows the user to cycle through the criteria again if they did not pick one the first time
    var upperCaseAlert = window.confirm("click OK to confirm including uppercase characters.");
    var lowerCaseAlert = window.confirm("click OK to confirm including lowercase characters.");
    var numberAlert = window.confirm("click OK to confirm including numeric characters.");
    var specialAlert = window.confirm("click OK to confirm including special characters.");
  }

  var password = ""

  //empty array for the concatenate
  var characters = []
  //if the user selects that they want upperCase characters
  if (upperCaseAlert === true) {
    //place the upperCase array into the characters variable
    characters = characters.concat(upperCase)
  }
  //if the user selects that they want lowerCase characters
  if (lowerCaseAlert === true) {
    //place the lowerCase array into the characters variable
    characters = characters.concat(lowerCase)
  }
  //if the user selects that they want numberic characters
  if (numberAlert === true) {
    //place the number array into the characters variable
    characters = characters.concat(number)
  }
  //if the user selects that they want special characters
  if (specialAlert === true) {
    //place the special array into the characters variable
    characters = characters.concat(special)
  }

  //length of the password based on response
  for (var i = 0; i < passLength; i++) {
    //randomize the characters array based on the passLength and using the randomNumber function
    var random = randomNumber(0, characters.length);
    //password variable will store the results from the characters variable that got radomized
    password += characters[random];
  }
  //generates the password
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
