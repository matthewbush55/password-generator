// Create array variables for each of the choice

// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var passwordLength = 0;
  var useLowerChars;
  var useUpperChars;
  var useNumericChars;
  var useSpecialChars;
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz".split(""); // Assign each lowercase character to an array index
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""); // Assign each uppercase character to an array index
  var numericChars = "0123456789".split(""); //Assign each numeric character to an array index
  var specialChars = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~".split(""); // Assign each special character to an array index
  // Used to construct the password based on the user's complexity choices
  var constructPassword = [];
  // Used to lookup the index of the char to add to the constructed password
  var finalPassword = [];

  // Prompt user to choose a password length greater than 8 and less than 128 and store the input in a variable
  passwordLength = prompt("Please enter a number between 8 and 128 to choose the length of the generated password");

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

  // Prompt user to choose whether they want to include lowercase, uppercase, numeric and/or special characters in their password and store the input in variables
  useLowerChars = confirm("Would you like to include lowercase characters in the password?");

  // Take the user's character selections and concatinate into an array
  if (useLowerChars) {
    constructPassword = constructPassword.concat(lowercaseChars);
  }
  useUpperChars = confirm("Would you like to include uppercase characters in the password?");
  if (useUpperChars) {
    constructPassword = constructPassword.concat(uppercaseChars);
  }
  useNumericChars = confirm("Would you like to include numeric characters in the password?");
  if (useNumericChars) {
    constructPassword = constructPassword.concat(numericChars);
  }
  useSpecialChars = confirm("Would you like to include special characters in the password?");
  if (useSpecialChars) {
    constructPassword = constructPassword.concat(specialChars);
  }

  // Check to see if the user selected at least one of the complexity options and restart the 'generatePassword' function if they have not selected at leaset one option
  while (useLowerChars === false && useUpperChars === false && useNumericChars === false && useSpecialChars === false) {
    console.log(useLowerChars);
    console.log(useUpperChars);
    console.log(useNumericChars);
    console.log(useSpecialChars);
    alert(
      "Please select at least one character type (lowercase, uppercase, numeric, or special) to use for the password"
    );
    return;
  }

  for (i = 0; i <= passwordLength - 1; i++) {
    var randomIndex = Math.floor(Math.random() * constructPassword.length);
    finalPassword += constructPassword[randomIndex];
  }
  return finalPassword;
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
