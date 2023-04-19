// Arrays to create a bank of characters to use for the random password generator
var alphabetUpperCase = ['A', 'B', 'C', 'E', 'D', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var alphabetLowerCase = ['a', 'b', 'c', 'e', 'd', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var alphabetNumeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',];
var alphabetSpecial = [ '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '=', '_', '+', ',', '.', '/', ']', '[', '?', '>', '<'];


function generatePassword() {

  //Password Prompts
  var passwordLength = prompt("How Many characters in your password?", 8);
  var passwordUpperCase = confirm("Press OK to include Upper Case letters");
  var passwordLowerCase = confirm("Press OK to include Lower Case letters");
  var passwordNumeric = confirm("Press OK to include Numeric Letters");
  var passwordSpecial = confirm("Press OK to include Special letters");

  //Blank array added inside function so array does not infinitely concat arrays if generate password function is called multiple times
  var alphabetBlank = [];

  // variable to return if password length does not meet requirements
  var wrongConditions = "";
  
  // variable to return if none of the password types are selected
  var noTypeSelected = "";

  //Password If statements for password conditions
  if (passwordLength<8 || passwordLength>128) {
    alert("Must be 8-128 characters");
    return wrongConditions;
  };

  if (!passwordUpperCase && !passwordLowerCase && !passwordNumeric && !passwordNumeric) {
    alert("Must at least pick one type");
    return noTypeSelected;
  }

  if (passwordUpperCase) {
    var alphabetBlank = alphabetBlank.concat(alphabetUpperCase);
  };

  if (passwordLowerCase) {
    var alphabetBlank = alphabetBlank.concat(alphabetLowerCase);
  };

  if (passwordNumeric) {
    var alphabetBlank = alphabetBlank.concat(alphabetNumeric);
  };

  if (passwordSpecial) {
    var alphabetBlank = alphabetBlank.concat(alphabetSpecial);
  };

  // Empty password variable for the for Loop function
  var password = "";

  // For Loop function to generate the password
  for (var i = 0; i < passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * alphabetBlank.length);
    var randomCharacter = alphabetBlank[randomNumber];
    var password = password + randomCharacter;
    
  };

  // Presents the generated password to be used in the function writePassword
  return password;
  }

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