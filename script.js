// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  // If the password is undefined or null, return as that isn't correct.
  if(password === null || password === undefined)
    return;

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  alert("Password generated successfully! :D");
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
    // NOTE: space is not included in the special characters list 
    // as i don't personally think it belongs.
    "special":  "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
  }

  // Prompt user for their desired length, if the user inputs an invalid length, alert that
  // it must be between 8 and 128 characters and restart the generator.
  length = promptLength();

  // Ask user what options they want for their password.
  charset["option-lowercase"] = confirm("Would you like the password to include lowercase characters?");
  charset["option-uppercase"] = confirm("Would you like the password to include uppercase characters?");
  charset["option-numbers"] = confirm("Would you like the password to include numerical characters?");
  charset["option-special"] = confirm("Would you like the password to include special characters?");

  // Setting up options for password generation
  var chars = "";
  if(charset["option-lowercase"]) chars += charset["lowercase"];
  if(charset["option-uppercase"]) chars += charset["uppercase"];
  if(charset["option-numbers"]) chars += charset["numbers"]; 
  if(charset["option-special"]) chars += charset["special"];

  // If at this point chars still equals nothing, the user set all options
  // to false... This is not allowed so now we alert back that it is isn't allowed
  // and restart the generator.
  if(chars === "") { 
    alert("You must select at-least ONE option for the generator to work! :(");
    generatePassword();
  }

  // Generate the password from the allowed categories of characters.
  for (var i = 0, n = chars.length; i < length; ++i) {
    retVal += chars.charAt(Math.floor(Math.random() * n));
  }
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
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
