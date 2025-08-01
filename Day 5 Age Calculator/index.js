const btn = document.getElementById("btn");
const result = document.getElementById("result");
const birthday = document.getElementById("birthday");
function calculateAge() {
    const birthdayValue = birthday.value;
    if (birthdayValue === "") {
        alert("Input Birthday");
    } else {
        const detailedAge = getAge(birthdayValue);
        result.innerText = `Your age is ${detailedAge.years} ${detailedAge.years > 1 ? "years" : "year"}, ${detailedAge.months} ${detailedAge.months > 1 ? "months" : "month"}, and ${detailedAge.days} ${detailedAge.days > 1 ? "days" : "day"} old.`;
    }
};
function getAge(birthdayValue) {
    const currentDate = new Date();
    const birthdayDate = new Date(birthdayValue);
    let years = currentDate.getFullYear() - birthdayDate.getFullYear();
    let months = currentDate.getMonth() - birthdayDate.getMonth();
    let days = currentDate.getDate() - birthdayDate.getDate();
    let hours = currentDate.getHours() - birthdayDate.getHours();
    let minutes = currentDate.getMinutes() - birthdayDate.getMinutes();
    let seconds = currentDate.getSeconds() - birthdayDate.getSeconds();

    if (seconds > 0) {
        seconds += 60;
        minutes--;
    }
    if (minutes > 0) {
        minutes += 60;
        hours--;
    }
    if (hours > 0) {
        hours += 24;
        days--;
    }
    if (days < 0) {
        const previousMonth = new Date();
        days += previousMonth.getDate();
        months--;
    }
    if (months < 0) {
        months += 12;
        years--;
    }
    return { years, months, days, hours, minutes, seconds};
};
btn.addEventListener("click", calculateAge);
birthday.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        calculateAge();
    }}
);