// var specChar = ['`', '~', '!', '@', '#', '$', '%', '^', '&', '*', 
// '(', ')', '()', '-', '_', '+', '=', '|', '\\', ']', '[', '}', '{', ':', 
// ';', '"', "'", '<', '>', ',', '.', '?', '/'];

//  there are four password options to choose from
// we need 5 functions, one for determining length, and the four options
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
  
  

  if(inclSpecChar){
    // generate random spec care
    // push it to password
    possPasswordChars = possPasswordChars.concat(specChar);
     
    // math.floor and math.random acan be used to make a random selection
    newPassword.push(random(specChar));

   }

   if(inclNumChar){
    possPasswordChars = possPasswordChars.concat(numChar);
    newPassword.push(random(numChar));
   }
   if(inclUpperChar){
    possPasswordChars = possPasswordChars.concat(upperChar);
    newPassword.push(random(upperChar));
   }
   if(inclLowerChar){
    possPasswordChars = possPasswordChars.concat(lowerChar);
    newPassword.push(random(lowerChar));
     
    
   };
  //  to generate the password I need to loop through the remaining characters to fill the lenght randomly
  // the characters I've already added need to be subtracted from the length
  // var remainChar = options.passwordlength - password.length;

  


  for(var i = 0; i < passwordLength; i++){
    // var randChar = selRandChar(possPasswordChars);
    newPassword = newPassword.concat(possPasswordChars.charAt(random(possPasswordChars.length - 1)))
    // password.push(randChar);
    
  }
  // I need to add something to turn the array into a string
   
  // password.toString();

  return newPassword;
 

}
// Assignment Code


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
