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

//defining arrays for different password values
var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", ">", "<", "(", ")", "{", "}"];


//adding an event listener on a "Get a password" button click
getPasswordButton.addEventListener("click", function () {
    //storing slider value (password length) in a variable
    var passwordLength = document.querySelector("#selectRange").value;

    //defining empty arrays
    var optionSelected = [];
    var password = [];

    //checking different possibilities for checkboxes
    if (upperCaseCheckbox.checked === false && lowerCaseCheckbox.checked === false && numberCheckbox.checked === false && specialCharCheckbox.checked === false) { //if checkboxes are not checked the alert will be displayed
        alert("You must select atleast one checkbox");
        return;
    }

    if (specialCharCheckbox.checked === true) { // if this checkbox is checked then the specialChars array will be added to an empty array
        optionSelected = optionSelected.concat(specialChars);

    }


    if (upperCaseCheckbox.checked === true) {
        optionSelected = optionSelected.concat(upperCaseLetters);

    }
    if (lowerCaseCheckbox.checked === true) {
        optionSelected = optionSelected.concat(lowerCaseLetters);

    }
    if (numberCheckbox.checked == true) {
        optionSelected = optionSelected.concat(numbers);

    }

    //looping over optionSelected array
    for (var i = 0; i < passwordLength; i++) {
        //using math function to generate random numbers
        var randomValue = Math.floor(Math.random() * optionSelected.length);
        var password = password + optionSelected[randomValue];

        //storing password in a textbox
        document.querySelector("#txt").value = password;

    }

});

//code for Copy to clipboard button
var clipBoardButton = document.querySelector("#copyPassword");

//adding an event listener on a "Copy to clipboard" button click
clipBoardButton.addEventListener("click", function () {

    //storing textbox element in a variable
    var copyPassword = document.querySelector("#txt");

    //selecting textbox
    copyPassword.select();

    //copy textbox value-password
    document.execCommand("copy");

    //password value will be copied to text area
    document.querySelector("#password").value = copyPassword.value;

    //clearing the values of textbox and checkboxes
    copyPassword.value = "";
    upperCaseCheckbox.checked = false;
    lowerCaseCheckbox.checked = false;
    numberCheckbox.checked = false;
    specialCharCheckbox.checked = false;



});
