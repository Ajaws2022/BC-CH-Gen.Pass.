var specChar = ['`', '~', '!', '@', '#', '$', '%', '^', '&', '*', 
'(', ')', '()', '-', '_', '+', '=', '|', '\\', ']', '[', '}', '{', ':', 
';', '"', "'", '<', '>', ',', '.', '?', '/'];

var numChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

var lowerChar = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'l', 
'k', 'j', 'h', 'g', 'f', 'd', 's', 'a', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];

var upperChar = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'L', 'K', 'J',
'H', 'G', 'F', 'D', 'S', 'A', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'];
//  there are four password options to choose from
// we need 5 functions, one for determining length, and the four options


// a function to trigger the application
function generatePassword(){
  
  

  var passwordLength = prompt('How long would you like your password to be');
  //create if statement to check value given is between 8-128
  var inclSpecChar = confirm("Would you like to include special characters");
  var inclNumChar = confirm("Would you like to include numeric characters");
  var inclUpperChar = confirm("Would you like to include uppercase characters");
  var inclLowerChar = confirm("Would you like to include lowercase characters");
  
  var options ={
    passwordLength: passwordLength,
    inclSpecChar: inclSpecChar,
    inclNumChar: inclNumChar,
    inclUpperChar: inclUpperChar,
    inclLowerChar: inclLowerChar
  }

  var possPasswordChars= [];
  var password = [];

  function selRandChar(array){
    var randomNumber = Math.floor(math.random() * array.length);
    return array[randomNumber];
  }
  

  if(options.inclSpecChar){
    // generate random spec care
    // push it to password
    possPasswordChars = possPasswordChars.concat(specChar);
     
    // math.floor and math.random acan be used to make a random selection
    password.push(selRandChar(specChar));

   }

   if(options.inclNumChar){
    possPasswordChars = possPasswordChars.concat(numChar);
    password.push(selRandChar(numChar)); 
   }
   if(options.inclUpperChar){
    possPasswordChars = possPasswordChars.concat(upperChar);
    password.push(selRandChar(upperChar)); 
   }
   if(options.inclLowerChar){
    possPasswordChars = possPasswordChars.concat(lowerChar);
    password.push(selRandChar(lowerChar)); 
    
   }
  //  to generate the password I need to loop through the remaining characters to fill the lenght randomly
  // the characters I've already added need to be subtracted from the length
  var remainChar = options.length - password.length;
  for(var i = 0; i < remainChar; i++){
    var randChar = selRandChar(possPasswordChars);
    password.push(randChar)
  }

}
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
