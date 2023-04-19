// Assignment code here
var alphabetUpperCase = ['A', 'B', 'C', 'E', 'D', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var alphabetLowerCase = ['a', 'b', 'c', 'e', 'd', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var alphabetNumeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',];
var alphabetSpecial = [ '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '=', '_', '+', ',', '.', '/', ']', '[', '?', '>', '<'];


function generatePassword() {

  //Password Prompts
  var passwordLength = prompt("How Many characters in your password?", 8);
  var passwordUpperCase = confirm("Press OK to include Upper Case letters");
  var passwordLowerCase = confirm("Press OK to include Lower Case letters");
  var passwordNumeric = confirm("Press OK to incluide Numeric Letters");
  var passwordSpecial = confirm("Press OK to include Special letters");
  var alphabetBlank = [];

  //Password If statements
  if (passwordLength<8 || passwordLength>128) {
    alert("Must be 8-128 characters");
  };

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

  // empty password for for Loop
  var password = "";

  for (var i = 0; i < passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * alphabetBlank.length);
    var randomCharacter = alphabetBlank[randomNumber];
    var password = password + randomCharacter;
    
  };
    //For Loop test
  console.log(password);

  //presents the generated password to be used in the function writePassword
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