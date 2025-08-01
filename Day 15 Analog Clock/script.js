const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const second = document.querySelector('.second');

function setDate(){
    const now = new Date();

    const getSeconds = now.getSeconds();
    const getMinutes = now.getMinutes();
    const getHours = now.getHours();

    const secondDegree = ((getSeconds / 60) * 360);
    const minuteDegree = ((getMinutes / 60 ) * 360);
    const hourDegree = ((getHours / 12) * 360);

    second.style.transform = `rotate(${secondDegree}deg)`;
    minute.style.transform = `rotate(${minuteDegree}deg)`;
    hour.style.transform = `rotate(${hourDegree}deg)`;
}

setInterval(setDate, 1000);