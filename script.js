// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  var length = 8;
  var retVal = "";

  var charset = {
    "option-lowercase": false,
    "option-uppercase": false,
    "option-numbers": false,
    "option-special": false,
    "lowercase": "abcdefghijklmnopqrstuvwxyz",
    "uppercase": "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    "numbers": "0123456789",
    "special":  "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
  }

  length = promptLength();

  if(length === null)
    return;

  promptOptions();

  // for (var i = 0, n = charset.length; i < length; ++i) {
  //   retVal += charset.charAt(Math.floor(Math.random() * n));
  // }
  return retVal;
}

function promptLength() {
  var lgth = prompt("How many characters in password?");

  if(lgth <= 128 && lgth >= 8) {
    return lgth;
  }
  else {
    alert("Password must be between 8 and 128 characters!");
    generatePassword();  
  }

  return null;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
