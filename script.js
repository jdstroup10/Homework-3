
//Global Variables
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9" ];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
var lowerCaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



function generatePassword() {
  var passwordSize = prompt("What is your password length? (Choose a length 8-128)");
  var lowerCase = confirm("Would you like your password to contain lowercase characters?");
  var upperCase = confirm("Would you like your password to contain uppercase characters?");
  //var numeric = confirm("Should your password contain numeric characters?");
  //var special = confirm("Should your password contain special characters?");
  var localPasswordLower = "";
  var localChar = "";
  var localPasswordUpper = "";

  var localCharUpper = "";
  var passwordSizeInt = parseInt(passwordSize, 10);
  //stops working if you go higher than 10
  //alert(passwordSize)
  if (passwordSize < 8) {
    alert("Error: Password length must be between 8-128");
  }

  if (lowerCase) {
    alert("LOWER");
      for (i = 0; i < passwordSize; i++ ) {
          localChar = lowerCaseCharacters[Math.floor(Math.random() * lowerCaseCharacters.length)];
          localPasswordLower += localChar;
      }
  }

  if (upperCase) {
    alert("UPPER");
    for (i = 0; i < passwordSize; i++ ) {
         localChar = upperCaseCharacters[Math.floor(Math.random() * upperCaseCharacters.length)];
         localPasswordUpper += localChar;
      }
  }


  //if (numeric) {
  //  alert("NUMERIC");
  //}


  //if (special) {
  //  alert("SPECIAL");
  //} 
  if (upperCase) {
    return localPasswordUpper; 
  }
  else {
      return localPasswordLower;
  }

  
  



}



 // var passwordLength = prompt("What is your password length? (Choose a length 8-128)");
  //var complexity = document.getElementsByName("passwordLength").value;

  //Password values
  //var values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*?";

  //var passcode = "";

  //for(var i = 0; i <= complexity; i++){
 //   passcode = passcode + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
 // }

  //Put password in text box
  //document.getElementById("#password").value = passcode;

  
  
  
  //var lowerCase = confirm("Would you like your password to contain lowercase characters?");
  //var upperCase = confirm("Would you like your password to contain uppercase characters?");
  //var numeric = confirm("Should your password contain numeric characters?");
  //var specialCharacters = confirm("Should your password contain special characters?");
  //alert("Alert")



  



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
