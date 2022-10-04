// Turns the object in our html with the generate class into the generate button
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
   

  passwordText.value = password;
  

}

// Generates a password
function generatePassword(){
// Character types
var specChar = "~!@#$%^&*()"

var numChar = "1234567890";

var lowerChar = "qwertyuioplkjhgfdsazxcvbnm";

var upperChar = "QWERTYUIOPLKJHGFDSAZXCVBNM";
  
var possPasswordChars= "";
var newPassword = "";


  var passwordLength = prompt('How long would you like your password to be');
  // Ensures a password between 8-128 is given
  while ((passwordLength < 8) || (passwordLength > 128) || (isNaN(passwordLength))) {
    alert("Please enter a valid number between 8-128") 
    passwordLength = prompt('How long would you like your password to be')
  }
// Allows user to choose character types for the password
  var inclSpecChar = confirm("Would you like to include special characters");
  var inclNumChar = confirm("Would you like to include numeric characters");
  var inclUpperChar = confirm("Would you like to include uppercase characters");
  var inclLowerChar = confirm("Would you like to include lowercase characters");
  
  
// Generates a random character from a string
  function random(max){
    // var randomNumber = Math.floor(Math.random() * array.length);
    // return array[randomNumber];
    return [Math.floor(Math.random() * max)]
  }; 
  
  
// iterates over the user input to determine which characters to use or not
  if(inclSpecChar){
    possPasswordChars = possPasswordChars.concat(specChar);
    newPassword.concat(random(specChar));
   }
   if(inclNumChar){
    possPasswordChars = possPasswordChars.concat(numChar);
    newPassword.concat(random(numChar));
   }
   if(inclUpperChar){
    possPasswordChars = possPasswordChars.concat(upperChar);
    newPassword.concat(random(upperChar));
   }
   if(inclLowerChar){
    possPasswordChars = possPasswordChars.concat(lowerChar);
    newPassword.concat(random(lowerChar)); 
   };
  
  //  looops through reamining characters to finish the password length
  for(var i = 0; i < passwordLength; i++){
    // var randChar = selRandChar(possPasswordChars);
    newPassword = newPassword.concat(possPasswordChars.charAt(random(possPasswordChars.length - 1)))

  }
  // finishes the function by calling the string with the password
  return newPassword;
 
}

// Triggers password creation by activating the write password function when generate is clicked
generateBtn.addEventListener("click", writePassword);
