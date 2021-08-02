// Create array variables for each of the choice
// var lowercaseChars = [97 - 122]; // ASCII values for all lowercase letters
// var uppercaseChars = [65 - 90]; // ASCII values for all upercase letters
// var numeric = [0 - 9];
// var specialChars = [32 - 47]; // ASCII values for special characters

// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // Prompt user to choose a password length greater than 8 and less than 128 and store the input in a variable
  var passwordLength = prompt("Please enter a number between 8 and 128 to choose the length of the generated password");

  // Check to see if 'cancel' button was clicked or if ok was entered without a value
  if (passwordLength === null) {
    alert("Cancelled");
    return;
  }
  if (passwordLength === "") {
    alert("Nothing entered");
    generatePassword();
    return;
  }
  // Check to see if a valid number between 8 and 128 was entered and repeat the function if it is not valid
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Length is not long enough");
    generatePassword();
    return;
  }

  // Convert valid password into a number type
  passwordLength = parseInt(passwordLength);

  // Prompt rompt user to choose whether they want to include lowercase, uppercase, numeric and/or special characters in their password and store the input in variables
  var useLowerChars = confirm("Would you like to include lowercase characters in the password?");
  var useUpperChars = confirm("Would you like to include uppercase characters in the password?");
  var useNumericChars = confirm("Would you like to include numeric characters in the password?");
  var useSpecialChars = confirm("Would you like to include special characters in the password?");

  while (
    (useLowerChars = "false") &&
    (useUpperChars = "false") &&
    (useNumericChars = "false") &&
    (useSpecialChars = "false")
  ) {
    alert(
      "Please select at least one character type (lowercase, uppercase, numeric, or special) to use for the password"
    );
    generatePassword();
    return;
  }
}

//DEFAULT CODE BELOW
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  // Find the id in HTML called password to determine where it should be placed
  var passwordText = document.querySelector("#password");
  // Use the element found in the HTML to display the value of the password variable
  passwordText.value = password;
  return;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// Display the generated password in an alert
