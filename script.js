// Assignment code here
function generatePassword() {

  //Password Character Length
  var characterLength = prompt("How Many characters in your password?", 8);
  if (characterLength<8) {
    alert("Must be at least 8 characters");
    return;
  } else if (characterLength >= 8 && characterLength <= 128) {
  var characterUpperCase = confirm("Click OK to include upper case characters");
  var characterLowerCase = confirm("Click OK to include lower case characters");
  var characterNumeric = confirm("Click OK to include numeric characters");
  var characterSpecial = confirm("Click OK to include special characters");
  } else {
    alert("Cannot be more than 128 characters");
    return; 
  }
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