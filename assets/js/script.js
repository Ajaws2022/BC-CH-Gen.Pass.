var specChar = ['`', '~', '!', '@', '#', '$', '%', '^', '&', '*', 
'(', ')', '()', '-', '_', '+', '=', '|', '\\', ']', '[', '}', '{', ':', 
';', '"', "'", '<', '>', ',', '.', '?', '/'];

var numChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

var lowerChar = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'l', 
'k', 'j', 'h', 'g', 'f', 'd', 's', 'a', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];

var upperChar = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'L', 'K', 'J',
'H', 'G', 'F', 'D', 'S', 'A', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword() {
  var password = generatepassword();
  var passwordText = document.querySelector("#password");
   

  passwordText.value = password;
  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
