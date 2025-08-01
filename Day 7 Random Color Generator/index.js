const containerA = document.querySelector('.container');  

for(index = 0; index < 12 ; index++){
    const colorContainerA = document.createElement('div');
    colorContainerA.classList.add("color-container");
    containerA.appendChild(colorContainerA);
}

const colorContainers = document.querySelectorAll('.color-container');

generateColors();

function generateColors(){
    colorContainers.forEach(colorContainerA => {
        const newColorCode = randomColor();
        colorContainerA.style.backgroundColor = "#" + newColorCode;
        colorContainerA.innerText = "#" + newColorCode;
    });
}

function randomColor(){
    const chars = "0123456789ABCDEF";
    const colorCodeLenght = 6;
    let colorCode = "";
    for (index = 0 ; index < colorCodeLenght; index++){
        const randomNum = Math.floor(Math.random()* chars.length);
        colorCode += chars.substring(randomNum, randomNum + 1); ;
    }
    return colorCode;
}
