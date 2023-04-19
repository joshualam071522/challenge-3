// Assignment code here
var alphabetBlank = []
var alphabetUpperCase = ['A', 'B', 'C', 'E', 'D', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var alphabetLowerCase = ['a', 'b', 'c', 'e', 'd', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var alphabetNumeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',];
var alphabetSpecial = [ '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '=', '_', '+', ',', '.', '/', ']', '[', '?', '>', '<'];


function generatePassword() {

  //Password Character Conditions
  var passwordLength = prompt("How Many characters in your password?", 8);
  if (passwordLength<8 || passwordLength>128) {
    alert("Must be 8-128 characters");

  } else (passwordLength >= 8 && passwordLength <= 128)

    if (confirm("Click OK to include upper case characters")) {
      alphabetBlank = alphabetBlank.concat(alphabetUpperCase);
    };
  
    if (confirm("Click OK to include lower case characters")) {
      alphabetBlank == alphabetBlank.concat(alphabetLowerCase);
    };
  
    if (confirm("Click OK to include numeric characters")) {
      alphabetBlank == alphabetBlank.concat(alphabetNumeric);
    };
  
    if (confirm("Click OK to include special characters")) {
      alphabetBlank = alphabetBlank.concat(alphabetSpecial);
    };
};

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