// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  var length = "How long do you want your password to be?";
  var lowercase = "Do you want lowercase characters?";
  var uppercase = "Do you want uppercase characters?";
  var numeric = "Do you want numeric characters?";
  var special = "Do you want special characters?"
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

console.log("Do you want lowercase characters?")
console.log("Do you want uppercase characters?")
console.log("Do you want numeric characters?")
console.log("Do you want special characters?")

if (length) {
  console.log("How long do you want your password to be?");
} else {
  console.log("Password must be between 8 and 128 characters.");
}

//prompt for length of password
//between 8 and 128 characters
//propmt for character types
//confirm whether or not to include lowercase, uppercase, numeric, and/or special
//when each prompt is answered,
//input should be validated and at least one character type should be selected
//when all prompts are answered,
//the password generated should match the selected criteria
//when the password is generated,
//the password is either displayed in the alert or written on the page