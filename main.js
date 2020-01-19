// my variables: randomNumber, randomLowerLetter, , randomCapitalLetter, randomSymbol
// variables: result (the box with the password result)
// variables: password-slider (the slider that a user chooses from 8-128 characters)
// variables: generate (user presses this button to generate a password)
// variables: copy (user presses this button to copy the password to a clipboard)

var randomNumber = "0123456789";
var randomLowerLetter = "abcdefghijklmnopqrstuvwxyz";
var randomCapitalLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var randomSymbol = "!@#$%^&*(){}[]<>?,.";

var resultOutput = document.getElementById("passwordResult");
var passwordSlider = document.getElementById("passwordSlider");
var sliderNumber = document.getElementById("slidernumber");
var generateButton = document.getElementById("generate");


// slider value

var resultOutput = document.getElementById("passwordResult");
var passwordSlider = document.getElementById("passwordSlider");

resultOutput.innerHTML = PasswordSlider.value;

PasswordSlider.oninput = function(_sliderRange) {

resultOutput.innerHTML = this.value;

}

document.getElementById("display").value = password;



// function to generate the password from button. 
function generatePassword() {
  var anything = document.getElementById("PasswordSlider").value;

  var combinedArray = [];

  combinedArray.push(
    ...randomNumber,
    ...randomLowerLetter,
    ...randomCapitalLetter,
    ...randomSymbol
  );

  var password = "";

  for (var i = 0; i <= anything; i++) {
    password =
      password +
      combinedArray.charAt(
        Math.floor(Math.random() * Math.floor(CombinedArray.length))
      );
  }

    // Finally user presses the copy to clipboard button and copies the password to his computer clipboard located in the result box
 
    var copyButton = document.getElementById("copy");

    function copyToClipboard(){
  
      document.getElementById("passwordResult").select(); 
  
      document.execCommand("copy")
    }
  


  //passwordSlider.oninput = function() {
  // output.innerHTML = this.sliderNumber;
  //};
  // google how to find the value of a slider

  // User first scrolls the password slider to decide what length the slider should be - between 8-128 characters

  // User then clicks the generate button to generate a password in the result box
  // after the slider is slid you click the button and gives you the value for loop



  
  // button should take all the variables (letters, symbols, numbers) and radomize them, including at least one of each
  // Then the password shows up in the result box and the password length shows below

  // If user scrolls the password slider again, everything resets to the beginning until the generate button is clicked





   // look up a way to copy element to clipboard
  // console.log(Math.floor(Math.random() + 26) + 97)
//var sliderValue = 54;
  //var string = "";

  //for (var i = 0; i < sliderValue; i++) {
  //string = string + "i";
  //}
  // look up a way how to copy value
  // for loop here
    //var sliderValue = 54;
  //var string = ""