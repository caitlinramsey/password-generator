var lowercaseString = "abcdefghijklmnopqrstuvwxyz"
var uppercaseString = lowercaseString.toUpperCase()
var numericString = "0123456789"
var specialString = "!@#$%^&*-+"

function generatePassword() {
  
  var superString = "";

  for (var i = 8; i < 128; i++) {
    Math.floor(Math.random() * 128) + 8;
  };

  var length = prompt("How long do you want your password to be?");
 
  console.log(length);

  if (length < 8) {
  alert("Password must be between 8 and 128 characters.");
  return
}

  if (length > 128) {
  alert("Password must be between 8 and 128 characters.");
  return
}

  var lowercase = confirm("Do you want lowercase characters?");
  var uppercase = confirm("Do you want uppercase characters?");
  var numeric = confirm("Do you want numeric characters?");
  var special = confirm("Do you want special characters?");

  console.log(lowercase, uppercase, numeric, special)

  if (lowercase) {
    console.log("Do you want lowercase characters?")
    superString = superString + lowercaseString
    console.log(superString)
}

  if (uppercase) {
    console.log("Do you want uppercase characters?")
    superString = superString + uppercaseString
    console.log(superString)
}

  if (numeric) {
    console.log("Do you want numeric characters?")
    superString = superString + numericString
    console.log(superString)
}

  if (special) {
    console.log("Do you want special characters?")
    superString = superString + specialString
    console.log(superString)
}

return superString

};

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 

//when all prompts are answered,
//the password generated should match the selected criteria
//when the password is generated,
//the password is either displayed in the alert or written on the page