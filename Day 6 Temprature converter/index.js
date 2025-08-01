const celsiusA = document.getElementById('celsius');
const fahrenheitA = document.getElementById('fahrenheit');
const kelvinA = document.getElementById('kelvin');

/**
 The function `computeTemp` converts temperature values between      Celsius, Fahrenheit, and Kelvin units based on user input. @param event - The `event` parameter in the `computeTemp` function is an object that represents an event being handled by the function. It contains information about the event that occurred, such as the target element that triggered the event and the type of event that occurred (e.g., a click event, input event
 */
function computeTemp(event){
    const currentValue = +event.target.value;

    switch(event.target.id){
        case 'celsius':
        kelvinA.value = (currentValue + 273.15).toFixed(2);
        fahrenheitA.value = (currentValue * 9/5 +32).toFixed(2);
        break;

        case 'fahrenheit':
        celsiusA.value = ((currentValue - 32) * 5/9).toFixed(2);
        kelvinA.value = ((currentValue - 32) * 5/9 + 273.15).toFixed(2);
        break;

        case 'kelvin':
        celsiusA.value = (currentValue - 273.15).toFixed(2);
        fahrenheitA.value = ((currentValue - 273.15) * 9/5 +32).toFixed(2);
        break;
        default:
        break;
}};
