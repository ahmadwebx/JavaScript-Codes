const monthA = document.querySelector(".month");
const yearA = document.querySelector(".year");
const daysA = document.querySelector(".days");
const dateA = document.querySelector(".date"); 

const date = new Date();
const month = date.getMonth();

monthA.innerHTML = date.toLocaleString("en", {
    month: "long",
})

daysA.innerHTML = date.toLocaleString("en", {
    weekday: "long",
})

dateA.innerText = date.getDate();
yearA.innerText = date.getFullYear();