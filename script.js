//code to display slider value
var sliderEl = document.querySelector("#selectRange");
var valueEl = document.querySelector("#demo");
valueEl.innerHTML = sliderEl.value;

sliderEl.oninput = function () {
    valueEl.innerHTML = this.value;
};