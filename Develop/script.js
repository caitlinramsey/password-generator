var lowercaseString = "abcdefghijklmnopqrstuvwxyz"
var uppercaseString = lowercaseString.toUpperCase()
var numericString = "0123456789"
var specialString = "!@#$%^&*-+"

var securePassword = [];

function generatePassword() {

//   for (var i = 0; i < length; i++) {
//     var random = Math.floor(Math.random() * securePassword.length);
// }

  var length = prompt("How many characters do you want your password to be?");
 
  console.log(length);

  if (parseInt(length) < 8) {
    alert("Password must be between 8 and 128 characters.");
    return;
}

  if (parseInt(length) > 128) {
    alert("Password must be between 8 and 128 characters.");
    return;
}

  if (isNaN(length)) {
    alert("Please enter a number.");
    return;
}

  var lowercase = confirm("Do you want lowercase characters?");
  var uppercase = confirm("Do you want uppercase characters?");
  var numeric = confirm("Do you want numeric characters?");
  var special = confirm("Do you want special characters?");

  console.log(lowercase, uppercase, numeric, special)

  if (lowercase) {
    console.log("Do you want lowercase characters?")
    securePassword = securePassword + lowercaseString
    console.log(securePassword)
}

  if (uppercase) {
    console.log("Do you want uppercase characters?")
    securePassword = securePassword + uppercaseString
    console.log(securePassword)
}

  if (numeric) {
    console.log("Do you want numeric characters?")
    securePassword = securePassword + numericString
    console.log(securePassword)
}

  if (special) {
    console.log("Do you want special characters?")
    securePassword = securePassword + specialString
    console.log(securePassword)
}

function random(securePassword) {
  var randIndex = Math.floor(Math.random() * securePassword.length);
  var randChar = securePassword[randIndex]
  return randChar;
}

};

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  console.log(password)

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 

