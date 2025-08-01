/*
    The function toggles the "active" class on a button element and the 
    "on" class on a light element when the button is clicked.
 */
let btn = document.querySelector("#btn");
let light = document.querySelector("#light");

function toggleBtn() {
    btn.classList.toggle("active");
    light.classList.toggle("on");
}