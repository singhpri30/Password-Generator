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


//adding a event listener on a button click
getPasswordButton.addEventListener("click", function () {
    //storing slider value in a variable
    var passwordLength = document.querySelector("#selectRange").value;

    //defining empty arrays
    var optionSelected = [];
    var password = [];

    //checking different possibilities for checkboxes
    if (upperCaseCheckbox.checked === false && lowerCaseCheckbox.checked === false && numberCheckbox.checked === false && specialCharCheckbox.checked === false) {
        alert("You must select atleast one checkbox");
        return;
    }

    if (specialCharCheckbox.checked === true) {
        optionSelected = optionSelected.concat(specialChars);
        console.log(optionSelected);
    }


    if (upperCaseCheckbox.checked === true) {
        optionSelected = optionSelected.concat(upperCaseLetters);
        console.log(optionSelected);
    }
    if (lowerCaseCheckbox.checked === true) {
        optionSelected = optionSelected.concat(lowerCaseLetters);
        console.log(optionSelected);
    }
    if (numberCheckbox.checked == true) {
        optionSelected = optionSelected.concat(numbers);
        console.log(optionSelected);
    }

    for (var i = 0; i < passwordLength; i++) {
        //using  math function to generate random numbers
        var randomValue = Math.floor(Math.random() * optionSelected.length);
        var password = password + optionSelected[randomValue];

        //stoing password in a textbox
        document.querySelector("#txt").value = password;

    }

});