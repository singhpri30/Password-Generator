//code to display slider value
var sliderEl = document.querySelector("#selectRange");
var valueEl = document.querySelector("#demo");
valueEl.innerHTML = sliderEl.value;

sliderEl.oninput = function () {
    valueEl.innerHTML = this.value;
};

//storing checkboxes and buttons elements in the variables
var getPasswordButton = document.querySelector("#getPassword");
var upperCaseCheckbox = document.querySelector("#uppercase");
var lowerCaseCheckbox = document.querySelector("#lowercase");
var numberCheckbox = document.querySelector("#number");
var specialCharCheckbox = document.querySelector("#specialChar");

//defining variables for different password values
var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", ">", "<", "(", ")", "{", "}"];